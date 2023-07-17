
import adaptor = require("schnorr-adaptor-points/src/adaptor.js")
import BigInteger = require('bigi');
const { math, convert } = require('bip-schnorr');
import ecurve = require('ecurve');

const curve = ecurve.getCurveByName('secp256k1');
const concat = Buffer.concat;
const G = curve.G;
const n = curve.n;

type TwPubKey = {
    oracle: string
    mu: string
}

export interface SchnorrApi {
    genNonce: (oraclePrivHex: string, questionHex: string, auxHex: string) => string
    oracleSignatureSValue: (oraclePrivHex: string, nonce: string, msgHex: string) => string

    twistedPublic: (oraclePbHex: string, partyPbHex: string, msgHex: string, rHex: string) => TwPubKey
    twistedPrivate: (partyPrivHex: string, sValueHex: string) => string
}

export const schnorrApi: () => SchnorrApi = () => {
    return {
        twistedPublic: (oraclePbHex: string, partyPbHex: string, msgHex: string, rHex: string): TwPubKey => {
            const pubInt = convert.bufferToInt(adaptor.createAdaptorPoint([Buffer.from(oraclePbHex, 'hex')], [Buffer.from(msgHex, 'hex')], [Buffer.from(rHex, 'hex')]))
            return {
                oracle: pubInt.toString(16),
                mu: pubInt.add(BigInteger.fromHex(partyPbHex)).mod(n).toString(16)
            }
        },

        twistedPrivate: (partyPrivHex: string, sValueHex: string): string => {
            return BigInteger.fromHex(partyPrivHex).add(BigInteger.fromHex(sValueHex)).mod(n).toString(16)
        },
        genNonce: (oraclePrivHex: string, questionHex: string, auxHex: string): string => {
            const aux = Buffer.from(auxHex, 'hex');
            const privKey = BigInteger.fromHex(oraclePrivHex)

            const P = G.multiply(privKey);
            const Px = convert.intToBuffer(P.affineX);

            const m = Buffer.from(questionHex, 'hex')

            const d = math.getEvenKey(P, privKey);
            const t = convert.intToBuffer(d.xor(convert.bufferToInt(math.taggedHash('BIP0340/aux', aux))));
            const rand = math.taggedHash('BIP0340/nonce', concat([t, Px, m]))
            const kPrime = convert.bufferToInt(rand).mod(n);
            return kPrime.toString(16)
        },
        oracleSignatureSValue: (oraclePrivHex: string, nonce: string, msgHex: string): string => {
            const privKey = BigInteger.fromHex(oraclePrivHex)
            const kPrime = BigInteger.fromHex(nonce);
            const m = Buffer.from(msgHex, 'hex')

            
            const signature = adaptor.createAdaptorSecret([privKey], [m], [kPrime])
            return signature.toString('hex')
        }
    }

}
