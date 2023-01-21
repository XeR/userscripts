// ==UserScript==
// @name        Google Drive warning skipper
// @description Skips Google Drive's anti-malware warning
// @version     1
// @namespace   https://xer.fr/userscripts
// @run-at      document-start
// @match       https://drive.google.com/uc?*
// @grant       none
// ==/UserScript==

document.getElementById("download-form")?.submit()
