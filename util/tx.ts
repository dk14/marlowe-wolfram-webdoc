import * as bitcoin from "bitcoinjs-lib"
import * as ecc from 'tiny-secp256k1';
bitcoin.initEccLib(ecc);

export interface UTxO {
    txid: string,
    vout: number,
    sign: (hash: string) => string
    
}

export interface Tx {
    txid: string,
    hex: string
}

export interface TxApi {
    genOpeningTx(aliceIn: UTxO, bobIn: UTxO, alicePk: string, bobPk: string, aliceAmount: number, bobAmount: number): Tx
    genClosingTx(multiIn: UTxO, alicePk: string, bobPk: string, aliceAmount: number, bobAmount: number): Tx
    genAliceCet(multiIn: UTxO, alicePk: string, bobPk: string, oracleMsgHex: string, oracleR: string, aliceAmount: number, bobAmount: number): Tx
    genAliceCetRedemption(aliceOracleIn: UTxO, alicePk: string, oracleS: string): Tx
}

export const schnorrApi: () => TxApi = () => {
    return {
        genOpeningTx: (aliceIn: UTxO, bobIn: UTxO, alicePk: string, bobPk: string, aliceAmount: number, bobAmount: number): Tx => {
            return {
                txid: "0",
                hex: "0"
            }

        },
        genClosingTx: (multiIn: UTxO, alicePk: string, bobPk: string, aliceAmount: number, bobAmount: number): Tx => {
            return {
                txid: "0",
                hex: "0"
            }
        },
        genAliceCet: (multiIn: UTxO, alicePk: string, bobPk: string, oracleMsgHex: string, oracleR: string, aliceAmount: number, bobAmount: number): Tx => {
            return {
                txid: "0",
                hex: "0"
            }
        },
        genAliceCetRedemption: (aliceOracleIn: UTxO, alicePk: string, oracleS: string): Tx => {
            return {
                txid: "0",
                hex: "0"
            }
        }
    }
}