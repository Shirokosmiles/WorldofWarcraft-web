/*!
 * Battle.net Front end Toolkit
 *
 * @copyright       ©2012 Blizzard Entertainment, Inc. All rights reserved.
 *
 * Twitter Bootstrap
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       ©2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Twitter typeahead.js
 *
 * @see             https://github.com/twitter/typeahead.js
 * @copyright       ©2013 Twitter, Inc. All rights reserved.
 * @license         http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2013 Twitter, Inc
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
"use strict";
/**
 * Polyfills for Toolkit, supporting down to IE8.
 *
 * For implementations using Toolkit that do not have bnet-common dependencies.
 *
 */

/**
 * Object.create() polyfill for older browsers.
 */
if (!Object.create) {
	Object.create = function(o) {
		if (arguments.length > 1) {
			throw new Error("Object.create implementation only accepts the first parameter.");
		}

		function F() {}
		F.prototype = o;
		return new F();
	};
}

/**
 * Object.getPrototypeOf polyfill for older browsers.
 *
 * @see http://ejohn.org/blog/objectgetprototypeof/
 */
/* jshint ignore:start */
if (!Object.getPrototypeOf) {
	if (typeof "test".__proto__ === "object") {
		Object.getPrototypeOf = function(object) {
			return object.__proto__;
		};
	} else {
		Object.getPrototypeOf = function(object) {
			// May break if the constructor has been tampered with
			return object.constructor.prototype;
		};
	}
}
/* jshint ignore:end */

/**
 * Polyfill for String.fromCodePoint() in ES6.
 * Generates strings from Unicode code points. String.fromCharCode() cannot handle high code points and should be deprecated.
 */
if (!String.fromCodePoint) {
	/*!
	* ES6 Unicode Shims 0.1
	* (c) 2012 Steven Levithan <http://slevithan.com/>
	* MIT License
	*/
	String.fromCodePoint = function fromCodePoint () {
		var chars = [],
				point,
				offset,
				units,
				i;
		for (i = 0; i < arguments.length; ++i) {
			point = arguments[i];
			offset = point - 0x10000;
			units = point > 0xFFFF ? [0xD800 + (offset >> 10), 0xDC00 + (offset & 0x3FF)] : [point];
			chars.push(String.fromCharCode.apply(null, units));
		}
		return chars.join("");
	};
}

/**
 * Prototype extensions.
 */
/* jshint ignore:start */
if (!String.prototype.trim) {
	String.prototype.trim = function() {
		return $.trim(this);
	};
}
if (!String.prototype.capitalize) {
	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	};
}
/* jshint ignore:end */

/**
 * The following blocks will test if jQuery.expr.createPseudo exists.
 * jQuery.expr.createPseudo was introduced in jQuery 1.8, this check ensures that apps using older versions
 * of jQuery won"t break.
 */

if (typeof jQuery.expr.createPseudo === "function") {
	/**
	 * caseInsensitiveContains jquery custom pseudoselector
	 *
	 */
	jQuery.expr[":"].caseInsensitiveContains = jQuery.expr.createPseudo(function (arg) {
		return function (elem) {
			return jQuery(elem).text().toLocaleLowerCase().indexOf(arg.toLocaleLowerCase()) >= 0;
		};
	});

	/**
	 * caseInsensitiveStartsWith jquery custom pseudoselector
	 *
	 */
	jQuery.expr[":"].caseInsensitiveStartsWith = jQuery.expr.createPseudo(function(searchString) {
		return function(elem) {
			return jQuery(elem).text().toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) === 0;
		};
	});
}
else {
	jQuery.expr[":"].caseInsensitiveContains = function (elem, i, match) {
		return jQuery(elem).text().toLocaleLowerCase().indexOf(match[3].toLocaleLowerCase()) >= 0;
	};

	jQuery.expr[":"].caseInsensitiveStartsWith = function(elem, i, match) {
		return jQuery(elem).text().toLocaleLowerCase().indexOf(match[3].toLocaleLowerCase()) === 0;
	};
}

/**
 * Polyfill for Element.prototype.matches
 */
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function(s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i = matches.length;
			while (--i >= 0 && matches.item(i) !== this) {}
			return i > -1;
		};
}
/**
 * For simple transition effects.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       (c)2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Transition
 * @requires        jQuery
 */

$(function () {

	/**
	 * CSS transition support
	 *
	 * @see http://www.modernizr.com/
	 */

	$.support.transition = (function () {

		var transitionEnd = (function () {

			var el = document.createElement("toolkit"), transEndEventNames = {
				"WebkitTransition": "webkitTransitionEnd",
				"MozTransition": "transitionend",
				"OTransition": "oTransitionEnd otransitionend",
				"transition": "transitionend"
			}, name;

			for (name in transEndEventNames) {
				if (el.style[name] !== undefined) {
					return transEndEventNames[name];
				}
			}

			// default
			return "";

		}());

		return transitionEnd && {
			end: transitionEnd
		};

	})();

});
/**
 * Make anything stick to the top of the viewport as you scroll.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Affix
 * @requires        jQuery
 */

var Affix = function (element, options) {
	this.options = $.extend({}, $.fn.affix.defaults, options);
	this.$window = $(window).on("scroll.affix.data-api", $.proxy(this.checkPosition, this)).on("click.affix.data-api", $.proxy(function () {
		setTimeout($.proxy(this.checkPosition, this), 1);
	}, this));
	this.$element = $(element);
	this.checkPosition();
};

/**
 * If a single number is provided, the offset will be applied in both top and left directions.
 * To listen for a single direction, or multiple unique offsets, just provided an object
 * offset: { x: 10 }. Use a function when you need to dynamically provide an offset (useful for
 * some responsive designs).
 */
Affix.prototype.checkPosition = function () {
	if (!this.$element.is(":visible")) {
		return;
	}

	var scrollHeight = $(document).height(), scrollTop = this.$window.scrollTop(), position = this.$element.offset(), offset = this.options.offset, offsetBottom = offset.bottom, offsetTop = offset.top, reset = "affix affix-top affix-bottom", affix;

	if (typeof offset !== "object") {
		offsetBottom = offsetTop = offset;
	}
	if (typeof offsetTop === "function") {
		offsetTop = offset.top();
	}
	if (typeof offsetBottom === "function") {
		offsetBottom = offset.bottom();
	}

	if (this.unpin !== null && (scrollTop + this.unpin <= position.top)) {
		affix = false;
	} else if (!isNaN(offsetBottom) && (position.top + this.$element.height() >= scrollHeight - offsetBottom)) {
		affix = "bottom";
	} else if (!isNaN(offsetTop) && scrollTop <= offsetTop) {
		affix = "top";
	} else {
		affix = false;
	}

	if (this.affixed === affix) {
		return;
	}

	this.affixed = affix;
	this.unpin = affix === "bottom" ? (position.top - scrollTop) : null;

	this.$element.removeClass(reset).addClass("affix" + (affix ? "-" + affix : ""));
};

/**
 * Affix plugin definition
 *
 * @param option
 */
$.fn.affix = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("affix"),
				options = typeof option === "object" && option;
		if (!data) {
			$this.data("affix", (data = new Affix(this, options)));
		}
		if (typeof option === "string") {
			data[option]();
		}
	});
};

$.fn.affix.Constructor = Affix;

$.fn.affix.defaults = {
	offset: 0
};

/**
 * Affix data-API
 *
 * To easily add affix behavior to any element, just add data-spy="affix" to the element you want
 * to spy on. Then use offsets to define when to toggle the pinning of an element on and off.
 *
 * Options can be passed via data attributes or JavaScript. For data attributes, append the option
 * name to data-, as in data-offset-top="200".
 */
$(window).on("load", function () {
	$("[data-spy='affix']").each(function () {
		var $spy = $(this), data = $spy.data();

		data.offset = data.offset || {};

		if (data.offsetBottom) {
			data.offset.bottom = data.offsetBottom;
		}
		if (data.offsetTop) {
			data.offset.top = data.offsetTop;
		}

		$spy.affix(data);
	});
});
/**
 * Add dismiss functionality to all alert messages with this plugin.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Alert
 * @requires        jQuery
 */

var dismiss = "[data-dismiss='alert']", Alert = function (el) {
	$(el).on("click", dismiss, this.close);
};

/**
 * Closes an alert.
 *
 * @param e
 */
Alert.prototype.close = function (e) {
	var $this = $(this),
			selector = $this.attr("data-target"),
			$parent;

	if (!selector) {
		selector = $this.attr("href");
		selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ""); //strip for ie7
	}

	$parent = $(selector);

	if (e) {
		e.preventDefault();
	}

	if (!$parent.length) {
		$parent = $this.hasClass("alert") ? $this : $this.parent();
	}

	$parent.trigger(e = $.Event("close"));

	if (e.isDefaultPrevented()) {
		return;
	}

	$parent.removeClass("in");

	function removeElement () {
		$parent.trigger("closed").remove();
	}

	if ($.support.transition && $parent.hasClass("fade")) {
		$parent.on($.support.transition.end, removeElement);
	} else {
		removeElement();
	}
};

/**
 * Alert plugin definition. Wraps all alerts with close functionality. To have your alerts animate
 * out when closed, make sure they have the .fade and .in class already applied to them.
 *
 * @param option
 */
$.fn.alert = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("alert");
		if (!data) {
			$this.data("alert", (data = new Alert(this)));
		}
		if (typeof option === "string") {
			data[option].call($this);
		}
	});
};

$.fn.alert.Constructor = Alert;

/**
 * Alert data-API
 *
 * Add data-dismiss="alert" to your close button to automatically give an alert close functionality.
 */
$(document).on("click.alert.data-api", dismiss, Alert.prototype.close);
/**
 * Do more with buttons. Control button states or create groups of buttons for more components
 * like toolbars.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Button
 * @requires        jQuery
 */

var Button = function (element, options) {
	this.$element = $(element);
	this.options = $.extend({}, $.fn.button.defaults, options);
};

Button.prototype.setState = function (state) {
	var d = "disabled",
			$el = this.$element,
			data = $el.data(),
			val = $el.is("input") ? "val" : "html",
			message;

	state = state + "Text";
	message = data[state] || this.options[state];

	if (message === "" && state === "loadingText") {
		$el.addClass("loading");
	} else {
		$el.removeClass("loading");
	}

	if (!data.resetText) {
		$el.data("resetText", $el[val]());
	}

	if (message !== "") {
		$el[val](message);
	}

	// push to event loop to allow forms to submit
	setTimeout(function () {
		if (state === "loadingText") {
			$el.addClass(d).attr(d, d).prop(d, true);
		} else {
			$el.removeClass(d).removeAttr(d).prop(d, false);
		}
	}, 0);
};

Button.prototype.toggle = function () {
	var $parent = this.$element.closest("[data-toggle='buttons-radio']");

	if ($parent) {
		$parent.find(".active").removeClass("active");
	}

	this.$element.toggleClass("active");
};

/**
 * Button plugin definition
 *
 * @param option
 */
$.fn.button = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("button"),
				options = typeof option === "object" && option;
		if (!data) {
			$this.data("button", (data = new Button(this, options)));
		}
		if (option === "toggle") {
			data.toggle();
		} else if (option) {
			data.setState(option);
		}
	});
};

$.fn.button.defaults = {
	loadingText: ""
};

$.fn.button.Constructor = Button;

/**
 * Button data-API
 *
 * Add data-loading-text="Loading..." to use a loading state on a button.
 * Add data-toggle="button" to activate toggling on a single button.
 * Add data-toggle="buttons-checkbox" for checkbox style toggling on btn-group.
 * Add data-toggle="buttons-radio" for radio style toggling on btn-group.
 */

$(document).on("click.button.data-api", "[data-toggle^=button]", function (e) {
	var $btn = $(e.target);
	if (!$btn.hasClass("btn")) {
		$btn = $btn.closest(".btn");
	}
	$btn.button("toggle");
});
/**
 * A generic plugin for cycling through elements like a carousel.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Carousel
 * @requires        jQuery
 */

var Carousel = function (element, options) {
	this.$element = $(element);
	this.options = options;
	if (this.options.pause === "hover") {
		this.$element.on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this));
	}
};

Carousel.prototype = {

	cycle: function (e) {
		if (!e) {
			this.paused = false;
		}
		if (this.options.interval && !this.paused) {
			this.interval = setInterval($.proxy(this.next, this), this.options.interval);
		}
		return this;
	},

	to: function (pos) {
		var $active = this.$element.find(".item.active"),
				children = $active.parent().children(),
				activePos = children.index($active),
				that = this;

		if (pos > (children.length - 1) || pos < 0) {
			return;
		}

		if (this.sliding) {
			return this.$element.one("slid", function () {
				that.to(pos);
			});
		}

		if (activePos === pos) {
			return this.pause().cycle();
		}

		return this.slide(pos > activePos ? "next" : "prev", $(children[pos]));
	},

	pause: function (e) {
		if (!e) {
			this.paused = true;
		}
		if (this.$element.find(".next, .prev").length && $.support.transition.end) {
			this.$element.trigger($.support.transition.end);
			this.cycle();
		}
		clearInterval(this.interval);
		this.interval = null;
		return this;
	},

	next: function () {
		if (this.sliding) {
			return;
		}
		return this.slide("next");
	},

	prev: function () {
		if (this.sliding) {
			return;
		}
		return this.slide("prev");
	},

	slide: function (type, next) {
		var $active = this.$element.find(".item.active"),
				$next = next || $active[type](),
				isCycling = this.interval,
				direction = type === "next" ? "left" : "right",
				fallback = type === "next" ? "first" : "last",
				that = this, e;

		this.sliding = true;

		if (isCycling) {
			this.pause();
		}

		$next = $next.length ? $next : this.$element.find(".item")[fallback]();

		e = $.Event("slide", {
			relatedTarget: $next[0],
			direction: direction
		});

		if ($next.hasClass("active")) {
			return;
		}

		if ($.support.transition) {
			this.$element.trigger(e);
			if (e.isDefaultPrevented()) {
				return;

			}
			$next.addClass(type);
			if ($next[0].offsetWidth) {
				void $next[0].offsetWidth; // force reflow
			}
			$active.addClass(direction);
			$next.addClass(direction);
			this.$element.one($.support.transition.end, function () {
				$next.removeClass([type, direction].join(" ")).addClass("active");
				$active.removeClass(["active", direction].join(" "));
				that.sliding = false;
				setTimeout(function () {
					that.$element.trigger("slid");
				}, 0);
			});
		} else {
			this.$element.trigger(e);
			if (e.isDefaultPrevented()) {
				return;
			}
			$active.removeClass("active");
			$next.addClass("active");
			this.sliding = false;
			this.$element.trigger("slid");
		}

		if (isCycling) {
			this.cycle();
		}

		return this;
	}

};

/**
 * Carousel plugin definition
 *
 * @param option
 */
$.fn.carousel = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("carousel"),
				options = $.extend({}, $.fn.carousel.defaults, typeof option === "object" && option),
				action = typeof option === "string" ? option : options.slide;

		if (!data) {
			$this.data("carousel", (data = new Carousel(this, options)));
		}
		if (typeof option === "number") {
			data.to(option);
		} else if (action) {
			data[action]();
		} else if (options.interval) {
			data.cycle();
		}
	});
};

$.fn.carousel.defaults = {
	interval: 5000,
	pause: "hover"
};

$.fn.carousel.Constructor = Carousel;

/**
 * Carousel data-API
 */
$(document).on("click.carousel.data-api", "[data-slide]", function (e) {
	var $this = $(this),
			href,
			$target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")), //strip for ie7
			options = $.extend({}, $target.data(), $this.data());
	$target.carousel(options);
	e.preventDefault();
});

/**
 * Adds a character counter to elements that support the maxlength attribute.
 *
 * TODO Handle inconsistencies between browsers when counting whitespace (CR-LF in windows vs Unix LF)
 *
 * @requires        jQuery
 */

var Charmax = function (element, options) {
	this.init(element, options);
};

Charmax.prototype = {
	constructor: Charmax,

	init: function (element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = this.getOptions(options);
		this.maxlength = parseInt(this.$element.attr("maxlength"), 10);

		// bind to both oninput and onkeydown. if oninput supported, remove onkeydown event. works around FF4 bug.
		this.$element.on("input.charmax", $.proxy(this.countCharsInput, this));
		this.$element.on("keydown.charmax", $.proxy(this.countCharsKeydown, this));
	},

	getOptions: function (options) {
		options = $.extend({}, $.fn.charmax.defaults, options, this.$element.data());

		return options;
	},

	getCount: function getCount() {
		return this.element.value.length;
	},

	countCharsInput: function countCharsInput () {
		this.$element.off(".charmax");
		this.$element.on("input.charmax", $.proxy(this.countChars, this));
		this.countChars.call(this);
	},

	countCharsKeydown: function countCharsKeydown () {
		this.countChars.call(this);
	},

	countChars: function countChars () {

		var delta = this.getCount() - this.maxlength;

		// update counter
		this.$element.attr("data-charmax-counter", (delta + this.maxlength) + "/" + this.maxlength);

		if (delta < 0) {
			this.$element.trigger("underMaxlength", [delta]);
		}
		else if (delta > 0) {
			this.$element.trigger("overMaxlength", [delta]);
		}
		else {
			this.$element.trigger("atMaxlength");
		}

		this.$element.trigger("charcounter", [delta]);
	}
};

$.fn.charmax = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("charmax"),
				options = typeof option === "object" && option;

		if ($this.attr("maxlength") !== "undefined") {
			if (!data) {
				$this.data("charmax", (data = new Charmax(this, options)));
			}

			if (typeof option === "string") {
				data[option]();
			}
		}
	});
};

$.fn.charmax.Constructor = Charmax;

$.fn.charmax.defaults = {
};

/**
 * Charmax markup/data-api
 *
 * automatically applies charmax to all inputs and textareas with a maxlength attribute, acting as a polyfill for
 * textarea maxlength
 *
 * skip elements with [data-charmax="false"]
 */
$(window).on("load", function() {
	$("textarea[maxlength], input[maxlength]").not("[data-charmax='false']").each(function() {
		$(this).charmax();
	});
});
/**
 * CSS polyfill for checkboxes to enable full styling of checkbox elements.
 *
 * @class           Checkbox
 * @requires        jQuery
 */
var Checkbox = function (element) {
	this.$element = $(element);
};

Checkbox.prototype.setState = function (state) {
	var $el = this.$element;

	if ($el.attr(state) === state) {
		$el.removeAttr(state);
		$el.parent(".checkbox-label").removeClass(state);
	} else {
		$el.attr(state, state);
		$el.parent(".checkbox-label").addClass(state);
	}
};

Checkbox.prototype.toggle = function (isInit) {
	if (this.$element.hasClass("partial") && isInit !== true) {
		this.$element.removeClass("partial");
		this.$element.removeClass("checked");
		this.$element.children("input").removeAttr("aria-checked");
		this.$element.children().prop("checked", false);
	}
	if (this.$element.children().prop("checked")) {
		this.$element.addClass("checked");
		this.$element.children("input").attr("aria-checked", "true");
	} else {
		this.$element.removeClass("checked");
		this.$element.children("input").removeAttr("aria-checked");
	}
	if (this.$element.children().prop("disabled")) {
		this.$element.addClass("disabled");
		this.$element.children("input").attr("aria-disabled", "true");
	} else {
		this.$element.removeClass("disabled");
		this.$element.children("input").removeAttr("aria-disabled");
	}
};

Checkbox.prototype.focus = function () {
	this.$element.addClass("focus");
};

Checkbox.prototype.blur = function () {
	this.$element.removeClass("focus");
};

/**
 * Checkbox plugin definition
 *
 * @param option
 */
$.fn.checkbox = function (option, isInit, event) {
	return this.each(function () {
		var $this = $(this),
			data;

		$this.data("checkbox", (data = new Checkbox(this)));
		if (option === "toggle") {
			data.toggle(isInit);
		} else if (option === "focus") {
			data.focus();
		} else if (option === "blur") {
			data.blur();
		} else if (option) {
			data.setState(option);
		}
	});
};

$.fn.checkbox.Constructor = Checkbox;

/**
 * Checkbox data-API
 */
$(function () {
	$("body").on("change.checkbox.data-api", "input[type=checkbox]:not(.css-input)",function (event) {
		$(event.currentTarget).parent(".checkbox-label").checkbox("toggle");
	}).on("focus.checkbox.data-api", "input[type=checkbox]:not(.css-input)",function (event) {
		$(event.currentTarget).parent(".checkbox-label").checkbox("focus");
	}).on("blur.checkbox.data-api", "input[type=checkbox]:not(.css-input)", function (event) {
		$(event.currentTarget).parent(".checkbox-label").checkbox("blur");
	});

	// moved from "load" event
	$("input[type=checkbox]:not(.css-input)").each(function() {
		$(this).parent(".checkbox-label").checkbox("toggle", true);
	});

});
/**
 * Flexible support for collapsible components like accordions and navigation.
 * Requires the Transitions plugin.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Collapse
 * @requires        jQuery, Transition
 */

var Collapse = function (element, options) {
	this.$element = $(element);
	this.options = $.extend({}, $.fn.collapse.defaults, options);

	/**
	 * If selector then all collapsible elements under the specified parent will be closed when
	 * this collapsible item is shown (similar to traditional accordion behavior).
	 */
	if (this.options.parent) {
		this.$parent = $(this.options.parent);
	}

	/**
	 * Toggles the collapsible element on invocation.
	 */
	if (this.options.toggle) {
		this.toggle();
	}
};

Collapse.prototype = {

	constructor: Collapse,

	dimension: function () {
		var hasWidth = this.$element.hasClass("width");
		return hasWidth ? "width" : "height";
	},

	/**
	 * Shows a collapsible element.
	 */
	show: function () {
		var dimension,
			scroll,
			actives,
			hasData;

		if (this.transitioning) {
			return;
		}

		dimension = this.dimension();
		scroll = $.camelCase(["scroll", dimension].join("-"));
		actives = this.$parent && this.$parent.find(".in");

		if (actives && actives.length) {
			hasData = actives.data("collapse");
			if (hasData && hasData.transitioning) {
				return;
			}
			actives.siblings("a").addClass("collapsed");
			actives.prev().find(".accordion-toggle").addClass("collapsed");
			actives.collapse("hide");
			if (!hasData) {
				actives.data("collapse", null);
			}
		}

		this.$element[dimension](0);
		this.transition("addClass", $.Event("show"), "shown");
		if ($.support.transition) {
			this.$element[dimension](this.$element[0][scroll]);
		}
	},

	/**
	 * Hides a collapsible element.
	 */
	hide: function () {
		var dimension;
		if (this.transitioning) {
			return;
		}
		dimension = this.dimension();
		this.reset(this.$element[dimension]());
		this.transition("removeClass", $.Event("hide"), "hidden");
		this.$element[dimension](0);
	},

	reset: function (size) {
		var dimension = this.dimension();

		size = size || "auto";

		void this.$element.removeClass("collapse")[dimension](size)[0].offsetWidth; // force reflow

		this.$element[size !== null ? "addClass" : "removeClass"]("collapse");

		return this;
	},

	transition: function (method, startEvent, completeEvent) {
		var that = this,
			complete = function () {
				if (startEvent.type === "show") {
					that.reset();
				}
				that.transitioning = 0;
				that.$element.trigger(completeEvent);
			};

		this.$element.trigger(startEvent);

		if (startEvent.isDefaultPrevented()) {
			return;
		}

		this.transitioning = 1;

		this.$element[method]("in");

		if ($.support.transition && this.$element.hasClass("collapse")) {
			this.$element.one($.support.transition.end, complete);
		} else {
			complete();
		}
	},

	/**
	 * Toggles a collapsible element to shown or hidden.
	 */
	toggle: function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]();
	}

};

/**
 *  Collapsible plugin definition. Activates your content as a collapsible element.
 *  Accepts an optional options object.
 *
 * @param option
 */

$.fn.collapse = function (option) {
	return this.each(function () {
		var $this = $(this),
			data = $this.data("collapse"),
			options = typeof option === "object" && option;
		if (!data) {
			$this.data("collapse", (data = new Collapse(this, options)));
		}
		if (typeof option === "string") {
			data[option]();
		}
	});
};

$.fn.collapse.defaults = {
	toggle: true
};

$.fn.collapse.Constructor = Collapse;

/**
 * Collapsible data-API
 *
 * Add data-toggle="collapse" and a data-target to element to automatically assign control of a
 * collapsible element. The data-target attribute accepts a css selector to apply the collapse to.
 *
 * Be sure to add the class collapse to the collapsible element. If you"d like it to default open,
 * add the additional class in.
 *
 * To add accordion-like group management to a collapsible control, add the data attribute
 * data-parent="#selector".
 */
$(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (e) {
	var $this = $(this),
		href,
		target = $this.attr("data-target") || e.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""), //strip for ie7
		option = $(target).data("collapse") ? "toggle" : $this.data();
	$this[$(target).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
	$(target).collapse(option);
});
/**
 * Add dropdown menus to nearly anything with this simple plugin, including the navbar, tabs,
 * and pills.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Dropdown
 * @requires        jQuery
 */

var toggle = "[data-toggle='dropdown']", Dropdown = function (element) {
	var $el = $(element).on("click.dropdown.data-api", this.toggle);
	$("html").on("click.dropdown.data-api", function () {
		$el.parent().removeClass("open");
	});
};

function getParent ($this) {
	var selector = $this.attr("data-target"), $parent;

	if (!selector) {
		selector = $this.attr("href");
		selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""); //strip for ie7
	}

	$parent = $(selector);

	if (!$parent.length) {
		($parent = $this.parent());
	}

	return $parent;
}

function clearMenus () {
	$(toggle).each(function () {
		getParent($(this)).removeClass("open");
	});
}

Dropdown.prototype = {

	constructor: Dropdown,
	toggle: function () {
		var $this = $(this),
				$parent,
				isActive;

		if ($this.is(".disabled, :disabled")) {
			return;
		}

		$parent = getParent($this);

		isActive = $parent.hasClass("open");

		clearMenus();

		if (!isActive) {
			$parent.toggleClass("open");
		}

		$this.focus();

		// Pass true if the menu is now open, false if it's been closed
		$parent.trigger("toggle.dropdown.data-api", [!isActive]);

		return false;
	},

	keydown: function (e) {
		var $this,
				$items,
				$parent,
				isActive,
				index;

		if (!/(38|40|27)/.test(e.keyCode)) {
			return;
		}

		$this = $(this);

		e.preventDefault();
		e.stopPropagation();

		if ($this.is(".disabled, :disabled")) {
			return;
		}

		$parent = getParent($this);

		isActive = $parent.hasClass("open");

		if (!isActive || (isActive && e.keyCode === 27)) {
			return $this.click();
		}

		$items = $("[role=menu] li:not(.divider):visible a", $parent);

		if (!$items.length) {
			return;
		}

		index = $items.index($items.filter(":focus"));

		// up
		if (e.keyCode === 38 && index > 0) {
			index--;
		}
		// down
		if (e.keyCode === 40 && index < $items.length - 1) {
			index++;
		}
		if (!~index) {
			index = 0;
		}

		$items.eq(index).focus();
	}

};

/**
 * Dropdown plugin definition
 *
 * @param option
 */

$.fn.dropdown = function (option) {
	return this.each(function () {
		var $this = $(this), data = $this.data("dropdown");
		if (!data) {
			$this.data("dropdown", (data = new Dropdown(this)));
		}
		if (typeof option === "string") {
			data[option].call($this);
		}
	});
};

$.fn.dropdown.Constructor = Dropdown;

/**
 * Apply to standard dropdown elements
 */
$(document).on("click.dropdown.data-api touchstart.dropdown.data-api", clearMenus).on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function (e) {
	e.stopPropagation();
}).on("touchstart.dropdown.data-api", ".dropdown-menu", function (e) {
	e.stopPropagation();
}).on("click.dropdown.data-api touchstart.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", toggle + ", [role=menu]", Dropdown.prototype.keydown);
/**
 * Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and
 * smart defaults.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Modal
 * @requires        jQuery
 */

var Modal = function (element, options) {
	this.options = options;
	this.$element = $(element).delegate("[data-dismiss='modal']", "click.dismiss.modal", $.proxy(this.hide, this));
	if (this.options.remote) {
		this.$element.find(".modal-body").load(this.options.remote);
	}
};

Modal.prototype = {

	constructor: Modal,

	toggle: function () {
		return this[!this.isShown ? "show" : "hide"]();
	},

	show: function () {
		var that = this,
				e = $.Event("show"),
				scrollable = that.$element.find(".modal-scrollable");

		this.$element.trigger(e);

		if (this.isShown || e.isDefaultPrevented()) {
			return;
		}

		this.isShown = true;

		this.escape();

		this.backdrop(function () {
			var transition = $.support.transition && that.$element.hasClass("fade");

			if (!that.$element.parent().length) {
				that.$element.appendTo(document.body); //don"t move modals dom position
			}

			that.$element.removeClass("hide");

			if (scrollable.length && !scrollable.hasClass("scrollbar-content")) {
				scrollable.tinyscrollbar();
			}

			if (transition) {
				void that.$element[0].offsetWidth; // force reflow
			}

			that.$element.addClass("in").attr("aria-hidden", false);

			that.enforceFocus();

			if (transition) {
				that.$element.one($.support.transition.end, function () {
					that.$element.focus().trigger("shown");
				});
			} else {
				that.$element.focus().trigger("shown");
			}

		});
	},

	hide: function (e) {
		var that = this;

		if (e) {
			e.preventDefault();
		}

		e = $.Event("hide");

		this.$element.trigger(e);

		if (!this.isShown || e.isDefaultPrevented()) {
			return;
		}

		this.isShown = false;

		this.escape();

		$(document).off("focusin.modal");

		this.$element.removeClass("in").attr("aria-hidden", true);

		if ($.support.transition && this.$element.hasClass("fade")) {
			this.hideWithTransition();
		} else {
			this.hideModal();
		}
	},

	enforceFocus: function () {
		var that = this;
		$(document).on("focusin.modal", function (e) {
			if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
				that.$element.focus();
			}
		});
	},

	escape: function () {
		var that = this;
		if (this.isShown && this.options.keyboard) {
			$("body").on("keyup.dismiss.modal", function (e) {
				if (e.which === 27) {
					that.hide();
				}
			});
		} else if (!this.isShown) {
			$("body").off("keyup.dismiss.modal");
		}
	},

	hideWithTransition: function () {
		var that = this,
				timeout = setTimeout(function () {
					that.$element.off($.support.transition.end);
					that.hideModal();
				}, 500);

		this.$element.one($.support.transition.end, function () {
			clearTimeout(timeout);
			that.hideModal();
		});
	},

	hideModal: function (that) {
		this.$element.addClass("hide").trigger("hidden");

		this.backdrop();
	},

	removeBackdrop: function () {
		this.$backdrop.remove();
		this.$backdrop = null;
	},

	backdrop: function (callback) {
		var that = this,
				animate = this.$element.hasClass("fade") ? "fade" : "";

		if (this.isShown && this.options.backdrop) {
			var doAnimate = $.support.transition && animate;

			this.$backdrop = $("<div class='modal-backdrop " + animate + "' />").appendTo(document.body);

			this.$backdrop.click(this.options.backdrop === "static" ? $.proxy(this.$element[0].focus, this.$element[0]) : $.proxy(this.hide, this));

			if (doAnimate) {
				void this.$backdrop[0].offsetWidth; // force reflow
			}

			this.$backdrop.addClass("in");

			if (doAnimate) {
				this.$backdrop.one($.support.transition.end, callback);
			} else {
				callback();
			}

		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");

			if ($.support.transition && this.$element.hasClass("fade")) {
				this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this));
			} else {
				this.removeBackdrop();
			}

		} else if (callback) {
			callback();
		}
	}
};

/**
 * Modal plugin definition
 *
 * @param option
 */

$.fn.modal = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("modal"),
				options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option === "object" && option);
		if (!data) {
			$this.data("modal", (data = new Modal(this, options)));
		}
		if (typeof option === "string") {
			data[option]();
		} else if (options.show) {
			data.show();
		}
	});
};

$.fn.modal.defaults = {
	backdrop: true,
	keyboard: true,
	show: true
};

$.fn.modal.Constructor = Modal;

/**
 * Modal data-API
 */

$(document).on("click.modal.data-api", "[data-toggle='modal']", function (e) {
	var $this = $(this),
			href = $this.attr("href"),
			$target = $($this.attr("data-target") || (href && href.replace(/.*(?=#[^\s]+$)/, ""))), //strip for ie7
			option = $target.data("modal") ? "toggle" : $.extend({
		remote: !/#/.test(href) && href
	}, $target.data(), $this.data());

	e.preventDefault();

	$target.modal(option).one("hide", function () {
		$this.focus();
	});
});
/**
 * Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated
 * version, which don"t rely on images, use CSS3 for animations, and data-attributes for local
 * title storage.
 *
 * TODO Would be nice if this.options.position could be detected automatically based on the target element"s position,
 * but maybe that would require too much DOM-scrubbing to determine accurately.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Tooltip
 * @requires        jQuery
 * @deprecated		Please use Tooltipster going forward.
 */

var Tooltip = function (element, options) {
	this.init("tooltip", element, options);
};

Tooltip.prototype = {

	constructor: Tooltip,

	init: function (type, element, options) {
		var eventIn,
				eventOut;

		this.type = type;
		this.$element = $(element);
		this.options = this.getOptions(options);
		this.enabled = true;

		if (this.options.trigger === "click") {
			this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
		} else if (this.options.trigger !== "manual") {
			eventIn = this.options.trigger === "hover" ? "mouseenter" : "focus";
			eventOut = this.options.trigger === "hover" ? "mouseleave" : "blur";
			this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
			this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
		}

		if (this.options.selector) {
			this._options = $.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			});
		} else {
			this.fixTitle();
		}
	},

	getOptions: function (options) {
		options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());

		if (options.delay && typeof options.delay === "number") {
			options.delay = {
				show: options.delay,
				hide: options.delay
			};
		}

		return options;
	},

	enter: function (e) {
		var self = $(e.currentTarget)[this.type](this._options).data(this.type);

		if (!self.options.delay || !self.options.delay.show) {
			return self.show();
		}

		clearTimeout(this.timeout);
		self.hoverState = "in";
		this.timeout = setTimeout(function () {
			if (self.hoverState === "in") {
				self.show();
			}
		}, self.options.delay.show);

		return true;
	},

	leave: function (e) {
		var self = $(e.currentTarget)[this.type](this._options).data(this.type);

		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		if (!self.options.delay || !self.options.delay.hide) {
			return self.hide();
		}

		self.hoverState = "out";
		this.timeout = setTimeout(function () {
			if (self.hoverState === "out") {
				self.hide();
			}
		}, self.options.delay.hide);

		return true;
	},

	/**
	 * Reveals an element"s tooltip.
	 */
	show: function () {
		var $tip,
				inside,
				pos,
				actualWidth,
				actualHeight,
				placement,
				position,
				tp,
				container;

		if (this.hasContent() && this.enabled) {
			$tip = this.tip();
			this.setContent();

			if (this.options.animation) {
				$tip.addClass("fade");
			}

			if (typeof this.options.placement === "function") {
				placement = this.options.placement.call(this, $tip[0], this.$element[0]);
			} else {
				placement = this.options.placement;
			}

			if (typeof this.options.position === "function") {
				position = this.options.position();
			} else if (typeof this.options.position === "string" && $.inArray(this.options.position, [
					"static",
					"relative",
					"absolute",
					"fixed",
					"inherit"]) >= 0) {
				position = this.options.position;
			} else {
				position = "static";
			}

			inside = /in/.test(placement);

			$tip.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).insertAfter(this.$element);

			container = this.options.container === "" ? "" : $(this.options.container);
			if (container.length) {
				$tip.appendTo(container);
			} else {
				$tip.insertAfter(this.$element);
			}

			pos = this.getPosition(inside);

			if (position === "fixed") {
				$tip.addClass("tooltip-fixed");
			}

			actualWidth = $tip[0].offsetWidth;
			actualHeight = $tip[0].offsetHeight;

			switch (inside ? placement.split(" ")[1] : placement) {
				case "bottom":
					tp = {
						top: pos.top + pos.height,
						left: pos.left + pos.width / 2 - actualWidth / 2
					};
					break;
				case "top":
					tp = {
						top: pos.top - actualHeight,
						left: pos.left + pos.width / 2 - actualWidth / 2
					};
					break;
				case "left":
					tp = {
						top: pos.top + pos.height / 2 - actualHeight / 2,
						left: pos.left - actualWidth
					};
					break;
				case "right":
					tp = {
						top: pos.top + pos.height / 2 - actualHeight / 2,
						left: pos.left + pos.width
					};
					break;
			}

			$tip.offset(tp).addClass(placement).addClass("in");
		}
	},

	setContent: function () {
		var $tip = this.tip(),
				title = this.getTitle();

		$tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
		$tip.removeClass("fade in top bottom left right");
	},

	/**
	 * Hides an element"s tooltip.
	 */
	hide: function () {
		var $tip = this.tip();

		$tip.removeClass("in");

		function removeWithAnimation () {
			var timeout = setTimeout(function () {
				$tip.off($.support.transition.end).detach();
			}, 500);

			$tip.one($.support.transition.end, function () {
				clearTimeout(timeout);
				$tip.detach();
			});
		}

		if ($.support.transition && this.$tip.hasClass("fade")) {
			removeWithAnimation();
		} else {
			$tip.detach();
		}

		return this;
	},

	fixTitle: function () {
		var $e = this.$element;
		if ($e.attr("title") || typeof ($e.attr("data-original-title")) !== "string") {
			$e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
		}
	},

	hasContent: function () {
		return this.getTitle();
	},

	getPosition: function (inside) {
		return $.extend({}, (inside ? {
			top: 0,
			left: 0
		} : this.$element.offset()), {
			width: this.$element[0].offsetWidth,
			height: this.$element[0].offsetHeight
		});
	},

	getTitle: function () {
		var title,
				$e = this.$element,
				o = this.options;

		title = $e.attr("data-original-title") || (typeof o.title === "function" ? o.title.call($e[0]) : o.title);

		return title;
	},

	tip: function () {
		var t;
		if (this.$tip) {
			t = this.$tip;
		} else {
			t = $(this.options.template);
			this.$tip = t;
		}
		return t;
	},

	validate: function () {
		if (!this.$element[0].parentNode) {
			this.hide();
			this.$element = null;
			this.options = null;
		}
	},

	enable: function () {
		this.enabled = true;
	},

	disable: function () {
		this.enabled = false;
	},

	toggleEnabled: function () {
		this.enabled = !this.enabled;
	},

	/**
	 * Toggles an element"s tooltip.
	 */
	toggle: function (e) {
		var self = (e) ? $(e.currentTarget)[this.type](this._options).data(this.type) : this;
		if (self.tip().hasClass("in")) {
			self.hide();
		} else {
			self.show();
		}
	},

	/**
	 * Hides and destroys an element"s tooltip.
	 */
	destroy: function () {
		this.hide().$element.off("." + this.type).removeData(this.type);
	}

};

/**
 * Tooltip plugin definition. Options can be passed via data attributes or JavaScript.
 * For data attributes, append the option name to dahaveta-, as in data-animation="".
 *
 * @param option
 */
$.fn.tooltip = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("tooltip"),
				options = typeof option === "object" && option;
		if (!data) {
			$this.data("tooltip", (data = new Tooltip(this, options)));
		}
		if (typeof option === "string") {
			data[option]();
		}
	});
};

$.fn.tooltip.Constructor = Tooltip;

$.fn.tooltip.defaults = {
	animation: true,
	placement: "top",
	position: "static",
	selector: false,
	template: "<div class='tooltip'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>",
	trigger: "hover",
	title: "",
	delay: 0,
	html: false,
	container: "body"
};
var BlzPassword = function($input, options) {
	if (!$input) {
		return;
	}

	if (window.DOMTokenList && !window.DOMTokenList.prototype.forEach) {
		window.DOMTokenList.prototype.forEach = function (callback, thisArg) {
			thisArg = thisArg || window;
			for (var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}

	if (document.msCapsLockWarningOff === false) {
		document.msCapsLockWarningOff = true;
	}

	this.visibilityToggle = options && options.visibilityToggle ? options.visibilityToggle : true;
	this.strengthIndicator = options && options.strengthIndicator ? options.strengthIndicator : false;
	this.passwordStrengthValues = this.strengthIndicator ? options.strengthValues : [];
	this.passwordStrengthText = this.strengthIndicator ? options.strengthText : {};
	this.passwordStrengthDefaultLabel = this.strengthIndicator ? options.strengthDefaultText : "";
	this.tabIndex = options && options.tabIndex ? options.tabIndex : 0;
	this.capsLockOn = false;
	this.showPassword = false;


	var viewPasswordButton;

	// see if view password button already exists if visibilityToggle is true
	if (this.visibilityToggle) {
		viewPasswordButton = this.findSibling($input, ".view-password-button");
	}

	var wrapper = document.createElement("div");
	wrapper.classList.add("blz-password-wrapper");
	$input.parentNode.insertBefore(wrapper, $input);
	wrapper.appendChild($input);

	if (this.visibilityToggle && viewPasswordButton) {
		wrapper.appendChild(viewPasswordButton);
	}

	var capsLockSpan = document.createElement("span");
	capsLockSpan.classList.add("caps-lock-indicator");
	capsLockSpan.classList.add("hide");
	var capsLockIcon = document.createElement("i");
	capsLockIcon.classList.add("fas");
	capsLockIcon.classList.add("fa-arrow-alt-square-up");
	capsLockSpan.appendChild(capsLockIcon);

	if (this.visibilityToggle) {
		// check if button wrapper exists before creating it
		if (!viewPasswordButton) {
			viewPasswordButton = document.createElement("span");
			viewPasswordButton.classList.add("view-password-button");
			viewPasswordButton.setAttribute("tabIndex", this.tabIndex.toString());
			viewPasswordButton.setAttribute("aria-live", "assertive");
			viewPasswordButton.setAttribute("role", "button");
		}

		var viewPasswordIcon = document.createElement("i");
		viewPasswordIcon.classList.add("show-password");
		viewPasswordIcon.classList.add("fas");
		viewPasswordIcon.classList.add("fa-eye");
		var hidePasswordIcon = document.createElement("i");
		hidePasswordIcon.classList.add("hide-password");
		hidePasswordIcon.classList.add("hide");
		hidePasswordIcon.classList.add("fas");
		hidePasswordIcon.classList.add("fa-eye-slash");

		// add aria labels
		var showPassAriaText = $input.getAttribute("data-password-show-aria");
		var hidePassAriaText = $input.getAttribute("data-password-hide-aria");

		if (showPassAriaText) {
			viewPasswordIcon.setAttribute("aria-label", showPassAriaText);
		}

		if (hidePassAriaText) {
			hidePasswordIcon.setAttribute("aria-label", hidePassAriaText);
		}


		// append elements
		viewPasswordButton.appendChild(viewPasswordIcon);
		viewPasswordButton.appendChild(hidePasswordIcon);
		wrapper.appendChild(viewPasswordButton);
	}
	wrapper.appendChild(capsLockSpan);

	this.$blzPassword = wrapper;
};

BlzPassword.prototype = {
	init: function() {
		if (!this.$blzPassword) {
			return;
		}

		var input = this.$blzPassword.querySelector("input");
		input.addEventListener("keydown", this.capsLockListener.bind(this));
		input.addEventListener("keyup", this.capsLockListener.bind(this));
		input.addEventListener("click", this.capsLockListener.bind(this));
		input.addEventListener("focus", this.capsLockListener.bind(this));
		input.addEventListener("blur", this.clearIndicators.bind(this));
		var viewPasswordButton = this.$blzPassword.querySelector(".view-password-button");
		viewPasswordButton.addEventListener("click", this.togglePassword.bind(this));
		viewPasswordButton.addEventListener("keydown", this.handlePasswordButton.bind(this));
		if (this.strengthIndicator === true) {
			this.createStrengthIndicator();
		}
	},
	createStrengthIndicator: function() {
		var progressBar = document.createElement("progress");
		progressBar.classList.add("password-strength-meter");
		progressBar.setAttribute("max", "100");
		progressBar.setAttribute("value", "0");
		var strengthLabel = document.createElement("div");
		strengthLabel.classList.add("password-strength-status");
		this.$blzPassword.appendChild(progressBar);
		this.$blzPassword.appendChild(strengthLabel);
		this.setPasswordStrengthText(this.passwordStrengthDefaultLabel);
	},
	capsLockListener: function(e) {
		if (e.type === "focus") {
			e.target.click();
			return;
		}

		if (e.getModifierState("CapsLock")) {
			if (!this.capsLockOn) {
				this.setCapsLock(true);
			}
		} else if (this.capsLockOn) {
			this.setCapsLock(false);
		}
	},
	setCapsLock: function(value) {
		var capsLockIndicator = this.$blzPassword.querySelector(".caps-lock-indicator");
		if (value === true) {
			capsLockIndicator.classList.remove("hide");
		} else {
			capsLockIndicator.classList.add("hide");
		}

		this.capsLockOn = value;
	},
	togglePassword: function() {
		if (this.showPassword === true) {
			this.displayPassword(false);
		} else {
			this.displayPassword(true);
		}
	},
	handlePasswordButton: function(e) {
		if (e.type === "keydown" && e.keyCode !== 13) {
			return false;
		}

		this.togglePassword();
		return false;
	},
	displayPassword: function(value) {
		if (value === true) {
			this.$blzPassword.querySelector("input").setAttribute("type", "text");
			this.$blzPassword.querySelector(".show-password").classList.add("hide");
			this.$blzPassword.querySelector(".hide-password").classList.remove("hide");
			this.$blzPassword.querySelector(".view-password-button").setAttribute("aria-pressed", "true");
		} else {
			this.$blzPassword.querySelector("input").setAttribute("type", "password");
			this.$blzPassword.querySelector(".hide-password").classList.add("hide");
			this.$blzPassword.querySelector(".show-password").classList.remove("hide");
			this.$blzPassword.querySelector(".view-password-button").setAttribute("aria-pressed", "false");
		}

		this.showPassword = value;
	},
	clearIndicators: function(e) {
		if (!e.target.classList.contains("view-password-button") &&
			!e.target.classList.contains("caps-lock-indicator")) {
			this.setCapsLock(false);
		}
	},
	findSibling: function(node, sibling) {
		if (!node || !sibling) {
			return;
		}

		var elem = node.nextElementSibling;
		while (elem) {
			if (elem.matches(sibling)) {
				return elem;
			}
			elem = elem.nextElementSibling;
		}
	},
	computePasswordStrength: function(passwordStrengthValueIdx) {
		var value = this.$blzPassword.querySelector("input").value;
		if (value !== "" && passwordStrengthValueIdx !== null && passwordStrengthValueIdx !== "") {
			var sectionSize = 100 / this.passwordStrengthValues.length;
			if (passwordStrengthValueIdx >= this.passwordStrengthValues.length) {
				passwordStrengthValueIdx = this.passwordStrengthValues.length - 1;
			}
			var passwordStrengthValue = this.passwordStrengthValues[passwordStrengthValueIdx];
			var passwordStrengthText = this.passwordStrengthText[passwordStrengthValue] || passwordStrengthValue;
			this.setPasswordStrengthText(passwordStrengthText, passwordStrengthValue);
			document.querySelector(".password-strength-meter").value = (passwordStrengthValueIdx + 1) * sectionSize;
			return;
		}
		this.setPasswordStrengthText(this.passwordStrengthDefaultLabel, "");

		document.querySelector(".password-strength-meter").value = 0;
	},
	setPasswordStrengthText: function(passwordStrengthText, passwordStrengthValue) {
		document.querySelector(".password-strength-status").innerHTML = passwordStrengthText;
		var strengthMeter = document.querySelector(".password-strength-meter");
		strengthMeter.classList.forEach(function(value) {
			if (value !== "password-strength-meter") {
				strengthMeter.classList.remove(value);
			}
		});
		if (passwordStrengthValue) {
			strengthMeter.classList.add("strength-" + passwordStrengthValue.toLowerCase().replace(" ", "-"));
		}
	}
};
/**
 * Add small overlays of content, like those on the iPad, to any element for housing
 * secondary information.
 *
 * Note: Popover extends Tooltip
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Popover
 * @requires        jQuery, Tooltip
 */

var Popover = function (element, options) {
	this.init("popover", element, options);
};

Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

	constructor: Popover,
	setContent: function () {
		var $tip = this.tip(),
				title = this.getTitle(),
				content = this.getContent();

		$tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
		$tip.find(".popover-content")[this.options.html ? "html" : "text"](content);

		$tip.removeClass("fade top bottom left right in");
	},

	hasContent: function () {
		return this.getTitle() || this.getContent();
	},

	getContent: function () {
		var content,
				$e = this.$element,
				o = this.options;

		content = $e.attr("data-content") || (typeof o.content === "function" ? o.content.call($e[0]) : o.content);

		return content;
	},

	tip: function () {
		if (!this.$tip) {
			this.$tip = $(this.options.template);
		}
		return this.$tip;
	},

	destroy: function () {
		this.hide().$element.off("." + this.type).removeData(this.type);
	}

});

/**
 * Popover plugin definition
 *
 * @param option
 */

$.fn.popover = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("popover"),
				options = typeof option === "object" && option;
		if (!data) {
			$this.data("popover", (data = new Popover(this, options)));
		}
		if (typeof option === "string") {
			data[option]();
		}
	});
};

$.fn.popover.Constructor = Popover;

$.fn.popover.defaults = $.extend({}, $.fn.tooltip.defaults, {
	placement: "right",
	trigger: "click",
	content: "",
	template: "<div class='popover'><div class='arrow'></div><div class='popover-inner'><h3 class='popover-title'></h3><div class='popover-content'></div></div></div>"
});
/**
 * CSS polyfill for radio buttons to enable full styling of radio elements.
 *
 * @class           Radio
 * @requires        jQuery
 */

var Radio = function (element) {
	this.$element = $(element);
};

Radio.prototype.setState = function (state) {
	var $el = this.$element;

	if ($el.attr(state) === state) {
		$el.removeAttr(state);
		$el.parent(".radio-label").removeClass(state);
	} else {
		$el.attr(state, state);
		$el.parent(".radio-label").addClass(state);
	}
};

Radio.prototype.toggle = function () {
	var $siblings = $("input[type=radio][name=\"" + this.$element.children().attr("name") + "\"]"),
			$parents = $siblings.parent(".radio-label"),
			i = $siblings.length - 1,
			$parent;

	if (i >= 0) {
		do {
			$parent = $($parents[i]);
			if ($siblings[i].checked) {
				$parent.addClass("checked");
			} else {
				$parent.removeClass("checked");
			}
			if ($siblings[i].disabled) {
				$parent.addClass("disabled");
			} else {
				$parent.removeClass("disabled");
			}
		} while (i--);
	}
};

Radio.prototype.focus = function () {
	this.$element.addClass("focus");
};

Radio.prototype.blur = function () {
	this.$element.removeClass("focus");
};

/**
 * Radio plugin definition
 *
 * @param option
 */
$.fn.radio = function (option) {
	return this.each(function () {
		var $this = $(this),
				data;
		$this.data("radio", (data = new Radio(this)));
		if (option === "toggle") {
			data.toggle();
		} else if (option === "focus") {
			data.focus();
		} else if (option === "blur") {
			data.blur();
		} else if (option) {
			data.setState(option);
		}
	});
};

$.fn.radio.Constructor = Radio;

/**
 * Radio data-API
 */
$(function () {
	$("body").on("change.radio.data-api", "input[type=radio]:not(.css-input)",function (event) {
		$(event.currentTarget).parent(".radio-label").radio("toggle");
	}).on("focus.radio.data-api", "input[type=radio]:not(.css-input)",function (event) {
		$(event.currentTarget).parent(".radio-label").radio("focus");
	}).on("blur.radio.data-api", "input[type=radio]:not(.css-input)", function (event) {
		$(event.currentTarget).parent(".radio-label").radio("blur");
	});

	// moved from "load" event
	$("input[type=radio]:not(.css-input)").each(function() {
		$(this).parent(".radio-label").radio("toggle");
	});

});
/**
 * Bootstrap Multiselect v0.9.8 (https://github.com/davidstutz/bootstrap-multiselect)
 *
 * Copyright 2012 - 2014 David Stutz
 *
 * Dual licensed under the BSD-3-Clause and the Apache License, Version 2.0.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
!function($) {

    "use strict";// jshint;

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {

            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var listOfSelectedItems = allBindingsAccessor().selectedOptions;
                var config = ko.utils.unwrapObservable(valueAccessor());

                $(element).multiselect(config);

                if (isObservableArray(listOfSelectedItems)) {

                    // Set the initial selection state on the multiselect list.
                    $(element).multiselect('select', ko.utils.unwrapObservable(listOfSelectedItems));

                    // Subscribe to the selectedOptions: ko.observableArray
                    listOfSelectedItems.subscribe(function (changes) {
                        var addedArray = [], deletedArray = [];
                        forEach(changes, function (change) {
                            switch (change.status) {
                                case 'added':
                                    addedArray.push(change.value);
                                    break;
                                case 'deleted':
                                    deletedArray.push(change.value);
                                    break;
                            }
                        });

                        if (addedArray.length > 0) {
                            $(element).multiselect('select', addedArray);
                        }

                        if (deletedArray.length > 0) {
                            $(element).multiselect('deselect', deletedArray);
                        }
                    }, null, "arrayChange");
                }
            },

            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var listOfItems = allBindingsAccessor().options,
                    ms = $(element).data('multiselect'),
                    config = ko.utils.unwrapObservable(valueAccessor());

                if (isObservableArray(listOfItems)) {
                    // Subscribe to the options: ko.observableArray incase it changes later
                    listOfItems.subscribe(function (theArray) {
                        $(element).multiselect('rebuild');
                    });
                }

                if (!ms) {
                    $(element).multiselect(config);
                }
                else {
                    ms.updateOriginalOptions();
                }
            }
        };
    }

    function isObservableArray(obj) {
        return ko.isObservable(obj) && !(obj.destroyAll === undefined);
    }

    function forEach(array, callback) {
        for (var index = 0; index < array.length; ++index) {
            callback(array[index]);
        }
    }

    /**
     * Constructor to create a new multiselect using the given select.
     *
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.$select = $(select);
        this.options = this.mergeOptions($.extend({}, options, this.$select.data()));

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
        this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
        this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);

        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();

        this.updateButtonText();
        this.updateSelectAll();

        if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
            this.disable();
        }

        this.$select.hide().after(this.$container);
    };

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length
             * of 3 selected options.
             *
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText + ' <span class="arrow"></span>';
                }
                else if (options.length == $('option', $(select)).length) {
                    return this.allSelectedText + ' <span class="arrow"></span>';
                }
                else if (options.length > this.numberDisplayed) {
                    return options.length + ' ' + this.nSelectedText + ' <span class="arrow"></span>';
                }
                else {
                    var selected = '';
                    options.each(function() {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();

                        selected += label + ', ';
                    });

                    return selected.substr(0, selected.length - 2) + ' <span class="arrow"></span>';
                }
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             *
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else {
                    var selected = '';
                    options.each(function () {
                        selected += $(this).text() + ', ';
                    });
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Create a label.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            label: function(element){
                return $(element).attr('label') || $(element).html();
            },
            /**
             * Triggered on change of the multiselect.
             *
             * Not triggered when selecting/deselecting options manually.
             *
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange : function(option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShow: function(event) {

            },
            /**
             * Triggered when the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHide: function(event) {

            },
            /**
             * Triggered after the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShown: function(event) {

            },
            /**
             * Triggered after the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHidden: function(event) {

            },
            buttonClass: 'select-box',
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group btn-group-multiselect" />',
            dropRight: false,
            selectedClass: 'active',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            checkboxName: false,
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',//
            selectAllValue: 'multiselect-all',
            selectAllName: false,
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            enableClickableOptGroups: false,
            filterPlaceholder: 'Search',//
            filterBehavior: 'text', // possible options: 'text', 'value', 'both'
            includeFilterClearBtn: true,
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected', // Placeholder text
            nSelectedText: 'selected',
            allSelectedText: 'All selected',
            numberDisplayed: 3,
            disableIfEmpty: false,
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><input class="form-control multiselect-search" type="text"/></div></li>',
                filterClearBtn: '<button class="multiselect-clear-filter" type="button"><i class="icon-remove"></i></button>',
                li: '<li class="option"><a href="javascript:void(0);"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item multiselect-group"><label class="multiselect-group"></label></li>'
            }
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function() {
            this.$container = $(this.options.buttonContainer);
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
            this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function() {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);

            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            }
            else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width' : this.options.buttonWidth
                });
                this.$container.css({
                    'width': this.options.buttonWidth
                });
            }

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function() {

            // Build ul.
            this.$ul = $(this.options.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }

            this.$container.append(this.$ul);
        },

        /**
         * Select all options from first to checked one
         * @param $target
         */
        selectMultiOptions: function($target) {
            var checked = $target.prop('checked') || false;

            if (checked) {

                var prev = $target.parents('li:last')
                    .siblings('li[class="active"]:first');

                var currentIdx = $target.parents('li')
                    .index();
                var prevIdx = prev.index();

                if (currentIdx > prevIdx) {
                    $target.parents("li:last").prevUntil(prev).each(
                        function() {
                            $(this).find("input:first").prop("checked", true)
                                .trigger("change");
                        }
                    );
                }
                else {
                    $target.parents("li:last").nextUntil(prev).each(
                        function() {
                            $(this).find("input:first").prop("checked", true)
                                .trigger("change");
                        }
                    );
                }
            }
        },

        /**
         * Build the dropdown options and binds all nessecary events.
         *
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function() {

            this.$select.children().each($.proxy(function(index, element) {

                var $element = $(element);
                // Support optgroups and options without a group simultaneously.
                var tag = $element.prop('tagName')
                    .toLowerCase();

                if ($element.prop('value') === this.options.selectAllValue) {
                    return;
                }

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                }
                else if (tag === 'option') {

                    if ($element.data('role') === 'divider') {
                        this.createDivider();
                    }
                    else {
                        this.createOptionValue(element);
                    }

                }

                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $('li input', this.$ul).on('change', $.proxy(function(event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.closest('li')
                            .addClass(this.options.selectedClass);
                    }
                    else {
                        $target.closest('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {
                    if (checked) {
                        this.selectAll();
                    }
                    else {
                        this.deselectAll();
                    }
                }

                if(!isSelectAllOption){
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                        }
                        else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).closest('li').removeClass(this.options.selectedClass);
                            }

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                        }

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.closest("a").css("outline", "");
                        }
                    }
                    else {
                        // Unselect option.
                        $option.prop('selected', false);
                    }
                }

                this.$select.change();

                this.updateButtonText();
                this.updateSelectAll();

                this.options.onChange($option, checked);

                if(this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('li a', this.$ul).on('touchstart click', $.proxy(function(event) {
                event.stopPropagation();
                event.preventDefault();

                var $target = $(event.target);
                var $checkbox = $target.prop("checked", !$target.prop("checked")).find("input:first");
                $checkbox.prop("checked", !$checkbox.prop("checked"));
                $checkbox.change();


                if (event.shiftKey) {

                    var $checkbox = $target.prop("checked", true).find("input:first");
                    $checkbox.prop("checked", true);
                    $checkbox.change();

                    this.selectMultiOptions($target);
                }

                $target.blur();
            }, this));




            // Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
                }

                if (event.keyCode === 9 && this.$container.hasClass('open')) {
                    this.$button.click();
                }
                else {
                    var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

                    if (!$items.length) {
                        return;
                    }

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                    }
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                    }
                    else if (!~index) {
                        index = 0;
                    }

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('label').prop("checked", true).find("input:first");

                        if(event.shiftKey) {
                            $checkbox.prop("checked", true);
                            this.selectMultiOptions($current.find('label'));
                        } else {
                            $checkbox.prop("checked", !$checkbox.prop("checked"));
                        }
                        $checkbox.change();
                    }

                    event.stopPropagation();
                    event.preventDefault();
                }
            }, this));

            if(this.options.enableClickableOptGroups && this.options.multiple) {
                $('li.multiselect-group', this.$ul).on('click', $.proxy(function(event) {
                    event.stopPropagation();

                    var group = $(event.target).parent();

                    // Search all option in optgroup
                    var $options = group.nextUntil('li.multiselect-group');

                    // check or uncheck items
                    var allChecked = true;
                    var optionInputs = $options.find('input');
                    optionInputs.each(function() {
                        allChecked = allChecked && $(this).prop('checked');
                    });

                    optionInputs.prop('checked', !allChecked).trigger('change');
                }, this));
            }
        },

        /**
         * Create an option using the given select option.
         *
         * @param {jQuery} element
         */
        createOptionValue: function(element) {
            var $element = $(element);
            if ($element.is(':selected')) {
                $element.prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.label(element);
            var value = $element.val();
            var inputType = this.options.multiple ? "checkbox" : "radio";

            var $li = $(this.options.templates.li);
            var $label = $('label', $li);
            $label.addClass(inputType).addClass("checkbox-label");

            var $checkbox = $('<input/>').attr('type', inputType);

            if (this.options.checkboxName) {
                $checkbox.attr('name', this.options.checkboxName);
            }
            $label.append($checkbox);

            var selected = $element.prop('selected') || false;
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
            }

            $label.append(" " + label);
            $label.attr('title', $element.attr('title'));

            this.$ul.append($li);

            if ($element.is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .closest('a')
                    .attr("tabindex", "-1")
                    .closest('li')
                    .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.closest('li')
                    .addClass(this.options.selectedClass);
            }
        },

        /**
         * Creates a divider using the given select option.
         *
         * @param {jQuery} element
         */
        createDivider: function(element) {
            var $divider = $(this.options.templates.divider);
            this.$ul.append($divider);
        },

        /**
         * Creates an optgroup.
         *
         * @param {jQuery} group
         */
        createOptgroup: function(group) {
            var groupName = $(group).prop('label');

            // Add a header for the group.
            var $li = $(this.options.templates.liGroup);
            $('label', $li).text(groupName);

            if (this.options.enableClickableOptGroups) {
                $li.addClass('multiselect-group-clickable');
            }

            this.$ul.append($li);

            if ($(group).is(':disabled')) {
                $li.addClass('disabled');
            }

            // Add the options of the group.
            $('option', group).each($.proxy(function(index, element) {
                this.createOptionValue(element);
            }, this));
        },

        /**
         * Build the selct all.
         *
         * Checks if a select all has already been created.
         */
        buildSelectAll: function() {
            var alreadyHasSelectAll = this.hasSelectAll();

            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
                && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {

                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$ul.prepend($(this.options.templates.divider));
                }

                var $li = $(this.options.templates.li);
                $('label', $li).addClass("checkbox-label");

                if (this.options.selectAllName) {
                    $('label', $li).append('<input type="checkbox" name="' + this.options.selectAllName + '" />');
                }
                else {
                    $('label', $li).append('<input type="checkbox" />');
                }

                var $checkbox = $('input', $li);
                $checkbox.val(this.options.selectAllValue);

                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');

                $('label', $li).append(" " + this.options.selectAllText);

                this.$ul.prepend($li);

                $checkbox.prop('checked', false);
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function() {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);

                    // Adds optional filter clear button
                    if(this.options.includeFilterClearBtn){
                        var clearBtn = $(this.options.templates.filterClearBtn);
                        clearBtn.on('click', $.proxy(function(event){
                            clearTimeout(this.searchTimeout);
                            this.$filter.find('.multiselect-search').val('');
                            this.$filter.find('.input-group').removeClass("filtered");
                            $('li', this.$ul).show().removeClass("filter-hidden");
                            this.updateSelectAll();
                        }, this));
                        this.$filter.find('.input-group').append(clearBtn);
                    }

                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function(event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function(event) {
                            // Cancel enter key default behaviour
                            if (event.which === 13) {
                                event.preventDefault();
                            }

                            if(event.keyCode === 38 || event.keyCode === 40){
                                var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");
                                if (!$items.length) {
                                    return;
                                }
                                var index = $items.index($items.filter(':focus'));
                                // Navigation up.
                                if (event.keyCode === 38 && index > 0) {
                                    index--;
                                }
                                // Navigate down.
                                else if (event.keyCode === 40 && index < $items.length - 1) {
                                    index++;
                                }
                                else if (!~index) {
                                    index = 0;
                                }
                                var $current = $items.eq(index);
                                $current.focus();
                            }

                            // This is useful to catch "keydown" events after the browser has updated the control.
                            clearTimeout(this.searchTimeout);

                            this.searchTimeout = this.asyncFunction($.proxy(function() {

                                if(event.target.value === ""){
                                    $(event.target).parent(".input-group").removeClass("filtered");
                                } else {
                                    $(event.target).parent(".input-group").addClass("filtered");

                                }
                                if (this.query !== event.target.value) {
                                    this.query = event.target.value;

                                    var currentGroup, currentGroupVisible;
                                    $.each($('li', this.$ul), $.proxy(function(index, element) {
                                        var value = $('input', element).val();
                                        var text = $('label', element).text();

                                        var filterCandidate = '';
                                        if ((this.options.filterBehavior === 'text')) {
                                            filterCandidate = text;
                                        }
                                        else if ((this.options.filterBehavior === 'value')) {
                                            filterCandidate = value;
                                        }
                                        else if (this.options.filterBehavior === 'both') {
                                            filterCandidate = text + '\n' + value;
                                        }

                                        if (value !== this.options.selectAllValue && text) {
                                            // By default lets assume that element is not
                                            // interesting for this search.
                                            var showElement = false;

                                            if (this.options.enableCaseInsensitiveFiltering && filterCandidate.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                                                showElement = true;
                                            }
                                            else if (filterCandidate.indexOf(this.query) > -1) {
                                                showElement = true;
                                            }

                                            // Toggle current element (group or group item) according to showElement boolean
                                            $(element).toggle(showElement).toggleClass('filter-hidden', !showElement);
                                            // Differentiate groups and group items
                                            if ($(this).hasClass('multiselect-group')) {
                                                // Remember group status
                                                currentGroup = element;
                                                currentGroupVisible = showElement;
                                            } else {
                                                // show group name when at least one of its items is visible
                                                if (showElement) $(currentGroup).show().removeClass('filter-hidden');
                                                // show all group items when group name satisfies filter
                                                if (!showElement && currentGroupVisible) $(element).show().removeClass('filter-hidden');
                                            }
                                        }
                                    }, this));
                                }

                                this.updateSelectAll();
                            }, this), 300, this);
                        }, this));
                }
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function() {
            this.$container.remove();
            this.$select.show();
            this.$select.data('multiselect', null);
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function() {
            $('option', this.$select).each($.proxy(function(index, element) {
                var $input = $('li input', this.$ul).filter(function() {
                    return $(this).val() === $(element).val();
                });

                if ($(element).is(':selected')) {
                    $input.prop('checked', true);

                    if (this.options.selectedClass) {
                        $input.closest('li')
                            .addClass(this.options.selectedClass);
                    }
                }
                else {
                    $input.prop('checked', false);

                    if (this.options.selectedClass) {
                        $input.closest('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                if ($(element).is(":disabled")) {
                    $input.attr('disabled', 'disabled')
                        .prop('disabled', true)
                        .closest('li')
                        .addClass('disabled');
                }
                else {
                    $input.prop('disabled', false)
                        .closest('li')
                        .removeClass('disabled');
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Select all options of the given values.
         *
         * If triggerOnChange is set to true, the on change event is triggered if
         * and only if one value is passed.
         *
         * @param {Array} selectValues
         * @param {Boolean} triggerOnChange
         */
        select: function(selectValues, triggerOnChange) {
            if(!$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (!this.options.multiple) {
                    this.deselectAll(false);
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);
            }

            this.updateButtonText();
            this.updateSelectAll();

            if (triggerOnChange && selectValues.length === 1) {
                this.options.onChange($option, true);
            }
        },

        /**
         * Clears all selected items.
         */
        clearSelection: function () {
            this.deselectAll(false);
            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Deselects all options of the given values.
         *
         * If triggerOnChange is set to true, the on change event is triggered, if
         * and only if one value is passed.
         *
         * @param {Array} deselectValues
         * @param {Boolean} triggerOnChange
         */
        deselect: function(deselectValues, triggerOnChange) {
            if(!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {
                var value = deselectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);
            }

            this.updateButtonText();
            this.updateSelectAll();

            if (triggerOnChange && deselectValues.length === 1) {
                this.options.onChange($option, false);
            }
        },

        /**
         * Selects all enabled & visible options.
         *
         * If justVisible is true or not specified, only visible options are selected.
         *
         * @param {Boolean} justVisible
         */
        selectAll: function (justVisible) {
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul);
            var visibleCheckboxes = allCheckboxes.filter(":visible");
            var allCheckboxesCount = allCheckboxes.length;
            var visibleCheckboxesCount = visibleCheckboxes.length;

            if(justVisible) {
                visibleCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
            }
            else {
                allCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass);
            }

            if (allCheckboxesCount === visibleCheckboxesCount || justVisible === false) {
                $("option:enabled", this.$select).prop('selected', true);
            }
            else {
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();

                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', true);
            }
        },

        /**
         * Deselects all options.
         *
         * If justVisible is true or not specified, only visible options are deselected.
         *
         * @param {Boolean} justVisible
         */
        deselectAll: function (justVisible) {
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;

            if(justVisible) {
                var visibleCheckboxes = $("li input[type='checkbox']:enabled", this.$ul).filter(":visible");
                visibleCheckboxes.prop('checked', false);

                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();

                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', false);

                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
                }
            } else {
                $("li input[type='checkbox']:enabled", this.$ul).prop('checked', false);
                $("option:enabled", this.$select).prop('selected', false);

                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
                }
            }
        },

        /**
         * Rebuild the plugin.
         *
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function() {
            this.$ul.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();

            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
                this.disable();
            }

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }
        },

        /**
         * The provided data will be used to build the dropdown.
         */
        dataprovider: function(dataprovider) {
            var optionDOM = "";
            var groupCounter = 0;
            var tags = $(''); // create empty jQuery array

            $.each(dataprovider, function (index, option) {
                var tag;
                if ($.isArray(option.children)) { // create optiongroup tag
                    groupCounter++;
                    tag = $('<optgroup/>').attr({
                        label: option.label || 'Group ' + groupCounter
                    });
                    forEach(option.children, function(subOption) { // add children option tags
                        tag.append($('<option/>').attr({
                            value: subOption.value,
                            label: subOption.label || subOption.value,
                            selected: !!subOption.selected
                        }));
                    });

                    optionDOM += '</optgroup>';
                }
                else { // create option tag
                    tag = $('<option/>').attr({
                        value: option.value,
                        label: option.label || option.value,
                        selected: !!option.selected
                    });
                }

                tags = tags.add(tag);
            });

            this.$select.empty().append(tags);
            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function() {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');
        },

        /**
         * Disable the multiselect.
         */
        disable: function() {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');
        },

        /**
         * Set the options.
         *
         * @param {Array} options
         */
        setOptions: function(options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         *
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function(options) {
            return $.extend(true, {}, this.defaults, options);
        },

        /**
         * Checks whether a select all checkbox is present.
         *
         * @returns {Boolean}
         */
        hasSelectAll: function() {
            return $('li.' + this.options.selectAllValue, this.$ul).length > 0;
        },

        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function() {
            if (this.hasSelectAll()) {
                var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
                var allBoxesLength = allBoxes.length;
                var checkedBoxesLength = allBoxes.filter(":checked").length;
                var selectAllLi  = $("li." + this.options.selectAllValue, this.$ul);
                var selectAllInput = selectAllLi.find("input");

                if(allBoxesLength === 0){
                    selectAllLi.hide();
                } else {
                    selectAllLi.show();
                }

                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllLi.addClass(this.options.selectedClass);
                }
                else {
                    selectAllInput.prop("checked", false);
                    selectAllLi.removeClass(this.options.selectedClass);
                }
                $('.checkbox-label', this.$container).checkbox("toggle");
            }
        },

        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function() {
            var options = this.getSelected();

            // First update the displayed button text.
            $('.multiselect', this.$container).html(this.options.buttonText(options, this.$select));
        },

        /**
         * Get all selected options.
         *
         * @returns {jQUery}
         */
        getSelected: function() {
            return $('option', this.$select).filter(":selected");
        },

        /**
         * Gets a select option by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function (value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
                }
            }
        },

        /**
         * Get the input (radio/checkbox) by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function (value) {

            var checkboxes = $('li input', this.$ul);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
                }
            }
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function(callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                callback.apply(self || window, args);
            }, timeout);
        }
    };

    $.fn.multiselect = function(option, parameter, extraOptions) {
        return this.each(function() {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;

            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter, extraOptions);

                if (option === 'destroy') {
                    $(this).data('multiselect', false);
                }
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;


    /*
        Apply Multiselect instantiation to select box with multiple attribute after page loading done
        except the select box doesn't have 'Select2' CSS class
     */
    $(function() {

        $("select[multiple=multiple]").each(function(index){
            var $select = $(this);

            if($select.hasClass("select2")) {
                return;
            }

            var multiselectOptions = {
                numberDisplayed: 3,
                disableIfEmpty: true
            };
            if($select.data("placeholder")){
                multiselectOptions = $.extend(multiselectOptions, {
                    nonSelectedText: $select.data("placeholder")
                });
            }
            if($select.data("selectall")){
                multiselectOptions = $.extend(multiselectOptions, {
                    includeSelectAllOption: true,
                    includeSelectAllIfMoreThan: 10
                });
                if($select.data("selectalltext")){
                    multiselectOptions = $.extend(multiselectOptions, {
                        selectAllText: $select.data("selectalltext")
                    });
                }
                if($select.data("selectalltext")){
                    multiselectOptions = $.extend(multiselectOptions, {
                        nSelectedText: $select.data("selectedtext")
                    });
                }
                if($select.data("selectalltext")){
                    multiselectOptions = $.extend(multiselectOptions, {
                        allSelectedText: $select.data("allselectedtext")
                    });
                }
            }
            if($select.data("filtering")){
                multiselectOptions = $.extend(multiselectOptions, {
                    enableFiltering: true,
                    enableCaseInsensitiveFiltering: true,
                    filterBehavior: "text"
                });
                if($select.data("filterplaceholder")){
                    multiselectOptions = $.extend(multiselectOptions, {
                        filterPlaceholder: $select.data("filterplaceholder")
                    });
                }
            }
            $select.multiselect(multiselectOptions);
        });
    });


}(window.jQuery);
/**
 * Tiny Scrollbar is a dynamic lightweight utility for scrolling content.
 *
 * @see             http://www.baijs.nl/tinyscrollbar/
 * @copyright       2012, Maarten Baijs
 * @license         http://opensource.org/licenses/MIT
 *
 * @class           Scrollbar
 * @requires        jQuery
 */
$.tiny = $.tiny || {};

/**
 * Options can be passed via data attributes or JavaScript. For data attributes, append the option
 * name to data-, as in data-axis="y" or data-size-thumb="22".
 *
 * TODO Replace callback here with custom event trigger.
 */
$.tiny.scrollbar = {
	options: {
		axis: "y", // vertical or horizontal scrollbar? (x || y).
		wheel: 40, // how many pixels must the mousewheel scroll at a time.
		scroll: true, // enable or disable the mousewheel.
		lockscroll: true, // return scrollwheel to browser if there is no more content.
		size: "auto", // set the size of the scrollbar to auto or a fixed number.
		sizeThumb: "auto", // set the size of the thumb to auto or a fixed number.
		sizeThumbMin: 50, // minimum width (for horizontal) or height (for vertical) of the scrollbar thumb
		createElements: true, // whether or not to create the necessary DOM elements for the viewport and scrollbar
		callback: null // callback function on slide event
	}
};

function Scrollbar (oWrapper, options) {
	var $body = $("body"), oSelf = this, oViewport, oContent, oScrollbar, oTrack, oThumb, sAxis = options.axis === "x", sDirection = sAxis ? "left" : "top", sSize = sAxis ? "Width" : "Height", iScroll = 0, iPosition = {
		start: 0,
		now: 0
	}, iMouse = {}, touchEvents = ("ontouchstart" in document.documentElement);

	function initialize () {

		if (options.createElements) {
			createElements();
		} else {
			cacheElements();
		}

		oSelf.update();
		setEvents();

		return oSelf;
	}

	/**
	 * Create the following HTML structure:
	 *
	 * <div class="scrollbar-content">
	 *     <div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>
	 *     <div class="viewport"><div class="overview"></div></div>
	 * </div>
	 */
	function createElements () {
		var doc = document, eScrollbarClone, eScrollbar = doc.createElement("div"), eTrack = doc.createElement("div"), eThumb = doc.createElement("div"), eEnd = doc.createElement("div"), eViewport = doc.createElement("div"), eOverview = doc.createElement("div");

		eScrollbar.className = "scrollbar";
		eTrack.className = "track";
		eThumb.className = "thumb";
		eEnd.className = "end";
		eViewport.className = "viewport";
		eOverview.className = "overview";

		eThumb.appendChild(eEnd);
		eTrack.appendChild(eThumb);
		eScrollbar.appendChild(eTrack);

		eViewport.appendChild(eOverview);

		// Namespace the CSS
		oWrapper.addClass("scrollbar-content");

		// Set the viewport size based on the wrapper dimensions
		eScrollbarClone = $(eScrollbar).clone(false).css({
			position: "absolute",
			left: "-9999em"
		}).appendTo(oWrapper);
		if (options.axis === "y") {
			eViewport.style.height = oWrapper.css("height");
			//eViewport.style.width = oWrapper.width() - eScrollbarClone.width() + "px";

			// Account for container padding in abs. pos.
			eScrollbar.style.top = oWrapper.css("paddingTop");

		} else {
			eViewport.style.height = oWrapper.height() - eScrollbarClone.height() + "px";
			//eViewport.style.width = oWrapper.css("width");

			eScrollbar.style.left = oWrapper.css("paddingLeft");

		}
		$(eScrollbarClone).remove();

		// Update the document structure
		oWrapper.children().wrapAll(eViewport);
		oWrapper.append(eScrollbar);

		cacheElements();
	}

	function cacheElements () {
		oViewport = {
			obj: $(".viewport", oWrapper)
		};
		oContent = {
			obj: $(".overview", oWrapper)
		};
		oScrollbar = {
			obj: $(".scrollbar", oWrapper)
		};
		oTrack = {
			obj: $(".track", oScrollbar.obj)
		};
		oThumb = {
			obj: $(".thumb", oScrollbar.obj)
		};
	}

	this.update = function (sScroll) {
		if (typeof oViewport.obj[0] === "undefined") {
			return;
		}
		oViewport[options.axis] = oViewport.obj[0]["offset" + sSize];
		oContent[options.axis] = oContent.obj[0]["scroll" + sSize];
		oContent.ratio = oViewport[options.axis] / oContent[options.axis];

		oScrollbar.obj.toggleClass("disable", oContent.ratio >= 1);

		oTrack[options.axis] = options.size === "auto" ? oViewport[options.axis] : options.size;
		oThumb[options.axis] = Math.min(oTrack[options.axis], Math.max(0, (options.sizeThumb === "auto" ? (oTrack[options.axis] * oContent.ratio) : options.sizeThumb)));

		if (oThumb[options.axis] < options.sizeThumbMin) {
			oThumb[options.axis] = options.sizeThumbMin;
			options.sizeThumb = options.sizeThumbMin;
		}

		oScrollbar.ratio = options.sizeThumb === "auto" ? (oContent[options.axis] / oTrack[options.axis]) : (oContent[options.axis] - oViewport[options.axis]) / (oTrack[options.axis] - oThumb[options.axis]);

		iScroll = (sScroll === "relative" && oContent.ratio <= 1) ? Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll)) : 0;
		iScroll = (sScroll === "bottom" && oContent.ratio <= 1) ? (oContent[options.axis] - oViewport[options.axis]) : isNaN(parseInt(sScroll, 10)) ? iScroll : parseInt(sScroll, 10);

		setSize();
	};

	function setSize () {
		var sCssSize = sSize.toLowerCase();

		oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
		oContent.obj.css(sDirection, -iScroll);
		iMouse.start = oThumb.obj.offset()[sDirection];

		oScrollbar.obj.css(sCssSize, oTrack[options.axis]);
		oTrack.obj.css(sCssSize, oTrack[options.axis]);
		oThumb.obj.css(sCssSize, oThumb[options.axis]);
	}

	function setEvents () {
		if (!touchEvents) {
			oThumb.obj.bind("mousedown", start);
			oTrack.obj.bind("mouseup", drag);
		} else {
			oViewport.obj[0].ontouchstart = function (event) {
				if (1 === event.touches.length) {
					start(event.touches[0]);
					event.stopPropagation();
				}
			};
		}

		if (options.scroll && window.addEventListener) {
			oWrapper[0].addEventListener("DOMMouseScroll", wheel, false);
			oWrapper[0].addEventListener("mousewheel", wheel, false);
		} else if (options.scroll) {
			oWrapper[0].onmousewheel = wheel;
		}
	}

	function start (event) {
		var oThumbDir = parseInt(oThumb.obj.css(sDirection), 10);
		iMouse.start = sAxis ? event.pageX : event.pageY;
		iPosition.start = oThumbDir === "auto" ? 0 : oThumbDir;

		$body.addClass("no-select");
		if (!touchEvents) {
			$(document).bind("mousemove", drag);
			$(document).bind("mouseup", end);
			oThumb.obj.bind("mouseup", end);
		} else {
			document.ontouchmove = function (event) {
				event.preventDefault();
				drag(event.touches[0]);
			};
			document.ontouchend = end;
		}
	}

	function wheel (event) {
		if (oContent.ratio < 1) {
			var oEvent = event || window.event,
					iDelta = oEvent.wheelDelta ? oEvent.wheelDelta / 120 : -oEvent.detail / 3;

			iScroll -= iDelta * options.wheel;
			iScroll = Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll));

			oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
			oContent.obj.css(sDirection, -iScroll);

			if (options.lockscroll || (iScroll !== (oContent[options.axis] - oViewport[options.axis]) && iScroll !== 0)) {
				oEvent = $.event.fix(oEvent);
				oEvent.preventDefault();
			}

			if (options.callback !== null) {
				options.callback();
			}

			oEvent = $.event.fix(oEvent);
			oEvent.stopPropagation();
		}
	}

	function drag (event) {
		if (oContent.ratio < 1) {
			if (!touchEvents) {
				iPosition.now = Math.min((oTrack[options.axis] - oThumb[options.axis]), Math.max(0, (iPosition.start + ((sAxis ? event.pageX : event.pageY) - iMouse.start))));
			} else {
				iPosition.now = Math.min((oTrack[options.axis] - oThumb[options.axis]), Math.max(0, (iPosition.start + (iMouse.start - (sAxis ? event.pageX : event.pageY)))));
			}

			iScroll = iPosition.now * oScrollbar.ratio;
			oContent.obj.css(sDirection, -iScroll);
			oThumb.obj.css(sDirection, iPosition.now);

			if (options.callback !== null) {
				options.callback();
			}
		}
	}

	function end () {
		$body.removeClass("no-select");
		$(document).unbind("mousemove", drag);
		$(document).unbind("mouseup", end);
		oThumb.obj.unbind("mouseup", end);
		document.ontouchmove = document.ontouchend = null;
	}

	return initialize();
}

$.fn.tinyscrollbar = function (params) {
	var options = $.extend({}, $.tiny.scrollbar.options, params);

	this.each(function () {
		$(this).data("tsb", new Scrollbar($(this), options));
	});

	return this;
};

$.fn.tinyscrollbar_update = function (sScroll) {
	return $(this).data("tsb").update(sScroll);
};

/**
 * Scrollbar data-API
 *
 * To easily add scrollbar behavior to any element, just add data-scrollbar="true" to the element you want
 * to scroll.
 */
$(function () {
	$("[data-scrollbar='true']").each(function () {
		var $scrollbar = $(this),
				data = $scrollbar.data(),
				options = {};

		options.axis = data.axis || "y";
		options.wheel = parseInt(data.wheel, 10) || 40;
		options.scroll = data.scroll !== "false";
		options.lockscroll = data.lockscroll !== "false";
		options.size = data.size || "auto";
		options.sizeThumb = data.sizeThumb || "auto";
		options.createElements = data.createElements || !$scrollbar.children(".scrollbar").length;
		options.sizeThumbMin = parseInt(data.sizeThumbMin, 10) || 50;

		$scrollbar.tinyscrollbar(options);
	});
});
/**
 * The ScrollSpy plugin is for automatically updating nav targets based on scroll position.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           ScrollSpy
 * @requires        jQuery
 */

function ScrollSpy (element, options) {
	var process = $.proxy(this.process, this),
			$element = $(element).is("body") ? $(window) : $(element),
			href;
	this.options = $.extend({}, $.fn.scrollspy.defaults, options);
	this.$scrollElement = $element.on("scroll.scroll-spy.data-api", process);
	this.selector = (this.options.target || ((href = $(element).attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")) /* strip for ie7 */|| "") + " .nav li > a";
	this.$body = $("body");
	this.refresh();
	this.process();
}

ScrollSpy.prototype = {

	constructor: ScrollSpy,

	refresh: function () {
		var self = this, $targets;

		this.offsets = $([]);
		this.targets = $([]);

		$targets = this.$body.find(this.selector).map(function () {
			var $el = $(this), href = $el.data("target") || $el.attr("href"),
					$href = /^#\w/.test(href) && $(href);
			// TODO This Bootstrap 2.2.2 change causes inconsistent behavior in practice (activeTarget does not match scroll position)
			//return ( $href && $href.length && [[ $href.position().top + self.$scrollElement.scrollTop(), href ]] ) || null;
			return ($href && $href.length && [[$href.position().top, href]]) || null;
		}).sort(function (a, b) {
			return a[0] - b[0];
		}).each(function () {
			self.offsets.push(this[0]);
			self.targets.push(this[1]);
		});
	},

	process: function () {
		var scrollTop = this.$scrollElement.scrollTop() + this.options.offset,
				scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
				maxScroll = scrollHeight - this.$scrollElement.height(),
				offsets = this.offsets,
				targets = this.targets,
				activeTarget = this.activeTarget, i;

		if (scrollTop >= maxScroll) {
			return activeTarget !== (i = targets.last()[0]) && this.activate(i);
		}

		for (i = offsets.length; i--;) {
			if (activeTarget !== targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1])) {
				this.activate(targets[i]);
			}
		}
	},

	activate: function (target) {
		var active,
				selector;

		this.activeTarget = target;

		$(this.selector).parent(".active").removeClass("active");

		selector = this.selector + "[data-target='" + target + "']," + this.selector + "[href='" + target + "']";

		active = $(selector).parent("li").addClass("active");

		if (active.parent(".dropdown-menu").length) {
			active = active.closest("li.dropdown").addClass("active");
		}

		active.trigger("activate");
	}

};

/**
 * Scrollspy plugin definition
 *
 * @param option
 */

$.fn.scrollspy = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("scrollspy"),
				options = typeof option === "object" && option;
		if (!data) {
			$this.data("scrollspy", (data = new ScrollSpy(this, options)));
		}
		if (typeof option === "string") {
			data[option]();
		}
	});
};

$.fn.scrollspy.Constructor = ScrollSpy;

$.fn.scrollspy.defaults = {
	offset: 10
};

/**
 * Scrollspy data-API
 */

$(window).on("load", function () {
	$("[data-spy='scroll']").each(function () {
		var $spy = $(this);
		$spy.scrollspy($spy.data());
	});
});
/**
 * Add quick, dynamic tab functionality to transiton through panes of local content, even via
 * dropdown menus.
 *
 * @see             http://twitter.github.com/bootstrap/
 * @copyright       2011 Twitter, Inc. All rights reserved.
 * @license         http://www.apache.org/licenses/LICENSE-2.0
 *
 * @class           Tab
 * @requires        jQuery
 */

var Tab = function (element) {
	this.element = $(element);
};

Tab.prototype = {

	constructor: Tab,

	show: function () {
		var $this = this.element,
				$ul = $this.closest("ul:not(.dropdown-menu)"),
				selector = $this.attr("data-target"),
				previous,
				$target,
				e;

		if (!selector) {
			selector = $this.attr("href");
			selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""); //strip for ie7
		}

		if ($this.parent("li").hasClass("active")) {
			return;
		}

		previous = $ul.find(".active:last a")[0];

		e = $.Event("show", {
			relatedTarget: previous
		});

		$this.trigger(e);

		if (e.isDefaultPrevented()) {
			return;
		}

		$target = $(selector);

		this.activate($this.parent("li"), $ul);
		this.activate($target, $target.parent(), function () {
			$this.trigger({
				type: "shown",
				relatedTarget: previous
			});
		});
	},

	activate: function (element, container, callback) {
		var $active = container.find("> .active"),
				transition = callback && $.support.transition && $active.hasClass("fade");

		function next () {
			$active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");

			element.addClass("active");

			if (transition) {
				void element[0].offsetWidth; // force reflow
				element.addClass("in");
			} else {
				element.removeClass("fade");
			}

			if (element.parent(".dropdown-menu")) {
				element.closest("li.dropdown").addClass("active");
			}

			if (callback) {
				callback();
			}
		}

		if (transition) {
			$active.one($.support.transition.end, next);
		} else {
			next();
		}

		$active.removeClass("in");
	}
};

/**
 * Tab plugin definition. Activates a tab element and content container. Tab should have either a
 * data-target or an href targeting a container node in the DOM.
 *
 * @param option
 */
$.fn.tab = function (option) {
	return this.each(function () {
		var $this = $(this),
				data = $this.data("tab");
		if (!data) {
			$this.data("tab", (data = new Tab(this)));
		}
		if (typeof option === "string") {
			data[option]();
		}
	});
};

$.fn.tab.Constructor = Tab;

/**
 * Tab data-API
 *
 * You can activate a tab or pill navigation without writing any JavaScript by simply specifying
 * data-toggle="tab" or data-toggle="pill" on an element.
 */
$(document).on("click.tab.data-api", "[data-toggle='tab'], [data-toggle='pill']", function (e) {
	e.preventDefault();
	$(this).tab("show");
});
 /**
 * Inspired by twitter.com's autocomplete search functionality, typeahead.js is a fast and fully-featured
 * autocomplete library.
 *
 * TODO This will need an <iframe/> shim for legacy IE
 *
 * @see             https://github.com/twitter/typeahead.js
 * @copyright       2013 Twitter, Inc. and other contributors
 * @license         http://opensource.org/licenses/MIT
 *
 * @class           TypeaheadView
 * @version         0.11.1
 * @requires        jQuery 1.9
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("bloodhound", [ "jquery" ], function(a0) {
            return root["Bloodhound"] = factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root["Bloodhound"] = factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var VERSION = "0.11.1";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }
        function PersistentStorage(namespace, override) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; ) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return $.parseJSON(val);
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this, fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }
                function fail() {
                    cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c", IDS = "i";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {}, isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);
                function onError() {
                    cb(true);
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);
                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };
        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }
        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }
        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = idenityPrepare;
            }
            return prepare;
            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }
            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }
            function idenityPrepare(query, settings) {
                return settings;
            }
        }
        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;
            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;
        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this, deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();
                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this, deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;
                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this, local;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    async && async(nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("typeahead.js", [ "jquery" ], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;
        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div class="' + c.menu + '"></div>'
            };
        }
        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }
        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e;
                $e = $.Event(namespace + type);
                (args = args || []).unshift($e);
                this.$el.trigger.apply(this.$el, args);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o, www) {
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            bind: function() {
                var that = this, onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();
        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = o.name || nameGenerator();
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", this.name, suggestions, false);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", this.name, suggestions, true);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        that._append(query, suggestions.slice(0, that.limit - rendered));
                        rendered += suggestions.length;
                        that.async && that.trigger("asyncReceived", query);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return $("<div>").text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, isDatasetEmpty);
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
                this._updateHint();
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, payload, cancelMove;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                payload = data ? data.obj : null;
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", payload);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(newVal);
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                autocomplete: "off",
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});
/**
 * Tooltipster 3.2.4 | 2014-05-14
 * A rockin' custom tooltip jQuery plugin
 *
 * Developed by Caleb Jacob under the MIT license http://opensource.org/licenses/MIT
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @see             http://iamceege.github.io/tooltipster/
 * @license         http://opensource.org/licenses/MIT
 *
 * @class           Tooltipster
 * @requires        jQuery
 *
 * TODO Had to exclude checks on this file due to many jshint issues. Should clean up at some point, though we will diverge from source.
 */

;(function ($, window, document) {

	var pluginName = "tooltipster",
		defaults = {
			animation: 'fade',
			arrow: true,
			arrowColor: '',
			autoClose: true,
			content: null,
			contentAsHTML: false,
			contentCloning: true,
			delay: 200,
			minWidth: 0,
			maxWidth: null,
			functionInit: function(origin, content) {},
			functionBefore: function(origin, continueTooltip) {
				continueTooltip();
			},
			functionReady: function(origin, tooltip) {},
			functionAfter: function(origin) {},
			icon: '(?)',
			iconCloning: true,
			iconDesktop: false,
			iconTouch: false,
			iconTheme: 'tooltipster-icon',
			interactive: false,
			interactiveTolerance: 350,
			multiple: false,
			offsetX: 0,
			offsetY: -9,
			onlyOne: false,
			position: 'top',
			positionTracker: false,
			speed: 350,
			timer: 0,
			theme: 'tooltipster-default',
			touchDevices: true,
			trigger: 'hover',
			updateAnimation: true
		};

	function Plugin(element, options) {

		// list of instance variables

		this.bodyOverflowX;
		// stack of custom callbacks provided as parameters to API methods
		this.callbacks = {
			hide: [],
			show: []
		};
		this.checkInterval = null;
		// this will be the user content shown in the tooltip. A capital "C" is used because there is also a method called content()
		this.Content;
		// this is the original element which is being applied the tooltipster plugin
		this.$el = $(element);
		// this will be the element which triggers the appearance of the tooltip on hover/click/custom events.
		// it will be the same as this.$el if icons are not used (see in the options), otherwise it will correspond to the created icon
		this.$elProxy;
		this.elProxyPosition;
		this.enabled = true;
		this.options = $.extend({}, defaults, options);
		this.mouseIsOverProxy = false;
		// a unique namespace per instance, for easy selective unbinding
		this.namespace = 'tooltipster-'+ Math.round(Math.random()*100000);
		// Status (capital S) can be either : appearing, shown, disappearing, hidden
		this.Status = 'hidden';
		this.timerHide = null;
		this.timerShow = null;
		// this will be the tooltip element (jQuery wrapped HTML element)
		this.$tooltip;

		// for backward compatibility
		this.options.iconTheme = this.options.iconTheme.replace('.', '');
		this.options.theme = this.options.theme.replace('.', '');

		// launch

		this._init();
	}

	Plugin.prototype = {

		_init: function() {

			var self = this;

			// disable the plugin on old browsers (including IE7 and lower)
			if (document.querySelector) {

				// note : the content is null (empty) by default and can stay that way if the plugin remains initialized but not fed any content. The tooltip will just not appear.

				// if content is provided in the options, its has precedence over the title attribute. Remark : an empty string is considered content, only 'null' represents the absence of content.
				if (self.options.content !== null){
					self._content_set(self.options.content);
				}
				else {
					// the same remark as above applies : empty strings (like title="") are considered content and will be shown. Do not define any attribute at all if you want to initialize the plugin without content at start.
					var t = self.$el.attr('title');
					if(typeof t === 'undefined') t = null;

					self._content_set(t);
				}

				var c = self.options.functionInit.call(self.$el, self.$el, self.Content);
				if(typeof c !== 'undefined') self._content_set(c);

				self.$el
					// strip the title off of the element to prevent the default tooltips from popping up
					.removeAttr('title')
					// to be able to find all instances on the page later (upon window events in particular)
					.addClass('tooltipstered');

				// detect if we're changing the tooltip origin to an icon
				// note about this condition : if the device has touch capability and self.options.iconTouch is false, you'll have no icons event though you may consider your device as a desktop if it also has a mouse. Not sure why someone would have this use case though.
				if ((!deviceHasTouchCapability && self.options.iconDesktop) || (deviceHasTouchCapability && self.options.iconTouch)) {

					// TODO : the tooltip should be automatically be given an absolute position to be near the origin. Otherwise, when the origin is floating or what, it's going to be nowhere near it and disturb the position flow of the page elements. It will imply that the icon also detects when its origin moves, to follow it : not trivial.
					// Until it's done, the icon feature does not really make sense since the user still has most of the work to do by himself

					// if the icon provided is in the form of a string
					if(typeof self.options.icon === 'string'){
						// wrap it in a span with the icon class
						self.$elProxy = $('<span class="'+ self.options.iconTheme +'"></span>');
						self.$elProxy.text(self.options.icon);
					}
					// if it is an object (sensible choice)
					else {
						// (deep) clone the object if iconCloning == true, to make sure every instance has its own proxy. We use the icon without wrapping, no need to. We do not give it a class either, as the user will undoubtedly style the object on his own and since our css properties may conflict with his own
						if (self.options.iconCloning) self.$elProxy = self.options.icon.clone(true);
						else self.$elProxy = self.options.icon;
					}

					self.$elProxy.insertAfter(self.$el);
				}
				else {
					self.$elProxy = self.$el;
				}

				// for 'click' and 'hover' triggers : bind on events to open the tooltip. Closing is now handled in _showNow() because of its bindings.
				// Notes about touch events :
					// - mouseenter, mouseleave and clicks happen even on pure touch devices because they are emulated. deviceIsPureTouch() is a simple attempt to detect them.
					// - on hybrid devices, we do not prevent touch gesture from opening tooltips. It would be too complex to differentiate real mouse events from emulated ones.
					// - we check deviceIsPureTouch() at each event rather than prior to binding because the situation may change during browsing
				if (self.options.trigger == 'hover') {

					// these binding are for mouse interaction only
					self.$elProxy
						.on('mouseenter.'+ self.namespace, function() {
							if (!deviceIsPureTouch() || self.options.touchDevices) {
								self.mouseIsOverProxy = true;
								self._show();
							}
						})
						.on('mouseleave.'+ self.namespace, function() {
							if (!deviceIsPureTouch() || self.options.touchDevices) {
								self.mouseIsOverProxy = false;
							}
						});

					// for touch interaction only
					if (deviceHasTouchCapability && self.options.touchDevices) {

						// for touch devices, we immediately display the tooltip because we cannot rely on mouseleave to handle the delay
						self.$elProxy.on('touchstart.'+ self.namespace, function() {
							self._showNow();
						});
					}
				}
				else if (self.options.trigger == 'click') {

					// note : for touch devices, we do not bind on touchstart, we only rely on the emulated clicks (triggered by taps)
					self.$elProxy.on('click.'+ self.namespace, function() {
						if (!deviceIsPureTouch() || self.options.touchDevices) {
							self._show();
						}
					});
				}
			}
		},

		// this function will schedule the opening of the tooltip after the delay, if there is one
		_show: function() {

			var self = this;

			if (self.Status != 'shown' && self.Status != 'appearing') {

				if (self.options.delay) {
					self.timerShow = setTimeout(function(){

						// for hover trigger, we check if the mouse is still over the proxy, otherwise we do not show anything
						if (self.options.trigger == 'click' || (self.options.trigger == 'hover' && self.mouseIsOverProxy)) {
							self._showNow();
						}
					}, self.options.delay);
				}
				else self._showNow();
			}
		},

		// this function will open the tooltip right away
		_showNow: function(callback) {

			var self = this;

			// call our constructor custom function before continuing
			self.options.functionBefore.call(self.$el, self.$el, function() {

				// continue only if the tooltip is enabled and has any content
				if (self.enabled && self.Content !== null) {

					// save the method callback and cancel hide method callbacks
					if (callback) self.callbacks.show.push(callback);
					self.callbacks.hide = [];

					//get rid of any appearance timer
					clearTimeout(self.timerShow);
					self.timerShow = null;
					clearTimeout(self.timerHide);
					self.timerHide = null;

					// if we only want one tooltip open at a time, close all auto-closing tooltips currently open and not already disappearing
					if (self.options.onlyOne) {
						$('.tooltipstered').not(self.$el).each(function(i,el) {

							var $el = $(el),
								nss = $el.data('tooltipster-ns');

							// iterate on all tooltips of the element
							$.each(nss, function(i, ns){
								var instance = $el.data(ns),
									// we have to use the public methods here
									s = instance.status(),
									ac = instance.option('autoClose');

								if (s !== 'hidden' && s !== 'disappearing' && ac) {
									instance.hide();
								}
							});
						});
					}

					var finish = function() {
						self.Status = 'shown';

						// trigger any show method custom callbacks and reset them
						$.each(self.callbacks.show, function(i,c) { c.call(self.$el); });
						self.callbacks.show = [];
					};

					// if this origin already has its tooltip open
					if (self.Status !== 'hidden') {

						// the timer (if any) will start (or restart) right now
						var extraTime = 0;

						// if it was disappearing, cancel that
						if (self.Status === 'disappearing') {

							self.Status = 'appearing';

							if (supportsTransitions()) {

								self.$tooltip
									.clearQueue()
									.removeClass('tooltipster-dying')
									.addClass('tooltipster-'+ self.options.animation +'-show');

								if (self.options.speed > 0) self.$tooltip.delay(self.options.speed);

								self.$tooltip.queue(finish);
							}
							else {
								// in case the tooltip was currently fading out, bring it back to life
								self.$tooltip
									.stop()
									.fadeIn(finish);
							}
						}
						// if the tooltip is already open, we still need to trigger the method custom callback
						else if(self.Status === 'shown') {
							finish();
						}
					}
					// if the tooltip isn't already open, open that sucker up!
					else {

						self.Status = 'appearing';

						// the timer (if any) will start when the tooltip has fully appeared after its transition
						var extraTime = self.options.speed;

						// disable horizontal scrollbar to keep overflowing tooltips from jacking with it and then restore it to its previous value
						self.bodyOverflowX = $('body').css('overflow-x');
						$('body').css('overflow-x', 'hidden');

						// get some other settings related to building the tooltip
						var animation = 'tooltipster-' + self.options.animation,
							animationSpeed = '-webkit-transition-duration: '+ self.options.speed +'ms; -webkit-animation-duration: '+ self.options.speed +'ms; -moz-transition-duration: '+ self.options.speed +'ms; -moz-animation-duration: '+ self.options.speed +'ms; -o-transition-duration: '+ self.options.speed +'ms; -o-animation-duration: '+ self.options.speed +'ms; -ms-transition-duration: '+ self.options.speed +'ms; -ms-animation-duration: '+ self.options.speed +'ms; transition-duration: '+ self.options.speed +'ms; animation-duration: '+ self.options.speed +'ms;',
							minWidth = self.options.minWidth ? 'min-width:'+ Math.round(self.options.minWidth) +'px;' : '',
							maxWidth = self.options.maxWidth ? 'max-width:'+ Math.round(self.options.maxWidth) +'px;' : '',
							pointerEvents = self.options.interactive ? 'pointer-events: auto;' : '';

						// build the base of our tooltip
						self.$tooltip = $('<div class="tooltipster-base '+ self.options.theme +'" style="'+ minWidth +' '+ maxWidth +' '+ pointerEvents +' '+ animationSpeed +'"><div class="tooltipster-content"></div></div>');

						// only add the animation class if the user has a browser that supports animations
						if (supportsTransitions()) self.$tooltip.addClass(animation);

						// insert the content
						self._content_insert();

						// attach
						self.$tooltip.appendTo('body');

						// do all the crazy calculations and positioning
						self.reposition();

						// call our custom callback since the content of the tooltip is now part of the DOM
						self.options.functionReady.call(self.$el, self.$el, self.$tooltip);

						// animate in the tooltip
						if (supportsTransitions()) {

							self.$tooltip.addClass(animation + '-show');

							if(self.options.speed > 0) self.$tooltip.delay(self.options.speed);

							self.$tooltip.queue(finish);
						}
						else {
							self.$tooltip.css('display', 'none').fadeIn(self.options.speed, finish);
						}

						// will check if our tooltip origin is removed while the tooltip is shown
						self._interval_set();

						// reposition on scroll (otherwise position:fixed element's tooltips will move away form their origin) and on resize (in case position can/has to be changed)
						$(window).on('scroll.'+ self.namespace +' resize.'+ self.namespace, function() {
							self.reposition();
						});

						// auto-close bindings
						if (self.options.autoClose) {

							// in case a listener is already bound for autoclosing (mouse or touch, hover or click), unbind it first
							$('body').off('.'+ self.namespace);

							// here we'll have to set different sets of bindings for both touch and mouse
							if (self.options.trigger == 'hover') {

								// if the user touches the body, hide
								if (deviceHasTouchCapability) {
									// timeout 0 : explanation below in click section
									setTimeout(function() {
										// we don't want to bind on click here because the initial touchstart event has not yet triggered its click event, which is thus about to happen
										$('body').on('touchstart.'+ self.namespace, function() {
											self.hide();
										});
									}, 0);
								}

								// if we have to allow interaction
								if (self.options.interactive) {

									// touch events inside the tooltip must not close it
									if (deviceHasTouchCapability) {
										self.$tooltip.on('touchstart.'+ self.namespace, function(event) {
											event.stopPropagation();
										});
									}

									// as for mouse interaction, we get rid of the tooltip only after the mouse has spent some time out of it
									var tolerance = null;

									self.$elProxy.add(self.$tooltip)
										// hide after some time out of the proxy and the tooltip
										.on('mouseleave.'+ self.namespace + '-autoClose', function() {
											clearTimeout(tolerance);
											tolerance = setTimeout(function(){
												self.hide();
											}, self.options.interactiveTolerance);
										})
										// suspend timeout when the mouse is over the proxy or the tooltip
										.on('mouseenter.'+ self.namespace + '-autoClose', function() {
											clearTimeout(tolerance);
										});
								}
								// if this is a non-interactive tooltip, get rid of it if the mouse leaves
								else {
									self.$elProxy.on('mouseleave.'+ self.namespace + '-autoClose', function() {
										self.hide();
									});
								}
							}
							// here we'll set the same bindings for both clicks and touch on the body to hide the tooltip
							else if(self.options.trigger == 'click'){

								// use a timeout to prevent immediate closing if the method was called on a click event and if options.delay == 0 (because of bubbling)
								setTimeout(function() {
									$('body').on('click.'+ self.namespace +' touchstart.'+ self.namespace, function() {
										self.hide();
									});
								}, 0);

								// if interactive, we'll stop the events that were emitted from inside the tooltip to stop autoClosing
								if (self.options.interactive) {

									// note : the touch events will just not be used if the plugin is not enabled on touch devices
									self.$tooltip.on('click.'+ self.namespace +' touchstart.'+ self.namespace, function(event) {
										event.stopPropagation();
									});
								}
							}
						}
					}

					// if we have a timer set, let the countdown begin
					if (self.options.timer > 0) {

						self.timerHide = setTimeout(function() {
							self.timerHide = null;
							self.hide();
						}, self.options.timer + extraTime);
					}
				}
			});
		},

		_interval_set: function() {

			var self = this;

			self.checkInterval = setInterval(function() {

				// if the tooltip and/or its interval should be stopped
				if (
						// if the origin has been removed
						$('body').find(self.$el).length === 0
						// if the elProxy has been removed
					||	$('body').find(self.$elProxy).length === 0
						// if the tooltip has been closed
					||	self.Status == 'hidden'
						// if the tooltip has somehow been removed
					||	$('body').find(self.$tooltip).length === 0
				) {
					// remove the tooltip if it's still here
					if (self.Status == 'shown' || self.Status == 'appearing') self.hide();

					// clear this interval as it is no longer necessary
					self._interval_cancel();
				}
				// if everything is alright
				else {
					// compare the former and current positions of the elProxy to reposition the tooltip if need be
					if(self.options.positionTracker){

						var p = self._repositionInfo(self.$elProxy),
							identical = false;

						// compare size first (a change requires repositioning too)
						if(areEqual(p.dimension, self.elProxyPosition.dimension)){

							// for elements with a fixed position, we track the top and left properties (relative to window)
							if(self.$elProxy.css('position') === 'fixed'){
								if(areEqual(p.position, self.elProxyPosition.position)) identical = true;
							}
							// otherwise, track total offset (relative to document)
							else {
								if(areEqual(p.offset, self.elProxyPosition.offset)) identical = true;
							}
						}

						if(!identical){
							self.reposition();
						}
					}
				}
			}, 200);
		},

		_interval_cancel: function() {
			clearInterval(this.checkInterval);
			// clean delete
			this.checkInterval = null;
		},

		_content_set: function(content) {
			// clone if asked. Cloning the object makes sure that each instance has its own version of the content (in case a same object were provided for several instances)
			// reminder : typeof null === object
			if (typeof content === 'object' && content !== null && this.options.contentCloning) {
				content = content.clone(true);
			}
			this.Content = content;
		},

		_content_insert: function() {

			var self = this,
				$d = this.$tooltip.find('.tooltipster-content');

			if (typeof self.Content === 'string' && !self.options.contentAsHTML) {
				$d.text(self.Content);
			}
			else {
				$d
					.empty()
					.append(self.Content);
			}
		},

		_update: function(content) {

			var self = this;

			// change the content
			self._content_set(content);

			if (self.Content !== null) {

				// update the tooltip if it is open
				if (self.Status !== 'hidden') {

					// reset the content in the tooltip
					self._content_insert();

					// reposition and resize the tooltip
					self.reposition();

					// if we want to play a little animation showing the content changed
					if (self.options.updateAnimation) {

						if (supportsTransitions()) {

							self.$tooltip.css({
								'width': '',
								'-webkit-transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
								'-moz-transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
								'-o-transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
								'-ms-transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
								'transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms'
							}).addClass('tooltipster-content-changing');

							// reset the CSS transitions and finish the change animation
							setTimeout(function() {

								if(self.Status != 'hidden'){

									self.$tooltip.removeClass('tooltipster-content-changing');

									// after the changing animation has completed, reset the CSS transitions
									setTimeout(function() {

										if(self.Status !== 'hidden'){
											self.$tooltip.css({
												'-webkit-transition': self.options.speed + 'ms',
												'-moz-transition': self.options.speed + 'ms',
												'-o-transition': self.options.speed + 'ms',
												'-ms-transition': self.options.speed + 'ms',
												'transition': self.options.speed + 'ms'
											});
										}
									}, self.options.speed);
								}
							}, self.options.speed);
						}
						else {
							self.$tooltip.fadeTo(self.options.speed, 0.5, function() {
								if(self.Status != 'hidden'){
									self.$tooltip.fadeTo(self.options.speed, 1);
								}
							});
						}
					}
				}
			}
			else {
				self.hide();
			}
		},

		_repositionInfo: function($el) {
			return {
				dimension: {
					height: $el.outerHeight(false),
					width: $el.outerWidth(false)
				},
				offset: $el.offset(),
				position: {
					left: parseInt($el.css('left')),
					top: parseInt($el.css('top'))
				}
			};
		},

		hide: function(callback) {

			var self = this;

			// save the method custom callback and cancel any show method custom callbacks
			if (callback) self.callbacks.hide.push(callback);
			self.callbacks.show = [];

			// get rid of any appearance timeout
			clearTimeout(self.timerShow);
			self.timerShow = null;
			clearTimeout(self.timerHide);
			self.timerHide = null;

			var finishCallbacks = function() {
				// trigger any hide method custom callbacks and reset them
				$.each(self.callbacks.hide, function(i,c) { c.call(self.$el); });
				self.callbacks.hide = [];
			};

			// hide
			if (self.Status == 'shown' || self.Status == 'appearing') {

				self.Status = 'disappearing';

				var finish = function() {

					self.Status = 'hidden';

					// detach our content object first, so the next jQuery's remove() call does not unbind its event handlers
					if (typeof self.Content == 'object' && self.Content !== null) {
						self.Content.detach();
					}

					self.$tooltip.remove();
					self.$tooltip = null;

					// unbind orientationchange, scroll and resize listeners
					$(window).off('.'+ self.namespace);

					$('body')
						// unbind any auto-closing click/touch listeners
						.off('.'+ self.namespace)
						.css('overflow-x', self.bodyOverflowX);

					// unbind any auto-closing click/touch listeners
					$('body').off('.'+ self.namespace);

					// unbind any auto-closing hover listeners
					self.$elProxy.off('.'+ self.namespace + '-autoClose');

					// call our constructor custom callback function
					self.options.functionAfter.call(self.$el, self.$el);

					// call our method custom callbacks functions
					finishCallbacks();
				};

				if (supportsTransitions()) {

					self.$tooltip
						.clearQueue()
						.removeClass('tooltipster-' + self.options.animation + '-show')
						// for transitions only
						.addClass('tooltipster-dying');

					if(self.options.speed > 0) self.$tooltip.delay(self.options.speed);

					self.$tooltip.queue(finish);
				}
				else {
					self.$tooltip
						.stop()
						.fadeOut(self.options.speed, finish);
				}
			}
			// if the tooltip is already hidden, we still need to trigger the method custom callback
			else if(self.Status == 'hidden') {
				finishCallbacks();
			}

			return self;
		},

		// the public show() method is actually an alias for the private showNow() method
		show: function(callback) {
			this._showNow(callback);
			return this;
		},

		// 'update' is deprecated in favor of 'content' but is kept for backward compatibility
		update: function(c) {
			return this.content(c);
		},
		content: function(c) {
			// getter method
			if(typeof c === 'undefined'){
				return this.Content;
			}
			// setter method
			else {
				this._update(c);
				return this;
			}
		},

		reposition: function() {

			var self = this;

			// in case the tooltip has been removed from DOM manually
			if ($('body').find(self.$tooltip).length !== 0) {

				// reset width
				self.$tooltip.css('width', '');

				// find variables to determine placement
				self.elProxyPosition = self._repositionInfo(self.$elProxy);
				var arrowReposition = null,
					windowWidth = $(window).width(),
					// shorthand
					proxy = self.elProxyPosition,
					tooltipWidth = self.$tooltip.outerWidth(false),
					tooltipInnerWidth = self.$tooltip.innerWidth() + 1, // this +1 stops FireFox from sometimes forcing an additional text line
					tooltipHeight = self.$tooltip.outerHeight(false);

				// if this is an <area> tag inside a <map>, all hell breaks loose. Recalculate all the measurements based on coordinates
				if (self.$elProxy.is('area')) {
					var areaShape = self.$elProxy.attr('shape'),
						mapName = self.$elProxy.parent().attr('name'),
						map = $('img[usemap="#'+ mapName +'"]'),
						mapOffsetLeft = map.offset().left,
						mapOffsetTop = map.offset().top,
						areaMeasurements = self.$elProxy.attr('coords') !== undefined ? self.$elProxy.attr('coords').split(',') : undefined;

					if (areaShape == 'circle') {
						var areaLeft = parseInt(areaMeasurements[0]),
							areaTop = parseInt(areaMeasurements[1]),
							areaWidth = parseInt(areaMeasurements[2]);
						proxy.dimension.height = areaWidth * 2;
						proxy.dimension.width = areaWidth * 2;
						proxy.offset.top = mapOffsetTop + areaTop - areaWidth;
						proxy.offset.left = mapOffsetLeft + areaLeft - areaWidth;
					}
					else if (areaShape == 'rect') {
						var areaLeft = parseInt(areaMeasurements[0]),
							areaTop = parseInt(areaMeasurements[1]),
							areaRight = parseInt(areaMeasurements[2]),
							areaBottom = parseInt(areaMeasurements[3]);
						proxy.dimension.height = areaBottom - areaTop;
						proxy.dimension.width = areaRight - areaLeft;
						proxy.offset.top = mapOffsetTop + areaTop;
						proxy.offset.left = mapOffsetLeft + areaLeft;
					}
					else if (areaShape == 'poly') {
						var areaXs = [],
							areaYs = [],
							areaSmallestX = 0,
							areaSmallestY = 0,
							areaGreatestX = 0,
							areaGreatestY = 0,
							arrayAlternate = 'even';

						for (var i = 0; i < areaMeasurements.length; i++) {
							var areaNumber = parseInt(areaMeasurements[i]);

							if (arrayAlternate == 'even') {
								if (areaNumber > areaGreatestX) {
									areaGreatestX = areaNumber;
									if (i === 0) {
										areaSmallestX = areaGreatestX;
									}
								}

								if (areaNumber < areaSmallestX) {
									areaSmallestX = areaNumber;
								}

								arrayAlternate = 'odd';
							}
							else {
								if (areaNumber > areaGreatestY) {
									areaGreatestY = areaNumber;
									if (i == 1) {
										areaSmallestY = areaGreatestY;
									}
								}

								if (areaNumber < areaSmallestY) {
									areaSmallestY = areaNumber;
								}

								arrayAlternate = 'even';
							}
						}

						proxy.dimension.height = areaGreatestY - areaSmallestY;
						proxy.dimension.width = areaGreatestX - areaSmallestX;
						proxy.offset.top = mapOffsetTop + areaSmallestY;
						proxy.offset.left = mapOffsetLeft + areaSmallestX;
					}
					else {
						proxy.dimension.height = map.outerHeight(false);
						proxy.dimension.width = map.outerWidth(false);
						proxy.offset.top = mapOffsetTop;
						proxy.offset.left = mapOffsetLeft;
					}
				}

				// our function and global vars for positioning our tooltip
				var myLeft = 0,
					myLeftMirror = 0,
					myTop = 0,
					offsetY = parseInt(self.options.offsetY),
					offsetX = parseInt(self.options.offsetX),
					// this is the arrow position that will eventually be used. It may differ from the position option if the tooltip cannot be displayed in this position
					practicalPosition = self.options.position;

				// a function to detect if the tooltip is going off the screen horizontally. If so, reposition the crap out of it!
				var dontGoOffScreenX = function() {

					var windowLeft = $(window).scrollLeft();

					// if the tooltip goes off the left side of the screen, line it up with the left side of the window
					if((myLeft - windowLeft) < 0) {
						arrowReposition = myLeft - windowLeft;
						myLeft = windowLeft;
					}

					// if the tooltip goes off the right of the screen, line it up with the right side of the window
					if (((myLeft + tooltipWidth) - windowLeft) > windowWidth) {
						arrowReposition = myLeft - ((windowWidth + windowLeft) - tooltipWidth);
						myLeft = (windowWidth + windowLeft) - tooltipWidth;
					}
				}

				// a function to detect if the tooltip is going off the screen vertically. If so, switch to the opposite!
				var dontGoOffScreenY = function(switchTo, switchFrom) {
					// if it goes off the top off the page
					if(((proxy.offset.top - $(window).scrollTop() - tooltipHeight - offsetY - 12) < 0) && (switchFrom.indexOf('top') > -1)) {
						practicalPosition = switchTo;
					}

					// if it goes off the bottom of the page
					if (((proxy.offset.top + proxy.dimension.height + tooltipHeight + 12 + offsetY) > ($(window).scrollTop() + $(window).height())) && (switchFrom.indexOf('bottom') > -1)) {
						practicalPosition = switchTo;
						myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
					}
				}

				if(practicalPosition == 'top') {
					var leftDifference = (proxy.offset.left + tooltipWidth) - (proxy.offset.left + proxy.dimension.width);
					myLeft = (proxy.offset.left + offsetX) - (leftDifference / 2);
					myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom', 'top');
				}

				if(practicalPosition == 'top-left') {
					myLeft = proxy.offset.left + offsetX;
					myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom-left', 'top-left');
				}

				if(practicalPosition == 'top-right') {
					myLeft = (proxy.offset.left + proxy.dimension.width + offsetX) - tooltipWidth;
					myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom-right', 'top-right');
				}

				if(practicalPosition == 'bottom') {
					var leftDifference = (proxy.offset.left + tooltipWidth) - (proxy.offset.left + proxy.dimension.width);
					myLeft = proxy.offset.left - (leftDifference / 2) + offsetX;
					myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top', 'bottom');
				}

				if(practicalPosition == 'bottom-left') {
					myLeft = proxy.offset.left + offsetX;
					myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top-left', 'bottom-left');
				}

				if(practicalPosition == 'bottom-right') {
					myLeft = (proxy.offset.left + proxy.dimension.width + offsetX) - tooltipWidth;
					myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top-right', 'bottom-right');
				}

				if(practicalPosition == 'left') {
					myLeft = proxy.offset.left - offsetX - tooltipWidth - 12;
					myLeftMirror = proxy.offset.left + offsetX + proxy.dimension.width + 12;
					var topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
					myTop = proxy.offset.top - (topDifference / 2) - offsetY;

					// if the tooltip goes off boths sides of the page
					if((myLeft < 0) && ((myLeftMirror + tooltipWidth) > windowWidth)) {
						var borderWidth = parseFloat(self.$tooltip.css('border-width')) * 2,
							newWidth = (tooltipWidth + myLeft) - borderWidth;
						self.$tooltip.css('width', newWidth + 'px');

						tooltipHeight = self.$tooltip.outerHeight(false);
						myLeft = proxy.offset.left - offsetX - newWidth - 12 - borderWidth;
						topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
						myTop = proxy.offset.top - (topDifference / 2) - offsetY;
					}

					// if it only goes off one side, flip it to the other side
					else if(myLeft < 0) {
						myLeft = proxy.offset.left + offsetX + proxy.dimension.width + 12;
						arrowReposition = 'left';
					}
				}

				if(practicalPosition == 'right') {
					myLeft = proxy.offset.left + offsetX + proxy.dimension.width + 12;
					myLeftMirror = proxy.offset.left - offsetX - tooltipWidth - 12;
					var topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
					myTop = proxy.offset.top - (topDifference / 2) - offsetY;

					// if the tooltip goes off boths sides of the page
					if(((myLeft + tooltipWidth) > windowWidth) && (myLeftMirror < 0)) {
						var borderWidth = parseFloat(self.$tooltip.css('border-width')) * 2,
							newWidth = (windowWidth - myLeft) - borderWidth;
						self.$tooltip.css('width', newWidth + 'px');

						tooltipHeight = self.$tooltip.outerHeight(false);
						topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
						myTop = proxy.offset.top - (topDifference / 2) - offsetY;
					}

					// if it only goes off one side, flip it to the other side
					else if((myLeft + tooltipWidth) > windowWidth) {
						myLeft = proxy.offset.left - offsetX - tooltipWidth - 12;
						arrowReposition = 'right';
					}
				}

				// if arrow is set true, style it and append it
				if (self.options.arrow) {

					var arrowClass = 'tooltipster-arrow-' + practicalPosition;

					// set color of the arrow
					if(self.options.arrowColor.length < 1) {
						var arrowColor = self.$tooltip.css('background-color');
					}
					else {
						var arrowColor = self.options.arrowColor;
					}

					// if the tooltip was going off the page and had to re-adjust, we need to update the arrow's position
					if (!arrowReposition) {
						arrowReposition = '';
					}
					else if (arrowReposition == 'left') {
						arrowClass = 'tooltipster-arrow-right';
						arrowReposition = '';
					}
					else if (arrowReposition == 'right') {
						arrowClass = 'tooltipster-arrow-left';
						arrowReposition = '';
					}
					else {
						arrowReposition = 'left:'+ Math.round(arrowReposition) +'px;';
					}

					// building the logic to create the border around the arrow of the tooltip
					if ((practicalPosition == 'top') || (practicalPosition == 'top-left') || (practicalPosition == 'top-right')) {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-bottom-width')),
							tooltipBorderColor = self.$tooltip.css('border-bottom-color');
					}
					else if ((practicalPosition == 'bottom') || (practicalPosition == 'bottom-left') || (practicalPosition == 'bottom-right')) {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-top-width')),
							tooltipBorderColor = self.$tooltip.css('border-top-color');
					}
					else if (practicalPosition == 'left') {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-right-width')),
							tooltipBorderColor = self.$tooltip.css('border-right-color');
					}
					else if (practicalPosition == 'right') {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-left-width')),
							tooltipBorderColor = self.$tooltip.css('border-left-color');
					}
					else {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-bottom-width')),
							tooltipBorderColor = self.$tooltip.css('border-bottom-color');
					}

					if (tooltipBorderWidth > 1) {
						tooltipBorderWidth++;
					}

					var arrowBorder = '';
					if (tooltipBorderWidth !== 0) {
						var arrowBorderSize = '',
							arrowBorderColor = 'border-color: '+ tooltipBorderColor +';';
						if (arrowClass.indexOf('bottom') !== -1) {
							arrowBorderSize = 'margin-top: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('top') !== -1) {
							arrowBorderSize = 'margin-bottom: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('left') !== -1) {
							arrowBorderSize = 'margin-right: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('right') !== -1) {
							arrowBorderSize = 'margin-left: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						arrowBorder = '<span class="tooltipster-arrow-border" style="'+ arrowBorderSize +' '+ arrowBorderColor +';"></span>';
					}

					// if the arrow already exists, remove and replace it
					self.$tooltip.find('.tooltipster-arrow').remove();

					// build out the arrow and append it
					var arrowConstruct = '<div class="'+ arrowClass +' tooltipster-arrow" style="'+ arrowReposition +'">'+ arrowBorder +'<span style="border-color:'+ arrowColor +';"></span></div>';
					self.$tooltip.append(arrowConstruct);
				}

				// position the tooltip
				self.$tooltip.css({'top': Math.round(myTop) + 'px', 'left': Math.round(myLeft) + 'px'});
			}

			return self;
		},

		enable: function() {
			this.enabled = true;
			return this;
		},

		disable: function() {
			// hide first, in case the tooltip would not disappear on its own (autoClose false)
			this.hide();
			this.enabled = false;
			return this;
		},

		destroy: function() {

			var self = this;

			self.hide();

			// remove the icon, if any
			if(self.$el[0] !== self.$elProxy[0]) self.$elProxy.remove();

			self.$el
				.removeData(self.namespace)
				.off('.'+ self.namespace);

			var ns = self.$el.data('tooltipster-ns');

			// if there are no more tooltips on this element
			if(ns.length === 1){

				// old school technique when outerHTML is not supported
				var stringifiedContent = (typeof self.Content === 'string') ? self.Content : $('<div></div>').append(self.Content).html();

				self.$el
					.removeClass('tooltipstered')
					.attr('title', stringifiedContent)
					.removeData(self.namespace)
					.removeData('tooltipster-ns')
					.off('.'+ self.namespace);
			}
			else {
				// remove the instance namespace from the list of namespaces of tooltips present on the element
				ns = $.grep(ns, function(el, i){
					return el !== self.namespace;
				});
				self.$el.data('tooltipster-ns', ns);
			}

			return self;
		},

		elementIcon: function() {
			return (this.$el[0] !== this.$elProxy[0]) ? this.$elProxy[0] : undefined;
		},

		elementTooltip: function() {
			return this.$tooltip ? this.$tooltip[0] : undefined;
		},

		// public methods but for internal use only
		// getter if val is ommitted, setter otherwise
		option: function(o, val) {
			if (typeof val == 'undefined') return this.options[o];
			else {
				this.options[o] = val;
				return this;
			}
		},
		status: function() {
			return this.Status;
		}
	};

	$.fn[pluginName] = function () {

		// for using in closures
		var args = arguments;

		// if we are not in the context of jQuery wrapped HTML element(s) :
		// this happens when calling static methods in the form $.fn.tooltipster('methodName'), or when calling $(sel).tooltipster('methodName or options') where $(sel) does not match anything
		if (this.length === 0) {

			// if the first argument is a method name
			if (typeof args[0] === 'string') {

				var methodIsStatic = true;

				// list static methods here (usable by calling $.fn.tooltipster('methodName');)
				switch (args[0]) {

					case 'setDefaults':
						// change default options for all future instances
						$.extend(defaults, args[1]);
						break;

					default:
						methodIsStatic = false;
						break;
				}

				// $.fn.tooltipster('methodName') calls will return true
				if (methodIsStatic) return true;
				// $(sel).tooltipster('methodName') calls will return the list of objects event though it's empty because chaining should work on empty lists
				else return this;
			}
			// the first argument is undefined or an object of options : we are initalizing but there is no element matched by selector
			else {
				// still chainable : same as above
				return this;
			}
		}
		// this happens when calling $(sel).tooltipster('methodName or options') where $(sel) matches one or more elements
		else {

			// method calls
			if (typeof args[0] === 'string') {

				var v = '#*$~&';

				this.each(function() {

					// retrieve the namepaces of the tooltip(s) that exist on that element. We will interact with the first tooltip only.
					var ns = $(this).data('tooltipster-ns'),
						// self represents the instance of the first tooltipster plugin associated to the current HTML object of the loop
						self = ns ? $(this).data(ns[0]) : null;

					// if the current element holds a tooltipster instance
					if(self){

						if (typeof self[args[0]] === 'function') {
							// note : args[1] and args[2] may not be defined
							var resp = self[args[0]](args[1], args[2]);
						}
						else {
							throw new Error('Unknown method .tooltipster("' + args[0] + '")');
						}

						// if the function returned anything other than the instance itself (which implies chaining)
						if (resp !== self){
							v = resp;
							// return false to stop .each iteration on the first element matched by the selector
							return false;
						}
					}
					else {
						throw new Error('You called Tooltipster\'s "' + args[0] + '" method on an uninitialized element');
					}
				});

				return (v !== '#*$~&') ? v : this;
			}
			// first argument is undefined or an object : the tooltip is initializing
			else {

				var instances = [],
					// is there a defined value for the multiple option in the options object ?
					multipleIsSet = args[0] && typeof args[0].multiple !== 'undefined',
					// if the multople option is set to true, or if it's not defined but set to true in the defaults
					multiple = (multipleIsSet && args[0].multiple) || (!multipleIsSet && defaults.multiple);

				// initialize a tooltipster instance for each element if it doesn't already have one or if the multiple option is set, and attach the object to it
				this.each(function () {

					var go = false,
						ns = $(this).data('tooltipster-ns'),
						instance = null;

					if (!ns) {
						go = true;
					}
					else {
						if(multiple) go = true;
						else console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.');
					}

					if(go) {
						instance = new Plugin(this, args[0]);

						// save the reference of the new instance
						if (!ns) ns = [];
						ns.push(instance.namespace);
						$(this).data('tooltipster-ns', ns)

						// save the instance itself
						$(this).data(instance.namespace, instance);
					}

					instances.push(instance);
				});

				if(multiple) return instances;
				else return this;
			}
		}
	};

	// quick & dirty compare function (not bijective nor multidimensional)
	function areEqual(a,b) {
		var same = true;
		$.each(a, function(i, el){
			if(typeof b[i] === 'undefined' || a[i] !== b[i]){
				same = false;
				return false;
			}
		});
		return same;
	}

	// detect if this device can trigger touch events
	var deviceHasTouchCapability = !!('ontouchstart' in window);

	// we'll assume the device has no mouse until we detect any mouse movement
	var deviceHasMouse = false;
	$('body').one('mousemove', function() {
		deviceHasMouse = true;
	});

	function deviceIsPureTouch() {
		return (!deviceHasMouse && deviceHasTouchCapability);
	}

	// detecting support for CSS transitions
	function supportsTransitions() {
		var b = document.body || document.documentElement,
			s = b.style,
			p = 'transition';

		if(typeof s[p] == 'string') {return true; }

		v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
		p = p.charAt(0).toUpperCase() + p.substr(1);
		for(var i=0; i<v.length; i++) {
			if(typeof s[v[i] + p] == 'string') { return true; }
		}
		return false;
	}
})( jQuery, window, document );
/**
 * Adds ability to create styles for keyboard-only focus on elements using tab
 * @requires        jQuery
 */

(function() {
    var outlinesClass = "show-focus-outlines";

    $(document).on("keydown", function(e) {
        var $body = $("body");

        if (e.keyCode === 9 && !$body.hasClass(outlinesClass)) {
            $body.addClass(outlinesClass);
        }
    });

    $(document).on("click", function(e) {
        var $body = $("body");

        // if an artificial javascript-triggered click event because isTrusted is false
        if (e.originalEvent && !e.originalEvent.isTrusted) {
            return;
        }

        // if an artificial jquery .trigger("click") event
        if (e.isTrigger) {
            return;
        }

        // if x and y coordinates of click are 0, it is most likely artificial
        if (e.clientX === 0 && e.clientY === 0) {
            return;
        }

        if ($body.hasClass(outlinesClass)) {
            $body.removeClass(outlinesClass);
        }
    });
})();