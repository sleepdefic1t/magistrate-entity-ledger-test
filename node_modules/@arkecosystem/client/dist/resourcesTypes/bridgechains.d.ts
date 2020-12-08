import { ApiBody, ApiQuery } from "../interfaces";
export interface Bridgechain {
    publicKey: string;
    address: string;
    name: string;
    seedNodes: string[];
    genesisHash: string;
    bridgechainRepository: string;
    ports: Record<string, number>;
    isResigned: false;
}
export interface AllBridgechainsApiQuery extends ApiQuery {
    orderBy?: string;
    publicKey?: string;
    isResigned?: boolean;
}
export interface SearchBridgechainsApiQuery extends ApiQuery {
    orderBy?: string;
}
export interface SearchBridgechainsApiBody extends ApiBody {
    address?: string;
    publicKey?: string;
    bridgechainRepository?: string;
    genesisHash?: string;
    name?: string;
    seedNodes?: string[];
    isResigned?: boolean;
}
