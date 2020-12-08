import { ApiBody, ApiQuery } from "../interfaces";
export interface Delegate {
    username: string;
    address: string;
    publicKey: string;
    votes: number;
    rank: number;
    blocks: {
        produced: number;
        missed: number;
        last?: {
            id: string;
            height: number;
            timestamp: {
                epoch: number;
                unix: number;
                human: string;
            };
        };
    };
    production: {
        approval: number;
        productivity?: number;
    };
    forged: {
        fees: number;
        rewards: number;
        total: number;
    };
}
export interface Voter {
    address: string;
    publicKey: string;
    username?: string;
    secondPublicKey?: string;
    balance: number;
    isDelegate: boolean;
    vote: string;
}
export interface AllDelegatesApiQuery extends ApiQuery {
    orderBy?: string;
    type?: "resigned" | "never-forged";
    address?: string;
    publicKey?: string;
    secondPublicKey?: string;
    vote?: string;
    username?: string;
    balance?: number;
    voteBalance?: number;
    producedBlocks?: number;
}
export interface DelegateBlocksApiQuery extends ApiQuery {
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
    payloadHash?: string;
    generatorPublicKey?: string;
    blockSignature?: string;
}
export interface DelegateVotersApiQuery extends ApiQuery {
    orderBy?: string;
    address?: string;
    publicKey?: string;
    secondPublicKey?: string;
    vote?: string;
    username?: string;
    balance?: number;
    voteBalance?: number;
    producedBlocks?: number;
}
export interface SearchDelegatesApiBody extends ApiBody {
    address?: string;
    publicKey?: string;
    username?: string;
    usernames?: string[];
    approval?: {
        from?: number;
        to?: number;
    };
    forgedFees?: {
        from?: number;
        to?: number;
    };
    forgedRewards?: {
        from?: number;
        to?: number;
    };
    forgedTotal?: {
        from?: number;
        to?: number;
    };
    producedBlocks?: {
        from?: number;
        to?: number;
    };
    voteBalance?: {
        from?: number;
        to?: number;
    };
}
