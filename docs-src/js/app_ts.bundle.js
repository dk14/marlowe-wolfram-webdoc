(self["webpackChunkmarlowe_wolfram_webdoc"] = self["webpackChunkmarlowe_wolfram_webdoc"] || []).push([["app_ts"],{

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var dr_1 = __webpack_require__(/*! ./util/dr */ "./util/dr.ts");
var templates_1 = __webpack_require__(/*! ./util/templates */ "./util/templates.ts");
var schnorr_1 = __webpack_require__(/*! ./util/schnorr */ "./util/schnorr.ts");
var tx_1 = __webpack_require__(/*! ./util/tx */ "./util/tx.ts");
(0, dr_1.darkify)(window.document);
if (window.marloweWindow != undefined) {
    window.marloweWindow().then(function (mw) {
        window.api = {
            state: {
                isMarloweContractGenerated: false,
                isMarloweContractSampled: false,
                samplingInProgress: false
            },
            schnorrApi: schnorr_1.schnorrApi,
            txApi: tx_1.txApi,
            injectMarloweContract: function (c, updateState) {
                if (updateState === void 0) { updateState = true; }
                return __awaiter(void 0, void 0, void 0, function () {
                    var marloweHome, dontSave, raw, goToEditor, menuBar, meta, staticAnalysis, toInject, _a, goToBlocks, cancel;
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (updateState) {
                                    window.api.state.contract = c;
                                }
                                marloweHome = mw.document.querySelector(".h-10");
                                marloweHome === null || marloweHome === void 0 ? void 0 : marloweHome.click();
                                dontSave = mw.document.querySelector(".mr-medium");
                                dontSave === null || dontSave === void 0 ? void 0 : dontSave.click();
                                if (!(window.api.state.template == undefined)) return [3 /*break*/, 3];
                                return [4 /*yield*/, fetch(window.location.origin + "/marlowe-wolfram-webdoc/contracts/".concat(c.template, ".marlowe"))];
                            case 1: return [4 /*yield*/, (_c.sent()).text()];
                            case 2:
                                raw = _c.sent();
                                window.api.state.template = raw;
                                return [3 /*break*/, 4];
                            case 3:
                                raw = window.api.state.template;
                                _c.label = 4;
                            case 4:
                                goToEditor = mw.document.querySelector('.mr-4');
                                goToEditor === null || goToEditor === void 0 ? void 0 : goToEditor.click();
                                menuBar = mw.document.querySelector(".menu-bar");
                                menuBar === null || menuBar === void 0 ? void 0 : menuBar.setAttribute('style', "display: none");
                                meta = mw.document.querySelector(".text-secondary");
                                meta === null || meta === void 0 ? void 0 : meta.setAttribute('style', "display: none");
                                staticAnalysis = mw.document.querySelector(".text-gray-darkest");
                                staticAnalysis === null || staticAnalysis === void 0 ? void 0 : staticAnalysis.setAttribute('style', "display: none");
                                toInject = (0, templates_1.processTemplate)(c.template, c.terms, raw);
                                _c.label = 5;
                            case 5:
                                _c.trys.push([5, 7, , 8]);
                                return [4 /*yield*/, mw.monaco.editor.getModels()[mw.monaco.editor.getModels().length - 2].dispose()];
                            case 6:
                                _c.sent();
                                return [3 /*break*/, 8];
                            case 7:
                                _a = _c.sent();
                                return [3 /*break*/, 8];
                            case 8: return [4 /*yield*/, mw.monaco.editor.getModels()[mw.monaco.editor.getModels().length - 1].setValue(toInject)];
                            case 9:
                                _c.sent();
                                goToBlocks = (_b = mw.document.querySelector('.group')) === null || _b === void 0 ? void 0 : _b.querySelector('.btn');
                                goToBlocks === null || goToBlocks === void 0 ? void 0 : goToBlocks.click();
                                cancel = mw.document.querySelector(".uppercase");
                                cancel === null || cancel === void 0 ? void 0 : cancel.click();
                                window.api.state.isMarloweContractGenerated = true;
                                window.dispatchEvent(new Event("state"));
                                return [2 /*return*/];
                        }
                    });
                });
            },
            sampleMarloweContract: function () { return __awaiter(void 0, void 0, void 0, function () {
                var step, i, c, sendToSimulator, startSimulation, aliceDeposit, bobDeposit, skipToExercise, confirm_1, log, extractBobPayoffOpt, extractAlicePayoffOpt, bobPayoff, alicePayoff, endSimulation;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            window.dispatchEvent(new Event("sampling-started"));
                            window.api.state.samplingInProgress = true;
                            window.api.state.sample = [];
                            step = 100;
                            i = window.api.state.contract.terms.minValue;
                            _c.label = 1;
                        case 1:
                            if (!(i <= window.api.state.contract.terms.maxValue)) return [3 /*break*/, 7];
                            c = __assign(__assign({}, window.api.state.contract), { terms: __assign({}, window.api.state.contract.terms) });
                            window.dispatchEvent(new Event("sampling-step"));
                            c.terms.minValue = i;
                            c.terms.maxValue = i;
                            window.api.state.samplingProgress = (i - window.api.state.contract.terms.minValue) / (window.api.state.contract.terms.maxValue - window.api.state.contract.terms.minValue);
                            return [4 /*yield*/, window.api.injectMarloweContract(c, false)];
                        case 2:
                            _c.sent();
                            console.log(i);
                            sendToSimulator = mw.document.querySelectorAll('button')[1];
                            _c.label = 3;
                        case 3:
                            if (!sendToSimulator['disabled']) return [3 /*break*/, 5];
                            console.log("AWAIT");
                            return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                        case 4:
                            _c.sent();
                            return [3 /*break*/, 3];
                        case 5:
                            //await new Promise(r => setTimeout(r, 3000));
                            sendToSimulator.click();
                            startSimulation = mw.document.querySelectorAll('button')[2];
                            startSimulation.click();
                            aliceDeposit = mw.document.querySelector('.plus-btn');
                            aliceDeposit === null || aliceDeposit === void 0 ? void 0 : aliceDeposit.click();
                            bobDeposit = mw.document.querySelector('.plus-btn');
                            bobDeposit === null || bobDeposit === void 0 ? void 0 : bobDeposit.click();
                            skipToExercise = mw.document.querySelectorAll('.plus-btn')[2];
                            skipToExercise === null || skipToExercise === void 0 ? void 0 : skipToExercise.click();
                            confirm_1 = mw.document.querySelector('.plus-btn');
                            confirm_1 === null || confirm_1 === void 0 ? void 0 : confirm_1.click();
                            log = mw.document.querySelector('.grid-cols-description-location');
                            extractBobPayoffOpt = (_a = /The contract pays ₳ (\d+) from account of Bob to Bob wallet/.exec(log.innerText)) === null || _a === void 0 ? void 0 : _a[1];
                            extractAlicePayoffOpt = (_b = /The contract pays ₳ (\d+) from account of Alice to Alice wallet/.exec(log.innerText)) === null || _b === void 0 ? void 0 : _b[1];
                            bobPayoff = extractBobPayoffOpt == null || Number.isNaN(parseInt(extractBobPayoffOpt)) ? 0 : parseInt(extractBobPayoffOpt);
                            alicePayoff = extractAlicePayoffOpt == null || Number.isNaN(parseInt(extractAlicePayoffOpt)) ? 0 : parseInt(extractAlicePayoffOpt);
                            //console.log(window.api.state.sample)
                            window.api.state.sample.push({ oracleValue: i, alicePayout: alicePayoff, bobPayout: bobPayoff });
                            endSimulation = mw.document.querySelectorAll('button')[0];
                            endSimulation.click();
                            _c.label = 6;
                        case 6:
                            i += step;
                            return [3 /*break*/, 1];
                        case 7:
                            console.log(window.api.state.sample);
                            window.api.state.samplingInProgress = false;
                            window.api.state.isMarloweContractSampled = true;
                            window.dispatchEvent(new Event("state"));
                            window.dispatchEvent(new Event("sampled"));
                            window.api.injectMarloweContract(window.api.state.contract, false);
                            return [2 /*return*/];
                    }
                });
            }); },
            plotMarloweContractAlpha: function () {
                var query = encodeURIComponent('plot ' + window.api.state.sample.map(function (row) { return "(".concat(row.oracleValue, ", ").concat(row.alicePayout, ")"); }));
                var url = 'https://www.wolframalpha.com/input?i=' + query;
                window.open(url);
            },
            downloadSampledContractAsCsv: function () {
                var csvContent = "data:text/csv;charset=utf-8,\noracle,alice,bob\n" + window.api.state.sample.map(function (row) { return "".concat(row.oracleValue, ", ").concat(row.alicePayout, ", ").concat(row.bobPayout); }).join("\n");
                var encodedUri = encodeURI(csvContent);
                window.open(encodedUri);
            },
            generateWolfNbUri: function () { return __awaiter(void 0, void 0, void 0, function () {
                var url, template, rowbox, points, nb, nbContent;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = window.location.origin + "/marlowe-wolfram-webdoc/notebooks/wolfram-plot.nb";
                            return [4 /*yield*/, fetch(url)];
                        case 1: return [4 /*yield*/, (_a.sent()).text()];
                        case 2:
                            template = (_a.sent());
                            rowbox = function (row) { return "RowBox[{\"{\",RowBox[{\"".concat(row.oracleValue, "\",\",\",\" \",\"").concat(row.alicePayout, "\"}],\"}\"}]"); };
                            points = window.api.state.sample.map(rowbox).join(",\",\",\" \",");
                            nb = template.replace("RowBox[{\"{\",RowBox[{\"1\",\",\",\" \",\"1\"}],\"}\"}],\",\",\" \",RowBox[{\"{\",RowBox[{\"2\",\",\",\" \",\"2\"}],\"}\"}]", points);
                            nbContent = "data:text/plain;base64," + btoa(nb);
                            return [2 /*return*/, encodeURI(nbContent)];
                    }
                });
            }); },
            downloadWolfNb: function () { return __awaiter(void 0, void 0, void 0, function () {
                var link, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            link = document.createElement('a');
                            link.download = 'wolfram-plot.nb';
                            _a = link;
                            return [4 /*yield*/, window.api.generateWolfNbUri()];
                        case 1:
                            _a.href = _b.sent();
                            link.click();
                            return [2 /*return*/];
                    }
                });
            }); },
            embedWolfPlot: function (container) { return __awaiter(void 0, void 0, void 0, function () {
                var query, url1, proxyUrl, result, url2, img;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            container.innerHTML = '<span id="img-loading-placeholder"></span>';
                            query = encodeURIComponent('plot ' + window.api.state.sample.map(function (row) { return "(".concat(row.oracleValue, ", ").concat(row.alicePayout, ")"); }).join(","));
                            url1 = "https://api.wolframalpha.com/v2/query?input=".concat(query, "&appid=").concat(window.wfAppId, "&output=JSON");
                            proxyUrl = window.corsProxyPrefix + encodeURIComponent(url1);
                            return [4 /*yield*/, fetch(proxyUrl)];
                        case 1: return [4 /*yield*/, (_a.sent()).json()];
                        case 2:
                            result = (_a.sent());
                            url2 = result.queryresult.pods[1].subpods[0].img.src;
                            console.log(url2);
                            img = document.createElement('img');
                            img.src = url2;
                            img.setAttribute("width", "500");
                            container.innerHTML = '';
                            container.appendChild(img);
                            return [2 /*return*/];
                    }
                });
            }); }
        };
        var poll = function () { return __awaiter(void 0, void 0, void 0, function () {
            var original, url, response, raw, rx, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        original = "https://api.wolframalpha.com/v1/result?appid=".concat(window.wfAppId, "&i=1%20btc%20to%20usd%20number");
                        url = window.corsProxyPrefix + encodeURIComponent(original);
                        response = fetch(url);
                        return [4 /*yield*/, response];
                    case 1: return [4 /*yield*/, (_a.sent()).text()];
                    case 2:
                        raw = (_a.sent());
                        rx = /\d+/g;
                        res = rx.exec(raw);
                        if (res != null)
                            window.tick = parseInt(res[0]);
                        window.dispatchEvent(new Event("tick"));
                        return [2 /*return*/];
                }
            });
        }); };
        poll();
        setInterval(poll, 10000);
        setInterval(function () { return window.dispatchEvent(new Event("clock")); }, 500);
    });
}


/***/ }),

/***/ "./util/dr.ts":
/*!********************!*\
  !*** ./util/dr.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.darkify = void 0;
var darkreader_1 = __webpack_require__(/*! darkreader */ "./node_modules/darkreader/darkreader.js");
function addStyle(doc, styleString) {
    var style = doc.createElement('style');
    style.textContent = styleString;
    doc.head.append(style);
}
var darkify = function (doc) { return __awaiter(void 0, void 0, void 0, function () {
    var CSS;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, darkreader_1.setFetchMethod)(window.fetch);
                (0, darkreader_1.enable)({
                    brightness: 100,
                    contrast: 90,
                    sepia: 10,
                });
                return [4 /*yield*/, (0, darkreader_1.exportGeneratedCSS)()];
            case 1:
                CSS = _a.sent();
                addStyle(doc, CSS);
                return [2 /*return*/];
        }
    });
}); };
exports.darkify = darkify;
console.log(window.location.href);


/***/ }),

/***/ "./util/mu-sig.ts":
/*!************************!*\
  !*** ./util/mu-sig.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sign = void 0;
var sign = function (pk1, pk2, secret1, secret2, msg) {
    var assert = __webpack_require__(/*! assert */ "./node_modules/assert/build/assert.js");
    var Buffer = (__webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer);
    var BigInteger = __webpack_require__(/*! bigi */ "./node_modules/bigi/lib/index.js");
    var convert = (__webpack_require__(/*! bip-schnorr */ "./node_modules/bip-schnorr/src/index.js").convert);
    var muSig = (__webpack_require__(/*! bip-schnorr */ "./node_modules/bip-schnorr/src/index.js").muSig);
    var schnorr = __webpack_require__(/*! bip-schnorr */ "./node_modules/bip-schnorr/src/index.js");
    var math = (__webpack_require__(/*! bip-schnorr */ "./node_modules/bip-schnorr/src/index.js").math);
    var randomBytes = __webpack_require__(/*! randombytes */ "./node_modules/randombytes/browser.js");
    var ecurve = __webpack_require__(/*! ecurve */ "./node_modules/ecurve/lib/index.js");
    var curve = ecurve.getCurveByName('secp256k1');
    var randomBuffer = function (len) { return Buffer.from(randomBytes(len)); };
    var publicData = {
        pubKeys: [
            Buffer.from(pk1, 'hex'),
            Buffer.from(pk2, 'hex')
        ],
        message: msg,
        pubKeyHash: null,
        pubKeyCombined: null,
        pubKeyParity: null,
        commitments: [],
        nonces: [],
        nonceCombined: null,
        partialSignatures: [],
        signature: null,
    };
    // data only known by the individual party, these values are never shared
    // between the signers!
    var signerPrivateData = [
        // signer 1
        {
            privateKey: BigInteger.fromHex(secret1),
            session: null,
        },
        // signer 2
        {
            privateKey: BigInteger.fromHex(secret2),
            session: null,
        },
    ];
    // -----------------------------------------------------------------------
    // Step 1: Combine the public keys
    // The public keys P_i are combined into the combined public key P.
    // This can be done by every signer individually or by the initializing
    // party and then be distributed to every participant.
    // -----------------------------------------------------------------------
    publicData.pubKeyHash = muSig.computeEll(publicData.pubKeys);
    var pkCombined = muSig.pubKeyCombine(publicData.pubKeys, publicData.pubKeyHash);
    publicData.pubKeyCombined = convert.intToBuffer(pkCombined.affineX);
    publicData.pubKeyParity = math.isEven(pkCombined);
    // -----------------------------------------------------------------------
    // Step 2: Create the private signing session
    // Each signing party does this in private. The session ID *must* be
    // unique for every call to sessionInitialize, otherwise it's trivial for
    // an attacker to extract the secret key!
    // -----------------------------------------------------------------------
    signerPrivateData.forEach(function (data, idx) {
        var sessionId = randomBuffer(32); // must never be reused between sessions!
        data.session = muSig.sessionInitialize(sessionId, data.privateKey, publicData.message, publicData.pubKeyCombined, publicData.pubKeyParity, publicData.pubKeyHash, idx);
    });
    var signerSession = signerPrivateData[0].session;
    // -----------------------------------------------------------------------
    // Step 3: Exchange commitments (communication round 1)
    // The signers now exchange the commitments H(R_i). This is simulated here
    // by copying the values from the private data to public data array.
    // -----------------------------------------------------------------------
    for (var i = 0; i < publicData.pubKeys.length; i++) {
        publicData.commitments[i] = signerPrivateData[i].session.commitment;
    }
    // -----------------------------------------------------------------------
    // Step 4: Get nonces (communication round 2)
    // Now that everybody has commited to the session, the nonces (R_i) can be
    // exchanged. Again, this is simulated by copying.
    // -----------------------------------------------------------------------
    for (var i = 0; i < publicData.pubKeys.length; i++) {
        publicData.nonces[i] = signerPrivateData[i].session.nonce;
    }
    // -----------------------------------------------------------------------
    // Step 5: Combine nonces
    // The nonces can now be combined into R. Each participant should do this
    // and keep track of whether the nonce was negated or not. This is needed
    // for the later steps.
    // -----------------------------------------------------------------------
    publicData.nonceCombined = muSig.sessionNonceCombine(signerSession, publicData.nonces);
    signerPrivateData.forEach(function (data) { return (data.session.combinedNonceParity = signerSession.combinedNonceParity); });
    // -----------------------------------------------------------------------
    // Step 6: Generate partial signatures
    // Every participant can now create their partial signature s_i over the
    // given message.
    // -----------------------------------------------------------------------
    signerPrivateData.forEach(function (data) {
        data.session.partialSignature = muSig.partialSign(data.session, publicData.message, publicData.nonceCombined, publicData.pubKeyCombined);
    });
    // -----------------------------------------------------------------------
    // Step 7: Exchange partial signatures (communication round 3)
    // The partial signature of each signer is exchanged with the other
    // participants. Simulated here by copying.
    // -----------------------------------------------------------------------
    for (var i = 0; i < publicData.pubKeys.length; i++) {
        publicData.partialSignatures[i] = signerPrivateData[i].session.partialSignature;
    }
    // -----------------------------------------------------------------------
    // Step 8: Verify individual partial signatures
    // Every participant should verify the partial signatures received by the
    // other participants.
    // -----------------------------------------------------------------------
    for (var i = 0; i < publicData.pubKeys.length; i++) {
        muSig.partialSigVerify(signerSession, publicData.partialSignatures[i], publicData.nonceCombined, i, publicData.pubKeys[i], publicData.nonces[i]);
    }
    // -----------------------------------------------------------------------
    // Step 9: Combine partial signatures
    // Finally, the partial signatures can be combined into the full signature
    // (s, R) that can be verified against combined public key P.
    // -----------------------------------------------------------------------
    publicData.signature = muSig.partialSigCombine(publicData.nonceCombined, publicData.partialSignatures);
    // -----------------------------------------------------------------------
    // Step 10: Verify signature
    // The resulting signature can now be verified as a normal Schnorr
    // signature (s, R) over the message m and public key P.
    // -----------------------------------------------------------------------
    schnorr.verify(publicData.pubKeyCombined, publicData.message, publicData.signature);
    return publicData.signature.toString("hex");
};
exports.sign = sign;


/***/ }),

/***/ "./util/schnorr.ts":
/*!*************************!*\
  !*** ./util/schnorr.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js")["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.schnorrApi = void 0;
var adaptor = __webpack_require__(/*! schnorr-adaptor-points/src/adaptor.js */ "./node_modules/schnorr-adaptor-points/src/adaptor.js");
var BigInteger = __webpack_require__(/*! bigi */ "./node_modules/bigi/lib/index.js");
var _a = __webpack_require__(/*! bip-schnorr */ "./node_modules/bip-schnorr/src/index.js"), math = _a.math, convert = _a.convert;
var ecurve = __webpack_require__(/*! ecurve */ "./node_modules/ecurve/lib/index.js");
var curve = ecurve.getCurveByName('secp256k1');
var concat = Buffer.concat;
var G = curve.G;
var n = curve.n;
var schnorrApi = function () {
    return {
        adaptorPublic: function (oraclePbHex, msgHex, rHex) {
            var pubInt = convert.bufferToInt(adaptor.createAdaptorPoint([Buffer.from(oraclePbHex, 'hex')], [Buffer.from(msgHex, 'hex')], [Buffer.from(rHex, 'hex')]));
            return pubInt.toString(16);
        },
        genNonce: function (oraclePrivHex, questionHex, auxHex) {
            var aux = Buffer.from(auxHex, 'hex');
            var privKey = BigInteger.fromHex(oraclePrivHex);
            var P = G.multiply(privKey);
            var Px = convert.intToBuffer(P.affineX);
            var m = Buffer.from(questionHex, 'hex');
            var d = math.getEvenKey(P, privKey);
            var t = convert.intToBuffer(d.xor(convert.bufferToInt(math.taggedHash('BIP0340/aux', aux))));
            var rand = math.taggedHash('BIP0340/nonce', concat([t, Px, m]));
            var kPrime = convert.bufferToInt(rand).mod(n);
            return kPrime.toString(16);
        },
        signatureSValue: function (privHex, nonce, msgHex) {
            var privKey = BigInteger.fromHex(privHex);
            var kPrime = BigInteger.fromHex(nonce);
            var m = Buffer.from(msgHex, 'hex');
            var signature = adaptor.createAdaptorSecret([privKey], [m], [kPrime]);
            return signature.toString('hex');
        }
    };
};
exports.schnorrApi = schnorrApi;


/***/ }),

/***/ "./util/templates.ts":
/*!***************************!*\
  !*** ./util/templates.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processTemplate = void 0;
var processTemplate = function (name, subst, template) {
    switch (name) {
        case 'eurocall': return template
            .replace("$notional", subst.notional.toString())
            .replace("$margin", subst.margin.toString())
            .replace("$strike", subst.strike.toString())
            .replace("$premium", subst.premium.toString())
            .replace("$minValue", subst.minValue.toString())
            .replace("$maxValue", subst.maxValue.toString());
    }
    return template;
};
exports.processTemplate = processTemplate;


/***/ }),

/***/ "./util/tx.ts":
/*!********************!*\
  !*** ./util/tx.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js")["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.txApi = void 0;
var bitcoin = __webpack_require__(/*! bitcoinjs-lib */ "./node_modules/bitcoinjs-lib/src/index.js");
var ecc = __webpack_require__(/*! tiny-secp256k1 */ "./node_modules/tiny-secp256k1/lib/index.js");
bitcoin.initEccLib(ecc);
var net = bitcoin.networks.testnet;
var p2pktr = function (pk) { return bitcoin.payments.p2tr({
    pubkey: Buffer.from(pk, "hex"),
    network: net
}); };
var schnorr = __webpack_require__(/*! bip-schnorr */ "./node_modules/bip-schnorr/src/index.js");
var muSig = schnorr.muSig;
var convert = schnorr.convert;
var multisig = __webpack_require__(/*! ./mu-sig */ "./util/mu-sig.ts");
function schnorrSignerSingle(pk, secret) {
    return {
        publicKey: Buffer.from(pk, "hex"),
        network: net,
        sign: function (hash, lowR) {
            return null;
        },
        signSchnorr: function (hash) {
            return schnorr.sign(hash, secret);
        },
        getPublicKey: function () {
            return Buffer.from(pk, "hex");
        }
    };
}
function schnorrSignerMulti(pk1, pk2, secret1, secret2) {
    var pkCombined = muSig.pubKeyCombine([Buffer.from(pk1, "hex"), Buffer.from(pk2, "hex")]);
    var pubKeyCombined = convert.intToBuffer(pkCombined.affineX);
    return {
        publicKey: pubKeyCombined,
        network: net,
        sign: function (hash, lowR) {
            return null;
        },
        signSchnorr: function (hash) {
            var muSignature = multisig.sign(pk1, pk2, secret1.toString("hex"), secret2.toString("hex"), hash.toString("hex"));
            return muSignature;
        },
        getPublicKey: function () {
            return pubKeyCombined;
        }
    };
}
var txApi = function () {
    return {
        genOpeningTx: function (aliceIn, bobIn, alicePk, bobPk, aliceAmount, bobAmount) {
            var psbt = new bitcoin.Psbt({ network: net });
            var aliceP2TR = p2pktr(alicePk);
            var bobP2TR = p2pktr(alicePk);
            psbt.addInput({
                hash: aliceIn.txid,
                index: aliceIn.vout,
                witnessUtxo: { value: aliceAmount, script: aliceP2TR.output },
                tapInternalKey: Buffer.from(alicePk, "hex")
            });
            psbt.addInput({
                hash: bobIn.txid,
                index: bobIn.vout,
                witnessUtxo: { value: bobAmount, script: bobP2TR.output },
                tapInternalKey: Buffer.from(bobPk, "hex")
            });
            psbt.addOutput({
                address: "mohjSavDdQYHRYXcS3uS6ttaHP8amyvX78",
                value: aliceAmount + bobAmount
            });
            psbt.signInput(0, schnorrSignerSingle(alicePk, aliceIn.secrets[0]));
            psbt.signInput(1, schnorrSignerSingle(bobPk, bobIn.secrets[0]));
            psbt.finalizeAllInputs();
            return {
                txid: psbt.extractTransaction().getId(),
                hex: psbt.extractTransaction().toHex()
            };
        },
        genClosingTx: function (multiIn, alicePk, bobPk, aliceAmount, bobAmount) {
            var psbt = new bitcoin.Psbt({ network: net });
            var pkCombined = muSig.pubKeyCombine([Buffer.from(alicePk, "hex"), Buffer.from(bobPk, "hex")]);
            var pubKeyCombined = convert.intToBuffer(pkCombined.affineX);
            var multiP2TR = p2pktr(pubKeyCombined);
            psbt.addInput({
                hash: multiIn.txid,
                index: multiIn.vout,
                witnessUtxo: { value: aliceAmount + bobAmount, script: multiP2TR.output },
                tapInternalKey: Buffer.from(alicePk, "hex")
            });
            psbt.addOutput({
                address: "mohjSavDdQYHRYXcS3uS6ttaHP8amyvX78",
                value: aliceAmount
            });
            psbt.addOutput({
                address: "mohjSavDdQYHRYXcS3uS6ttaHP8amyvX78",
                value: bobAmount
            });
            psbt.signInput(0, schnorrSignerMulti(alicePk, bobPk, multiIn.secrets[0], multiIn.secrets[1]));
            psbt.finalizeAllInputs();
            return {
                txid: psbt.extractTransaction().getId(),
                hex: psbt.extractTransaction().toHex()
            };
        },
        genAliceCet: function (multiIn, alicePk, bobPk, oracleMsgHex, oracleR, aliceAmount, bobAmount) {
            var psbt = new bitcoin.Psbt({ network: net });
            var pkCombined = muSig.pubKeyCombine([Buffer.from(alicePk, "hex"), Buffer.from(bobPk, "hex")]);
            var pubKeyCombined = convert.intToBuffer(pkCombined.affineX);
            var multiP2TR = p2pktr(pubKeyCombined);
            psbt.addInput({
                hash: multiIn.txid,
                index: multiIn.vout,
                witnessUtxo: { value: aliceAmount + bobAmount, script: multiP2TR.output },
                tapInternalKey: Buffer.from(alicePk, "hex")
            });
            psbt.addOutput({
                address: "mohjSavDdQYHRYXcS3uS6ttaHP8amyvX78",
                value: aliceAmount
            });
            psbt.addOutput({
                address: "mohjSavDdQYHRYXcS3uS6ttaHP8amyvX78",
                value: bobAmount
            });
            psbt.signInput(0, schnorrSignerMulti(alicePk, bobPk, multiIn.secrets[0], multiIn.secrets[1]));
            psbt.finalizeAllInputs();
            return {
                txid: psbt.extractTransaction().getId(),
                hex: psbt.extractTransaction().toHex()
            };
        },
        genAliceCetRedemption: function (aliceOracleIn, alicePk, oracleS) {
            return {
                txid: "0",
                hex: "0"
            };
        }
    };
};
exports.txApi = txApi;


/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBRXhCLE9BQU87Z0JBQ0gsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRTtnQkFDdkMsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRTthQUN6QztRQUNMLENBQUM7UUFDRCxxQkFBcUIsRUFBRSxVQUFDLGFBQW1CLEVBQUUsT0FBZSxFQUFFLE9BQWU7WUFFekUsT0FBTztnQkFDSCxJQUFJLEVBQUUsR0FBRztnQkFDVCxHQUFHLEVBQUUsR0FBRzthQUNYO1FBQ0wsQ0FBQztLQUNKO0FBQ0wsQ0FBQztBQTNHWSxhQUFLLFNBMkdqQiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvLi9hcHAudHMiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy8uL3V0aWwvZHIudHMiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy8uL3V0aWwvbXUtc2lnLnRzIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvLi91dGlsL3NjaG5vcnIudHMiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy8uL3V0aWwvdGVtcGxhdGVzLnRzIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvLi91dGlsL3R4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhcmtpZnkgfSBmcm9tIFwiLi91dGlsL2RyXCI7XG5pbXBvcnQgeyBwcm9jZXNzVGVtcGxhdGUgfSBmcm9tIFwiLi91dGlsL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgU2Nobm9yckFwaSwgc2Nobm9yckFwaSB9IGZyb20gXCIuL3V0aWwvc2Nobm9yclwiXG5pbXBvcnQgeyBUeEFwaSwgdHhBcGkgfSBmcm9tIFwiLi91dGlsL3R4XCJcblxuXG5pbnRlcmZhY2UgTWFybG93ZUNvbnRyYWN0IHtcbiAgICB0ZW1wbGF0ZTogc3RyaW5nXG4gICAgdGVybXM6IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9XG59XG5cbmludGVyZmFjZSBTYW1wbGVkUm93IHtcbiAgICBvcmFjbGVWYWx1ZTogbnVtYmVyLFxuICAgIGFsaWNlUGF5b3V0OiBudW1iZXIsXG4gICAgYm9iUGF5b3V0OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIENvbnRyYWN0QXBpIHtcbiAgICBzdGF0ZTogTm90ZWJvb2tTdGF0ZVxuICAgIGluamVjdE1hcmxvd2VDb250cmFjdDogKGM6IE1hcmxvd2VDb250cmFjdCwgdXBkYXRlOiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+XG4gICAgc2FtcGxlTWFybG93ZUNvbnRyYWN0OiAoKSA9PiB2b2lkXG4gICAgcGxvdE1hcmxvd2VDb250cmFjdEFscGhhOiAoKSA9PiB2b2lkXG4gICAgZG93bmxvYWRTYW1wbGVkQ29udHJhY3RBc0NzdjogKCkgPT4gdm9pZFxuICAgIGdlbmVyYXRlV29sZk5iVXJpOiAoKSA9PiBQcm9taXNlPHN0cmluZz5cbiAgICBkb3dubG9hZFdvbGZOYjogKCkgPT4gdm9pZFxuICAgIGVtYmVkV29sZlBsb3Q6IChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSA9PiB2b2lkXG4gICAgc2Nobm9yckFwaTogKCkgPT4gU2Nobm9yckFwaVxuICAgIHR4QXBpOiAoKSA9PiBUeEFwaVxufVxuXG5pbnRlcmZhY2UgTm90ZWJvb2tTdGF0ZSB7XG4gICAgaXNNYXJsb3dlQ29udHJhY3RHZW5lcmF0ZWQ6IGJvb2xlYW5cbiAgICBpc01hcmxvd2VDb250cmFjdFNhbXBsZWQ6IGJvb2xlYW5cbiAgICBzYW1wbGluZ0luUHJvZ3Jlc3M6IGJvb2xlYW5cbiAgICBzYW1wbGluZ1Byb2dyZXNzPzogbnVtYmVyXG4gICAgc2FtcGxlPzogU2FtcGxlZFJvd1tdXG4gICAgY29udHJhY3Q/OiBNYXJsb3dlQ29udHJhY3RcbiAgICB0ZW1wbGF0ZT86IHN0cmluZ1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7IFxuICAgICAgICBkYXJraWZpZXI6IGFueVxuICAgICAgICBtYXJsb3dlV2luZG93PzogKCkgPT4gUHJvbWlzZTxXaW5kb3c+XG4gICAgICAgIGFwaTogQ29udHJhY3RBcGlcbiAgICAgICAgbW9uYWNvOiBhbnlcbiAgICAgICAgdGljazogbnVtYmVyXG4gICAgICAgIGFjdGl2ZVRpY2tlcjogbnVtYmVyXG4gICAgICAgIHdmQXBwSWQ6IHN0cmluZ1xuICAgICAgICBjb3JzUHJveHlQcmVmaXg6IHN0cmluZ1xuICAgIH1cbn1cblxuXG5cbmRhcmtpZnkod2luZG93LmRvY3VtZW50KVxuXG5pZiAod2luZG93Lm1hcmxvd2VXaW5kb3cgIT0gdW5kZWZpbmVkKSB7XG4gICAgd2luZG93Lm1hcmxvd2VXaW5kb3coKS50aGVuKG13ID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hcGkgPSB7XG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIGlzTWFybG93ZUNvbnRyYWN0R2VuZXJhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc01hcmxvd2VDb250cmFjdFNhbXBsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNhbXBsaW5nSW5Qcm9ncmVzczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hub3JyQXBpOiBzY2hub3JyQXBpLFxuICAgICAgICAgICAgdHhBcGk6IHR4QXBpLFxuICAgICAgICAgICAgaW5qZWN0TWFybG93ZUNvbnRyYWN0OiBhc3luYyAoYzogTWFybG93ZUNvbnRyYWN0LCB1cGRhdGVTdGF0ZSA9IHRydWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCA9IGNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG1hcmxvd2VIb21lID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oLTEwXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgbWFybG93ZUhvbWU/LmNsaWNrKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZG9udFNhdmUgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1yLW1lZGl1bVwiKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIGRvbnRTYXZlPy5jbGljaygpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmF3XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5hcGkuc3RhdGUudGVtcGxhdGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdyA9IGF3YWl0IChhd2FpdCBmZXRjaCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgYC9tYXJsb3dlLXdvbGZyYW0td2ViZG9jL2NvbnRyYWN0cy8ke2MudGVtcGxhdGV9Lm1hcmxvd2VgKSkudGV4dCgpXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUudGVtcGxhdGUgPSByYXdcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdyA9IHdpbmRvdy5hcGkuc3RhdGUudGVtcGxhdGVcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBnb1RvRWRpdG9yID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1yLTQnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIGdvVG9FZGl0b3I/LmNsaWNrKClcblxuXG4gICAgICAgICAgICAgICAgbGV0IG1lbnVCYXIgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYmFyXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgbWVudUJhcj8uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiZGlzcGxheTogbm9uZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IG1ldGEgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtc2Vjb25kYXJ5XCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgbWV0YT8uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiZGlzcGxheTogbm9uZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpY0FuYWx5c2lzID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWdyYXktZGFya2VzdFwiKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIHN0YXRpY0FuYWx5c2lzPy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJkaXNwbGF5OiBub25lXCIpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRvSW5qZWN0ID0gcHJvY2Vzc1RlbXBsYXRlKGMudGVtcGxhdGUsIGMudGVybXMsIHJhdylcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG13Lm1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKClbbXcubW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKS5sZW5ndGggLSAyXS5kaXNwb3NlKClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGF3YWl0IG13Lm1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKClbbXcubW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKS5sZW5ndGggLSAxXS5zZXRWYWx1ZSh0b0luamVjdClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZ29Ub0Jsb2NrcyA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cCcpPy5xdWVyeVNlbGVjdG9yKCcuYnRuJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBnb1RvQmxvY2tzPy5jbGljaygpXG5cbiAgICAgICAgICAgICAgICBsZXQgY2FuY2VsID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cHBlcmNhc2VcIikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBjYW5jZWw/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUuaXNNYXJsb3dlQ29udHJhY3RHZW5lcmF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3RhdGVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FtcGxlTWFybG93ZUNvbnRyYWN0OiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2FtcGxpbmctc3RhcnRlZFwiKSlcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLnNhbXBsaW5nSW5Qcm9ncmVzcyA9IHRydWVcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLnNhbXBsZSA9IFtdXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9IDEwMFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0IS50ZXJtcy5taW5WYWx1ZTsgaSA8PSB3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0IS50ZXJtcy5tYXhWYWx1ZTsgaSs9c3RlcCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IHsgLi4ud2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEsIHRlcm1zOiB7Li4ud2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEudGVybXN9LCB9XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2FtcGxpbmctc3RlcFwiKSlcbiAgICAgICAgICAgICAgICAgICAgYy50ZXJtcy5taW5WYWx1ZSA9IGlcbiAgICAgICAgICAgICAgICAgICAgYy50ZXJtcy5tYXhWYWx1ZSA9IGlcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFwaS5zdGF0ZS5zYW1wbGluZ1Byb2dyZXNzID0gKGkgLSB3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0IS50ZXJtcy5taW5WYWx1ZSkgLyAod2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEudGVybXMubWF4VmFsdWUgLSB3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0IS50ZXJtcy5taW5WYWx1ZSlcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuYXBpLmluamVjdE1hcmxvd2VDb250cmFjdChjLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmRUb1NpbXVsYXRvciA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpWzFdIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB3aGlsZShzZW5kVG9TaW11bGF0b3JbJ2Rpc2FibGVkJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVdBSVRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAxMDApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2F3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAzMDAwKSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRUb1NpbXVsYXRvci5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFNpbXVsYXRpb24gPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVsyXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBzdGFydFNpbXVsYXRpb24uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbGljZURlcG9zaXQgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cy1idG4nKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBhbGljZURlcG9zaXQ/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9iRGVwb3NpdCA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzLWJ0bicpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGJvYkRlcG9zaXQ/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2tpcFRvRXhlcmNpc2UgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGx1cy1idG4nKVsyXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBza2lwVG9FeGVyY2lzZT8uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25maXJtID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMtYnRuJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybT8uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2cgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jb2xzLWRlc2NyaXB0aW9uLWxvY2F0aW9uJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4dHJhY3RCb2JQYXlvZmZPcHQgPSAvVGhlIGNvbnRyYWN0IHBheXMg4oKzIChcXGQrKSBmcm9tIGFjY291bnQgb2YgQm9iIHRvIEJvYiB3YWxsZXQvLmV4ZWMobG9nLmlubmVyVGV4dCk/LlsxXVxuICAgICAgICAgICAgICAgICAgICBsZXQgZXh0cmFjdEFsaWNlUGF5b2ZmT3B0ID0gL1RoZSBjb250cmFjdCBwYXlzIOKCsyAoXFxkKykgZnJvbSBhY2NvdW50IG9mIEFsaWNlIHRvIEFsaWNlIHdhbGxldC8uZXhlYyhsb2cuaW5uZXJUZXh0KT8uWzFdXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2JQYXlvZmYgPSBleHRyYWN0Qm9iUGF5b2ZmT3B0ID09IG51bGwgfHwgTnVtYmVyLmlzTmFOKHBhcnNlSW50KGV4dHJhY3RCb2JQYXlvZmZPcHQpKSA/IDAgOiBwYXJzZUludChleHRyYWN0Qm9iUGF5b2ZmT3B0KVxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxpY2VQYXlvZmYgPSBleHRyYWN0QWxpY2VQYXlvZmZPcHQgPT0gbnVsbCB8fCBOdW1iZXIuaXNOYU4ocGFyc2VJbnQoZXh0cmFjdEFsaWNlUGF5b2ZmT3B0KSkgPyAwIDogcGFyc2VJbnQoZXh0cmFjdEFsaWNlUGF5b2ZmT3B0KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2luZG93LmFwaS5zdGF0ZS5zYW1wbGUpXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUuc2FtcGxlLnB1c2goe29yYWNsZVZhbHVlOiBpLCBhbGljZVBheW91dDogYWxpY2VQYXlvZmYsIGJvYlBheW91dDogYm9iUGF5b2ZmfSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFNpbXVsYXRpb24gPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVswXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBlbmRTaW11bGF0aW9uLmNsaWNrKClcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuYXBpLnN0YXRlLnNhbXBsZSlcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLnNhbXBsaW5nSW5Qcm9ncmVzcyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2luZG93LmFwaS5zdGF0ZS5pc01hcmxvd2VDb250cmFjdFNhbXBsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3RhdGVcIikpXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2FtcGxlZFwiKSlcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLmluamVjdE1hcmxvd2VDb250cmFjdCh3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0ISwgZmFsc2UpXG5cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RNYXJsb3dlQ29udHJhY3RBbHBoYTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KCdwbG90ICcgKyB3aW5kb3cuYXBpLnN0YXRlLnNhbXBsZS5tYXAocm93ID0+IGAoJHtyb3cub3JhY2xlVmFsdWV9LCAke3Jvdy5hbGljZVBheW91dH0pYCkpXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQ/aT0nICsgcXVlcnlcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWRTYW1wbGVkQ29udHJhY3RBc0NzdjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjc3ZDb250ZW50ID0gXCJkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsXFxub3JhY2xlLGFsaWNlLGJvYlxcblwiICsgd2luZG93LmFwaS5zdGF0ZS5zYW1wbGUubWFwKHJvdyA9PiBgJHtyb3cub3JhY2xlVmFsdWV9LCAke3Jvdy5hbGljZVBheW91dH0sICR7cm93LmJvYlBheW91dH1gKS5qb2luKFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgIGxldCBlbmNvZGVkVXJpID0gZW5jb2RlVVJJKGNzdkNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGVuY29kZWRVcmkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlbmVyYXRlV29sZk5iVXJpOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBgL21hcmxvd2Utd29sZnJhbS13ZWJkb2Mvbm90ZWJvb2tzL3dvbGZyYW0tcGxvdC5uYmBcbiAgICAgICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSAoYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLnRleHQoKSlcbiAgICAgICAgICAgICAgICBsZXQgcm93Ym94ID0gcm93ID0+IGBSb3dCb3hbe1wie1wiLFJvd0JveFt7XCIke3Jvdy5vcmFjbGVWYWx1ZX1cIixcIixcIixcIiBcIixcIiR7cm93LmFsaWNlUGF5b3V0fVwifV0sXCJ9XCJ9XWBcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnRzID0gd2luZG93LmFwaS5zdGF0ZS5zYW1wbGUubWFwKHJvd2JveCkuam9pbihgLFwiLFwiLFwiIFwiLGApO1xuICAgICAgICAgICAgICAgIGxldCBuYiA9IHRlbXBsYXRlLnJlcGxhY2UoYFJvd0JveFt7XCJ7XCIsUm93Qm94W3tcIjFcIixcIixcIixcIiBcIixcIjFcIn1dLFwifVwifV0sXCIsXCIsXCIgXCIsUm93Qm94W3tcIntcIixSb3dCb3hbe1wiMlwiLFwiLFwiLFwiIFwiLFwiMlwifV0sXCJ9XCJ9XWAsIHBvaW50cylcbiAgICAgICAgICAgICAgICBsZXQgbmJDb250ZW50ID0gXCJkYXRhOnRleHQvcGxhaW47YmFzZTY0LFwiICsgYnRvYShuYilcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJKG5iQ29udGVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZFdvbGZOYjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgICAgICAgbGluay5kb3dubG9hZCA9ICd3b2xmcmFtLXBsb3QubmInXG4gICAgICAgICAgICAgICAgbGluay5ocmVmID0gYXdhaXQgd2luZG93LmFwaS5nZW5lcmF0ZVdvbGZOYlVyaSgpXG4gICAgICAgICAgICAgICAgbGluay5jbGljaygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1iZWRXb2xmUGxvdDogYXN5bmMgKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJzxzcGFuIGlkPVwiaW1nLWxvYWRpbmctcGxhY2Vob2xkZXJcIj48L3NwYW4+J1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KCdwbG90ICcgKyB3aW5kb3cuYXBpLnN0YXRlLnNhbXBsZS5tYXAocm93ID0+IGAoJHtyb3cub3JhY2xlVmFsdWV9LCAke3Jvdy5hbGljZVBheW91dH0pYCkuam9pbihcIixcIikpXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsMSA9IGBodHRwczovL2FwaS53b2xmcmFtYWxwaGEuY29tL3YyL3F1ZXJ5P2lucHV0PSR7cXVlcnl9JmFwcGlkPSR7d2luZG93LndmQXBwSWR9Jm91dHB1dD1KU09OYFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3h5VXJsID0gd2luZG93LmNvcnNQcm94eVByZWZpeCArIGVuY29kZVVSSUNvbXBvbmVudCh1cmwxKVxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoYXdhaXQgKGF3YWl0IGZldGNoKHByb3h5VXJsKSkuanNvbigpKVxuICAgICAgICAgICAgICAgIGNvbnN0IHVybDIgPSByZXN1bHQucXVlcnlyZXN1bHQucG9kc1sxXS5zdWJwb2RzWzBdLmltZy5zcmNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwyKVxuICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB1cmwyXG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiNTAwXCIpXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsID0gYGh0dHBzOi8vYXBpLndvbGZyYW1hbHBoYS5jb20vdjEvcmVzdWx0P2FwcGlkPSR7d2luZG93LndmQXBwSWR9Jmk9MSUyMGJ0YyUyMHRvJTIwdXNkJTIwbnVtYmVyYFxuICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmNvcnNQcm94eVByZWZpeCArIGVuY29kZVVSSUNvbXBvbmVudChvcmlnaW5hbClcbiAgICBcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGZldGNoKHVybClcbiAgICAgICAgICAgIGxldCByYXcgPSAoYXdhaXQgKGF3YWl0IHJlc3BvbnNlKS50ZXh0KCkpXG4gICAgICAgICAgICBsZXQgcnggPSAvXFxkKy9nO1xuICAgICAgICAgICAgbGV0IHJlcyA9IHJ4LmV4ZWMocmF3KVxuICAgICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB3aW5kb3cudGljayA9IHBhcnNlSW50KHJlc1swXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInRpY2tcIikpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBwb2xsKClcbiAgICAgICAgc2V0SW50ZXJ2YWwocG9sbCwgMTAwMDApXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNsb2NrXCIpKSwgNTAwKVxuXG4gICAgfSlcblxuXG4gICAgXG59XG5cbiIsImltcG9ydCB7XG4gICAgZW5hYmxlIGFzIGVuYWJsZURhcmtNb2RlLFxuICAgIGV4cG9ydEdlbmVyYXRlZENTUyBhcyBjb2xsZWN0Q1NTLFxuICAgIHNldEZldGNoTWV0aG9kIGFzIHNldEZldGNoTWV0aG9kXG59IGZyb20gJ2RhcmtyZWFkZXInO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShkb2MsIHN0eWxlU3RyaW5nKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IHN0eWxlU3RyaW5nO1xuICAgIGRvYy5oZWFkLmFwcGVuZChzdHlsZSk7XG59XG5cbmV4cG9ydCBjb25zdCBkYXJraWZ5ID0gYXN5bmMgKGRvYykgPT4ge1xuICAgIHNldEZldGNoTWV0aG9kKHdpbmRvdy5mZXRjaClcblxuICAgIGVuYWJsZURhcmtNb2RlKHtcbiAgICAgICAgYnJpZ2h0bmVzczogMTAwLFxuICAgICAgICBjb250cmFzdDogOTAsXG4gICAgICAgIHNlcGlhOiAxMCxcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBDU1MgPSBhd2FpdCBjb2xsZWN0Q1NTKCk7XG4gICAgYWRkU3R5bGUoZG9jLCBDU1MpXG5cbn1cblxuY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYpIiwiZXhwb3J0IGNvbnN0IHNpZ24gPSAocGsxLCBwazIsIHNlY3JldDEsIHNlY3JldDIsIG1zZykgPT4ge1xuICAgIGNvbnN0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xuICAgIGNvbnN0IEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xuICAgIGNvbnN0IEJpZ0ludGVnZXIgPSByZXF1aXJlKCdiaWdpJyk7XG4gICAgY29uc3QgY29udmVydCA9IHJlcXVpcmUoJ2JpcC1zY2hub3JyJykuY29udmVydFxuICAgIGNvbnN0IG11U2lnID0gcmVxdWlyZSgnYmlwLXNjaG5vcnInKS5tdVNpZ1xuICAgIGNvbnN0IHNjaG5vcnIgPSByZXF1aXJlKCdiaXAtc2Nobm9ycicpXG4gICAgY29uc3QgbWF0aCA9IHJlcXVpcmUoJ2JpcC1zY2hub3JyJykubWF0aFxuICAgIGNvbnN0IHJhbmRvbUJ5dGVzID0gcmVxdWlyZSgncmFuZG9tYnl0ZXMnKTtcbiAgICBjb25zdCBlY3VydmUgPSByZXF1aXJlKCdlY3VydmUnKTtcblxuICAgIGNvbnN0IGN1cnZlID0gZWN1cnZlLmdldEN1cnZlQnlOYW1lKCdzZWNwMjU2azEnKTtcblxuICAgIGNvbnN0IHJhbmRvbUJ1ZmZlciA9IChsZW4pID0+IEJ1ZmZlci5mcm9tKHJhbmRvbUJ5dGVzKGxlbikpO1xuXG4gICAgY29uc3QgcHVibGljRGF0YSA9IHtcbiAgICAgICAgcHViS2V5czogW1xuICAgICAgICAgIEJ1ZmZlci5mcm9tKHBrMSwgJ2hleCcpLFxuICAgICAgICAgIEJ1ZmZlci5mcm9tKHBrMiwgJ2hleCcpXG4gICAgICAgIF0sXG4gICAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICAgICAgcHViS2V5SGFzaDogbnVsbCxcbiAgICAgICAgcHViS2V5Q29tYmluZWQ6IG51bGwsXG4gICAgICAgIHB1YktleVBhcml0eTogbnVsbCxcbiAgICAgICAgY29tbWl0bWVudHM6IFtdLFxuICAgICAgICBub25jZXM6IFtdLFxuICAgICAgICBub25jZUNvbWJpbmVkOiBudWxsLFxuICAgICAgICBwYXJ0aWFsU2lnbmF0dXJlczogW10sXG4gICAgICAgIHNpZ25hdHVyZTogbnVsbCxcbiAgICAgIH07XG4gICAgXG4gICAgICAvLyBkYXRhIG9ubHkga25vd24gYnkgdGhlIGluZGl2aWR1YWwgcGFydHksIHRoZXNlIHZhbHVlcyBhcmUgbmV2ZXIgc2hhcmVkXG4gICAgICAvLyBiZXR3ZWVuIHRoZSBzaWduZXJzIVxuICAgICAgY29uc3Qgc2lnbmVyUHJpdmF0ZURhdGEgPSBbXG4gICAgICAgIC8vIHNpZ25lciAxXG4gICAgICAgIHtcbiAgICAgICAgICBwcml2YXRlS2V5OiBCaWdJbnRlZ2VyLmZyb21IZXgoc2VjcmV0MSksXG4gICAgICAgICAgc2Vzc2lvbjogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2lnbmVyIDJcbiAgICAgICAge1xuICAgICAgICAgIHByaXZhdGVLZXk6IEJpZ0ludGVnZXIuZnJvbUhleChzZWNyZXQyKSxcbiAgICAgICAgICBzZXNzaW9uOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICBcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBTdGVwIDE6IENvbWJpbmUgdGhlIHB1YmxpYyBrZXlzXG4gICAgICAvLyBUaGUgcHVibGljIGtleXMgUF9pIGFyZSBjb21iaW5lZCBpbnRvIHRoZSBjb21iaW5lZCBwdWJsaWMga2V5IFAuXG4gICAgICAvLyBUaGlzIGNhbiBiZSBkb25lIGJ5IGV2ZXJ5IHNpZ25lciBpbmRpdmlkdWFsbHkgb3IgYnkgdGhlIGluaXRpYWxpemluZ1xuICAgICAgLy8gcGFydHkgYW5kIHRoZW4gYmUgZGlzdHJpYnV0ZWQgdG8gZXZlcnkgcGFydGljaXBhbnQuXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgcHVibGljRGF0YS5wdWJLZXlIYXNoID0gbXVTaWcuY29tcHV0ZUVsbChwdWJsaWNEYXRhLnB1YktleXMpO1xuICAgICAgY29uc3QgcGtDb21iaW5lZCA9IG11U2lnLnB1YktleUNvbWJpbmUocHVibGljRGF0YS5wdWJLZXlzLCBwdWJsaWNEYXRhLnB1YktleUhhc2gpO1xuICAgICAgcHVibGljRGF0YS5wdWJLZXlDb21iaW5lZCA9IGNvbnZlcnQuaW50VG9CdWZmZXIocGtDb21iaW5lZC5hZmZpbmVYKTtcbiAgICAgIHB1YmxpY0RhdGEucHViS2V5UGFyaXR5ID0gbWF0aC5pc0V2ZW4ocGtDb21iaW5lZCk7XG4gICAgXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gU3RlcCAyOiBDcmVhdGUgdGhlIHByaXZhdGUgc2lnbmluZyBzZXNzaW9uXG4gICAgICAvLyBFYWNoIHNpZ25pbmcgcGFydHkgZG9lcyB0aGlzIGluIHByaXZhdGUuIFRoZSBzZXNzaW9uIElEICptdXN0KiBiZVxuICAgICAgLy8gdW5pcXVlIGZvciBldmVyeSBjYWxsIHRvIHNlc3Npb25Jbml0aWFsaXplLCBvdGhlcndpc2UgaXQncyB0cml2aWFsIGZvclxuICAgICAgLy8gYW4gYXR0YWNrZXIgdG8gZXh0cmFjdCB0aGUgc2VjcmV0IGtleSFcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBzaWduZXJQcml2YXRlRGF0YS5mb3JFYWNoKChkYXRhLCBpZHgpID0+IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gcmFuZG9tQnVmZmVyKDMyKTsgLy8gbXVzdCBuZXZlciBiZSByZXVzZWQgYmV0d2VlbiBzZXNzaW9ucyFcbiAgICAgICAgZGF0YS5zZXNzaW9uID0gbXVTaWcuc2Vzc2lvbkluaXRpYWxpemUoXG4gICAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICAgIGRhdGEucHJpdmF0ZUtleSxcbiAgICAgICAgICBwdWJsaWNEYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgcHVibGljRGF0YS5wdWJLZXlDb21iaW5lZCxcbiAgICAgICAgICBwdWJsaWNEYXRhLnB1YktleVBhcml0eSxcbiAgICAgICAgICBwdWJsaWNEYXRhLnB1YktleUhhc2gsXG4gICAgICAgICAgaWR4XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNpZ25lclNlc3Npb24gPSBzaWduZXJQcml2YXRlRGF0YVswXS5zZXNzaW9uO1xuICAgIFxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIFN0ZXAgMzogRXhjaGFuZ2UgY29tbWl0bWVudHMgKGNvbW11bmljYXRpb24gcm91bmQgMSlcbiAgICAgIC8vIFRoZSBzaWduZXJzIG5vdyBleGNoYW5nZSB0aGUgY29tbWl0bWVudHMgSChSX2kpLiBUaGlzIGlzIHNpbXVsYXRlZCBoZXJlXG4gICAgICAvLyBieSBjb3B5aW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgcHJpdmF0ZSBkYXRhIHRvIHB1YmxpYyBkYXRhIGFycmF5LlxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHVibGljRGF0YS5wdWJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB1YmxpY0RhdGEuY29tbWl0bWVudHNbaV0gPSBzaWduZXJQcml2YXRlRGF0YVtpXS5zZXNzaW9uLmNvbW1pdG1lbnQ7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gU3RlcCA0OiBHZXQgbm9uY2VzIChjb21tdW5pY2F0aW9uIHJvdW5kIDIpXG4gICAgICAvLyBOb3cgdGhhdCBldmVyeWJvZHkgaGFzIGNvbW1pdGVkIHRvIHRoZSBzZXNzaW9uLCB0aGUgbm9uY2VzIChSX2kpIGNhbiBiZVxuICAgICAgLy8gZXhjaGFuZ2VkLiBBZ2FpbiwgdGhpcyBpcyBzaW11bGF0ZWQgYnkgY29weWluZy5cbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHB1YmxpY0RhdGEucHViS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwdWJsaWNEYXRhLm5vbmNlc1tpXSA9IHNpZ25lclByaXZhdGVEYXRhW2ldLnNlc3Npb24ubm9uY2U7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gU3RlcCA1OiBDb21iaW5lIG5vbmNlc1xuICAgICAgLy8gVGhlIG5vbmNlcyBjYW4gbm93IGJlIGNvbWJpbmVkIGludG8gUi4gRWFjaCBwYXJ0aWNpcGFudCBzaG91bGQgZG8gdGhpc1xuICAgICAgLy8gYW5kIGtlZXAgdHJhY2sgb2Ygd2hldGhlciB0aGUgbm9uY2Ugd2FzIG5lZ2F0ZWQgb3Igbm90LiBUaGlzIGlzIG5lZWRlZFxuICAgICAgLy8gZm9yIHRoZSBsYXRlciBzdGVwcy5cbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBwdWJsaWNEYXRhLm5vbmNlQ29tYmluZWQgPSBtdVNpZy5zZXNzaW9uTm9uY2VDb21iaW5lKHNpZ25lclNlc3Npb24sIHB1YmxpY0RhdGEubm9uY2VzKTtcbiAgICAgIHNpZ25lclByaXZhdGVEYXRhLmZvckVhY2goZGF0YSA9PiAoZGF0YS5zZXNzaW9uLmNvbWJpbmVkTm9uY2VQYXJpdHkgPSBzaWduZXJTZXNzaW9uLmNvbWJpbmVkTm9uY2VQYXJpdHkpKTtcbiAgICBcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBTdGVwIDY6IEdlbmVyYXRlIHBhcnRpYWwgc2lnbmF0dXJlc1xuICAgICAgLy8gRXZlcnkgcGFydGljaXBhbnQgY2FuIG5vdyBjcmVhdGUgdGhlaXIgcGFydGlhbCBzaWduYXR1cmUgc19pIG92ZXIgdGhlXG4gICAgICAvLyBnaXZlbiBtZXNzYWdlLlxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHNpZ25lclByaXZhdGVEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgIGRhdGEuc2Vzc2lvbi5wYXJ0aWFsU2lnbmF0dXJlID0gbXVTaWcucGFydGlhbFNpZ24oZGF0YS5zZXNzaW9uLCBwdWJsaWNEYXRhLm1lc3NhZ2UsIHB1YmxpY0RhdGEubm9uY2VDb21iaW5lZCwgcHVibGljRGF0YS5wdWJLZXlDb21iaW5lZCk7XG4gICAgICB9KTtcbiAgICBcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBTdGVwIDc6IEV4Y2hhbmdlIHBhcnRpYWwgc2lnbmF0dXJlcyAoY29tbXVuaWNhdGlvbiByb3VuZCAzKVxuICAgICAgLy8gVGhlIHBhcnRpYWwgc2lnbmF0dXJlIG9mIGVhY2ggc2lnbmVyIGlzIGV4Y2hhbmdlZCB3aXRoIHRoZSBvdGhlclxuICAgICAgLy8gcGFydGljaXBhbnRzLiBTaW11bGF0ZWQgaGVyZSBieSBjb3B5aW5nLlxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHVibGljRGF0YS5wdWJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB1YmxpY0RhdGEucGFydGlhbFNpZ25hdHVyZXNbaV0gPSBzaWduZXJQcml2YXRlRGF0YVtpXS5zZXNzaW9uLnBhcnRpYWxTaWduYXR1cmU7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gU3RlcCA4OiBWZXJpZnkgaW5kaXZpZHVhbCBwYXJ0aWFsIHNpZ25hdHVyZXNcbiAgICAgIC8vIEV2ZXJ5IHBhcnRpY2lwYW50IHNob3VsZCB2ZXJpZnkgdGhlIHBhcnRpYWwgc2lnbmF0dXJlcyByZWNlaXZlZCBieSB0aGVcbiAgICAgIC8vIG90aGVyIHBhcnRpY2lwYW50cy5cbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHB1YmxpY0RhdGEucHViS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtdVNpZy5wYXJ0aWFsU2lnVmVyaWZ5KFxuICAgICAgICAgIHNpZ25lclNlc3Npb24sXG4gICAgICAgICAgcHVibGljRGF0YS5wYXJ0aWFsU2lnbmF0dXJlc1tpXSxcbiAgICAgICAgICBwdWJsaWNEYXRhLm5vbmNlQ29tYmluZWQsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBwdWJsaWNEYXRhLnB1YktleXNbaV0sXG4gICAgICAgICAgcHVibGljRGF0YS5ub25jZXNbaV1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBTdGVwIDk6IENvbWJpbmUgcGFydGlhbCBzaWduYXR1cmVzXG4gICAgICAvLyBGaW5hbGx5LCB0aGUgcGFydGlhbCBzaWduYXR1cmVzIGNhbiBiZSBjb21iaW5lZCBpbnRvIHRoZSBmdWxsIHNpZ25hdHVyZVxuICAgICAgLy8gKHMsIFIpIHRoYXQgY2FuIGJlIHZlcmlmaWVkIGFnYWluc3QgY29tYmluZWQgcHVibGljIGtleSBQLlxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHB1YmxpY0RhdGEuc2lnbmF0dXJlID0gbXVTaWcucGFydGlhbFNpZ0NvbWJpbmUocHVibGljRGF0YS5ub25jZUNvbWJpbmVkLCBwdWJsaWNEYXRhLnBhcnRpYWxTaWduYXR1cmVzKTtcbiAgICBcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBTdGVwIDEwOiBWZXJpZnkgc2lnbmF0dXJlXG4gICAgICAvLyBUaGUgcmVzdWx0aW5nIHNpZ25hdHVyZSBjYW4gbm93IGJlIHZlcmlmaWVkIGFzIGEgbm9ybWFsIFNjaG5vcnJcbiAgICAgIC8vIHNpZ25hdHVyZSAocywgUikgb3ZlciB0aGUgbWVzc2FnZSBtIGFuZCBwdWJsaWMga2V5IFAuXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgc2Nobm9yci52ZXJpZnkocHVibGljRGF0YS5wdWJLZXlDb21iaW5lZCwgcHVibGljRGF0YS5tZXNzYWdlLCBwdWJsaWNEYXRhLnNpZ25hdHVyZSk7XG5cbiAgICAgIHJldHVybiBwdWJsaWNEYXRhLnNpZ25hdHVyZS50b1N0cmluZyhcImhleFwiKVxuICAgIH1cbiIsIlxuaW1wb3J0IGFkYXB0b3IgPSByZXF1aXJlKFwic2Nobm9yci1hZGFwdG9yLXBvaW50cy9zcmMvYWRhcHRvci5qc1wiKVxuaW1wb3J0IEJpZ0ludGVnZXIgPSByZXF1aXJlKCdiaWdpJyk7XG5jb25zdCB7IG1hdGgsIGNvbnZlcnQgfSA9IHJlcXVpcmUoJ2JpcC1zY2hub3JyJyk7XG5pbXBvcnQgZWN1cnZlID0gcmVxdWlyZSgnZWN1cnZlJyk7XG5cbmNvbnN0IGN1cnZlID0gZWN1cnZlLmdldEN1cnZlQnlOYW1lKCdzZWNwMjU2azEnKTtcbmNvbnN0IGNvbmNhdCA9IEJ1ZmZlci5jb25jYXQ7XG5jb25zdCBHID0gY3VydmUuRztcbmNvbnN0IG4gPSBjdXJ2ZS5uO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nobm9yckFwaSB7XG4gICAgZ2VuTm9uY2U6IChvcmFjbGVQcml2SGV4OiBzdHJpbmcsIHF1ZXN0aW9uSGV4OiBzdHJpbmcsIGF1eEhleDogc3RyaW5nKSA9PiBzdHJpbmdcbiAgICBzaWduYXR1cmVTVmFsdWU6IChwcml2SGV4OiBzdHJpbmcsIG5vbmNlOiBzdHJpbmcsIG1zZ0hleDogc3RyaW5nKSA9PiBzdHJpbmdcblxuICAgIGFkYXB0b3JQdWJsaWM6IChvcmFjbGVQYkhleDogc3RyaW5nLCBtc2dIZXg6IHN0cmluZywgckhleDogc3RyaW5nKSA9PiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHNjaG5vcnJBcGk6ICgpID0+IFNjaG5vcnJBcGkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRhcHRvclB1YmxpYzogKG9yYWNsZVBiSGV4OiBzdHJpbmcsIG1zZ0hleDogc3RyaW5nLCBySGV4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHViSW50ID0gY29udmVydC5idWZmZXJUb0ludChhZGFwdG9yLmNyZWF0ZUFkYXB0b3JQb2ludChbQnVmZmVyLmZyb20ob3JhY2xlUGJIZXgsICdoZXgnKV0sIFtCdWZmZXIuZnJvbShtc2dIZXgsICdoZXgnKV0sIFtCdWZmZXIuZnJvbShySGV4LCAnaGV4JyldKSlcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwdWJJbnQudG9TdHJpbmcoMTYpXG4gICAgICAgIH0sXG4gICAgICAgIGdlbk5vbmNlOiAob3JhY2xlUHJpdkhleDogc3RyaW5nLCBxdWVzdGlvbkhleDogc3RyaW5nLCBhdXhIZXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdXggPSBCdWZmZXIuZnJvbShhdXhIZXgsICdoZXgnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaXZLZXkgPSBCaWdJbnRlZ2VyLmZyb21IZXgob3JhY2xlUHJpdkhleClcblxuICAgICAgICAgICAgY29uc3QgUCA9IEcubXVsdGlwbHkocHJpdktleSk7XG4gICAgICAgICAgICBjb25zdCBQeCA9IGNvbnZlcnQuaW50VG9CdWZmZXIoUC5hZmZpbmVYKTtcblxuICAgICAgICAgICAgY29uc3QgbSA9IEJ1ZmZlci5mcm9tKHF1ZXN0aW9uSGV4LCAnaGV4JylcblxuICAgICAgICAgICAgY29uc3QgZCA9IG1hdGguZ2V0RXZlbktleShQLCBwcml2S2V5KTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBjb252ZXJ0LmludFRvQnVmZmVyKGQueG9yKGNvbnZlcnQuYnVmZmVyVG9JbnQobWF0aC50YWdnZWRIYXNoKCdCSVAwMzQwL2F1eCcsIGF1eCkpKSk7XG4gICAgICAgICAgICBjb25zdCByYW5kID0gbWF0aC50YWdnZWRIYXNoKCdCSVAwMzQwL25vbmNlJywgY29uY2F0KFt0LCBQeCwgbV0pKVxuICAgICAgICAgICAgY29uc3Qga1ByaW1lID0gY29udmVydC5idWZmZXJUb0ludChyYW5kKS5tb2Qobik7XG4gICAgICAgICAgICByZXR1cm4ga1ByaW1lLnRvU3RyaW5nKDE2KVxuICAgICAgICB9LFxuICAgICAgICBzaWduYXR1cmVTVmFsdWU6IChwcml2SGV4OiBzdHJpbmcsIG5vbmNlOiBzdHJpbmcsIG1zZ0hleDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByaXZLZXkgPSBCaWdJbnRlZ2VyLmZyb21IZXgocHJpdkhleClcbiAgICAgICAgICAgIGNvbnN0IGtQcmltZSA9IEJpZ0ludGVnZXIuZnJvbUhleChub25jZSk7XG4gICAgICAgICAgICBjb25zdCBtID0gQnVmZmVyLmZyb20obXNnSGV4LCAnaGV4JylcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBhZGFwdG9yLmNyZWF0ZUFkYXB0b3JTZWNyZXQoW3ByaXZLZXldLCBbbV0sIFtrUHJpbWVdKVxuICAgICAgICAgICAgcmV0dXJuIHNpZ25hdHVyZS50b1N0cmluZygnaGV4JylcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiZXhwb3J0IGNvbnN0IHByb2Nlc3NUZW1wbGF0ZSA9IChuYW1lOiBzdHJpbmcsIHN1YnN0OiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSwgdGVtcGxhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ2V1cm9jYWxsJzogcmV0dXJuIHRlbXBsYXRlXG4gICAgICAgICAgICAucmVwbGFjZShcIiRub3Rpb25hbFwiLCBzdWJzdC5ub3Rpb25hbC50b1N0cmluZygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIkbWFyZ2luXCIsIHN1YnN0Lm1hcmdpbi50b1N0cmluZygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIkc3RyaWtlXCIsIHN1YnN0LnN0cmlrZS50b1N0cmluZygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIkcHJlbWl1bVwiLCBzdWJzdC5wcmVtaXVtLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAucmVwbGFjZShcIiRtaW5WYWx1ZVwiLCBzdWJzdC5taW5WYWx1ZS50b1N0cmluZygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIkbWF4VmFsdWVcIiwgc3Vic3QubWF4VmFsdWUudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlXG59IiwiaW1wb3J0ICogYXMgYml0Y29pbiBmcm9tIFwiYml0Y29pbmpzLWxpYlwiXG5pbXBvcnQgKiBhcyBlY2MgZnJvbSAndGlueS1zZWNwMjU2azEnO1xuYml0Y29pbi5pbml0RWNjTGliKGVjYyk7XG5cbmltcG9ydCB7U2lnbmVyfSBmcm9tIFwiYml0Y29pbmpzLWxpYi9zcmMvcHNidC5kXCJcblxuY29uc3QgbmV0ID0gYml0Y29pbi5uZXR3b3Jrcy50ZXN0bmV0XG5cblxuZXhwb3J0IGludGVyZmFjZSBVVHhPIHtcbiAgICB0eGlkOiBzdHJpbmcsXG4gICAgdm91dDogbnVtYmVyLFxuICAgIHNlY3JldHM6IEJ1ZmZlcltdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHgge1xuICAgIHR4aWQ6IHN0cmluZyxcbiAgICBoZXg6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR4QXBpIHtcbiAgICBnZW5PcGVuaW5nVHgoYWxpY2VJbjogVVR4TywgYm9iSW46IFVUeE8sIGFsaWNlUGs6IHN0cmluZywgYm9iUGs6IHN0cmluZywgYWxpY2VBbW91bnQ6IG51bWJlciwgYm9iQW1vdW50OiBudW1iZXIpOiBUeFxuICAgIGdlbkNsb3NpbmdUeChtdWx0aUluOiBVVHhPLCBhbGljZVBrOiBzdHJpbmcsIGJvYlBrOiBzdHJpbmcsIGFsaWNlQW1vdW50OiBudW1iZXIsIGJvYkFtb3VudDogbnVtYmVyKTogVHhcbiAgICBnZW5BbGljZUNldChtdWx0aUluOiBVVHhPLCBhbGljZVBrOiBzdHJpbmcsIGJvYlBrOiBzdHJpbmcsIG9yYWNsZU1zZ0hleDogc3RyaW5nLCBvcmFjbGVSOiBzdHJpbmcsIGFsaWNlQW1vdW50OiBudW1iZXIsIGJvYkFtb3VudDogbnVtYmVyKTogVHhcbiAgICBnZW5BbGljZUNldFJlZGVtcHRpb24oYWxpY2VPcmFjbGVJbjogVVR4TywgYWxpY2VQazogc3RyaW5nLCBvcmFjbGVTOiBzdHJpbmcpOiBUeFxufVxuXG5jb25zdCBwMnBrdHIgPSAocGs6IHN0cmluZykgPT4gYml0Y29pbi5wYXltZW50cy5wMnRyKHtcbiAgICBwdWJrZXk6IEJ1ZmZlci5mcm9tKHBrLCBcImhleFwiKSxcbiAgICBuZXR3b3JrOiBuZXRcbiAgfSlcblxuY29uc3Qgc2Nobm9yciA9IHJlcXVpcmUoJ2JpcC1zY2hub3JyJyk7XG5jb25zdCBtdVNpZyA9IHNjaG5vcnIubXVTaWc7XG5jb25zdCBjb252ZXJ0ID0gc2Nobm9yci5jb252ZXJ0O1xuaW1wb3J0ICogYXMgbXVsdGlzaWcgZnJvbSAnLi9tdS1zaWcnXG5cbmZ1bmN0aW9uIHNjaG5vcnJTaWduZXJTaW5nbGUocGssIHNlY3JldDogQnVmZmVyKTogU2lnbmVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwdWJsaWNLZXk6IEJ1ZmZlci5mcm9tKHBrLCBcImhleFwiKSxcbiAgICAgICAgbmV0d29yazogbmV0LFxuICAgICAgICBzaWduKGhhc2g6IEJ1ZmZlciwgbG93Uj86IGJvb2xlYW4pOiBCdWZmZXIge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2lnblNjaG5vcnIoaGFzaDogQnVmZmVyKTogQnVmZmVyIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hub3JyLnNpZ24oaGFzaCwgc2VjcmV0KVxuICAgICAgICB9LFxuICAgICAgICBnZXRQdWJsaWNLZXkoKTogQnVmZmVyIHtcbiAgICAgICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShwaywgXCJoZXhcIilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2Nobm9yclNpZ25lck11bHRpKHBrMSwgcGsyLCBzZWNyZXQxOiBCdWZmZXIsIHNlY3JldDI6IEJ1ZmZlcik6IFNpZ25lciB7XG4gICAgXG4gICAgY29uc3QgcGtDb21iaW5lZCA9IG11U2lnLnB1YktleUNvbWJpbmUoW0J1ZmZlci5mcm9tKHBrMSwgXCJoZXhcIiksIEJ1ZmZlci5mcm9tKHBrMiwgXCJoZXhcIildKTtcbiAgICBsZXQgcHViS2V5Q29tYmluZWQgPSBjb252ZXJ0LmludFRvQnVmZmVyKHBrQ29tYmluZWQuYWZmaW5lWCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGljS2V5OiBwdWJLZXlDb21iaW5lZCxcbiAgICAgICAgbmV0d29yazogbmV0LFxuICAgICAgICBzaWduKGhhc2g6IEJ1ZmZlciwgbG93Uj86IGJvb2xlYW4pOiBCdWZmZXIge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2lnblNjaG5vcnIoaGFzaDogQnVmZmVyKTogQnVmZmVyIHtcbiAgICAgICAgICAgIGxldCBtdVNpZ25hdHVyZSA9IG11bHRpc2lnLnNpZ24ocGsxLCBwazIsIFxuICAgICAgICAgICAgICAgIHNlY3JldDEudG9TdHJpbmcoXCJoZXhcIiksXG4gICAgICAgICAgICAgICAgc2VjcmV0Mi50b1N0cmluZyhcImhleFwiKSxcbiAgICAgICAgICAgICAgICBoYXNoLnRvU3RyaW5nKFwiaGV4XCIpKVxuICAgICAgICAgICAgcmV0dXJuIG11U2lnbmF0dXJlXG4gICAgICAgIH0sXG4gICAgICAgIGdldFB1YmxpY0tleSgpOiBCdWZmZXIge1xuICAgICAgICAgICAgcmV0dXJuIHB1YktleUNvbWJpbmVkXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0eEFwaTogKCkgPT4gVHhBcGkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuT3BlbmluZ1R4OiAoYWxpY2VJbjogVVR4TywgYm9iSW46IFVUeE8sIGFsaWNlUGs6IHN0cmluZywgYm9iUGs6IHN0cmluZywgYWxpY2VBbW91bnQ6IG51bWJlciwgYm9iQW1vdW50OiBudW1iZXIpOiBUeCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwc2J0ID0gbmV3IGJpdGNvaW4uUHNidCh7IG5ldHdvcms6IG5ldH0pXG4gICAgICAgICAgICBsZXQgYWxpY2VQMlRSID0gcDJwa3RyKGFsaWNlUGspXG4gICAgICAgICAgICBsZXQgYm9iUDJUUiA9IHAycGt0cihhbGljZVBrKVxuXG4gICAgICAgICAgICBwc2J0LmFkZElucHV0KHtcbiAgICAgICAgICAgICAgICBoYXNoOiBhbGljZUluLnR4aWQsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGFsaWNlSW4udm91dCxcbiAgICAgICAgICAgICAgICB3aXRuZXNzVXR4bzogeyB2YWx1ZTogYWxpY2VBbW91bnQsIHNjcmlwdDogYWxpY2VQMlRSLm91dHB1dCEgfSxcbiAgICAgICAgICAgICAgICB0YXBJbnRlcm5hbEtleTogQnVmZmVyLmZyb20oYWxpY2VQaywgXCJoZXhcIilcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwc2J0LmFkZElucHV0KHtcbiAgICAgICAgICAgICAgICBoYXNoOiBib2JJbi50eGlkLFxuICAgICAgICAgICAgICAgIGluZGV4OiBib2JJbi52b3V0LFxuICAgICAgICAgICAgICAgIHdpdG5lc3NVdHhvOiB7IHZhbHVlOiBib2JBbW91bnQsIHNjcmlwdDogYm9iUDJUUi5vdXRwdXQhIH0sXG4gICAgICAgICAgICAgICAgdGFwSW50ZXJuYWxLZXk6IEJ1ZmZlci5mcm9tKGJvYlBrLCBcImhleFwiKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBzYnQuYWRkT3V0cHV0KHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIm1vaGpTYXZEZFFZSFJZWGNTM3VTNnR0YUhQOGFteXZYNzhcIiwgLy8gVE9ETzogZ2VuZXJhdGUgbXUgYWRkcmVzc1xuICAgICAgICAgICAgICAgIHZhbHVlOiBhbGljZUFtb3VudCArIGJvYkFtb3VudFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgcHNidC5zaWduSW5wdXQoMCwgc2Nobm9yclNpZ25lclNpbmdsZShhbGljZVBrLCBhbGljZUluLnNlY3JldHNbMF0pKVxuICAgICAgICAgICAgcHNidC5zaWduSW5wdXQoMSwgc2Nobm9yclNpZ25lclNpbmdsZShib2JQaywgYm9iSW4uc2VjcmV0c1swXSkpXG4gICAgICAgICAgICBwc2J0LmZpbmFsaXplQWxsSW5wdXRzKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eGlkOiBwc2J0LmV4dHJhY3RUcmFuc2FjdGlvbigpLmdldElkKCksXG4gICAgICAgICAgICAgICAgaGV4OiBwc2J0LmV4dHJhY3RUcmFuc2FjdGlvbigpLnRvSGV4KClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBnZW5DbG9zaW5nVHg6IChtdWx0aUluOiBVVHhPLCBhbGljZVBrOiBzdHJpbmcsIGJvYlBrOiBzdHJpbmcsIGFsaWNlQW1vdW50OiBudW1iZXIsIGJvYkFtb3VudDogbnVtYmVyKTogVHggPT4ge1xuICAgICAgICAgICAgY29uc3QgcHNidCA9IG5ldyBiaXRjb2luLlBzYnQoeyBuZXR3b3JrOiBuZXR9KVxuICAgICAgICAgICAgY29uc3QgcGtDb21iaW5lZCA9IG11U2lnLnB1YktleUNvbWJpbmUoW0J1ZmZlci5mcm9tKGFsaWNlUGssIFwiaGV4XCIpLCBCdWZmZXIuZnJvbShib2JQaywgXCJoZXhcIildKTtcbiAgICAgICAgICAgIGxldCBwdWJLZXlDb21iaW5lZCA9IGNvbnZlcnQuaW50VG9CdWZmZXIocGtDb21iaW5lZC5hZmZpbmVYKTtcbiAgICAgICAgICAgIGxldCBtdWx0aVAyVFIgPSBwMnBrdHIocHViS2V5Q29tYmluZWQpXG5cbiAgICAgICAgICAgIHBzYnQuYWRkSW5wdXQoe1xuICAgICAgICAgICAgICAgIGhhc2g6IG11bHRpSW4udHhpZCxcbiAgICAgICAgICAgICAgICBpbmRleDogbXVsdGlJbi52b3V0LFxuICAgICAgICAgICAgICAgIHdpdG5lc3NVdHhvOiB7IHZhbHVlOiBhbGljZUFtb3VudCArIGJvYkFtb3VudCwgc2NyaXB0OiBtdWx0aVAyVFIub3V0cHV0ISB9LFxuICAgICAgICAgICAgICAgIHRhcEludGVybmFsS2V5OiBCdWZmZXIuZnJvbShhbGljZVBrLCBcImhleFwiKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBzYnQuYWRkT3V0cHV0KHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIm1vaGpTYXZEZFFZSFJZWGNTM3VTNnR0YUhQOGFteXZYNzhcIiwgLy8gVE9ETzogZ2VuZXJhdGUgYWxpY2UgYWRkcmVzc1xuICAgICAgICAgICAgICAgIHZhbHVlOiBhbGljZUFtb3VudFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBzYnQuYWRkT3V0cHV0KHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIm1vaGpTYXZEZFFZSFJZWGNTM3VTNnR0YUhQOGFteXZYNzhcIiwgLy8gVE9ETzogZ2VuZXJhdGUgYm9iIGFkZHJlc3NcbiAgICAgICAgICAgICAgICB2YWx1ZTogYm9iQW1vdW50XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHNidC5zaWduSW5wdXQoMCwgc2Nobm9yclNpZ25lck11bHRpKGFsaWNlUGssIGJvYlBrLCBtdWx0aUluLnNlY3JldHNbMF0sIG11bHRpSW4uc2VjcmV0c1sxXSkpXG4gICAgICAgICAgICBwc2J0LmZpbmFsaXplQWxsSW5wdXRzKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eGlkOiBwc2J0LmV4dHJhY3RUcmFuc2FjdGlvbigpLmdldElkKCksXG4gICAgICAgICAgICAgICAgaGV4OiBwc2J0LmV4dHJhY3RUcmFuc2FjdGlvbigpLnRvSGV4KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuQWxpY2VDZXQ6IChtdWx0aUluOiBVVHhPLCBhbGljZVBrOiBzdHJpbmcsIGJvYlBrOiBzdHJpbmcsIG9yYWNsZU1zZ0hleDogc3RyaW5nLCBvcmFjbGVSOiBzdHJpbmcsIGFsaWNlQW1vdW50OiBudW1iZXIsIGJvYkFtb3VudDogbnVtYmVyKTogVHggPT4ge1xuICAgICAgICAgICAgY29uc3QgcHNidCA9IG5ldyBiaXRjb2luLlBzYnQoeyBuZXR3b3JrOiBuZXR9KVxuICAgICAgICAgICAgY29uc3QgcGtDb21iaW5lZCA9IG11U2lnLnB1YktleUNvbWJpbmUoW0J1ZmZlci5mcm9tKGFsaWNlUGssIFwiaGV4XCIpLCBCdWZmZXIuZnJvbShib2JQaywgXCJoZXhcIildKTtcbiAgICAgICAgICAgIGxldCBwdWJLZXlDb21iaW5lZCA9IGNvbnZlcnQuaW50VG9CdWZmZXIocGtDb21iaW5lZC5hZmZpbmVYKTtcbiAgICAgICAgICAgIGxldCBtdWx0aVAyVFIgPSBwMnBrdHIocHViS2V5Q29tYmluZWQpXG5cbiAgICAgICAgICAgIHBzYnQuYWRkSW5wdXQoe1xuICAgICAgICAgICAgICAgIGhhc2g6IG11bHRpSW4udHhpZCxcbiAgICAgICAgICAgICAgICBpbmRleDogbXVsdGlJbi52b3V0LFxuICAgICAgICAgICAgICAgIHdpdG5lc3NVdHhvOiB7IHZhbHVlOiBhbGljZUFtb3VudCArIGJvYkFtb3VudCwgc2NyaXB0OiBtdWx0aVAyVFIub3V0cHV0ISB9LFxuICAgICAgICAgICAgICAgIHRhcEludGVybmFsS2V5OiBCdWZmZXIuZnJvbShhbGljZVBrLCBcImhleFwiKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBzYnQuYWRkT3V0cHV0KHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIm1vaGpTYXZEZFFZSFJZWGNTM3VTNnR0YUhQOGFteXZYNzhcIiwgLy8gVE9ETzogZ2VuZXJhdGUgYWxpY2UgYWRkcmVzcyBmcm9tIG9yYWNsZU1zZ0hleCBhbmQgb3JhY2xlUlxuICAgICAgICAgICAgICAgIHZhbHVlOiBhbGljZUFtb3VudFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBzYnQuYWRkT3V0cHV0KHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIm1vaGpTYXZEZFFZSFJZWGNTM3VTNnR0YUhQOGFteXZYNzhcIiwgLy8gVE9ETzogZ2VuZXJhdGUgYm9iIGFkZHJlc3NcbiAgICAgICAgICAgICAgICB2YWx1ZTogYm9iQW1vdW50XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHNidC5zaWduSW5wdXQoMCwgc2Nobm9yclNpZ25lck11bHRpKGFsaWNlUGssIGJvYlBrLCBtdWx0aUluLnNlY3JldHNbMF0sIG11bHRpSW4uc2VjcmV0c1sxXSkpXG4gICAgICAgICAgICBwc2J0LmZpbmFsaXplQWxsSW5wdXRzKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eGlkOiBwc2J0LmV4dHJhY3RUcmFuc2FjdGlvbigpLmdldElkKCksXG4gICAgICAgICAgICAgICAgaGV4OiBwc2J0LmV4dHJhY3RUcmFuc2FjdGlvbigpLnRvSGV4KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuQWxpY2VDZXRSZWRlbXB0aW9uOiAoYWxpY2VPcmFjbGVJbjogVVR4TywgYWxpY2VQazogc3RyaW5nLCBvcmFjbGVTOiBzdHJpbmcpOiBUeCA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHhpZDogXCIwXCIsXG4gICAgICAgICAgICAgICAgaGV4OiBcIjBcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==