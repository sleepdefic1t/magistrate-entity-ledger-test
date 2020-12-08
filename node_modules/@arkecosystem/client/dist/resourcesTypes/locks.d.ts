import { ApiBody, ApiQuery } from "../interfaces";
export interface Lock {
    lockId: string;
    amount: string;
    secretHash: string;
    senderPublicKey: string;
    recipientId: string;
    timestamp: {
        epoch: number;
        unix: number;
        human: string;
    };
    expirationType: number;
    expirationValue: number;
    isExpired: boolean;
    vendorField: string;
}
export interface AllLocksApiQuery extends ApiQuery {
    orderBy?: string;
    recipientId?: string;
    senderPublicKey?: string;
    lockId?: string;
    secretHash?: string;
    amount?: number;
    expirationValue?: number;
    expirationType?: number;
    isExpired?: boolean;
}
export interface SearchLocksApiQuery extends ApiQuery {
    orderBy?: string;
}
export interface SearchLocksApiBody extends ApiBody {
    recipientId?: string;
    senderPublicKey?: string;
    lockId?: string;
    secretHash?: string;
    amount?: number;
    timestamp?: number;
    vendorField?: string;
    expirationType?: number;
    expirationValue?: number;
    isExpired?: boolean;
}
export interface SearchLocksUnlockedApiQuery extends ApiQuery {
    orderBy?: string;
}
export interface SearchLocksUnlockedApiBody extends ApiBody {
    ids?: string[];
}
