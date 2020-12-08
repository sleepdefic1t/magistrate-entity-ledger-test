import { EntityTransaction } from "@arkecosystem/core-magistrate-crypto/dist/transactions";
import { EntityBuilder } from "@arkecosystem/core-magistrate-crypto/dist/builders";
import { IEntityAsset } from "@arkecosystem/core-magistrate-crypto/dist/interfaces";
import { Transactions } from "@arkecosystem/crypto";

var REGISTRATION_ID = "";

export const BUSINESS_ENTITY_ASSETS: IEntityAsset[] = [
    {   // Business Register
        type: 0,
        subType: 0,
        action: 0,
        data: {
            name: "some_business_registration_name",
            ipfsData: "QmR45FmbVVrixReBwJkhEKde2qwHYaQzGxu4ZoDeswuF9w"
        }
    },
    {   // Business Update
        type: 0,
        subType: 0,
        action: 1,
        registrationId: "",
        data: {
            ipfsData: "QmYSK2JyM3RyDyB52caZCTKFR3HKniEcMnNJYdk8DQ6KBB"
        }
    },
    {   // Business Resign
        type: 0,
        subType: 0,
        action: 2,
        registrationId: "",
        data: {}
    }
];;


export function registerEntityTransactions() {
    Transactions.TransactionRegistry.registerTransactionType(EntityTransaction);
}

export function getBusinessEntityTransaction(
    ledgerPublicKey: string,
    ledgerWalletNonce: number,
    asset: IEntityAsset
) {

    var fee = 0;
    if (asset.action > 0) {
        asset.registrationId = REGISTRATION_ID;

        // some weirdness when sending w/default fee (5000000000 vs 500000000)
        fee = 500000000;
    }


    const entityTx = new EntityBuilder()
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

export function getSigningPayload(tx: any) {

    const signingPayload = Transactions.Serializer.serialize(tx,
        { excludeSignature: true, excludeSecondSignature: true }
    );
    console.log('\nSigning Payload: ', signingPayload.toString('hex'), '\n');

    return signingPayload;
}

export function addFinalSignature(tx: any, signature: string): any {
    tx.data.signature = signature;
    tx.data.id = Transactions.Utils.getId(tx.data).toString();

    if (tx.data.asset.action == 0) {
        REGISTRATION_ID = tx.data.id;
    }
    
    console.log('\nSigned Transaction: ', JSON.stringify(tx.toJson(), null, 4), '\n');
    console.log('\nis Signed Tx Valid?: ', tx.verify(), '\n');

    return tx;
}
