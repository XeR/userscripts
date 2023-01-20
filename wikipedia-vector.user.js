// ==UserScript==
// @name        Wikipedia skin changer
// @description Forces Wikipedia to use the vector skin
// @version     1
// @namespace   https://xer.fr/userscripts
// @run-at      document-start
// @match       https://*.wikipedia.org/*
// @grant       none
// ==/UserScript==

const params = new URLSearchParams(location.search);

if(!params.get("useskin")) {
	params.append("useskin", "vector");
	location.search = params;
}
