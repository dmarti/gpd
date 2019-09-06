"use strict";

var lookFor = 'https://pagead2.googlesyndication.com/pagead/s/cookie_push.html';
//var lookFor = 'https://pagead2.googlesyndication.com/';

function listener(details) {
	if (!details.url.startsWith(lookFor)) {
		return;
	}
	console.log("matching URL opened: " + details.url);
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["<all_urls>"]}
);

alert("Hi, have a console window");
