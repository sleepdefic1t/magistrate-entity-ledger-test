"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFinalSignature = exports.getSigningPayload = exports.getBusinessEntityTransaction = exports.registerEntityTransactions = exports.BUSINESS_ENTITY_ASSETS = void 0;
const transactions_1 = require("@arkecosystem/core-magistrate-crypto/dist/transactions");
const builders_1 = require("@arkecosystem/core-magistrate-crypto/dist/builders");
const crypto_1 = require("@arkecosystem/crypto");
var REGISTRATION_ID = "";
exports.BUSINESS_ENTITY_ASSETS = [
    {
        type: 0,
        subType: 0,
        action: 0,
        data: {
            name: "some_business_registration_name",
            ipfsData: "QmR45FmbVVrixReBwJkhEKde2qwHYaQzGxu4ZoDeswuF9w"
        }
    },
    {
        type: 0,
        subType: 0,
        action: 1,
        registrationId: "",
        data: {
            ipfsData: "QmYSK2JyM3RyDyB52caZCTKFR3HKniEcMnNJYdk8DQ6KBB"
        }
    },
    {
        type: 0,
        subType: 0,
        action: 2,
        registrationId: "",
        data: {}
    }
];
;
function registerEntityTransactions() {
    crypto_1.Transactions.TransactionRegistry.registerTransactionType(transactions_1.EntityTransaction);
}
exports.registerEntityTransactions = registerEntityTransactions;
function getBusinessEntityTransaction(ledgerPublicKey, ledgerWalletNonce, asset) {
    var fee = 0;
    if (asset.action > 0) {
        asset.registrationId = REGISTRATION_ID;
        // some weirdness when sending w/default fee (5000000000 vs 500000000)
        fee = 500000000;
    }
    const entityTx = new builders_1.EntityBuilder()
        .network(30)
        .version(2)
        .fee(fee.toString())
        .nonce(ledgerWalletNonce.toString())
        .senderPublicKey(ledgerPublicKey)
        .asset(asset)
        .build();
    console.log('\nMagistrate Entity Transaction:\n', entityTx.toJson(), '\n');
    return entityTx;
}
exports.getBusinessEntityTransaction = getBusinessEntityTransaction;
function getSigningPayload(tx) {
    const signingPayload = crypto_1.Transactions.Serializer.serialize(tx, { excludeSignature: true, excludeSecondSignature: true });
    console.log('\nSigning Payload: ', signingPayload.toString('hex'), '\n');
    return signingPayload;
}
exports.getSigningPayload = getSigningPayload;
function addFinalSignature(tx, signature) {
    tx.data.signature = signature;
    tx.data.id = crypto_1.Transactions.Utils.getId(tx.data).toString();
    if (tx.data.asset.action == 0) {
        REGISTRATION_ID = tx.data.id;
    }
    console.log('\nSigned Transaction: ', JSON.stringify(tx.toJson(), null, 4), '\n');
    console.log('\nis Signed Tx Valid?: ', tx.verify(), '\n');
    return tx;
}
exports.addFinalSignature = addFinalSignature;
