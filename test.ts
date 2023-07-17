import { SchnorrApi, schnorrApi } from "./util/schnorr"
import assert = require("assert")

const Buffer = require('safe-buffer').Buffer; 
const BigInteger = require('bigi');
const schnorr = require('bip-schnorr');
const convert = schnorr.convert;
import ecurve = require('ecurve');

const curve = ecurve.getCurveByName('secp256k1');
const concat = Buffer.concat;
const G = curve.G;
const n = curve.n;

const oraclePrivateKeyHex = 'B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF'
const oraclePrivateKey = BigInteger.fromHex(oraclePrivateKeyHex)
const oraclePublicKey = G.multiply(oraclePrivateKey).affineX
console.log(oraclePublicKey.toString(16).padStart(64, "0"))

const partyPrivateKeyHex = 'C90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B14E5C9'
const partyPrivateKey = BigInteger.fromHex(partyPrivateKeyHex)
const partyPublicKey = G.multiply(partyPrivateKey).affineX
console.log(partyPublicKey.toString(16).padStart(64, "0"))

let api = schnorrApi()

let message = (1).toString(16).padStart(64, "0")

let k = api.genNonce(oraclePrivateKeyHex, message, "C87AA53824B4D7AE2EB035A2B5BBBCCC080E76CDC6D1692C4B0B62D798E6D906")
let r = G.multiply(BigInteger.fromHex(k)).affineX.toString(16).padStart(64, "0")
console.log(message)

let twistedPublic = api.twistedPublic(oraclePublicKey.toString(16), partyPublicKey.toString(16), message, r)
console.log(twistedPublic.mu + " twisted public")
console.log(twistedPublic.oracle + " twisted oracle public")


let s = api.oracleSignatureSValue(oraclePrivateKeyHex, k, message)
console.log(s)
let twistedPrivate = api.twistedPrivate(partyPrivateKeyHex, s)
console.log(twistedPrivate + " twisted private")

console.log(G.multiply(BigInteger.fromHex(s)).affineX.toString(16).padStart(64, "0") + " twisted oracle public 2")


assert(true)

console.log('Hello')