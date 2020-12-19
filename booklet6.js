(function() {
	var regexp = new RegExp(/playerCaptionsTracklistRenderer.*?(youtube.com\/api\/timedtext.*?)"/);
	var url = regexp.exec(document.body.innerHTML)[1];
	url = url.replaceAll('\\u0026', '&')
	open(url.slice(11));
})();

