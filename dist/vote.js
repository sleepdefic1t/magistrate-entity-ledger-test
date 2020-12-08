"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDoubleVoteSignature = exports.getDoubleVoteTx = void 0;
const { Transactions } = require("@arkecosystem/crypto");
function getDoubleVoteTx(ledgerPublicKey, ledgerWalletNonce, ledgerWalletCurrentVote) {
    const voteAsset = ledgerWalletCurrentVote == undefined
        ? [`+${ledgerPublicKey}`, `-${ledgerPublicKey}`]
        : [`-${ledgerWalletCurrentVote}`, `+${ledgerWalletCurrentVote}`];
    const unsigned_transaction = Transactions.BuilderFactory.vote()
        .version(2)
        .nonce(ledgerWalletNonce.toFixed())
        .senderPublicKey(ledgerPublicKey)
        .votesAsset(voteAsset)
        .build();
    console.log('\nUnsigned Transaction: ', JSON.stringify(unsigned_transaction.toJson(), null, 4), '\n');
    return unsigned_transaction;
}
exports.getDoubleVoteTx = getDoubleVoteTx;
function addDoubleVoteSignature(tx, signature) {
    tx.data.signature = signature;
    console.log('\nSigned Transaction: ', JSON.stringify(tx.toJson(), null, 4), '\n');
    console.log('\nis nSigned Valid?: ', tx.verify(), '\n');
    return tx;
}
exports.addDoubleVoteSignature = addDoubleVoteSignature;
