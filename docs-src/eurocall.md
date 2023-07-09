---
title: Eurocall
layout: default
---



# Wolfram Oracle

BTC price is: <input id = "ticker"></input> (<input type="checkbox" id="lock" name="lock" >lock</input>)

<script>
    window.addEventListener("tick", () => {
        if (!document.querySelector('#lock').checked) {
            document.querySelector('#ticker').value = window.tick
            window.activeTicker = window.tick
        }
    })
    document.querySelector('#ticker').addEventListener('input', function() {
        let input = parseInt(document.querySelector('#ticker').value)
        if (input != null) {
            window.tick = input
            window.activeTicker = window.tick
        }
    });
</script>

# Marlowe Contract

Let's generate marlowe European Call contract first. Alice and Bob are betting on BTC price. The risk is amortized for small price changes between Alice's premium at risk and Bob's margin at risk, leveraged by notional. The deal is P2P, thus fully collatrerized, no "pooled margin account" risks involved.

* Contract strike is <input type="number" id="strike" name="quantity" min="1" max="100000" value="30000"></input> usd
* Alice pays premium of <input type="number" id="premium" name="quantity" min="1" max="100000" value="200"></input> usd
* Notional/Leverage is <input type="number" id="notional" name="quantity" min="1" max="100000" value="1"></input> btc
* Bob's margin is <input type="number" id="margin" name="quantity" min="1" max="100000" value="300"></input> usd

<script>
    window.extractTerms = () => {
        return {
            strike: parseInt(document.querySelector('#strike').value),
            premium: parseInt(document.querySelector('#premium').value),
            notional: parseInt(document.querySelector('#notional').value),
            margin: parseInt(document.querySelector('#margin').value)
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
<button type="button" style="height: 30px;" onclick="window.api.sampleMarloweContract(); ">Download as CSV</button>