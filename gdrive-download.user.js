// ==UserScript==
// @name        Google Drive auto downloader
// @description Downloads Google Drive link automatically
// @version     1
// @namespace   https://xer.fr/userscripts
// @run-at      document-start
// @match       https://drive.google.com/file/d/*
// @grant       none
// ==/UserScript==

const id = location.pathname.split('/')[3]
location = `https://drive.google.com/uc?id=${id}&export=download`
