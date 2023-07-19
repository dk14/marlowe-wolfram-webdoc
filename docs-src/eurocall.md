---
title: Eurocall
layout: default
---



# Wolfram Oracle
Wolfram app-id: <input id = "wf-app-id" value="6WU6JX-46EP5U9AGX"></input>
<br/>
Cors proxy prefix: <input id = "cors-proxy-prefix" value="https://corsproxy.io/?"></input>

BTC price is: <input id = "ticker"></input> (<input type="checkbox" id="lock" name="lock" >lock</input>)
<br/>
[source: Wolfram Alpha](https://api.wolframalpha.com/v1/result?appid=6WU6JX-46EP5U9AGX&i=1%20btc%20to%20usd%20number)

<script>
    window.i = 0
    window.flag = false
    window.wfAppId = document.querySelector('#wf-app-id').value
    window.corsProxyPrefix = document.querySelector('#cors-proxy-prefix').value

    window.addEventListener("tick", () => {
        if (!document.querySelector('#lock').checked) {
            document.querySelector('#ticker').value = window.tick
            window.activeTicker = window.tick
            if (!window.flag) {
                window.flag = true
                document.querySelector('#strike').value = window.tick
                document.querySelector('#minValue').value = parseInt(document.querySelector('#strike').value) - 200
                document.querySelector('#maxValue').value = parseInt(document.querySelector('#strike').value) + (parseInt(document.querySelector('#premium').value) + parseInt(document.querySelector('#margin').value)) * parseInt(document.querySelector('#notional').value) + 200
            }
            
        }
    })
    window.addEventListener("sampling-started", () => {
        document.querySelector("#marlowe-frame").style="display:none"
        document.querySelector("#sampling-progress").style=""
    }) 

    window.addEventListener("sampled", () => {
        document.querySelector("#marlowe-frame").style=""
        document.querySelector("#sampling-progress").style="display:none"
        document.querySelector("#plot-alpha-btn").hidden=false
        document.querySelector("#download-csv-btn").hidden=false
        document.querySelector("#download-nb-btn").hidden=false
    }) 

    window.addEventListener("sampling-step", () => {
        console.log(window.api.state.samplingProgress)
        document.querySelector("#sampling-progress").value = window.api.state.samplingProgress * 100
    })

    window.addEventListener("clock", () => {
        window.i++
        if (document.querySelector("#img-loading-placeholder") != null && document.querySelector("#img-loading-placeholder") != undefined) {
            document.querySelector("#img-loading-placeholder").textContent = `Generating Wolfram Plot${".".repeat(window.i % 5)}`
        }
        try {
            document.querySelector("#oracle-public-key").textContent = window.api.schnorrApi().getPk(document.querySelector("#oracle-secret").value)
        } catch {}
        

    })

    document.querySelector('#ticker').addEventListener('input', function() {
        let input = parseInt(document.querySelector('#ticker').value)
        if (input != null) {
            window.tick = input
            window.activeTicker = window.tick
            document.querySelector('#strike').value = window.tick
            document.querySelector('#minValue').value = parseInt(document.querySelector('#strike').value) - 200
            document.querySelector('#maxValue').value = parseInt(document.querySelector('#strike').value) + (parseInt(document.querySelector('#premium').value) + parseInt(document.querySelector('#margin').value)) * parseInt(document.querySelector('#notional').value) + 200
        }
    });
    document.querySelector('#wf-app-id').addEventListener('input', function() {
        window.wfAppId = document.querySelector('#wf-app-id').value
    });
    document.querySelector('#cors-proxy-prefix').addEventListener('input', function() {
        window.corsProxyPrefix = document.querySelector('#cors-proxy-prefix').value
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

<button type="button" style="height: 30px" onclick="
    document.querySelector('#marlowe-frame').style = ''; 
    window.api.injectMarloweContract({template: 'eurocall', terms: extractTerms()}); 
    document.querySelector('#sample-btn').disabled=false; 
    document.querySelector('#plot-alpha-btn').hidden=true;
    document.querySelector('#download-csv-btn').hidden=true;
    document.querySelector('#download-nb-btn').hidden=true; 
    document.querySelector('#wolf-plot').innerHTML=''">
Generate Marlowe contract!
</button>
<br/>
<br/>
<progress id="sampling-progress" value="0" max="100" style="display:none"></progress>

<iframe src="./marlowe.html" 
title="Marlowe" height="800" width = "100%" id = "marlowe-frame" 
style = "filter: blur(1.5px) grayscale(80%) hue-rotate(30deg) sepia(10%); pointer-events: none" 
frameborder="no">
</iframe>

# Sampling

Let's sample Marlowe contract and plot the payoff curve

<button type="button" id="sample-btn" style="height: 30px;" disabled onclick="window.api.sampleMarloweContract().then(() => window.api.embedWolfPlot(document.getElementById('wolf-plot')))">Sample Marlowe contract!</button>
<br/>

<button type="button" id="plot-alpha-btn" style="height: 30px;" hidden onclick="window.api.plotMarloweContractAlpha(); ">Plot with Wolfram Alpha</button>
<button type="button" id="download-csv-btn" style="height: 30px;" hidden onclick="window.api.downloadSampledContractAsCsv(); ">Download as CSV</button>
<button type="button" id="download-nb-btn" style="height: 30px;" hidden onclick="window.api.downloadWolfNb(); ">Download as Wolfram Notebook</button>
<br/>
<div id = "wolf-plot"></div>

# Prepare Oracle R and s values

Oracle quesion: "What is the price of BTC"
<br/>
Oracle secret (hex): <br/><input id = "oracle-secret" value="B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF" size = 80></input>

Oracle's public key: <br/><span id = "oracle-public-key"></span>
