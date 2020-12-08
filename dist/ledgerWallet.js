"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLedgerSignature = exports.getLedgerWalletCurrentVote = exports.getLedgerWalletNextNonce = exports.getLedgerAddress = exports.getLedgerPublicKey = void 0;
const crypto_1 = require("@arkecosystem/crypto");
const connection_1 = require("./connection");
function getLedgerPublicKey(arkTransport) {
    return __awaiter(this, void 0, void 0, function* () {
        const ledgerPublicKeyStr = yield arkTransport.getPublicKey(connection_1.ADN_HD_PATH)
            .catch((e) => console.error(e));
        console.log('\nLedger PublicKey: ', ledgerPublicKeyStr, '\n');
        return ledgerPublicKeyStr;
    });
}
exports.getLedgerPublicKey = getLedgerPublicKey;
function getLedgerAddress(ledgerPublicKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const ledgerAddressStr = crypto_1.Identities.Address.fromPublicKey(ledgerPublicKey, connection_1.ADN_VERSION);
        console.log('\nLedger Address: ', ledgerAddressStr, '\n');
        return ledgerAddressStr;
    });
}
exports.getLedgerAddress = getLedgerAddress;
function getLedgerWalletNextNonce(ledgerAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const senderWallet = yield connection_1.getConnectionADN()
            .then((client) => __awaiter(this, void 0, void 0, function* () { return yield client.api("wallets").get(ledgerAddress); }))
            .catch((e) => console.error(e));
        const senderNonce = crypto_1.Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);
        console.log('\nLedger Nonce: ', senderNonce.toString(), '\n');
        return senderNonce.toFixed();
    });
}
exports.getLedgerWalletNextNonce = getLedgerWalletNextNonce;
function getLedgerWalletCurrentVote(ledgerAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const senderWallet = yield connection_1.getConnectionADN()
            .then((client) => __awaiter(this, void 0, void 0, function* () { return yield client.api("wallets").get(ledgerAddress); }))
            .catch((e) => console.error(e));
        const currentVote = senderWallet.body.data.attributes.vote;
        console.log('\nLedger Current Vote: ', currentVote, '\n');
        return currentVote;
    });
}
exports.getLedgerWalletCurrentVote = getLedgerWalletCurrentVote;
function getLedgerSignature(arkTransport, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const signature = yield arkTransport.signTransactionWithSchnorr(connection_1.ADN_HD_PATH, payload)
            .catch((e) => console.error(e));
        console.log('\nLedger Signature: ', signature.toString(), '\nfor payload: ', payload.toString('hex'), '\n');
        return signature;
    });
}
exports.getLedgerSignature = getLedgerSignature;
