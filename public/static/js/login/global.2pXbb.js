/**
 * Self executing function that triggers before the SRP background worker import.
 * It sets the serverResourceUrl for the Background worker in cases when we serve it from a CDN.
 */
(function() {
	window.serverResourceUrl = window.location.origin +
		document.querySelector("body")
				.getAttribute("data-srp-script-url")
				.replace(/\/\/.*\/login\/static/, "/login/static");

	window.upgradeResourceUrl = window.location.origin +
		document.querySelector("body")
			.getAttribute("data-pw-v2-worker-url")
			.replace(/\/\/.*\/login\/static/, "/login/static");

	window.accountPasswordUrl = window.location.origin +
		document.querySelector("body")
			.getAttribute("data-v2-password-js")
			.replace(/\/\/.*\/login\/static/, "/login/static");
})();

/*
 * Core global Vars
 */
$(function() {
	var body = $('body');

	Core.baseUrl			= body.attr('data-baseUrl');
	Core.cdnUrl			    = body.attr('data-cdnUrl');
	Core.staticUrl			= body.attr('data-staticUrl');
	Core.sharedStaticUrl 	= body.attr('data-sharedStaticUrl');
	Core.secureSupportUrl 	= body.attr('data-secureSupportUrl');
	Core.project			= body.attr('data-project');
	Core.projectUrl     	= body.attr('data-projectUrl');
	Core.locale				= body.attr('data-locale');
	Core.language			= body.attr('data-language');
	Core.region				= body.attr('data-region');
	Core.loggedIn			= body.attr('data-loggedIn');
	Core.userAgent			= body.attr('data-userAgent');
});

$(function() {

	/*
	 * Global utility function 
	 */
	var body = document.getElementsByTagName('body')[0];
		body.className = body.className + ' js-enabled preload';
		$('body').removeClass('preload');

	/*
	 *passing session ID and client ID for GTM
	 */
	window.AppAnalyticsPackage = {};

	/*
	 *ensure we are in App 
	 */
	if (typeof window.phoenix !== "undefined") {
		window.phoenix.connect(function () {
			AppAnalyticsPackage["clientId"] = window.phoenix.application.data.google_data.client_id;
			AppAnalyticsPackage["userId"] = window.phoenix.application.data.bnet_account_id;
		});
	}

	Utility.init();
});

window.Utility = {
	isApp: null,
	isMobileScreen: false,
	mobileBreakpoint: 576,
	init: function() {
		this.polyfills();
		this.isMobile = $('body').hasClass('mobile');
		this.isMobileScreen = this.checkIfMobileScreen();
		this.setupResizeEvent();
		this.submitActions();
		this.handleDisableButtons();
	},

	// disable submit button after click for all forms
	submitActions: function() {
		// submit button click listener.

		$('form').on('click', '.btn:not([rel="external"])', function(e) {
			// remove only text nodes (keeps hidden spinner present to ensure its visibility in iOS UIWebView)
			$(e.target)
				.button('loading')
				.contents().filter(function() { return this.nodeType == 3; }).remove()
		});
		
		/**
		 * Due to an artificial delay on iOS, we need to listen to touchend, and manually trigger a click.
		 * We also must stop clicks going through, which happen after a user dragged outside of a button.
		 */
		if (this.isMobile) {
			$('form').on('touchend', '.btn.btn-primary', function(e) {
				e.preventDefault();
				e.stopPropagation();
				
				// Retrieve latest touch event coordinates
				var touch = e.originalEvent.changedTouches;
				var touchX;
				var touchY;
				var offset = $(e.target).offset();

				if (touch && touch[0]) {
					touchX = touch[0].pageX;
					touchY = touch[0].pageY;
				}
				// Get coordinates of button
				var top = offset.top;
				var bottom = top + $(e.target).outerHeight();
				var left = offset.left;
				var right = left + $(e.target).outerWidth();
				
				// compare bounding box
				if ((touchX > left && touchX < right) && (touchY > top && touchY < bottom)) {
					$(e.target).trigger('click');
				}
			});
		}
		// IE only hacks
		if (/*@cc_on!@*/false) {
			// Blur checkbox on IE 10 because of the placeholder text bug.
			// https://twitter.com/hakanson/status/479697588908613632
			if (document.documentMode === 10) {
				var usernameField = document.getElementById("accountName");
				if (usernameField) {
					setTimeout(function() {
						usernameField.blur();
					}, 10);
				}
			}
			// Show label for IE 9 or lower
			if (typeof window.atob == "undefined") {
				$("label.control-label").show();
			}
			// Use non-skinned checkboxes in IE8.
			if (typeof window.addEventListener == "undefined") {
				$("input[type=checkbox]").addClass("css-input");
				$(".input-checkbox").hide();
			}
		}
	},
	getInputId: function (fieldId) {
		switch(fieldId) {
			case 'account_name':
				return "accountName";
			case 'log_in_submit':
				return 'submit';
			case 'authenticator_input':
				return 'authValue';
			default:
				return fieldId;
		}
	},
	setupResizeEvent: function () {
		var that = this;
		window.addEventListener("resize", function (e) {
			that.isMobileScreen = that.checkIfMobileScreen();
			var event = new window.CustomEvent("tassadar-resize", {
				detail: {
					isMobile: that.isMobileScreen
				}
			});

			this.dispatchEvent(event);
		}, false);
	},
	checkIfMobileScreen: function () {
		if(!window.matchMedia) {
			return window.innerWidth <= this.mobileBreakpoint;
		}

		return window.matchMedia("only screen and (max-width: " + this.mobileBreakpoint + "px)").matches;
	},
	handleDisableButtons: function () {
		var that = this;

		$('form').on('keyup keypress', function (e) {
			that.preventSubmit($(this).find('#submit'), e);
		});

		$('#submit').on('keyup keypress', function(e) {
			that.preventSubmit($(this), e);
		});
	},
	preventSubmit: function ($submitBtn, keyboardEvent) {
		var keyCode = keyboardEvent.keyCode || keyboardEvent.which;
		if ($submitBtn && keyCode && keyCode === 13) {
			if ($submitBtn.attr('[aria-disabled="true"]') || $submitBtn.hasClass('disabled')) {
				keyboardEvent.preventDefault();
				return false;
			}
		}
	},
	polyfills: function () {
		// custom event polyfill
		(function () {
			if ( typeof window.CustomEvent === "function" ) return false;

			function CustomEvent ( event, params ) {
				params = params || { bubbles: false, cancelable: false, detail: null };
				var evt = document.createEvent( 'CustomEvent' );
				evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
				return evt;
			}

			window.CustomEvent = CustomEvent;
		})();
	}
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTZWxmIGV4ZWN1dGluZyBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIGJlZm9yZSB0aGUgU1JQIGJhY2tncm91bmQgd29ya2VyIGltcG9ydC5cbiAqIEl0IHNldHMgdGhlIHNlcnZlclJlc291cmNlVXJsIGZvciB0aGUgQmFja2dyb3VuZCB3b3JrZXIgaW4gY2FzZXMgd2hlbiB3ZSBzZXJ2ZSBpdCBmcm9tIGEgQ0ROLlxuICovXG4oZnVuY3Rpb24oKSB7XG5cdHdpbmRvdy5zZXJ2ZXJSZXNvdXJjZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gK1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG5cdFx0XHRcdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNycC1zY3JpcHQtdXJsXCIpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXC9cXC8uKlxcL2xvZ2luXFwvc3RhdGljLywgXCIvbG9naW4vc3RhdGljXCIpO1xuXG5cdHdpbmRvdy51cGdyYWRlUmVzb3VyY2VVcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuXHRcdFx0LmdldEF0dHJpYnV0ZShcImRhdGEtcHctdjItd29ya2VyLXVybFwiKVxuXHRcdFx0LnJlcGxhY2UoL1xcL1xcLy4qXFwvbG9naW5cXC9zdGF0aWMvLCBcIi9sb2dpbi9zdGF0aWNcIik7XG5cblx0d2luZG93LmFjY291bnRQYXNzd29yZFVybCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gK1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG5cdFx0XHQuZ2V0QXR0cmlidXRlKFwiZGF0YS12Mi1wYXNzd29yZC1qc1wiKVxuXHRcdFx0LnJlcGxhY2UoL1xcL1xcLy4qXFwvbG9naW5cXC9zdGF0aWMvLCBcIi9sb2dpbi9zdGF0aWNcIik7XG59KSgpO1xuXG4vKlxuICogQ29yZSBnbG9iYWwgVmFyc1xuICovXG4kKGZ1bmN0aW9uKCkge1xuXHR2YXIgYm9keSA9ICQoJ2JvZHknKTtcblxuXHRDb3JlLmJhc2VVcmxcdFx0XHQ9IGJvZHkuYXR0cignZGF0YS1iYXNlVXJsJyk7XG5cdENvcmUuY2RuVXJsXHRcdFx0ICAgID0gYm9keS5hdHRyKCdkYXRhLWNkblVybCcpO1xuXHRDb3JlLnN0YXRpY1VybFx0XHRcdD0gYm9keS5hdHRyKCdkYXRhLXN0YXRpY1VybCcpO1xuXHRDb3JlLnNoYXJlZFN0YXRpY1VybCBcdD0gYm9keS5hdHRyKCdkYXRhLXNoYXJlZFN0YXRpY1VybCcpO1xuXHRDb3JlLnNlY3VyZVN1cHBvcnRVcmwgXHQ9IGJvZHkuYXR0cignZGF0YS1zZWN1cmVTdXBwb3J0VXJsJyk7XG5cdENvcmUucHJvamVjdFx0XHRcdD0gYm9keS5hdHRyKCdkYXRhLXByb2plY3QnKTtcblx0Q29yZS5wcm9qZWN0VXJsICAgICBcdD0gYm9keS5hdHRyKCdkYXRhLXByb2plY3RVcmwnKTtcblx0Q29yZS5sb2NhbGVcdFx0XHRcdD0gYm9keS5hdHRyKCdkYXRhLWxvY2FsZScpO1xuXHRDb3JlLmxhbmd1YWdlXHRcdFx0PSBib2R5LmF0dHIoJ2RhdGEtbGFuZ3VhZ2UnKTtcblx0Q29yZS5yZWdpb25cdFx0XHRcdD0gYm9keS5hdHRyKCdkYXRhLXJlZ2lvbicpO1xuXHRDb3JlLmxvZ2dlZEluXHRcdFx0PSBib2R5LmF0dHIoJ2RhdGEtbG9nZ2VkSW4nKTtcblx0Q29yZS51c2VyQWdlbnRcdFx0XHQ9IGJvZHkuYXR0cignZGF0YS11c2VyQWdlbnQnKTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdC8qXG5cdCAqIEdsb2JhbCB1dGlsaXR5IGZ1bmN0aW9uIFxuXHQgKi9cblx0dmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXHRcdGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUgKyAnIGpzLWVuYWJsZWQgcHJlbG9hZCc7XG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdwcmVsb2FkJyk7XG5cblx0Lypcblx0ICpwYXNzaW5nIHNlc3Npb24gSUQgYW5kIGNsaWVudCBJRCBmb3IgR1RNXG5cdCAqL1xuXHR3aW5kb3cuQXBwQW5hbHl0aWNzUGFja2FnZSA9IHt9O1xuXG5cdC8qXG5cdCAqZW5zdXJlIHdlIGFyZSBpbiBBcHAgXG5cdCAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdy5waG9lbml4ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0d2luZG93LnBob2VuaXguY29ubmVjdChmdW5jdGlvbiAoKSB7XG5cdFx0XHRBcHBBbmFseXRpY3NQYWNrYWdlW1wiY2xpZW50SWRcIl0gPSB3aW5kb3cucGhvZW5peC5hcHBsaWNhdGlvbi5kYXRhLmdvb2dsZV9kYXRhLmNsaWVudF9pZDtcblx0XHRcdEFwcEFuYWx5dGljc1BhY2thZ2VbXCJ1c2VySWRcIl0gPSB3aW5kb3cucGhvZW5peC5hcHBsaWNhdGlvbi5kYXRhLmJuZXRfYWNjb3VudF9pZDtcblx0XHR9KTtcblx0fVxuXG5cdFV0aWxpdHkuaW5pdCgpO1xufSk7XG5cbndpbmRvdy5VdGlsaXR5ID0ge1xuXHRpc0FwcDogbnVsbCxcblx0aXNNb2JpbGVTY3JlZW46IGZhbHNlLFxuXHRtb2JpbGVCcmVha3BvaW50OiA1NzYsXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucG9seWZpbGxzKCk7XG5cdFx0dGhpcy5pc01vYmlsZSA9ICQoJ2JvZHknKS5oYXNDbGFzcygnbW9iaWxlJyk7XG5cdFx0dGhpcy5pc01vYmlsZVNjcmVlbiA9IHRoaXMuY2hlY2tJZk1vYmlsZVNjcmVlbigpO1xuXHRcdHRoaXMuc2V0dXBSZXNpemVFdmVudCgpO1xuXHRcdHRoaXMuc3VibWl0QWN0aW9ucygpO1xuXHRcdHRoaXMuaGFuZGxlRGlzYWJsZUJ1dHRvbnMoKTtcblx0fSxcblxuXHQvLyBkaXNhYmxlIHN1Ym1pdCBidXR0b24gYWZ0ZXIgY2xpY2sgZm9yIGFsbCBmb3Jtc1xuXHRzdWJtaXRBY3Rpb25zOiBmdW5jdGlvbigpIHtcblx0XHQvLyBzdWJtaXQgYnV0dG9uIGNsaWNrIGxpc3RlbmVyLlxuXG5cdFx0JCgnZm9ybScpLm9uKCdjbGljaycsICcuYnRuOm5vdChbcmVsPVwiZXh0ZXJuYWxcIl0pJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0Ly8gcmVtb3ZlIG9ubHkgdGV4dCBub2RlcyAoa2VlcHMgaGlkZGVuIHNwaW5uZXIgcHJlc2VudCB0byBlbnN1cmUgaXRzIHZpc2liaWxpdHkgaW4gaU9TIFVJV2ViVmlldylcblx0XHRcdCQoZS50YXJnZXQpXG5cdFx0XHRcdC5idXR0b24oJ2xvYWRpbmcnKVxuXHRcdFx0XHQuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLm5vZGVUeXBlID09IDM7IH0pLnJlbW92ZSgpXG5cdFx0fSk7XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRHVlIHRvIGFuIGFydGlmaWNpYWwgZGVsYXkgb24gaU9TLCB3ZSBuZWVkIHRvIGxpc3RlbiB0byB0b3VjaGVuZCwgYW5kIG1hbnVhbGx5IHRyaWdnZXIgYSBjbGljay5cblx0XHQgKiBXZSBhbHNvIG11c3Qgc3RvcCBjbGlja3MgZ29pbmcgdGhyb3VnaCwgd2hpY2ggaGFwcGVuIGFmdGVyIGEgdXNlciBkcmFnZ2VkIG91dHNpZGUgb2YgYSBidXR0b24uXG5cdFx0ICovXG5cdFx0aWYgKHRoaXMuaXNNb2JpbGUpIHtcblx0XHRcdCQoJ2Zvcm0nKS5vbigndG91Y2hlbmQnLCAnLmJ0bi5idG4tcHJpbWFyeScsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gUmV0cmlldmUgbGF0ZXN0IHRvdWNoIGV2ZW50IGNvb3JkaW5hdGVzXG5cdFx0XHRcdHZhciB0b3VjaCA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcztcblx0XHRcdFx0dmFyIHRvdWNoWDtcblx0XHRcdFx0dmFyIHRvdWNoWTtcblx0XHRcdFx0dmFyIG9mZnNldCA9ICQoZS50YXJnZXQpLm9mZnNldCgpO1xuXG5cdFx0XHRcdGlmICh0b3VjaCAmJiB0b3VjaFswXSkge1xuXHRcdFx0XHRcdHRvdWNoWCA9IHRvdWNoWzBdLnBhZ2VYO1xuXHRcdFx0XHRcdHRvdWNoWSA9IHRvdWNoWzBdLnBhZ2VZO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEdldCBjb29yZGluYXRlcyBvZiBidXR0b25cblx0XHRcdFx0dmFyIHRvcCA9IG9mZnNldC50b3A7XG5cdFx0XHRcdHZhciBib3R0b20gPSB0b3AgKyAkKGUudGFyZ2V0KS5vdXRlckhlaWdodCgpO1xuXHRcdFx0XHR2YXIgbGVmdCA9IG9mZnNldC5sZWZ0O1xuXHRcdFx0XHR2YXIgcmlnaHQgPSBsZWZ0ICsgJChlLnRhcmdldCkub3V0ZXJXaWR0aCgpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gY29tcGFyZSBib3VuZGluZyBib3hcblx0XHRcdFx0aWYgKCh0b3VjaFggPiBsZWZ0ICYmIHRvdWNoWCA8IHJpZ2h0KSAmJiAodG91Y2hZID4gdG9wICYmIHRvdWNoWSA8IGJvdHRvbSkpIHtcblx0XHRcdFx0XHQkKGUudGFyZ2V0KS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gSUUgb25seSBoYWNrc1xuXHRcdGlmICgvKkBjY19vbiFAKi9mYWxzZSkge1xuXHRcdFx0Ly8gQmx1ciBjaGVja2JveCBvbiBJRSAxMCBiZWNhdXNlIG9mIHRoZSBwbGFjZWhvbGRlciB0ZXh0IGJ1Zy5cblx0XHRcdC8vIGh0dHBzOi8vdHdpdHRlci5jb20vaGFrYW5zb24vc3RhdHVzLzQ3OTY5NzU4ODkwODYxMzYzMlxuXHRcdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50TW9kZSA9PT0gMTApIHtcblx0XHRcdFx0dmFyIHVzZXJuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnROYW1lXCIpO1xuXHRcdFx0XHRpZiAodXNlcm5hbWVGaWVsZCkge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR1c2VybmFtZUZpZWxkLmJsdXIoKTtcblx0XHRcdFx0XHR9LCAxMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFNob3cgbGFiZWwgZm9yIElFIDkgb3IgbG93ZXJcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93LmF0b2IgPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHQkKFwibGFiZWwuY29udHJvbC1sYWJlbFwiKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBVc2Ugbm9uLXNraW5uZWQgY2hlY2tib3hlcyBpbiBJRTguXG5cdFx0XHRpZiAodHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0JChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpLmFkZENsYXNzKFwiY3NzLWlucHV0XCIpO1xuXHRcdFx0XHQkKFwiLmlucHV0LWNoZWNrYm94XCIpLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGdldElucHV0SWQ6IGZ1bmN0aW9uIChmaWVsZElkKSB7XG5cdFx0c3dpdGNoKGZpZWxkSWQpIHtcblx0XHRcdGNhc2UgJ2FjY291bnRfbmFtZSc6XG5cdFx0XHRcdHJldHVybiBcImFjY291bnROYW1lXCI7XG5cdFx0XHRjYXNlICdsb2dfaW5fc3VibWl0Jzpcblx0XHRcdFx0cmV0dXJuICdzdWJtaXQnO1xuXHRcdFx0Y2FzZSAnYXV0aGVudGljYXRvcl9pbnB1dCc6XG5cdFx0XHRcdHJldHVybiAnYXV0aFZhbHVlJztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBmaWVsZElkO1xuXHRcdH1cblx0fSxcblx0c2V0dXBSZXNpemVFdmVudDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dGhhdC5pc01vYmlsZVNjcmVlbiA9IHRoYXQuY2hlY2tJZk1vYmlsZVNjcmVlbigpO1xuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChcInRhc3NhZGFyLXJlc2l6ZVwiLCB7XG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGlzTW9iaWxlOiB0aGF0LmlzTW9iaWxlU2NyZWVuXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdH0sIGZhbHNlKTtcblx0fSxcblx0Y2hlY2tJZk1vYmlsZVNjcmVlbjogZnVuY3Rpb24gKCkge1xuXHRcdGlmKCF3aW5kb3cubWF0Y2hNZWRpYSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDw9IHRoaXMubW9iaWxlQnJlYWtwb2ludDtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogXCIgKyB0aGlzLm1vYmlsZUJyZWFrcG9pbnQgKyBcInB4KVwiKS5tYXRjaGVzO1xuXHR9LFxuXHRoYW5kbGVEaXNhYmxlQnV0dG9uczogZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdCQoJ2Zvcm0nKS5vbigna2V5dXAga2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dGhhdC5wcmV2ZW50U3VibWl0KCQodGhpcykuZmluZCgnI3N1Ym1pdCcpLCBlKTtcblx0XHR9KTtcblxuXHRcdCQoJyNzdWJtaXQnKS5vbigna2V5dXAga2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHR0aGF0LnByZXZlbnRTdWJtaXQoJCh0aGlzKSwgZSk7XG5cdFx0fSk7XG5cdH0sXG5cdHByZXZlbnRTdWJtaXQ6IGZ1bmN0aW9uICgkc3VibWl0QnRuLCBrZXlib2FyZEV2ZW50KSB7XG5cdFx0dmFyIGtleUNvZGUgPSBrZXlib2FyZEV2ZW50LmtleUNvZGUgfHwga2V5Ym9hcmRFdmVudC53aGljaDtcblx0XHRpZiAoJHN1Ym1pdEJ0biAmJiBrZXlDb2RlICYmIGtleUNvZGUgPT09IDEzKSB7XG5cdFx0XHRpZiAoJHN1Ym1pdEJ0bi5hdHRyKCdbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0nKSB8fCAkc3VibWl0QnRuLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG5cdFx0XHRcdGtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cG9seWZpbGxzOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gY3VzdG9tIGV2ZW50IHBvbHlmaWxsXG5cdFx0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICggdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XG5cdFx0XHRcdHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiBudWxsIH07XG5cdFx0XHRcdHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xuXHRcdFx0XHRldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsICk7XG5cdFx0XHRcdHJldHVybiBldnQ7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xuXHRcdH0pKCk7XG5cdH1cbn07XG4iXSwiZmlsZSI6Imdsb2JhbC5qcyJ9
