/**
 *	JavaScript for Embedded applications
 * 	@copyright ©2013 Blizzard Entertainment, Inc. All rights reserved.
 */ 
var Embed = Embed || {};

/**
 * Self-calling module closure to separate public from private.
 * @name Embed
 * @namespace Embed
 */
(function(E){
	'use strict';

	var interceptHandler = false;
	var interceptionEnabled = false;

	var anchorSearchFunction;
	
	/**
	 *	Looks up the anchor by href, and returns an object of it's attributes.
	 *
	 *	@param href String href URL
	 *	@returns Object Object of attributes, or false if not found
	 */
	var getAttributesForHref = function(href) {
		if (!href){
			return false;
		}
		var anchor = anchorSearchFunction(href);

		// was it an absolute URL looking for a relative one?
		if (!anchor) {
			anchor = findAbsoluteAnchorByTraversal(href)
		}

		if(!anchor) {
			return false;
		}
		return getElementAttributes( anchor );
	}

	/**
	 *	Looks up the anchor tag using XPath
	 *	@param href String href URL
	 *	@returns DOMNode/HTMLNodeElement/HTMLElement or null/undefined
	 */
	var findAnchorByHrefXPath = function(href) {
		return document.evaluate(
				"//a[contains(@href,'" + href + "')]", 
				document, 
				null, 
				XPathResult.FIRST_ORDERED_NODE_TYPE, 
				null
			).singleNodeValue;
	}

	/**
	 *	Looks up the anchor tag DOM traversal
	 *	@param href String href URL
	 *
	 *	@returns DOMNode/HTMLNodeElement/HTMLElement or null/undefined
	 */
	var findAnchorByTraversal = function(href) {
		var anchors = document.getElementsByTagName('a');
		for (var i =0; i< anchors.length; i++) {
			if(getElementAttributes(anchors[i]).href == href) {
				return anchors[i];
			}
		}
		return false;
	}

	/**
	 *	Attempts to look up the anchor by traversal, testing against an absolute url
	 *	This occurs on iOS, where an anchor with a relative link is received
	 *	as a fully-qualified, absolute NSURL object, which means the query/xpath functions
	 *	are guaranteed to return false. (and there's no known way to get the original url string.)
	 *
	 *	@param href String href URL
	 *
	 *	@returns DOMNode/HTMLNodeElement/HTMLElement or falsey
	 */
	var findAbsoluteAnchorByTraversal = function(href) {
		var anchors = document.getElementsByTagName('a');
		for (var i =0; i< anchors.length; i++) {
			if(anchors[i].href == href) {
				
				return anchors[i];
			}
		}
		return false;
	}

	/**
	 *	Looks up the anchor tag using document.querySelector
	 *	@see https://developer.mozilla.org/en-US/docs/Web/API/element.querySelector
	 *
	 *	@param href String href URL
	 *	@returns DOMNode/HTMLNodeElement/HTMLElement or null/undefined/false/falsy
	 */
	var findAnchorByQuerySelector = function(href) {
		var result = document.querySelector("a[href='" + href + "']");
		if (result) {
			return result;
		}
		return false;
	}

	/** 
	 *	Returns a specific attribute off of a link.
	 *
	 *	@lends Embed
	 *	@param href String href URL
	 *	@param attribute String attribute name
	 *	@returns String Attribute value or false if not found.
	 */
	var getAttributeValueForHref = function(href, attributeName) {
		var link = getAttributesForHref(href);
		if (link) {
			if (link[attributeName]) {
				return link[attributeName];
			}
		}
		return false;
	}

	/**
	 *	Returns all of the attributes on an HTMLElement
	 *  @param HTMLElement/Node or false if not found.
	 */
	var getElementAttributes = function(element) {
		var results = {};
		var attrs = element.attributes || false;

		if (!attrs || !attrs.length) {
			return false;
		}
		for (var attr, i=0; i<attrs.length; i++) {
			attr = attrs.item(i);
			results[attr.nodeName] = attr.nodeValue;
		}
		return results;
	}

	/**
	 *	Link Interceptor.  If a function has been configures to 
	 *
	 *	@param evt event
	 */
	var interceptLinks = function(evt) {
		if (interceptHandler && 'function' === typeof interceptHandler) {
			var o = evt.target;
			do {
				if (o.tagName && 'a' === o.tagName.toLowerCase()) {
					if (interceptHandler(o)) {
						evt.preventDefault();
					}
					return;
				}
			} while (o = o.parentNode);
		}
	};

	/**
	 * 	Adds a click interceptor.  Removes any previously attached intercept handler.
	 *	
	 *	@param function handler.  The function handler should return true if the interceptor
 	 *		needs to capture the event and prevent its default behavior.
	 */
	var setInterceptHandler = function(handler) {
		removeInterceptHandler();
		if ('function' === typeof handler) {
			interceptHandler = handler;
			if(!interceptionEnabled) {
				document.addEventListener('click', interceptLinks, false);
				interceptionEnabled = true;
			}
		} 
	}

	/**
	 *	Removes any click intercept handlers
	 */
	var removeInterceptHandler = function() {
		interceptHandler = false;		
	}

	/**
	 *	After the DOMContentLoaded event, attaches the porcelain functions we want to expose.
	 */
	var init = function() {
		/* 	Determine the correct search function to use, 
			in order of performance:		 
			querySelector > XPath selector > traversal
		*/
		if(document.querySelector) {
			anchorSearchFunction = findAnchorByQuerySelector;
		} else if (document.evaluate) {
			anchorSearchFunction = findAnchorByHrefXPath;
		} else {
			anchorSearchFunction = findAnchorByTraversal;
		}

		E.getAttributesForHref = getAttributesForHref;
		E.getAttributeValueForHref = getAttributeValueForHref;

		E.setInterceptHandler = setInterceptHandler;
		E.clearInterceptHandler = removeInterceptHandler;

		// Plumbing exposes internal functions for unit testing.
		E.plumbing = {
			findAnchorByTraversal: function(href) {
				return findAnchorByTraversal(href);
			},
			findAbsoluteAnchorByTraversal: function(href) {
				return findAbsoluteAnchorByTraversal(href);
			},
			findAnchorByHrefXPath: function(href) {
				return findAnchorByHrefXPath(href);
			},
			findAnchorByQuerySelector: function(href) {
				return findAnchorByQuerySelector(href);
			},
			getElementAttributes: function(domElement) {
				return getElementAttributes(domElement);
			},
			getInterceptHandlerFunction: function() { 
				return interceptHandler; 
			},
			getFindAnchorByQuerySelectorFunction: function() {
				return findAnchorByQuerySelector;
			},
			getSelectedSearchFunction: function() {
				return anchorSearchFunction;
			}

		};
	}


	/* attach once the document is ready */
	if ( 'complete' === document.readyState || 'interactive' === document.readyState ) {
		init();
	} else {
		document.addEventListener('DOMContentLoaded', init, false);
	}
})(Embed);
