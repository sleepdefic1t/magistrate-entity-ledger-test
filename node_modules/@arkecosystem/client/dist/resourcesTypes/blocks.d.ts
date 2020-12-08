import { ApiBody, ApiQuery } from "../interfaces";
export interface Block {
    id: string;
    version: number;
    height: number;
    previous: string;
    forged: {
        reward: number;
        fee: number;
        total: number;
        amount: number;
    };
    payload: {
        username?: string;
        hash: string;
        length: number;
    };
    generator: {
        username: string;
        address: string;
        publicKey: string;
    };
    signature: string;
    transactions: number;
    timestamp: {
        epoch: number;
        unix: number;
        human: string;
    };
}
export interface AllBlockApiQuery extends ApiQuery {
    orderBy?: string;
    id?: string;
    version?: number;
    timestamp?: number;
    previousBlock?: string;
    height?: number;
    numberOfTransactions?: number;
    totalAmount?: number;
    totalFee?: number;
    reward?: number;
    payloadLength?: number;
    payloadHash?: number;
    generatorPublicKey?: string;
    blockSignature?: string;
}
export interface TransactionsInBlockApiQuery extends ApiQuery {
    orderBy?: string;
    id?: string;
    blockId?: string;
    type?: number;
    version?: number;
    senderPublicKey?: string;
    senderId?: string;
    recipientId?: string;
    timestamp?: number;
    amount?: number;
    fee?: number;
    vendorField?: string;
}
export interface SearchBlockApiBody extends ApiBody {
    id?: string;
    version?: number;
    previousBlock?: number;
    payloadHash?: string;
    generatorPublicKey?: string;
    blockSignature?: string;
    timestamp?: {
        from?: number;
        to?: number;
    };
    height?: {
        from?: number;
        to?: number;
    };
    numberOfTransactions?: {
        from?: number;
        to?: number;
    };
    totalAmount?: {
        from?: number;
        to?: number;
    };
    totalFee?: {
        from?: number;
        to?: number;
    };
    reward?: {
        from?: number;
        to?: number;
    };
    payloadLength?: {
        from?: number;
        to?: number;
    };
}
