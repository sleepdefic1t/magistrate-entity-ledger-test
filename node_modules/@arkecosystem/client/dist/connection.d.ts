import { IResponse } from "./interfaces";
import { AvailableResourcesName } from "./resources";
export declare class Connection {
    private readonly host;
    private opts;
    constructor(host: string);
    api<T extends AvailableResourcesName>(name: T): InstanceType<{
        blocks: typeof import("./resources/blocks").Blocks;
        bridgechains: typeof import("./resources/bridgechains").Bridgechains;
        businesses: typeof import("./resources/businesses").Businesses;
        delegates: typeof import("./resources/delegates").Delegates;
        locks: typeof import("./resources/locks").Locks;
        node: typeof import("./resources/node").Node;
        peers: typeof import("./resources/peers").Peers;
        rounds: typeof import("./resources/rounds").Rounds;
        transactions: typeof import("./resources/transactions").Transactions;
        votes: typeof import("./resources/votes").Votes;
        wallets: typeof import("./resources/wallets").Wallets;
    }[T]>;
    withOptions(opts: Record<string, any>): this;
    get<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>>;
    post<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>>;
    private sendRequest;
}
