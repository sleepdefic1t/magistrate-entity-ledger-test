
import { createARKTransport } from './transport'
import {
    getLedgerPublicKey,
    getLedgerAddress,
    getLedgerWalletNextNonce,
    getLedgerSignature,
} from './ledgerWallet'
import {
    registerEntityTransactions,
    BUSINESS_ENTITY_ASSETS,
    getBusinessEntityTransaction,
    getSigningPayload,
    addFinalSignature,
} from './magistrate_entity'
import { sendTransactionADN } from './connection';

async function main() {
    console.log("\n===== Testing a Magistrate Entity Transaction =====\n");

    const arkTransport = await createARKTransport();

    const ledgerPublicKey = await getLedgerPublicKey(arkTransport);
    const ledgerAddress = await getLedgerAddress(ledgerPublicKey);
    const ledgerNonce = await getLedgerWalletNextNonce(ledgerAddress);

    registerEntityTransactions();

    var nonce = parseInt(ledgerNonce);

    for (var asset of BUSINESS_ENTITY_ASSETS) {
        console.log("\n==================================================================");

        const baseTx = getBusinessEntityTransaction(ledgerPublicKey, nonce++, asset);

        const finalLedgerSignature = await getLedgerSignature(
            arkTransport,
            getSigningPayload(baseTx)
        );

        const finalTx = addFinalSignature(baseTx, finalLedgerSignature);

       await sendTransactionADN(finalTx);

    };

    console.log("\n==================================================================\n");
}

main();
