import { ApiQuery, ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { AllTransactionsApiQuery, SearchTransactionsApiBody, CreateTransactionApiResponse, Transaction, TransactionTypes, TransactionFees } from "../resourcesTypes/transactions";
import { Resource } from "./resource";
export declare class Transactions extends Resource {
    all(query?: AllTransactionsApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
    create(payload: {
        transactions: object[];
    } & Record<string, any>): Promise<ApiResponse<CreateTransactionApiResponse> & {
        errors?: any;
    }>;
    get(id: string): Promise<ApiResponse<Transaction>>;
    allUnconfirmed(query?: ApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
    getUnconfirmed(id: string): Promise<ApiResponse<Transaction>>;
    search(payload: SearchTransactionsApiBody, query?: ApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
    types(): Promise<ApiResponse<TransactionTypes>>;
    fees(): Promise<ApiResponse<TransactionFees>>;
    schemas(): Promise<ApiResponse<Record<string, object>>>;
}
