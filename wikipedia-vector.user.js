// ==UserScript==
// @name        Wikipedia skin changer
// @description Forces Wikipedia to use the vector skin
// @version     2
// @namespace   https://xer.fr/userscripts
// @run-at      document-start
// @match       https://*.wikipedia.org/*
// @grant       none
// ==/UserScript==

const params = new URLSearchParams(location.search);

if(!params.get("useskin")) {
	// Update the parameters
	params.append("useskin", "vector");

	// Update the URL
	const url  = new URL(location)
	url.search = params;

	// location.replace does not create a new history element
	location.replace(url);
}
