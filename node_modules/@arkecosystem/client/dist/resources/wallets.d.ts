import { ApiQuery, ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { AllWalletsApiQuery, SearchWalletsApiBody, WalletsTransactionsApiQuery, WalletsTransactionsReceivedApiQuery, WalletsTransactionsSentApiQuery, Wallet } from "../resourcesTypes/wallets";
import { Resource } from "./resource";
import { Transaction, Lock } from "../resourcesTypes";
export declare class Wallets extends Resource {
    all(query?: AllWalletsApiQuery): Promise<ApiResponseWithPagination<Wallet[]>>;
    get(addressOrPublicKey: string): Promise<ApiResponse<Wallet>>;
    transactions(addressOrPublicKey: string, query?: WalletsTransactionsApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
    transactionsReceived(addressOrPublicKey: string, query?: WalletsTransactionsReceivedApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
    transactionsSent(addressOrPublicKey: string, query?: WalletsTransactionsSentApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
    votes(addressOrPublicKey: string, query?: ApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
    top(query?: ApiQuery): Promise<ApiResponseWithPagination<Wallet[]>>;
    search(payload: SearchWalletsApiBody, query?: ApiQuery): Promise<ApiResponseWithPagination<Wallet[]>>;
    locks(addressOrPublicKey: string, query?: ApiQuery): Promise<ApiResponseWithPagination<Lock[]>>;
}
