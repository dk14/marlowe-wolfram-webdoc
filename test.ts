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
let transactionBuf = Buffer.from(transaction, "hex")

let pBuf = Buffer.from(p, "hex")

let adaptedOracleS = api.signatureSValue(s, k, transaction)
let adaptedOracleSig = Buffer.from(r + adaptedOracleS, "hex")
schnorr.verify(pBuf, transactionBuf, adaptedOracleSig)

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

let partySecretBigi = BigInteger.fromHex(partyPrivateKey.toString(16))
let sBigi = BigInteger.fromHex(s)
let partyPkBuf = Buffer.from(partyPublicKey.toString(16), "hex")


let signature1 = schnorr.sign(partySecretBigi, transactionBuf)
schnorr.verify(partyPkBuf, transactionBuf, signature1)

let signature2 = schnorr.sign(sBigi, transactionBuf)
schnorr.verify(pBuf, transactionBuf, signature2)

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

import * as multisig from './util/mu-sig'

let sigExample = multisig.sign(
    '846f34fdb2345f4bf932cb4b7d278fb3af24f44224fb52ae551781c3a3cad68a', 
    'cd836b1d42c51d80cef695a14502c21d2c3c644bc82f6a7052eb29247cf61f4f', 
    'add2b25e2d356bec3770305391cbc80cab3a40057ad836bcb49ef3eed74a3fee',
    '0a1645eef5a10e1f5011269abba9fd85c4f0cc70820d6f102fb7137f2988ad78',
    convert.hash(Buffer.from('muSig is awesome!', 'utf8'))
)

console.log(sigExample)

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------


assert(true)

console.log('Hello')

import * as bitcoin from "bitcoinjs-lib"
import * as ecc from 'tiny-secp256k1';
bitcoin.initEccLib(ecc);

const net = bitcoin.networks.testnet
const psbt = new bitcoin.Psbt({ network: net})

const p2pktr = bitcoin.payments.p2tr({
    pubkey: Buffer.from(p, "hex"),
    network: net
  })

const txid = "0c387ef5a1c7b197f357dfd7679a5fb0bb784752c710c06654b80b94155b2777"
const vout = 0

psbt.addInput({
    hash: txid,
    index: vout,
    witnessUtxo: { value: 100, script: p2pktr.output! },
    tapInternalKey: Buffer.from(p, "hex")
});

psbt.addOutput({
    address: "mohjSavDdQYHRYXcS3uS6ttaHP8amyvX78", // faucet address
    value: 150
});

//https://github.com/bitcoinjs/bitcoinjs-lib/issues/1027

//psbt.signInput()
//psbt.finalizeAllInputs()
//psbt.extractTransaction().toHex
