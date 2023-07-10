---
title: Eurocall
layout: default
---



# Wolfram Oracle

BTC price is: <input id = "ticker"></input> (<input type="checkbox" id="lock" name="lock" >lock</input>)
<br/>
[source: Wolfram Alpha](https://api.wolframalpha.com/v1/result?appid=6WU6JX-46EP5U9AGX&i=1%20btc%20to%20usd%20number)

<script>
    window.flag = false
    window.addEventListener("tick", () => {
        if (!document.querySelector('#lock').checked) {
            document.querySelector('#ticker').value = window.tick
            window.activeTicker = window.tick
            if (!window.flag) {
                window.flag = true
                document.querySelector('#minValue').value = window.tick - 400
                document.querySelector('#maxValue').value = window.tick + 400
            }
            
        }
    })
    document.querySelector('#ticker').addEventListener('input', function() {
        let input = parseInt(document.querySelector('#ticker').value)
        if (input != null) {
            window.tick = input
            window.activeTicker = window.tick
            if (!window.flag) {
                window.flag = true
                document.querySelector('#minValue').value = window.tick - 400
                document.querySelector('#maxValue').value = window.tick + 400
            }
        }
    });
</script>

# Marlowe Contract

Let's generate marlowe European Call contract first. Alice and Bob are betting on BTC price. The risk is amortized for small price changes between Alice's premium at risk and Bob's margin at risk, leveraged by notional. The deal is P2P, thus fully collatrerized, no "pooled margin account" risks involved.

* Contract strike is <input type="number" id="strike" name="quantity" min="1" max="100000" value="30000"></input> usd
* Alice pays premium of <input type="number" id="premium" name="quantity" min="1" max="100000" value="200"></input> usd
* Notional/Leverage is <input type="number" id="notional" name="quantity" min="1" max="100000" value="1"></input> btc
* Bob's margin is <input type="number" id="margin" name="quantity" min="1" max="100000" value="300"></input> usd
* Oracle range is <input type="number" id="minValue" name="quantity" min="1" max="100000" value="29900"></input> to <input type="number" id="maxValue" name="quantity" min="1" max="100000" value="30700"></input>

<script>

    window.extractTerms = () => {
        return {
            strike: parseInt(document.querySelector('#strike').value),
            premium: parseInt(document.querySelector('#premium').value),
            notional: parseInt(document.querySelector('#notional').value),
            margin: parseInt(document.querySelector('#margin').value),
            minValue: parseInt(document.querySelector('#minValue').value),
            maxValue: parseInt(document.querySelector('#maxValue').value),
        }
        
    }
</script>

<button type="button" style="height: 30px" onclick="document.querySelector('#marlowe-frame').style = ''; window.api.injectMarloweContract({template: 'eurocall', terms: extractTerms()}); ">Generate Marlowe contract!</button>
<br/>
<br/>
<iframe src="./marlowe.html" title="Marlowe" height="800" width = "100%" id = "marlowe-frame" style = "filter: blur(1.5px) grayscale(80%) hue-rotate(30deg) sepia(10%); pointer-events: none" frameborder="no"></iframe>

# Sampling

Let's sample Marlowe contract and plot the payoff curve

<button type="button" style="height: 30px;" onclick="window.api.sampleMarloweContract(); ">Sample Marlowe contract!</button>
<br/>

<button type="button" style="height: 30px;" onclick="window.api.plotMarloweContractAlpha(); ">Plot with Wolfram Alpha</button>
<button type="button" style="height: 30px;" onclick="window.api.downloadSampledContractAsCsv(); ">Download as CSV</button>