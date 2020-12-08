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
const transport_1 = require("./transport");
const ledgerWallet_1 = require("./ledgerWallet");
const magistrate_entity_1 = require("./magistrate_entity");
const connection_1 = require("./connection");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n===== Testing a Magistrate Entity Transaction =====\n");
        const arkTransport = yield transport_1.createARKTransport();
        const ledgerPublicKey = yield ledgerWallet_1.getLedgerPublicKey(arkTransport);
        const ledgerAddress = yield ledgerWallet_1.getLedgerAddress(ledgerPublicKey);
        const ledgerNonce = yield ledgerWallet_1.getLedgerWalletNextNonce(ledgerAddress);
        magistrate_entity_1.registerEntityTransactions();
        var nonce = parseInt(ledgerNonce);
        for (var asset of magistrate_entity_1.BUSINESS_ENTITY_ASSETS) {
            console.log("\n==================================================================");
            const baseTx = magistrate_entity_1.getBusinessEntityTransaction(ledgerPublicKey, nonce++, asset);
            const finalLedgerSignature = yield ledgerWallet_1.getLedgerSignature(arkTransport, magistrate_entity_1.getSigningPayload(baseTx));
            const finalTx = magistrate_entity_1.addFinalSignature(baseTx, finalLedgerSignature);
            yield connection_1.sendTransactionADN(finalTx);
        }
        ;
        console.log("\n==================================================================\n");
    });
}
main();
