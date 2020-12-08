import { ApiQuery } from "../interfaces";
export interface Peer {
    ip: string;
    port: number;
    version: string;
    height: number;
    status: number;
    os: string;
    latency: number;
}
export interface AllPeersApiQuery extends ApiQuery {
    port?: number;
    status?: string;
    os?: string;
    version?: string;
    orderBy?: string;
}
