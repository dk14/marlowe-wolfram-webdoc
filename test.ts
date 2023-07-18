import { SchnorrApi, schnorrApi } from "./util/schnorr"
import assert = require("assert")

const Buffer = require('safe-buffer').Buffer; 
const BigInteger = require('bigi');
const schnorr = require('bip-schnorr');
const muSig = schnorr.muSig;
const convert = schnorr.convert;
const math = schnorr.math;
import ecurve = require('ecurve');

const curve = ecurve.getCurveByName('secp256k1');
const concat = Buffer.concat;
const G = curve.G;
const n = curve.n;

//oracle
const oraclePrivateKeyHex = 'B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF'
const oraclePrivateKey = BigInteger.fromHex(oraclePrivateKeyHex)
const oraclePublicKey = G.multiply(oraclePrivateKey).affineX
console.log(oraclePublicKey.toString(16).padStart(64, "0") + " = oracle pub")

//party
const partyPrivateKeyHex = 'C90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B14E5C9'
const partyPrivateKey = BigInteger.fromHex(partyPrivateKeyHex)
const partyPublicKey = G.multiply(partyPrivateKey).affineX
console.log(partyPublicKey.toString(16).padStart(64, "0") + " = party pub")

let api = schnorrApi()

let message = (1).toString(16).padStart(64, "0")

let k = api.genNonce(oraclePrivateKeyHex, message, "C87AA53824B4D7AE2EB035A2B5BBBCCC080E76CDC6D1692C4B0B62D798E6D906")
let r = G.multiply(BigInteger.fromHex(k)).affineX.toString(16).padStart(64, "0")



// p is a public key for private key s, which will be revealed after message is signed with oraclePrivateKeyHex
let p = api.adaptorPublic(oraclePublicKey.toString(16),  message, r)
let s = api.signatureSValue(oraclePrivateKeyHex, k, message)
console.log(s + " = oracle s for message " + message)

assert(G.multiply(BigInteger.fromHex(s)).affineX.toString(16).padStart(64, "0") === p)

let transaction = (100).toString(16).padStart(64, "0")
let adaptedOracleS = api.signatureSValue(s, k, transaction)
schnorr.verify(Buffer.from(p, "hex"), Buffer.from(transaction, "hex"), Buffer.from(r + adaptedOracleS, "hex"))

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

let muKeys = [Buffer.from(p, "hex"), Buffer.from(partyPublicKey.toString(16), "hex")]
let twistedMu = muSig.pubKeyCombine(muKeys, muSig.computeEll(muKeys)).affineX
let twistedMuBuf = convert.intToBuffer(twistedMu)

let partyS = api.signatureSValue(partyPrivateKeyHex, k, transaction)
let muNonces = convert.intToBuffer(math.liftX(Buffer.from(r, "hex")).add(math.liftX(Buffer.from(r, "hex"))).affineX)
let muSignature = muSig.partialSigCombine(muNonces, [BigInteger.fromHex(adaptedOracleS), BigInteger.fromHex(partyS)])
//schnorr.verify(twistedMuBuf, Buffer.from(transaction, "hex"), muSignature)


assert(true)

console.log('Hello')