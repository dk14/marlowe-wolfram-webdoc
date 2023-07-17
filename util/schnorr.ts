
import adaptor from "schnorr-adaptor-points/src/adaptor.js"
import BigInteger from 'bigi';
import { math, convert } from 'bip-schnorr';
import ecurve from 'ecurve';

const curve = ecurve.getCurveByName('secp256k1');
const concat = Buffer.concat;
const G = curve.G;
const n = curve.n;

export interface SchnorrApi {
    oracleSignatureSValue: (oraclePrivHex: string, msgHex: string) => string

    twistedPublic: (oraclePbHex: string, partyPbHex: string, msgHex: string, rHex: string) => string
    twistedPrivate: (partyPrivHex: string, sValueHex: string) => string
}

export const schnorrApi: () => SchnorrApi = () => {
    return {
        twistedPublic: (oraclePbHex: string, partyPbHex: string, msgHex: string, rHex: string): string => {
            const pubInt =  adaptor.createAdaptorPoint([Buffer.from(oraclePbHex, 'hex')], [Buffer.from(msgHex, 'hex')], [Buffer.from(rHex, 'hex')])
            return pubInt.add(BigInteger.fromHex(partyPbHex)).toString('hex')
        },

        twistedPrivate: (partyPrivHex: string, sValueHex: string): string => {
            return BigInteger.fromHex(partyPrivHex).add(BigInteger.fromHex(sValueHex)).toString('hex')
        },

        oracleSignatureSValue: (oraclePrivHex: string, msgHex: string): string => {
            const aux = Buffer.from('C87AA53824B4D7AE2EB035A2B5BBBCCC080E76CDC6D1692C4B0B62D798E6D906', 'hex');
            const privKey = BigInteger.fromHex(oraclePrivHex)

            const P = G.multiply(privKey);
            const Px = convert.intToBuffer(P.affineX);
            const m = Buffer.from(msgHex, 'hex');

            const d = math.getEvenKey(P, privKey);
            const t = convert.intToBuffer(d.xor(convert.bufferToInt(math.taggedHash('BIP0340/aux', aux))));
            const rand = math.taggedHash('BIP0340/nonce', concat([t, Px, m]))
            const kPrime = convert.bufferToInt(rand).mod(n);

            
            const signature = adaptor.createAdaptorSecret([privKey], [m], [kPrime])
            return signature.toString('hex')
        }
    }

}
