(function() {
	var regexp = new RegExp(/playerCaptionsTracklistRenderer.*?(youtube.com\/api\/timedtext.*?)"/);
	var url = regexp.exec(document.body.innerHTML)[1];
	var encoded =  encodeURI(url[28:])
	open('https://www.youtube.com/youtube.com/api/timedtext?v=' + encoded);
})();

