---
title: Eurocall
layout: default
---

# Welcome

This is my first page.

<div id="generator"></div>
<script> 
var marloweWindow = () => document.getElementById('marlowe-frame').contentWindow.document.querySelector('replay-web-page').shadowRoot.querySelector('iframe').contentWindow.document.querySelector('replay-app-main').shadowRoot.querySelector('wr-coll').shadowRoot.querySelector('wr-coll-replay').shadowRoot.querySelector('iframe').contentWindow.document
</script>
<button type="button" onclick="marloweWindow().querySelector('.mr-4').click()">Click Me!</button>
<br/>
<iframe src="./marlowe.html" title="Marlowe" height="500" width = "100%" id = "marlowe-frame"></iframe>