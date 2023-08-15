---
title: 1. Eurocall
layout: default
---



# Wolfram Oracle
Wolfram app-id (use your own, https://products.wolframalpha.com/simple-api/documentation): <input id = "wf-app-id" value="6WU6JX-46EP5U9AGX"></input>
<br/>
Cors proxy prefix (to query wolfram services): <input id = "cors-proxy-prefix" value="https://corsproxy.io/?"></input>

BTC price is: <input id = "ticker"></input> (<input type="checkbox" id="lock" name="lock" >lock</input>)
<br/>
[source: Wolfram Alpha](https://api.wolframalpha.com/v1/result?appid=6WU6JX-46EP5U9AGX&i=1%20btc%20to%20usd%20number)

<script>
    window.i = 0
    window.flag = false
    window.wfAppId = document.querySelector('#wf-app-id').value
    window.corsProxyPrefix = document.querySelector('#cors-proxy-prefix').value

    let btcUpdater = () => {
        try {
            console.log("recompute transactions start...")
            document.querySelector("#oracle-public-key").textContent = window.api.schnorrApi().getPk(document.querySelector("#oracle-secret").value)
            let question =  window.api.schnorrApi().hashString(document.querySelector("#oracle-question").value)//"1111111".padStart(64, "0")
            //console.log("question = " + document.querySelector("#oracle-question").value)
            //console.log("questionhash = " + question)
            document.querySelector("#oracle-k-value").textContent = window.api.schnorrApi().genNonce(document.querySelector("#oracle-secret").value, question, "C87AA53824B4D7AE2EB035A2B5BBBCCC080E76CDC6D1692C4B0B62D798E6D906")
            document.querySelector("#oracle-r-value").textContent = window.api.schnorrApi().getPk(document.querySelector("#oracle-k-value").textContent)
            

            let answer = window.activeTicker.toString(16).padStart(64, "0")

            document.querySelector("#oracle-answer").textContent = window.activeTicker

            document.querySelector("#twisted-pk").textContent = window.api.schnorrApi().adaptorPublic(document.querySelector("#oracle-public-key").textContent, answer, document.querySelector("#oracle-r-value").textContent).padStart(64, "0")

            document.querySelector("#oracle-s-value").textContent = window.api.schnorrApi().signatureSValue(document.querySelector("#oracle-secret").value, document.querySelector("#oracle-k-value").textContent, answer).padStart(64, "0")

            let aliceAmountIn = parseInt(document.querySelector("#alice-amount-in").value)
            let aliceSecret = document.querySelector("#alice-secret").value
            let aliceTxId = document.querySelector("#alice-tx-id").value
            let aliceVout = parseInt(document.querySelector("#alice-vout").value)

            let bobAmountIn = parseInt(document.querySelector("#bob-amount-in").value)
            let bobSecret = document.querySelector("#bob-secret").value
            let bobTxId = document.querySelector("#bob-tx-id").value
            let bobVout = parseInt(document.querySelector("#bob-vout").value)

            let aliceIn = {
                "txid": aliceTxId,
                "vout": aliceVout,
                "secrets": [aliceSecret]
            }

            let bobIn = {
                "txid": bobTxId,
                "vout": bobVout,
                "secrets": [bobSecret]
            }

            let alicePk = window.api.schnorrApi().getPk(aliceSecret)
            let bobPk = window.api.schnorrApi().getPk(bobSecret)

            let openingTx = window.api.txApi().genOpeningTx(aliceIn, bobIn, alicePk, bobPk, aliceAmountIn, bobAmountIn)

            document.querySelector("#opening-tx-id").textContent = openingTx.txid
            document.querySelector("#opening-hex").textContent = openingTx.hex

            let multiIn = {
                "txid": openingTx.txid,
                "vout": 0,
                "secrets": [aliceSecret, bobSecret]
            }

            let closingTx = window.api.txApi().genClosingTx(multiIn, alicePk, bobPk, aliceAmountIn, bobAmountIn)

            document.querySelector("#closing-tx-id").textContent = closingTx.txid
            document.querySelector("#closing-hex").textContent = closingTx.hex

            console.log(alicePk)
            console.log(document.querySelector("#twisted-pk").textContent)
            let disputeTx = window.api.txApi().genAliceCet(multiIn, alicePk, bobPk, document.querySelector("#twisted-pk").textContent, aliceAmountIn, bobAmountIn)

            document.querySelector("#dispute-tx-id").textContent = disputeTx.txid
            document.querySelector("#dispute-hex").textContent = disputeTx.hex

            let redemptionIn = {
                "txid": disputeTx.txid,
                "vout": 0,
                "secrets": [aliceSecret]
            }

            let redemptionTx = window.api.txApi().genAliceCetRedemption(redemptionIn, document.querySelector("#twisted-pk").textContent, alicePk, document.querySelector("#oracle-s-value").textContent, aliceAmountIn)

            document.querySelector("#dispute-red-tx-id").textContent = redemptionTx.txid
            document.querySelector("#dispute-red-hex").textContent = redemptionTx.hex
            console.log("...recompute transactions end")
        } catch (err) {
            console.log(err.stack)
        }
    }
    btcUpdater()

    window.addEventListener("tick", () => {
        if (!document.querySelector('#lock').checked) {
            document.querySelector('#ticker').value = window.tick
            window.activeTicker = window.tick
            if (!window.flag) {
                window.flag = true
                document.querySelector('#strike').value = window.tick
                document.querySelector('#minValue').value = parseInt(document.querySelector('#strike').value) - 200
                document.querySelector('#maxValue').value = parseInt(document.querySelector('#strike').value) + (parseInt(document.querySelector('#premium').value) + parseInt(document.querySelector('#margin').value)) * parseInt(document.querySelector('#notional').value) + 200
                btcUpdater()
            }
            
        }
    })
    window.addEventListener("sampling-started", () => {
        let height = document.querySelector("#marlowe-frame").clientHeight
        document.querySelector("#marlowe-frame").style="display:none"
        document.querySelector("#progress-offset").style=`height:${height}px`
        document.querySelector("#sampling-progress").style=""
    }) 

    window.addEventListener("sampled", () => {
        document.querySelector("#marlowe-frame").style=""
        document.querySelector("#sampling-progress").style="display:none"
        document.querySelector("#progress-offset").style="display:none"
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

Let's generate marlowe European Call contract first. Alice and Bob are betting on BTC price. The risk is amortized for small price changes between Alice's premium at risk and Bob's margin at risk, leveraged by notional. The deal is P2P, thus fully collatrerized, no "pooled margin account" risks involved.<br/>

Cardano version: https://github.com/dk14/marlowe-wolfram-starter-kit/blob/main/22-eurocall.ipynb

Contract terms:

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
<div id="progress-offset" style="display:none"></div>


*Note: this is webarchived slightly edited SNAPSHOT of open source Marlowe Playground, **NOT ACTUAL** PLAYGROUND BY IOHK (see https://replayweb.page/docs/wacz-format, actual Playground might differ: https://play.marlowe.iohk.io/, https://github.com/input-output-hk/marlowe-playground). Do NOT trust this for any other purposes than educational. Generator auto-fills the contract for you (since original playground doesn't support that), so you could simulate the contract. USE actual https://play.marlowe.iohk.io/ for contract development.*

<progress id="sampling-progress" value="0" max="100" style="display:none"></progress>

<iframe src="./marlowe.html" 
title="Marlowe" height="800" width = "100%" id = "marlowe-frame" 
style = "filter: blur(1.5px) grayscale(80%) hue-rotate(30deg) sepia(10%); pointer-events: none" 
frameborder="no">
</iframe>

# Sampling

Let's sample Marlowe contract and plot the payoff curve. 
*Note: contract has to be generated first*

<button type="button" id="sample-btn" style="height: 30px;" disabled onclick="window.api.sampleMarloweContract().then(() => window.api.embedWolfPlot(document.getElementById('wolf-plot')))">Sample Marlowe contract!</button>
<br/>

<button type="button" id="plot-alpha-btn" style="height: 30px;" hidden onclick="window.api.plotMarloweContractAlpha(); ">Plot with Wolfram Alpha</button>
<button type="button" id="download-csv-btn" style="height: 30px;" hidden onclick="window.api.downloadSampledContractAsCsv(); ">Download as CSV</button>
<button type="button" id="download-nb-btn" style="height: 30px;" hidden onclick="window.api.downloadWolfNb(); ">Download as Wolfram Notebook</button>
<br/>
<div id = "wolf-plot"></div>

# Prepare Oracle R and s values for Bitcoin DLC
  <script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

Warning: Don't use any of it with actual Bitcoin mainnet - educational purposes only <br/>

Oracle quesion: <input id = "oracle-question" value="What is the price of BTC in USD" size = 80></input>
<br/>
Oracle secret (hex): <br/><input id = "oracle-secret" value="B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF" size = 80></input>

Oracle's public key: <br/>
\\(V = secret \circ G\\)<br/>
<span id = "oracle-public-key" color="green"></span><br/>

Oracle's secret k-value: 
<br/>
\\( k= hash(secret_{oracle} G || hash(aux) || question) \mod n \\)
<br/><span id = "oracle-k-value" color="green"></span><br/>
*(Security note: k-value is derived from hash-encrypted question)*
<br/>

Oracle's public commited R-value: <br/>
\\( R=kG \\)
<br/>
<span id = "oracle-r-value" color="green"></span><br/>
*(this value is returned by the oracle API when someone is asking for a question that is not answered yet)*
<br/>

Oracle's future answer: <br/><span id = "oracle-answer" color="green"></span><br/>

Tweaked public key (adaptor point), contract parties derive it from R, possible answer and oracle's public key 
<br/>\\( Pub_{Alice, question} = Pub_{Alice} + s_{answer}G\\), <br/> where \\(s_{answer}G = R − hash(answer || R)V\\)
<br/><span id = "twisted-pk" color="green"></span><br/>

When the answer is ready...<br/> Oracle publishes s-value (signature): <br/><span id = "oracle-s-value" color="green"></span><br/>
*(Note: signature is derived from pre-commited k-value, thus R-value part would be commited R-value as well)*
<br/>

This value is gonna be used as a secret (private key corresponding to adaptor public key) to co-sign CET transactions in case of dispute.

# Prepare Transactions for Bitcoin DLC

Original DLC paper: https://adiabat.github.io/dlc.pdf <br/>
DLC and Oracles: https://docs.google.com/document/d/1TVYvpZwwGLrSYHtnpoEoSE1csMSZfZ-A7xF9w0viMIs/edit?usp=sharing <br/>
Decode TX hexes (choose Testnet): https://live.blockcypher.com/btc/decodetx/ <br/>

Alice: 
* secret (hex): <br/><input id = "alice-secret" value="C90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B14E5C9" size = 80></input>
* utxo value: <input type="number" id="alice-amount-in" name="quantity" min="1" max="100000" value="100"></input>
* txid (hex): <br/><input id = "alice-tx-id" value="6220e8113cb985b6c9bef8acb43b7573ba7f6b3230f27339d3d357ead51f65cc" size = 80></input>
* vout: <input type="number" id="alice-vout" name="quantity" min="0" max="100" value="0"></input>

Bob:
* secret (hex): <br/><input id = "bob-secret" value="C90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B14E5C7" size = 80></input>
* utxo value: <input type="number" id="bob-amount-in" name="quantity" min="1" max="100000" value="100"></input>
* txid (hex): <br/><input id = "bob-tx-id" value="6220e8113cb985b6c9bef8acb43b7573ba7f6b3230f27339d3d357ead51f65cc" size = 80></input>
* vout: <input type="number" id="bob-vout" name="quantity" min="0" max="100" value="1"></input>
----
\\(OpeningTx: txin_{AliceCollateral}(Pub_{Alice}) + txin_{BobCollateral}(Pub_{Bob}) = txout_{JointCollateral}(Pub_{Alice} + Pub_{Bob})\\) <br/><br/>
**Opening TxId:** <br/><span id = "opening-tx-id" color="green"></span><br/>
**Opening Hex:** <br/><span id = "opening-hex" color="green"></span><br/>

----
\\(ClosingTx: txin_{JointCollateral}(Pub_{Alice} + Pub_{Bob}) = txout_{AlicePayoff}(Pub_{Alice}) + txout_{BobPayoff}(Pub_{Bob})\\) <br/><br/>
**Closing TxId:** <br/><span id = "closing-tx-id" color="green"></span><br/>
**Closing Hex:** <br/><span id = "closing-hex" color="green"></span><br/>

----
\\(DisputeTx: txin_{JointCollateral}(Pub_{Alice} + Pub_{Bob}) = txout_{AlicePayoff}(Pub_{Alice} + s_{answer}G) + txout_{BobPayoff}(Pub_{Bob})\\) <br/>
\\(s_{answer}G\\) is known in advance, while \\(s_{answer}\\) will be published by Oracle <br/><br/>

**Dispute CET TxId:** <br/><span id = "dispute-tx-id" color="green"></span><br/>
**Dispute CET Hex:** <br/><span id = "dispute-hex" color="green"></span><br/>

----
\\(RedemptionTx: txin_{AlicePayoff}(Pub_{Alice} + s_{answer}G) = txout_{AlicePayoff}(Pub_{Alice}) \\) <br/>
\\(signature = (s_{Alice} + s_{answer}) || (R_{Alice} + R_{question})\\)
<br/><br/>

**Dispute Redemption TxId:** <br/><span id = "dispute-red-tx-id" color="green"></span><br/>
**Dispute Redemption Hex:** <br/><span id = "dispute-red-hex" color="green"></span><br/>

----
<br/>

![image](diagram.png)

<script>
    document.querySelector('#oracle-question').addEventListener('input', btcUpdater)
    document.querySelector('#oracle-secret').addEventListener('input', btcUpdater)
    document.querySelector('#alice-amount-in').addEventListener('input', btcUpdater)
    document.querySelector('#alice-secret').addEventListener('input', btcUpdater)
    document.querySelector('#alice-tx-id').addEventListener('input', btcUpdater)
    document.querySelector('#alice-vout').addEventListener('input', btcUpdater)
    document.querySelector('#bob-amount-in').addEventListener('input', btcUpdater)
    document.querySelector('#bob-secret').addEventListener('input', btcUpdater)
    document.querySelector('#bob-tx-id').addEventListener('input', btcUpdater)
    document.querySelector('#bob-vout').addEventListener('input', btcUpdater)
</script>