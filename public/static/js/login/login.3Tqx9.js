/* disable click function until JS loaded */
$('#submit').addClass('unbind');

$(function() {
	// login in authentication functions with SRP
	loginForm.init();
	// load any breaking news values that were queued before DOM was ready.
	InfoPanel.init();
	EmbeddedLogin.init();
});


var loginForm = {
	accountName: $('#accountName'),
	alertCookie: $('#cookie-check'),
	alertHolder: $('#display-errors'),
	alertJsHolder: $('#js-errors'),
	csrfTokenFields: $('input[name="csrftoken"]'),
	password: null,
	passwordForm: $('#password-form'),
	passwordFill: ".",
	submitButton: $('#submit'),
	srpClientSession: null,
	srpClientCredentials: null,
	inputPassword: $("#password"),
	inputUpgradeVerifier: $("#upgradeVerifier"),
	inputUseSrp: $("#useSrp"),
	inputSrpEnabled: $("#srpEnabled"),
	inputPublicA: $("#publicA"),
	inputClientEvidenceM1: $("#clientEvidenceM1"),
	networkErrorMessage: $('body').attr("data-network-error-message"),
	thirdPartyLoginButtons: $('form.third-party-login button'),
	// Initial load time of the form.
	loadedTime: new Date().getTime(),
	// Number of seconds to wait before refreshing CSRF token.
	// This value should be well below session expiration time.
	csrfTokenRefreshIntervalMillis: 10 * 60 * 1000,
	focusDelay: 500,


	preventDefault: function(e) {
		e.preventDefault();
	},

	init: function() {
		this.setSubmitButtonDisabled();
		this.checkCookie();
		this.setSrpAjaxCall();
		this.setCaptcha(loginForm.passwordForm);
		this.initThirdPartyLoginButtons();
		this.initPasswordFields();
		this.setFocus();
		this.showInitialErrors();
	},

	setSrpAjaxCall: function() {
		this.submitButton.bind('click', this.preventDefault).click(function() {
			try {
				loginForm.getSrpData(Core.locale);
			} catch (ex) {
				setTimeout(function() {
					loginForm.submitButton.removeAttr('disabled').unbind('click').click();
				});
			};
		});
	},

	setSubmitButtonDisabled: function() {
		this.submitButton.removeClass('unbind');
	},

	/** cookie disabled alert **/
	checkCookie: function() {
		var enabledCookie = navigator.cookieEnabled;

		if (!enabledCookie) {
			$(loginForm.alertCookie).removeClass('hide');
			$(loginForm.alertJsHolder).removeClass('hide')
		}
	},

	/** set auto focus on the input field **/
	setFocus: function() {
		var autoFocusEnabled = ($('body').attr("data-autofocus-enabled") === "true");

		/** only works on web env, not for the mobile **/
		if (autoFocusEnabled) {
			/** if there are field errors, put focus on those **/
			/** wait for call stack is empty in case focus events occur after this **/
			const errorField = document.querySelector(".field-error");

			if (errorField && errorField.nodeName === "INPUT") {
				setTimeout(function () {
					errorField.focus();
					errorField.click();
				}, this.focusDelay);
				return;
			}

			if (loginForm.accountName.val()) {
				loginForm.inputPassword.focus();
			} else {
				loginForm.accountName.focus();
			}
		}
	},

	showInitialErrors: function() {
		/** if there is an initial display error **/
		/** this triggers the aria alert for screen readers **/
		var alertHolder = this.alertHolder;
		if (alertHolder.length) {
			setTimeout(function () {
				alertHolder.show();
			}, this.focusDelay - 100);
		}
	},

	/** refresh captcha display **/
	setCaptcha: function(form) {
		if (form.hasClass('captcha-required')) {
			$('#captcha-anchor').click(function(evt) {
				evt.preventDefault();
				$("#sec-string").attr('src', '/login/captcha.jpg?' + new Date().getTime());
			});
		}
	},

	/** srp Authentication **/
	getSrpData: function(language) {
		var that = this;
		var username = loginForm.passwordForm.find('input[name="accountName"]').val();

		$.ajax({
			method: 'POST',
			url: "/login/srp?csrfToken=true",
			data: JSON.stringify({
				inputs: [
					{
						input_id: "account_name",
						value: username
					}
				]
			}),
			dataType: 'json',
			beforeSend: function(request) {
				request.setRequestHeader("Accept", "application/json");
				request.setRequestHeader("Content-Type", "application/json");
				request.setRequestHeader("Accept-Language", language);
			}
		}).done(function(data) {

			loginForm.onSuccess(data).then(function () {
				that.submitForm();
			}).catch(function (err) {
				that.submitForm();
			});
		}).fail(function(data) {
			loginForm.onFail(data);
		});
	},

	submitForm: function() {
		loginForm.submitButton.removeAttr('disabled').unbind('click').click().addClass('unbind');
	},

	/** get srp data success **/
	onSuccess: function(srpParams) {
		if (this.inputSrpEnabled.val() === "false") {
			return Promise.resolve();
		}

		var self = this;
		loginForm.updateCsrfTokenFields(srpParams.csrf_token);
		self.password = self.inputPassword.val();
		self.srpClientSession = new srp6aRoutines.ClientSession(
			srpParams.modulus,
			srpParams.generator,
			srpParams.hash_function,
			srpParams.version,
			srpParams.iterations,
			srpParams.eligible_credential_upgrade,
			window.serverResourceUrl);
		return self.srpClientSession.step1(
			srpParams.username,
			self.password,
			srpParams.salt,
			srpParams.public_B
		).then(function (srpClientCredentials) {
					self.srpClientCredentials = srpClientCredentials;
					// Clear password and change placeholder when input value is not null
					// and password is not eligible for an upgrade
					if (self.password !== null) {
						self.inputPassword.val(Array(self.password.length + 1).join(self.passwordFill));
					}

					if (srpParams.version === 1 && srpParams.eligible_credential_upgrade && self.inputSrpEnabled.val() !== "false") {
						return new Promise(function(resolve) {
							var upgradeWorker = new Worker(window.upgradeResourceUrl);
							upgradeWorker.onmessage = function(e) {
								var encodedVerifierHex = e.data[0];
								self.inputUpgradeVerifier.val(encodedVerifierHex);
								self.fillSrpFields();
								upgradeWorker.terminate();
								resolve();
							};
							upgradeWorker.postMessage([window.accountPasswordUrl, srpParams, self.password]);
						});
					} else {
						self.fillSrpFields();
					}
				});
	},

	fillSrpFields: function() {
		// Set SRP public A and client evidence message M1.
		this.inputPublicA.val(this.srpClientCredentials.publicA.toString(16));
		this.inputClientEvidenceM1.val(this.srpClientCredentials.clientEvidenceM1.toString(16));
		// Tell server that we will be using SRP.
		this.inputUseSrp.val("true");
	},

	errorCleanup: function() {
		var $helper = $('.error-helper');

		//remove if there are already generic error displayed
		if (loginForm.alertHolder.length) {
			loginForm.alertHolder.remove();
		}

		// remove inline helper error from inputs
		if($helper.text().trim().length) {
			$helper.empty().hide();
		}

		// remove any status error classes and attributes
		$('.status-warning').removeClass('status-warning');
		$('.status-error').removeClass('status-error');
		$('.field-error').removeClass('field-error');
		$('.control-error').removeClass('control-error');
		$('input[aria-invalid=true]').attr('aria-invalid', 'false');
	},

	/** get srp data fail **/
	onFail: function(data) {
		var err = {
			errorCode: "",
			supportCode: "",
			subtextHtml: "",
			errorMessage: "",
			errorStatus: "error",
			errorAria: "",
		};
		// when network connection failed, use custom error expose to app
		if (!navigator.onLine || data.status == 0) {
			err.errorCode = "NETWORK_ERROR"
			err.errorMessage = loginForm.networkErrorMessage;
		} else {
			var errorData = JSON.parse(data.responseText);
			err.errorCode = errorData.error_code || "";
			err.supportCode = errorData.support_error_code || "";
			err.errorMessage = errorData.error_message;
			err.errorMessageSubtext = errorData.error_message_subtext || "";
			err.errorMessageHelper = errorData.error_message_helper || "";
			err.errorStatus = errorData.error_status.toLowerCase() || "error";
			err.errorAria = err.errorMessage;
		}

		// clean up all previous errors
		this.errorCleanup();

		if (err.errorMessageSubtext) {
			err.subtextHtml = "<p class='error-message-subtext' tabIndex='0'>" + err.errorMessageSubtext + "</p>";
			err.errorAria += err.errorMessageSubtext;
		}

		err.errorMessageHtml = "<p class='error-message-heading' tabIndex='0'>" + err.errorMessage + "</p>" + err.subtextHtml;

		if (err.supportCode) {
			var supportAria = loginForm.alertJsHolder.attr('data-support-aria');
			var supportAriaAttr = supportAria ? 'aria-label=\"' + supportAria + '\"': '';
			err.errorMessageHtml += "<a tabIndex='0' href='" + Core.secureSupportUrl + 'article/' + err.supportCode + "' rel='external' target='_blank' " + supportAriaAttr + " role='link'>" + err.supportCode + "</a>"
		}

		if (err.errorMessageHelper && errorData.input_id) {
			err.errorMessageHtml += "<p class='hide-text'>" + err.errorMessageHelper + "</p>";
		}

		// set error message
		loginForm.alertJsHolder.html(err.errorMessageHtml).removeClass('hide').removeClass('alert-error');
		loginForm.alertJsHolder.addClass('alert-' + err.errorStatus);

		if (err.errorMessageHelper && errorData.input_id) {
			var helperFieldId = window.Utility.getInputId(errorData.input_id);
			var $fieldWithError = $('#' + helperFieldId);
			var $helperElm = $fieldWithError.siblings('.error-helper');
			$fieldWithError.addClass('status-' + err.errorStatus);
			$fieldWithError.addClass('field-error');
			$fieldWithError.attr('aria-invalid', 'true');
			$helperElm
				.html(err.errorMessageHelper)
				.removeClass('hide')
				.addClass('status-' + err.errorStatus)
				.attr('style', 'display: block;');
		}

		// Clear the password.
		this.inputPassword.val('');

		loginForm.submitButton.button('reset');

		// expose errors to phoenix and etc.
		if (EmbeddedLogin.errorHandlerRegistration) {
			EmbeddedLogin.errorHandlerRegistration(err.errorCode, err.supportCode, err.errorMessage);
		}

		// if field error, put focus on that field
		var focusedElm;
		if (err.errorMessageHelper && errorData.input_id && $fieldWithError) {
			focusedElm = $fieldWithError;
		} else {
			focusedElm = loginForm.accountName;
		}

		setTimeout(function () {
			focusedElm.click().focus();
		}, this.focusDelay);
	},

	/**
	 * For each language the button width would be different. This sets the padding-right of the password field
	 * based on the calculated button width so the password doesn't overlap the show/hide button
	 */
	calculateTogglePadding: function(inputPassword, button) {
		var getCssNumberValue = function(cssValue) {
			return parseInt(cssValue.replace(/[^-?\d*]/g, ''));
		};

		var buttonWidth = getCssNumberValue(button.css('padding-left')) + button.width() + getCssNumberValue(button.css('padding-right'));
		if (buttonWidth > 0) {
			inputPassword.css("padding-right", buttonWidth + 'px');
		}
	},
	
	/**
	 * Updates all "csrftoken" hidden input fields (login view contains multiple forms)
	 * with the given csrfToken. This function should be called prior to form submission
	 * to make sure that CSRF tokens used are always valid, even if the session times out.
	 */
	updateCsrfTokenFields: function(csrfToken) {
		[this.csrfTokenFields].forEach(function(field) {
			field.val(csrfToken);
		});
	},
	
	/**
	 * Reloads CSRF token with an AJAX request and establishes a new session associated with
	 * that CSRF token if the session has expired.
	 */
	refreshCsrfToken: function(event) {
		$.ajax({
			method: 'POST',
			url: '/login/csrf-token',
			async: false
		}).done(function(csrfToken) {
			loginForm.updateCsrfTokenFields(csrfToken);
			$(event.target).unbind('click').click();
		});
	},
	
	/**
	 * Bind events to third party login buttons.
	 */
	initThirdPartyLoginButtons: function() {
		var currentTime = new Date().getTime();
		[this.thirdPartyLoginButtons].forEach(function(button) {
			button.bind('click', this.preventDefault).click(function(event) {
				loginForm.refreshCsrfToken(event);
			});
		});
	},

	initPasswordFields: function() {
		if (BlzPassword != null) {
			var passwordField = new BlzPassword(document.querySelector("#password"));
			passwordField.init();
		}
	}
};

/**
 * Object to manage left aligned info panel
 */
var InfoPanel = {
	// CSS classes used to style dom
	cssHide: 'hide',
	cssShow: 'show',
	cssGrid: 'info-active',
	// UI selectors
	leftPanel: '#info-wrapper',
	rightPanel: '#login-wrapper',
	phoneInfoToggle: '#info-phone-toggle',
	phoneInfoClose: '#info-phone-close',
	title: null,
	body: null,
	enabled: null,
	domReady: false,

	init: function() {
		// initialize jquery objects
		this.domReady = true;
		this.$leftPanel = $(this.leftPanel);
		this.$rightPanel = $(this.rightPanel);
		this.$mobileToggle = $(this.phoneInfoToggle);
		this.$mobileClose = $(this.phoneInfoClose);
		// show infopanel if toggle was already called.
		if (this.enabled) {
			this.toggle(this.enabled, this.title, this.body);
		}
		this.enableMobile();
	},

	toggle: function(toggle, title, body) {
		// cache values for use when DOM is ready
		this.title = title;
		this.body = body;
		this.enabled = toggle;

		var status = "InfoPanel.toggle called.";
		// only allow actions throw if DOM exists
		if (this.domReady) {
			if (toggle) {
				// populate information
				this.$leftPanel.find('.info-title').html(title);
				this.$leftPanel.find('.info-body').html(body);
				this.$mobileToggle.html(title);

				// show Left Panel, but keep hidden for mobile
				this.$leftPanel
					.removeClass(this.cssHide)
				// turn main content into 2 column design
				this.$rightPanel
					.addClass(this.cssGrid);
				// show mobile only info panel toggle.
				this.$mobileToggle
					.removeClass(this.cssHide)

			} else {
				// hide info panel
				this.$leftPanel
					.addClass(this.cssHide);
				// center align main content
				this.$rightPanel
					.removeClass(this.cssGrid);
				// hide mobile only info panel toggle
				this.$mobileToggle
					.addClass(this.cssHide);
			}
			status += "Dom ready."
		}
		return status;
	},

	/**
	 * Hides and shows breaking news based on mobile only button
	 */
	enableMobile: function() {
		var self = this;
		// helper function to stop event prop. and add and remove class.
		var toggleClass = function(event, showElement, hideElement) {
			event.stopPropagation();
			event.preventDefault();

			showElement.removeClass(InfoPanel.cssHide);
			hideElement.addClass(InfoPanel.cssHide);
		};

		// click listener for info panel toggle in mobile form factor
		this.$mobileToggle.on("click", function(e) {
				toggleClass(e, self.$leftPanel, self.$rightPanel);
			}
		);
		// click listener to close info panel in mobile factor.
		this.$mobileClose.on("click", function(e) {
				toggleClass(e, self.$rightPanel, self.$leftPanel);
			}
		)
	}
}

/** Battle.net App is using this function to check and fill input on App login screen. **/

var EmbeddedLogin = {

	inputAccountName: null,
	inputPassword: null,
	inputPersistLogin: $('#persistLogin'),
	inputAccountNameId: 'accountName',
	inputPasswordId: 'password',
	errorContainer: null,
	errorContainerId: '#display-errors',
	jsErrorContainer: null,
	jsErrorContainerId: '#js-errors',
	errorHandlerRegistration: null,

	init: function() {
		this.inputAccountName = document.getElementById(this.inputAccountNameId);
		this.inputPassword = document.getElementById(this.inputPasswordId);
		this.errorContainer = $(this.errorContainerId);
		this.jsErrorContainer = $(this.jsErrorContainerId);
		return this;
	},

	getSubmitButton: function() {
		return loginForm.submitButton[0];
	},

	fillAccountName: function(accountName) {
		if (accountName) {
			this.inputAccountName.value = accountName.substring(0, Math.min(320, accountName.length));
		} else {
			this.inputAccountName.value = '';
		}
		return this;
	},

	fillPassword: function(password) {
		if (password) {
			this.inputPassword.value = password.substring(0, Math.min(128, password.length));
		} else {
			this.inputPassword.value = '';
		}
		return this;
	},

	setPersistLogin: function(checked) {
		if (this.inputPersistLogin) {
			this.inputPersistLogin.prop('checked', checked);
		}
	},

	registerErrorHandler: function(errorHandler) {
		this.errorHandlerRegistration = errorHandler;
	}
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBkaXNhYmxlIGNsaWNrIGZ1bmN0aW9uIHVudGlsIEpTIGxvYWRlZCAqL1xuJCgnI3N1Ym1pdCcpLmFkZENsYXNzKCd1bmJpbmQnKTtcblxuJChmdW5jdGlvbigpIHtcblx0Ly8gbG9naW4gaW4gYXV0aGVudGljYXRpb24gZnVuY3Rpb25zIHdpdGggU1JQXG5cdGxvZ2luRm9ybS5pbml0KCk7XG5cdC8vIGxvYWQgYW55IGJyZWFraW5nIG5ld3MgdmFsdWVzIHRoYXQgd2VyZSBxdWV1ZWQgYmVmb3JlIERPTSB3YXMgcmVhZHkuXG5cdEluZm9QYW5lbC5pbml0KCk7XG5cdEVtYmVkZGVkTG9naW4uaW5pdCgpO1xufSk7XG5cblxudmFyIGxvZ2luRm9ybSA9IHtcblx0YWNjb3VudE5hbWU6ICQoJyNhY2NvdW50TmFtZScpLFxuXHRhbGVydENvb2tpZTogJCgnI2Nvb2tpZS1jaGVjaycpLFxuXHRhbGVydEhvbGRlcjogJCgnI2Rpc3BsYXktZXJyb3JzJyksXG5cdGFsZXJ0SnNIb2xkZXI6ICQoJyNqcy1lcnJvcnMnKSxcblx0Y3NyZlRva2VuRmllbGRzOiAkKCdpbnB1dFtuYW1lPVwiY3NyZnRva2VuXCJdJyksXG5cdHBhc3N3b3JkOiBudWxsLFxuXHRwYXNzd29yZEZvcm06ICQoJyNwYXNzd29yZC1mb3JtJyksXG5cdHBhc3N3b3JkRmlsbDogXCIuXCIsXG5cdHN1Ym1pdEJ1dHRvbjogJCgnI3N1Ym1pdCcpLFxuXHRzcnBDbGllbnRTZXNzaW9uOiBudWxsLFxuXHRzcnBDbGllbnRDcmVkZW50aWFsczogbnVsbCxcblx0aW5wdXRQYXNzd29yZDogJChcIiNwYXNzd29yZFwiKSxcblx0aW5wdXRVcGdyYWRlVmVyaWZpZXI6ICQoXCIjdXBncmFkZVZlcmlmaWVyXCIpLFxuXHRpbnB1dFVzZVNycDogJChcIiN1c2VTcnBcIiksXG5cdGlucHV0U3JwRW5hYmxlZDogJChcIiNzcnBFbmFibGVkXCIpLFxuXHRpbnB1dFB1YmxpY0E6ICQoXCIjcHVibGljQVwiKSxcblx0aW5wdXRDbGllbnRFdmlkZW5jZU0xOiAkKFwiI2NsaWVudEV2aWRlbmNlTTFcIiksXG5cdG5ldHdvcmtFcnJvck1lc3NhZ2U6ICQoJ2JvZHknKS5hdHRyKFwiZGF0YS1uZXR3b3JrLWVycm9yLW1lc3NhZ2VcIiksXG5cdHRoaXJkUGFydHlMb2dpbkJ1dHRvbnM6ICQoJ2Zvcm0udGhpcmQtcGFydHktbG9naW4gYnV0dG9uJyksXG5cdC8vIEluaXRpYWwgbG9hZCB0aW1lIG9mIHRoZSBmb3JtLlxuXHRsb2FkZWRUaW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcblx0Ly8gTnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBiZWZvcmUgcmVmcmVzaGluZyBDU1JGIHRva2VuLlxuXHQvLyBUaGlzIHZhbHVlIHNob3VsZCBiZSB3ZWxsIGJlbG93IHNlc3Npb24gZXhwaXJhdGlvbiB0aW1lLlxuXHRjc3JmVG9rZW5SZWZyZXNoSW50ZXJ2YWxNaWxsaXM6IDEwICogNjAgKiAxMDAwLFxuXHRmb2N1c0RlbGF5OiA1MDAsXG5cblxuXHRwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fSxcblxuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnNldFN1Ym1pdEJ1dHRvbkRpc2FibGVkKCk7XG5cdFx0dGhpcy5jaGVja0Nvb2tpZSgpO1xuXHRcdHRoaXMuc2V0U3JwQWpheENhbGwoKTtcblx0XHR0aGlzLnNldENhcHRjaGEobG9naW5Gb3JtLnBhc3N3b3JkRm9ybSk7XG5cdFx0dGhpcy5pbml0VGhpcmRQYXJ0eUxvZ2luQnV0dG9ucygpO1xuXHRcdHRoaXMuaW5pdFBhc3N3b3JkRmllbGRzKCk7XG5cdFx0dGhpcy5zZXRGb2N1cygpO1xuXHRcdHRoaXMuc2hvd0luaXRpYWxFcnJvcnMoKTtcblx0fSxcblxuXHRzZXRTcnBBamF4Q2FsbDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24uYmluZCgnY2xpY2snLCB0aGlzLnByZXZlbnREZWZhdWx0KS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxvZ2luRm9ybS5nZXRTcnBEYXRhKENvcmUubG9jYWxlKTtcblx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bG9naW5Gb3JtLnN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpLnVuYmluZCgnY2xpY2snKS5jbGljaygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0fSk7XG5cdH0sXG5cblx0c2V0U3VibWl0QnV0dG9uRGlzYWJsZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuc3VibWl0QnV0dG9uLnJlbW92ZUNsYXNzKCd1bmJpbmQnKTtcblx0fSxcblxuXHQvKiogY29va2llIGRpc2FibGVkIGFsZXJ0ICoqL1xuXHRjaGVja0Nvb2tpZTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVuYWJsZWRDb29raWUgPSBuYXZpZ2F0b3IuY29va2llRW5hYmxlZDtcblxuXHRcdGlmICghZW5hYmxlZENvb2tpZSkge1xuXHRcdFx0JChsb2dpbkZvcm0uYWxlcnRDb29raWUpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG5cdFx0XHQkKGxvZ2luRm9ybS5hbGVydEpzSG9sZGVyKS5yZW1vdmVDbGFzcygnaGlkZScpXG5cdFx0fVxuXHR9LFxuXG5cdC8qKiBzZXQgYXV0byBmb2N1cyBvbiB0aGUgaW5wdXQgZmllbGQgKiovXG5cdHNldEZvY3VzOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgYXV0b0ZvY3VzRW5hYmxlZCA9ICgkKCdib2R5JykuYXR0cihcImRhdGEtYXV0b2ZvY3VzLWVuYWJsZWRcIikgPT09IFwidHJ1ZVwiKTtcblxuXHRcdC8qKiBvbmx5IHdvcmtzIG9uIHdlYiBlbnYsIG5vdCBmb3IgdGhlIG1vYmlsZSAqKi9cblx0XHRpZiAoYXV0b0ZvY3VzRW5hYmxlZCkge1xuXHRcdFx0LyoqIGlmIHRoZXJlIGFyZSBmaWVsZCBlcnJvcnMsIHB1dCBmb2N1cyBvbiB0aG9zZSAqKi9cblx0XHRcdC8qKiB3YWl0IGZvciBjYWxsIHN0YWNrIGlzIGVtcHR5IGluIGNhc2UgZm9jdXMgZXZlbnRzIG9jY3VyIGFmdGVyIHRoaXMgKiovXG5cdFx0XHRjb25zdCBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWVsZC1lcnJvclwiKTtcblxuXHRcdFx0aWYgKGVycm9yRmllbGQgJiYgZXJyb3JGaWVsZC5ub2RlTmFtZSA9PT0gXCJJTlBVVFwiKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGVycm9yRmllbGQuZm9jdXMoKTtcblx0XHRcdFx0XHRlcnJvckZpZWxkLmNsaWNrKCk7XG5cdFx0XHRcdH0sIHRoaXMuZm9jdXNEZWxheSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGxvZ2luRm9ybS5hY2NvdW50TmFtZS52YWwoKSkge1xuXHRcdFx0XHRsb2dpbkZvcm0uaW5wdXRQYXNzd29yZC5mb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9naW5Gb3JtLmFjY291bnROYW1lLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHNob3dJbml0aWFsRXJyb3JzOiBmdW5jdGlvbigpIHtcblx0XHQvKiogaWYgdGhlcmUgaXMgYW4gaW5pdGlhbCBkaXNwbGF5IGVycm9yICoqL1xuXHRcdC8qKiB0aGlzIHRyaWdnZXJzIHRoZSBhcmlhIGFsZXJ0IGZvciBzY3JlZW4gcmVhZGVycyAqKi9cblx0XHR2YXIgYWxlcnRIb2xkZXIgPSB0aGlzLmFsZXJ0SG9sZGVyO1xuXHRcdGlmIChhbGVydEhvbGRlci5sZW5ndGgpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbGVydEhvbGRlci5zaG93KCk7XG5cdFx0XHR9LCB0aGlzLmZvY3VzRGVsYXkgLSAxMDApO1xuXHRcdH1cblx0fSxcblxuXHQvKiogcmVmcmVzaCBjYXB0Y2hhIGRpc3BsYXkgKiovXG5cdHNldENhcHRjaGE6IGZ1bmN0aW9uKGZvcm0pIHtcblx0XHRpZiAoZm9ybS5oYXNDbGFzcygnY2FwdGNoYS1yZXF1aXJlZCcpKSB7XG5cdFx0XHQkKCcjY2FwdGNoYS1hbmNob3InKS5jbGljayhmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdCQoXCIjc2VjLXN0cmluZ1wiKS5hdHRyKCdzcmMnLCAnL2xvZ2luL2NhcHRjaGEuanBnPycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0LyoqIHNycCBBdXRoZW50aWNhdGlvbiAqKi9cblx0Z2V0U3JwRGF0YTogZnVuY3Rpb24obGFuZ3VhZ2UpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dmFyIHVzZXJuYW1lID0gbG9naW5Gb3JtLnBhc3N3b3JkRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWNjb3VudE5hbWVcIl0nKS52YWwoKTtcblxuXHRcdCQuYWpheCh7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdHVybDogXCIvbG9naW4vc3JwP2NzcmZUb2tlbj10cnVlXCIsXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGlucHV0czogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlucHV0X2lkOiBcImFjY291bnRfbmFtZVwiLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHVzZXJuYW1lXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9KSxcblx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbihyZXF1ZXN0KSB7XG5cdFx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdFx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdFx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1MYW5ndWFnZVwiLCBsYW5ndWFnZSk7XG5cdFx0XHR9XG5cdFx0fSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG5cblx0XHRcdGxvZ2luRm9ybS5vblN1Y2Nlc3MoZGF0YSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRoYXQuc3VibWl0Rm9ybSgpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHR0aGF0LnN1Ym1pdEZvcm0oKTtcblx0XHRcdH0pO1xuXHRcdH0pLmZhaWwoZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0bG9naW5Gb3JtLm9uRmFpbChkYXRhKTtcblx0XHR9KTtcblx0fSxcblxuXHRzdWJtaXRGb3JtOiBmdW5jdGlvbigpIHtcblx0XHRsb2dpbkZvcm0uc3VibWl0QnV0dG9uLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykudW5iaW5kKCdjbGljaycpLmNsaWNrKCkuYWRkQ2xhc3MoJ3VuYmluZCcpO1xuXHR9LFxuXG5cdC8qKiBnZXQgc3JwIGRhdGEgc3VjY2VzcyAqKi9cblx0b25TdWNjZXNzOiBmdW5jdGlvbihzcnBQYXJhbXMpIHtcblx0XHRpZiAodGhpcy5pbnB1dFNycEVuYWJsZWQudmFsKCkgPT09IFwiZmFsc2VcIikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdH1cblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRsb2dpbkZvcm0udXBkYXRlQ3NyZlRva2VuRmllbGRzKHNycFBhcmFtcy5jc3JmX3Rva2VuKTtcblx0XHRzZWxmLnBhc3N3b3JkID0gc2VsZi5pbnB1dFBhc3N3b3JkLnZhbCgpO1xuXHRcdHNlbGYuc3JwQ2xpZW50U2Vzc2lvbiA9IG5ldyBzcnA2YVJvdXRpbmVzLkNsaWVudFNlc3Npb24oXG5cdFx0XHRzcnBQYXJhbXMubW9kdWx1cyxcblx0XHRcdHNycFBhcmFtcy5nZW5lcmF0b3IsXG5cdFx0XHRzcnBQYXJhbXMuaGFzaF9mdW5jdGlvbixcblx0XHRcdHNycFBhcmFtcy52ZXJzaW9uLFxuXHRcdFx0c3JwUGFyYW1zLml0ZXJhdGlvbnMsXG5cdFx0XHRzcnBQYXJhbXMuZWxpZ2libGVfY3JlZGVudGlhbF91cGdyYWRlLFxuXHRcdFx0d2luZG93LnNlcnZlclJlc291cmNlVXJsKTtcblx0XHRyZXR1cm4gc2VsZi5zcnBDbGllbnRTZXNzaW9uLnN0ZXAxKFxuXHRcdFx0c3JwUGFyYW1zLnVzZXJuYW1lLFxuXHRcdFx0c2VsZi5wYXNzd29yZCxcblx0XHRcdHNycFBhcmFtcy5zYWx0LFxuXHRcdFx0c3JwUGFyYW1zLnB1YmxpY19CXG5cdFx0KS50aGVuKGZ1bmN0aW9uIChzcnBDbGllbnRDcmVkZW50aWFscykge1xuXHRcdFx0XHRcdHNlbGYuc3JwQ2xpZW50Q3JlZGVudGlhbHMgPSBzcnBDbGllbnRDcmVkZW50aWFscztcblx0XHRcdFx0XHQvLyBDbGVhciBwYXNzd29yZCBhbmQgY2hhbmdlIHBsYWNlaG9sZGVyIHdoZW4gaW5wdXQgdmFsdWUgaXMgbm90IG51bGxcblx0XHRcdFx0XHQvLyBhbmQgcGFzc3dvcmQgaXMgbm90IGVsaWdpYmxlIGZvciBhbiB1cGdyYWRlXG5cdFx0XHRcdFx0aWYgKHNlbGYucGFzc3dvcmQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdHNlbGYuaW5wdXRQYXNzd29yZC52YWwoQXJyYXkoc2VsZi5wYXNzd29yZC5sZW5ndGggKyAxKS5qb2luKHNlbGYucGFzc3dvcmRGaWxsKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHNycFBhcmFtcy52ZXJzaW9uID09PSAxICYmIHNycFBhcmFtcy5lbGlnaWJsZV9jcmVkZW50aWFsX3VwZ3JhZGUgJiYgc2VsZi5pbnB1dFNycEVuYWJsZWQudmFsKCkgIT09IFwiZmFsc2VcIikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHVwZ3JhZGVXb3JrZXIgPSBuZXcgV29ya2VyKHdpbmRvdy51cGdyYWRlUmVzb3VyY2VVcmwpO1xuXHRcdFx0XHRcdFx0XHR1cGdyYWRlV29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZW5jb2RlZFZlcmlmaWVySGV4ID0gZS5kYXRhWzBdO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuaW5wdXRVcGdyYWRlVmVyaWZpZXIudmFsKGVuY29kZWRWZXJpZmllckhleCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5maWxsU3JwRmllbGRzKCk7XG5cdFx0XHRcdFx0XHRcdFx0dXBncmFkZVdvcmtlci50ZXJtaW5hdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHVwZ3JhZGVXb3JrZXIucG9zdE1lc3NhZ2UoW3dpbmRvdy5hY2NvdW50UGFzc3dvcmRVcmwsIHNycFBhcmFtcywgc2VsZi5wYXNzd29yZF0pO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuZmlsbFNycEZpZWxkcygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdH0sXG5cblx0ZmlsbFNycEZpZWxkczogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gU2V0IFNSUCBwdWJsaWMgQSBhbmQgY2xpZW50IGV2aWRlbmNlIG1lc3NhZ2UgTTEuXG5cdFx0dGhpcy5pbnB1dFB1YmxpY0EudmFsKHRoaXMuc3JwQ2xpZW50Q3JlZGVudGlhbHMucHVibGljQS50b1N0cmluZygxNikpO1xuXHRcdHRoaXMuaW5wdXRDbGllbnRFdmlkZW5jZU0xLnZhbCh0aGlzLnNycENsaWVudENyZWRlbnRpYWxzLmNsaWVudEV2aWRlbmNlTTEudG9TdHJpbmcoMTYpKTtcblx0XHQvLyBUZWxsIHNlcnZlciB0aGF0IHdlIHdpbGwgYmUgdXNpbmcgU1JQLlxuXHRcdHRoaXMuaW5wdXRVc2VTcnAudmFsKFwidHJ1ZVwiKTtcblx0fSxcblxuXHRlcnJvckNsZWFudXA6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciAkaGVscGVyID0gJCgnLmVycm9yLWhlbHBlcicpO1xuXG5cdFx0Ly9yZW1vdmUgaWYgdGhlcmUgYXJlIGFscmVhZHkgZ2VuZXJpYyBlcnJvciBkaXNwbGF5ZWRcblx0XHRpZiAobG9naW5Gb3JtLmFsZXJ0SG9sZGVyLmxlbmd0aCkge1xuXHRcdFx0bG9naW5Gb3JtLmFsZXJ0SG9sZGVyLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSBpbmxpbmUgaGVscGVyIGVycm9yIGZyb20gaW5wdXRzXG5cdFx0aWYoJGhlbHBlci50ZXh0KCkudHJpbSgpLmxlbmd0aCkge1xuXHRcdFx0JGhlbHBlci5lbXB0eSgpLmhpZGUoKTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgYW55IHN0YXR1cyBlcnJvciBjbGFzc2VzIGFuZCBhdHRyaWJ1dGVzXG5cdFx0JCgnLnN0YXR1cy13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ3N0YXR1cy13YXJuaW5nJyk7XG5cdFx0JCgnLnN0YXR1cy1lcnJvcicpLnJlbW92ZUNsYXNzKCdzdGF0dXMtZXJyb3InKTtcblx0XHQkKCcuZmllbGQtZXJyb3InKS5yZW1vdmVDbGFzcygnZmllbGQtZXJyb3InKTtcblx0XHQkKCcuY29udHJvbC1lcnJvcicpLnJlbW92ZUNsYXNzKCdjb250cm9sLWVycm9yJyk7XG5cdFx0JCgnaW5wdXRbYXJpYS1pbnZhbGlkPXRydWVdJykuYXR0cignYXJpYS1pbnZhbGlkJywgJ2ZhbHNlJyk7XG5cdH0sXG5cblx0LyoqIGdldCBzcnAgZGF0YSBmYWlsICoqL1xuXHRvbkZhaWw6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHR2YXIgZXJyID0ge1xuXHRcdFx0ZXJyb3JDb2RlOiBcIlwiLFxuXHRcdFx0c3VwcG9ydENvZGU6IFwiXCIsXG5cdFx0XHRzdWJ0ZXh0SHRtbDogXCJcIixcblx0XHRcdGVycm9yTWVzc2FnZTogXCJcIixcblx0XHRcdGVycm9yU3RhdHVzOiBcImVycm9yXCIsXG5cdFx0XHRlcnJvckFyaWE6IFwiXCIsXG5cdFx0fTtcblx0XHQvLyB3aGVuIG5ldHdvcmsgY29ubmVjdGlvbiBmYWlsZWQsIHVzZSBjdXN0b20gZXJyb3IgZXhwb3NlIHRvIGFwcFxuXHRcdGlmICghbmF2aWdhdG9yLm9uTGluZSB8fCBkYXRhLnN0YXR1cyA9PSAwKSB7XG5cdFx0XHRlcnIuZXJyb3JDb2RlID0gXCJORVRXT1JLX0VSUk9SXCJcblx0XHRcdGVyci5lcnJvck1lc3NhZ2UgPSBsb2dpbkZvcm0ubmV0d29ya0Vycm9yTWVzc2FnZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yRGF0YSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZVRleHQpO1xuXHRcdFx0ZXJyLmVycm9yQ29kZSA9IGVycm9yRGF0YS5lcnJvcl9jb2RlIHx8IFwiXCI7XG5cdFx0XHRlcnIuc3VwcG9ydENvZGUgPSBlcnJvckRhdGEuc3VwcG9ydF9lcnJvcl9jb2RlIHx8IFwiXCI7XG5cdFx0XHRlcnIuZXJyb3JNZXNzYWdlID0gZXJyb3JEYXRhLmVycm9yX21lc3NhZ2U7XG5cdFx0XHRlcnIuZXJyb3JNZXNzYWdlU3VidGV4dCA9IGVycm9yRGF0YS5lcnJvcl9tZXNzYWdlX3N1YnRleHQgfHwgXCJcIjtcblx0XHRcdGVyci5lcnJvck1lc3NhZ2VIZWxwZXIgPSBlcnJvckRhdGEuZXJyb3JfbWVzc2FnZV9oZWxwZXIgfHwgXCJcIjtcblx0XHRcdGVyci5lcnJvclN0YXR1cyA9IGVycm9yRGF0YS5lcnJvcl9zdGF0dXMudG9Mb3dlckNhc2UoKSB8fCBcImVycm9yXCI7XG5cdFx0XHRlcnIuZXJyb3JBcmlhID0gZXJyLmVycm9yTWVzc2FnZTtcblx0XHR9XG5cblx0XHQvLyBjbGVhbiB1cCBhbGwgcHJldmlvdXMgZXJyb3JzXG5cdFx0dGhpcy5lcnJvckNsZWFudXAoKTtcblxuXHRcdGlmIChlcnIuZXJyb3JNZXNzYWdlU3VidGV4dCkge1xuXHRcdFx0ZXJyLnN1YnRleHRIdG1sID0gXCI8cCBjbGFzcz0nZXJyb3ItbWVzc2FnZS1zdWJ0ZXh0JyB0YWJJbmRleD0nMCc+XCIgKyBlcnIuZXJyb3JNZXNzYWdlU3VidGV4dCArIFwiPC9wPlwiO1xuXHRcdFx0ZXJyLmVycm9yQXJpYSArPSBlcnIuZXJyb3JNZXNzYWdlU3VidGV4dDtcblx0XHR9XG5cblx0XHRlcnIuZXJyb3JNZXNzYWdlSHRtbCA9IFwiPHAgY2xhc3M9J2Vycm9yLW1lc3NhZ2UtaGVhZGluZycgdGFiSW5kZXg9JzAnPlwiICsgZXJyLmVycm9yTWVzc2FnZSArIFwiPC9wPlwiICsgZXJyLnN1YnRleHRIdG1sO1xuXG5cdFx0aWYgKGVyci5zdXBwb3J0Q29kZSkge1xuXHRcdFx0dmFyIHN1cHBvcnRBcmlhID0gbG9naW5Gb3JtLmFsZXJ0SnNIb2xkZXIuYXR0cignZGF0YS1zdXBwb3J0LWFyaWEnKTtcblx0XHRcdHZhciBzdXBwb3J0QXJpYUF0dHIgPSBzdXBwb3J0QXJpYSA/ICdhcmlhLWxhYmVsPVxcXCInICsgc3VwcG9ydEFyaWEgKyAnXFxcIic6ICcnO1xuXHRcdFx0ZXJyLmVycm9yTWVzc2FnZUh0bWwgKz0gXCI8YSB0YWJJbmRleD0nMCcgaHJlZj0nXCIgKyBDb3JlLnNlY3VyZVN1cHBvcnRVcmwgKyAnYXJ0aWNsZS8nICsgZXJyLnN1cHBvcnRDb2RlICsgXCInIHJlbD0nZXh0ZXJuYWwnIHRhcmdldD0nX2JsYW5rJyBcIiArIHN1cHBvcnRBcmlhQXR0ciArIFwiIHJvbGU9J2xpbmsnPlwiICsgZXJyLnN1cHBvcnRDb2RlICsgXCI8L2E+XCJcblx0XHR9XG5cblx0XHRpZiAoZXJyLmVycm9yTWVzc2FnZUhlbHBlciAmJiBlcnJvckRhdGEuaW5wdXRfaWQpIHtcblx0XHRcdGVyci5lcnJvck1lc3NhZ2VIdG1sICs9IFwiPHAgY2xhc3M9J2hpZGUtdGV4dCc+XCIgKyBlcnIuZXJyb3JNZXNzYWdlSGVscGVyICsgXCI8L3A+XCI7XG5cdFx0fVxuXG5cdFx0Ly8gc2V0IGVycm9yIG1lc3NhZ2Vcblx0XHRsb2dpbkZvcm0uYWxlcnRKc0hvbGRlci5odG1sKGVyci5lcnJvck1lc3NhZ2VIdG1sKS5yZW1vdmVDbGFzcygnaGlkZScpLnJlbW92ZUNsYXNzKCdhbGVydC1lcnJvcicpO1xuXHRcdGxvZ2luRm9ybS5hbGVydEpzSG9sZGVyLmFkZENsYXNzKCdhbGVydC0nICsgZXJyLmVycm9yU3RhdHVzKTtcblxuXHRcdGlmIChlcnIuZXJyb3JNZXNzYWdlSGVscGVyICYmIGVycm9yRGF0YS5pbnB1dF9pZCkge1xuXHRcdFx0dmFyIGhlbHBlckZpZWxkSWQgPSB3aW5kb3cuVXRpbGl0eS5nZXRJbnB1dElkKGVycm9yRGF0YS5pbnB1dF9pZCk7XG5cdFx0XHR2YXIgJGZpZWxkV2l0aEVycm9yID0gJCgnIycgKyBoZWxwZXJGaWVsZElkKTtcblx0XHRcdHZhciAkaGVscGVyRWxtID0gJGZpZWxkV2l0aEVycm9yLnNpYmxpbmdzKCcuZXJyb3ItaGVscGVyJyk7XG5cdFx0XHQkZmllbGRXaXRoRXJyb3IuYWRkQ2xhc3MoJ3N0YXR1cy0nICsgZXJyLmVycm9yU3RhdHVzKTtcblx0XHRcdCRmaWVsZFdpdGhFcnJvci5hZGRDbGFzcygnZmllbGQtZXJyb3InKTtcblx0XHRcdCRmaWVsZFdpdGhFcnJvci5hdHRyKCdhcmlhLWludmFsaWQnLCAndHJ1ZScpO1xuXHRcdFx0JGhlbHBlckVsbVxuXHRcdFx0XHQuaHRtbChlcnIuZXJyb3JNZXNzYWdlSGVscGVyKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2hpZGUnKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3N0YXR1cy0nICsgZXJyLmVycm9yU3RhdHVzKVxuXHRcdFx0XHQuYXR0cignc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7Jyk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xlYXIgdGhlIHBhc3N3b3JkLlxuXHRcdHRoaXMuaW5wdXRQYXNzd29yZC52YWwoJycpO1xuXG5cdFx0bG9naW5Gb3JtLnN1Ym1pdEJ1dHRvbi5idXR0b24oJ3Jlc2V0Jyk7XG5cblx0XHQvLyBleHBvc2UgZXJyb3JzIHRvIHBob2VuaXggYW5kIGV0Yy5cblx0XHRpZiAoRW1iZWRkZWRMb2dpbi5lcnJvckhhbmRsZXJSZWdpc3RyYXRpb24pIHtcblx0XHRcdEVtYmVkZGVkTG9naW4uZXJyb3JIYW5kbGVyUmVnaXN0cmF0aW9uKGVyci5lcnJvckNvZGUsIGVyci5zdXBwb3J0Q29kZSwgZXJyLmVycm9yTWVzc2FnZSk7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgZmllbGQgZXJyb3IsIHB1dCBmb2N1cyBvbiB0aGF0IGZpZWxkXG5cdFx0dmFyIGZvY3VzZWRFbG07XG5cdFx0aWYgKGVyci5lcnJvck1lc3NhZ2VIZWxwZXIgJiYgZXJyb3JEYXRhLmlucHV0X2lkICYmICRmaWVsZFdpdGhFcnJvcikge1xuXHRcdFx0Zm9jdXNlZEVsbSA9ICRmaWVsZFdpdGhFcnJvcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9jdXNlZEVsbSA9IGxvZ2luRm9ybS5hY2NvdW50TmFtZTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGZvY3VzZWRFbG0uY2xpY2soKS5mb2N1cygpO1xuXHRcdH0sIHRoaXMuZm9jdXNEZWxheSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEZvciBlYWNoIGxhbmd1YWdlIHRoZSBidXR0b24gd2lkdGggd291bGQgYmUgZGlmZmVyZW50LiBUaGlzIHNldHMgdGhlIHBhZGRpbmctcmlnaHQgb2YgdGhlIHBhc3N3b3JkIGZpZWxkXG5cdCAqIGJhc2VkIG9uIHRoZSBjYWxjdWxhdGVkIGJ1dHRvbiB3aWR0aCBzbyB0aGUgcGFzc3dvcmQgZG9lc24ndCBvdmVybGFwIHRoZSBzaG93L2hpZGUgYnV0dG9uXG5cdCAqL1xuXHRjYWxjdWxhdGVUb2dnbGVQYWRkaW5nOiBmdW5jdGlvbihpbnB1dFBhc3N3b3JkLCBidXR0b24pIHtcblx0XHR2YXIgZ2V0Q3NzTnVtYmVyVmFsdWUgPSBmdW5jdGlvbihjc3NWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50KGNzc1ZhbHVlLnJlcGxhY2UoL1teLT9cXGQqXS9nLCAnJykpO1xuXHRcdH07XG5cblx0XHR2YXIgYnV0dG9uV2lkdGggPSBnZXRDc3NOdW1iZXJWYWx1ZShidXR0b24uY3NzKCdwYWRkaW5nLWxlZnQnKSkgKyBidXR0b24ud2lkdGgoKSArIGdldENzc051bWJlclZhbHVlKGJ1dHRvbi5jc3MoJ3BhZGRpbmctcmlnaHQnKSk7XG5cdFx0aWYgKGJ1dHRvbldpZHRoID4gMCkge1xuXHRcdFx0aW5wdXRQYXNzd29yZC5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsIGJ1dHRvbldpZHRoICsgJ3B4Jyk7XG5cdFx0fVxuXHR9LFxuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZXMgYWxsIFwiY3NyZnRva2VuXCIgaGlkZGVuIGlucHV0IGZpZWxkcyAobG9naW4gdmlldyBjb250YWlucyBtdWx0aXBsZSBmb3Jtcylcblx0ICogd2l0aCB0aGUgZ2l2ZW4gY3NyZlRva2VuLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gZm9ybSBzdWJtaXNzaW9uXG5cdCAqIHRvIG1ha2Ugc3VyZSB0aGF0IENTUkYgdG9rZW5zIHVzZWQgYXJlIGFsd2F5cyB2YWxpZCwgZXZlbiBpZiB0aGUgc2Vzc2lvbiB0aW1lcyBvdXQuXG5cdCAqL1xuXHR1cGRhdGVDc3JmVG9rZW5GaWVsZHM6IGZ1bmN0aW9uKGNzcmZUb2tlbikge1xuXHRcdFt0aGlzLmNzcmZUb2tlbkZpZWxkc10uZm9yRWFjaChmdW5jdGlvbihmaWVsZCkge1xuXHRcdFx0ZmllbGQudmFsKGNzcmZUb2tlbik7XG5cdFx0fSk7XG5cdH0sXG5cdFxuXHQvKipcblx0ICogUmVsb2FkcyBDU1JGIHRva2VuIHdpdGggYW4gQUpBWCByZXF1ZXN0IGFuZCBlc3RhYmxpc2hlcyBhIG5ldyBzZXNzaW9uIGFzc29jaWF0ZWQgd2l0aFxuXHQgKiB0aGF0IENTUkYgdG9rZW4gaWYgdGhlIHNlc3Npb24gaGFzIGV4cGlyZWQuXG5cdCAqL1xuXHRyZWZyZXNoQ3NyZlRva2VuOiBmdW5jdGlvbihldmVudCkge1xuXHRcdCQuYWpheCh7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdHVybDogJy9sb2dpbi9jc3JmLXRva2VuJyxcblx0XHRcdGFzeW5jOiBmYWxzZVxuXHRcdH0pLmRvbmUoZnVuY3Rpb24oY3NyZlRva2VuKSB7XG5cdFx0XHRsb2dpbkZvcm0udXBkYXRlQ3NyZlRva2VuRmllbGRzKGNzcmZUb2tlbik7XG5cdFx0XHQkKGV2ZW50LnRhcmdldCkudW5iaW5kKCdjbGljaycpLmNsaWNrKCk7XG5cdFx0fSk7XG5cdH0sXG5cdFxuXHQvKipcblx0ICogQmluZCBldmVudHMgdG8gdGhpcmQgcGFydHkgbG9naW4gYnV0dG9ucy5cblx0ICovXG5cdGluaXRUaGlyZFBhcnR5TG9naW5CdXR0b25zOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRbdGhpcy50aGlyZFBhcnR5TG9naW5CdXR0b25zXS5mb3JFYWNoKGZ1bmN0aW9uKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLmJpbmQoJ2NsaWNrJywgdGhpcy5wcmV2ZW50RGVmYXVsdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0bG9naW5Gb3JtLnJlZnJlc2hDc3JmVG9rZW4oZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0aW5pdFBhc3N3b3JkRmllbGRzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoQmx6UGFzc3dvcmQgIT0gbnVsbCkge1xuXHRcdFx0dmFyIHBhc3N3b3JkRmllbGQgPSBuZXcgQmx6UGFzc3dvcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKSk7XG5cdFx0XHRwYXNzd29yZEZpZWxkLmluaXQoKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogT2JqZWN0IHRvIG1hbmFnZSBsZWZ0IGFsaWduZWQgaW5mbyBwYW5lbFxuICovXG52YXIgSW5mb1BhbmVsID0ge1xuXHQvLyBDU1MgY2xhc3NlcyB1c2VkIHRvIHN0eWxlIGRvbVxuXHRjc3NIaWRlOiAnaGlkZScsXG5cdGNzc1Nob3c6ICdzaG93Jyxcblx0Y3NzR3JpZDogJ2luZm8tYWN0aXZlJyxcblx0Ly8gVUkgc2VsZWN0b3JzXG5cdGxlZnRQYW5lbDogJyNpbmZvLXdyYXBwZXInLFxuXHRyaWdodFBhbmVsOiAnI2xvZ2luLXdyYXBwZXInLFxuXHRwaG9uZUluZm9Ub2dnbGU6ICcjaW5mby1waG9uZS10b2dnbGUnLFxuXHRwaG9uZUluZm9DbG9zZTogJyNpbmZvLXBob25lLWNsb3NlJyxcblx0dGl0bGU6IG51bGwsXG5cdGJvZHk6IG51bGwsXG5cdGVuYWJsZWQ6IG51bGwsXG5cdGRvbVJlYWR5OiBmYWxzZSxcblxuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHQvLyBpbml0aWFsaXplIGpxdWVyeSBvYmplY3RzXG5cdFx0dGhpcy5kb21SZWFkeSA9IHRydWU7XG5cdFx0dGhpcy4kbGVmdFBhbmVsID0gJCh0aGlzLmxlZnRQYW5lbCk7XG5cdFx0dGhpcy4kcmlnaHRQYW5lbCA9ICQodGhpcy5yaWdodFBhbmVsKTtcblx0XHR0aGlzLiRtb2JpbGVUb2dnbGUgPSAkKHRoaXMucGhvbmVJbmZvVG9nZ2xlKTtcblx0XHR0aGlzLiRtb2JpbGVDbG9zZSA9ICQodGhpcy5waG9uZUluZm9DbG9zZSk7XG5cdFx0Ly8gc2hvdyBpbmZvcGFuZWwgaWYgdG9nZ2xlIHdhcyBhbHJlYWR5IGNhbGxlZC5cblx0XHRpZiAodGhpcy5lbmFibGVkKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZSh0aGlzLmVuYWJsZWQsIHRoaXMudGl0bGUsIHRoaXMuYm9keSk7XG5cdFx0fVxuXHRcdHRoaXMuZW5hYmxlTW9iaWxlKCk7XG5cdH0sXG5cblx0dG9nZ2xlOiBmdW5jdGlvbih0b2dnbGUsIHRpdGxlLCBib2R5KSB7XG5cdFx0Ly8gY2FjaGUgdmFsdWVzIGZvciB1c2Ugd2hlbiBET00gaXMgcmVhZHlcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLmVuYWJsZWQgPSB0b2dnbGU7XG5cblx0XHR2YXIgc3RhdHVzID0gXCJJbmZvUGFuZWwudG9nZ2xlIGNhbGxlZC5cIjtcblx0XHQvLyBvbmx5IGFsbG93IGFjdGlvbnMgdGhyb3cgaWYgRE9NIGV4aXN0c1xuXHRcdGlmICh0aGlzLmRvbVJlYWR5KSB7XG5cdFx0XHRpZiAodG9nZ2xlKSB7XG5cdFx0XHRcdC8vIHBvcHVsYXRlIGluZm9ybWF0aW9uXG5cdFx0XHRcdHRoaXMuJGxlZnRQYW5lbC5maW5kKCcuaW5mby10aXRsZScpLmh0bWwodGl0bGUpO1xuXHRcdFx0XHR0aGlzLiRsZWZ0UGFuZWwuZmluZCgnLmluZm8tYm9keScpLmh0bWwoYm9keSk7XG5cdFx0XHRcdHRoaXMuJG1vYmlsZVRvZ2dsZS5odG1sKHRpdGxlKTtcblxuXHRcdFx0XHQvLyBzaG93IExlZnQgUGFuZWwsIGJ1dCBrZWVwIGhpZGRlbiBmb3IgbW9iaWxlXG5cdFx0XHRcdHRoaXMuJGxlZnRQYW5lbFxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLmNzc0hpZGUpXG5cdFx0XHRcdC8vIHR1cm4gbWFpbiBjb250ZW50IGludG8gMiBjb2x1bW4gZGVzaWduXG5cdFx0XHRcdHRoaXMuJHJpZ2h0UGFuZWxcblx0XHRcdFx0XHQuYWRkQ2xhc3ModGhpcy5jc3NHcmlkKTtcblx0XHRcdFx0Ly8gc2hvdyBtb2JpbGUgb25seSBpbmZvIHBhbmVsIHRvZ2dsZS5cblx0XHRcdFx0dGhpcy4kbW9iaWxlVG9nZ2xlXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMuY3NzSGlkZSlcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaGlkZSBpbmZvIHBhbmVsXG5cdFx0XHRcdHRoaXMuJGxlZnRQYW5lbFxuXHRcdFx0XHRcdC5hZGRDbGFzcyh0aGlzLmNzc0hpZGUpO1xuXHRcdFx0XHQvLyBjZW50ZXIgYWxpZ24gbWFpbiBjb250ZW50XG5cdFx0XHRcdHRoaXMuJHJpZ2h0UGFuZWxcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5jc3NHcmlkKTtcblx0XHRcdFx0Ly8gaGlkZSBtb2JpbGUgb25seSBpbmZvIHBhbmVsIHRvZ2dsZVxuXHRcdFx0XHR0aGlzLiRtb2JpbGVUb2dnbGVcblx0XHRcdFx0XHQuYWRkQ2xhc3ModGhpcy5jc3NIaWRlKTtcblx0XHRcdH1cblx0XHRcdHN0YXR1cyArPSBcIkRvbSByZWFkeS5cIlxuXHRcdH1cblx0XHRyZXR1cm4gc3RhdHVzO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBIaWRlcyBhbmQgc2hvd3MgYnJlYWtpbmcgbmV3cyBiYXNlZCBvbiBtb2JpbGUgb25seSBidXR0b25cblx0ICovXG5cdGVuYWJsZU1vYmlsZTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdC8vIGhlbHBlciBmdW5jdGlvbiB0byBzdG9wIGV2ZW50IHByb3AuIGFuZCBhZGQgYW5kIHJlbW92ZSBjbGFzcy5cblx0XHR2YXIgdG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbihldmVudCwgc2hvd0VsZW1lbnQsIGhpZGVFbGVtZW50KSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHNob3dFbGVtZW50LnJlbW92ZUNsYXNzKEluZm9QYW5lbC5jc3NIaWRlKTtcblx0XHRcdGhpZGVFbGVtZW50LmFkZENsYXNzKEluZm9QYW5lbC5jc3NIaWRlKTtcblx0XHR9O1xuXG5cdFx0Ly8gY2xpY2sgbGlzdGVuZXIgZm9yIGluZm8gcGFuZWwgdG9nZ2xlIGluIG1vYmlsZSBmb3JtIGZhY3RvclxuXHRcdHRoaXMuJG1vYmlsZVRvZ2dsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dG9nZ2xlQ2xhc3MoZSwgc2VsZi4kbGVmdFBhbmVsLCBzZWxmLiRyaWdodFBhbmVsKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdC8vIGNsaWNrIGxpc3RlbmVyIHRvIGNsb3NlIGluZm8gcGFuZWwgaW4gbW9iaWxlIGZhY3Rvci5cblx0XHR0aGlzLiRtb2JpbGVDbG9zZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dG9nZ2xlQ2xhc3MoZSwgc2VsZi4kcmlnaHRQYW5lbCwgc2VsZi4kbGVmdFBhbmVsKTtcblx0XHRcdH1cblx0XHQpXG5cdH1cbn1cblxuLyoqIEJhdHRsZS5uZXQgQXBwIGlzIHVzaW5nIHRoaXMgZnVuY3Rpb24gdG8gY2hlY2sgYW5kIGZpbGwgaW5wdXQgb24gQXBwIGxvZ2luIHNjcmVlbi4gKiovXG5cbnZhciBFbWJlZGRlZExvZ2luID0ge1xuXG5cdGlucHV0QWNjb3VudE5hbWU6IG51bGwsXG5cdGlucHV0UGFzc3dvcmQ6IG51bGwsXG5cdGlucHV0UGVyc2lzdExvZ2luOiAkKCcjcGVyc2lzdExvZ2luJyksXG5cdGlucHV0QWNjb3VudE5hbWVJZDogJ2FjY291bnROYW1lJyxcblx0aW5wdXRQYXNzd29yZElkOiAncGFzc3dvcmQnLFxuXHRlcnJvckNvbnRhaW5lcjogbnVsbCxcblx0ZXJyb3JDb250YWluZXJJZDogJyNkaXNwbGF5LWVycm9ycycsXG5cdGpzRXJyb3JDb250YWluZXI6IG51bGwsXG5cdGpzRXJyb3JDb250YWluZXJJZDogJyNqcy1lcnJvcnMnLFxuXHRlcnJvckhhbmRsZXJSZWdpc3RyYXRpb246IG51bGwsXG5cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5pbnB1dEFjY291bnROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pbnB1dEFjY291bnROYW1lSWQpO1xuXHRcdHRoaXMuaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaW5wdXRQYXNzd29yZElkKTtcblx0XHR0aGlzLmVycm9yQ29udGFpbmVyID0gJCh0aGlzLmVycm9yQ29udGFpbmVySWQpO1xuXHRcdHRoaXMuanNFcnJvckNvbnRhaW5lciA9ICQodGhpcy5qc0Vycm9yQ29udGFpbmVySWQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldFN1Ym1pdEJ1dHRvbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGxvZ2luRm9ybS5zdWJtaXRCdXR0b25bMF07XG5cdH0sXG5cblx0ZmlsbEFjY291bnROYW1lOiBmdW5jdGlvbihhY2NvdW50TmFtZSkge1xuXHRcdGlmIChhY2NvdW50TmFtZSkge1xuXHRcdFx0dGhpcy5pbnB1dEFjY291bnROYW1lLnZhbHVlID0gYWNjb3VudE5hbWUuc3Vic3RyaW5nKDAsIE1hdGgubWluKDMyMCwgYWNjb3VudE5hbWUubGVuZ3RoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaW5wdXRBY2NvdW50TmFtZS52YWx1ZSA9ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRmaWxsUGFzc3dvcmQ6IGZ1bmN0aW9uKHBhc3N3b3JkKSB7XG5cdFx0aWYgKHBhc3N3b3JkKSB7XG5cdFx0XHR0aGlzLmlucHV0UGFzc3dvcmQudmFsdWUgPSBwYXNzd29yZC5zdWJzdHJpbmcoMCwgTWF0aC5taW4oMTI4LCBwYXNzd29yZC5sZW5ndGgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbnB1dFBhc3N3b3JkLnZhbHVlID0gJyc7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHNldFBlcnNpc3RMb2dpbjogZnVuY3Rpb24oY2hlY2tlZCkge1xuXHRcdGlmICh0aGlzLmlucHV0UGVyc2lzdExvZ2luKSB7XG5cdFx0XHR0aGlzLmlucHV0UGVyc2lzdExvZ2luLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcblx0XHR9XG5cdH0sXG5cblx0cmVnaXN0ZXJFcnJvckhhbmRsZXI6IGZ1bmN0aW9uKGVycm9ySGFuZGxlcikge1xuXHRcdHRoaXMuZXJyb3JIYW5kbGVyUmVnaXN0cmF0aW9uID0gZXJyb3JIYW5kbGVyO1xuXHR9XG59O1xuIl0sImZpbGUiOiJsb2dpbi5qcyJ9
