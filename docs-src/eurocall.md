---
title: Eurocall
layout: default
---

# Marlowe Contract

Let's generate marlowe contract first

<div id="generator"></div>
<button type="button" style="height: 30px" onclick="document.querySelector('#marlowe-frame').style = ''; window.api.injectMarloweContract({template: 'eurocall', terms: {}}); ">Generate Marlowe contract!</button>
<br/>
<br/>
<iframe src="./marlowe.html" title="Marlowe" height="800" width = "100%" id = "marlowe-frame" style = "filter: blur(1.5px) grayscale(80%) hue-rotate(30deg) sepia(10%); pointer-events: none"></iframe>

# Sampling

Let's sample Marlowe contract and plot the payoff curve

<button type="button" style="height: 30px;" onclick="window.api.sampleMarloweContract(); ">Sample Marlowe contract!</button>
<button type="button" style="height: 30px;" onclick="window.api.sampleMarloweContract(); ">Download as CSV</button>