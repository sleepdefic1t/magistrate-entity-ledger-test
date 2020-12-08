const { Transactions } = require("@arkecosystem/crypto");
import { BigNumber } from "@arkecosystem/crypto/dist/utils";

export function getDoubleVoteTx(
    ledgerPublicKey: string,
    ledgerWalletNonce: BigNumber,
    ledgerWalletCurrentVote: string | undefined
) {
    const voteAsset = ledgerWalletCurrentVote == undefined
        ? [`+${ledgerPublicKey}`, `-${ledgerPublicKey}`]
        : [`-${ledgerWalletCurrentVote}`, `+${ledgerWalletCurrentVote}`]

    const unsigned_transaction = Transactions.BuilderFactory.vote()
        .version(2)
        .nonce(ledgerWalletNonce.toFixed())
        .senderPublicKey(ledgerPublicKey)
        .votesAsset(voteAsset)
        .build();

    console.log('\nUnsigned Transaction: ',
        JSON.stringify(unsigned_transaction.toJson(), null, 4), '\n');
    return unsigned_transaction;
}

export function addDoubleVoteSignature(tx: any, signature: string): any {
    tx.data.signature = signature;
    console.log('\nSigned Transaction: ', JSON.stringify(tx.toJson(), null, 4), '\n');
    console.log('\nis nSigned Valid?: ', tx.verify(), '\n');
    return tx;
}
