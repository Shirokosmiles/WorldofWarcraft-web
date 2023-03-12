/*
 * inject nonce into script tag to fix the gtm.js issue.
 */
var nonceHash = $('body').attr("data-nonce");

(function(injectAttribute) {
	var create = injectAttribute.createElement;

	injectAttribute.createElement = function() {
		var inject = create.apply(injectAttribute, arguments);

		if (inject.tagName === 'script') {
			inject.setAttribute('nonce', nonceHash);
		}
		return inject;
	}
})(document);

/*
 * Use this Google tag manager instead of tag manager ftl macro to avoid CSP header violation.
 */
var body = $('body');
var dataLayerString = body.attr("data-gtmDataLayer");
var tagManagerAccount = body.attr("data-tagManagerAccount");

if (tagManagerAccount != null) {
	if (dataLayerString != undefined) {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push(JSON.parse(dataLayerString.replace(/'/g, '"')));
	}

	(function(w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({
			'gtm.start':
				new Date().getTime(), event: 'gtm.js'
		});
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src =
			'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', tagManagerAccount);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbmFseXRpY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGluamVjdCBub25jZSBpbnRvIHNjcmlwdCB0YWcgdG8gZml4IHRoZSBndG0uanMgaXNzdWUuXG4gKi9cbnZhciBub25jZUhhc2ggPSAkKCdib2R5JykuYXR0cihcImRhdGEtbm9uY2VcIik7XG5cbihmdW5jdGlvbihpbmplY3RBdHRyaWJ1dGUpIHtcblx0dmFyIGNyZWF0ZSA9IGluamVjdEF0dHJpYnV0ZS5jcmVhdGVFbGVtZW50O1xuXG5cdGluamVjdEF0dHJpYnV0ZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGluamVjdCA9IGNyZWF0ZS5hcHBseShpbmplY3RBdHRyaWJ1dGUsIGFyZ3VtZW50cyk7XG5cblx0XHRpZiAoaW5qZWN0LnRhZ05hbWUgPT09ICdzY3JpcHQnKSB7XG5cdFx0XHRpbmplY3Quc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlSGFzaCk7XG5cdFx0fVxuXHRcdHJldHVybiBpbmplY3Q7XG5cdH1cbn0pKGRvY3VtZW50KTtcblxuLypcbiAqIFVzZSB0aGlzIEdvb2dsZSB0YWcgbWFuYWdlciBpbnN0ZWFkIG9mIHRhZyBtYW5hZ2VyIGZ0bCBtYWNybyB0byBhdm9pZCBDU1AgaGVhZGVyIHZpb2xhdGlvbi5cbiAqL1xudmFyIGJvZHkgPSAkKCdib2R5Jyk7XG52YXIgZGF0YUxheWVyU3RyaW5nID0gYm9keS5hdHRyKFwiZGF0YS1ndG1EYXRhTGF5ZXJcIik7XG52YXIgdGFnTWFuYWdlckFjY291bnQgPSBib2R5LmF0dHIoXCJkYXRhLXRhZ01hbmFnZXJBY2NvdW50XCIpO1xuXG5pZiAodGFnTWFuYWdlckFjY291bnQgIT0gbnVsbCkge1xuXHRpZiAoZGF0YUxheWVyU3RyaW5nICE9IHVuZGVmaW5lZCkge1xuXHRcdHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuXHRcdHdpbmRvdy5kYXRhTGF5ZXIucHVzaChKU09OLnBhcnNlKGRhdGFMYXllclN0cmluZy5yZXBsYWNlKC8nL2csICdcIicpKSk7XG5cdH1cblxuXHQoZnVuY3Rpb24odywgZCwgcywgbCwgaSkge1xuXHRcdHdbbF0gPSB3W2xdIHx8IFtdO1xuXHRcdHdbbF0ucHVzaCh7XG5cdFx0XHQnZ3RtLnN0YXJ0Jzpcblx0XHRcdFx0bmV3IERhdGUoKS5nZXRUaW1lKCksIGV2ZW50OiAnZ3RtLmpzJ1xuXHRcdH0pO1xuXHRcdHZhciBmID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxcblx0XHRcdGogPSBkLmNyZWF0ZUVsZW1lbnQocyksIGRsID0gbCAhPSAnZGF0YUxheWVyJyA/ICcmbD0nICsgbCA6ICcnO1xuXHRcdGouYXN5bmMgPSB0cnVlO1xuXHRcdGouc3JjID1cblx0XHRcdCdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JyArIGkgKyBkbDtcblx0XHRmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosIGYpO1xuXHR9KSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JywgJ2RhdGFMYXllcicsIHRhZ01hbmFnZXJBY2NvdW50KTtcbn1cbiJdLCJmaWxlIjoiYW5hbHl0aWNzLmpzIn0=
