import { ApiQuery, ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { Resource } from "./resource";
import { AllBlockApiQuery, SearchBlockApiBody, TransactionsInBlockApiQuery, Block, Transaction } from "../resourcesTypes";
export declare class Blocks extends Resource {
    all(query?: AllBlockApiQuery): Promise<ApiResponseWithPagination<Block[]>>;
    first(): Promise<ApiResponse<Block>>;
    last(): Promise<ApiResponse<Block>>;
    get(idOrHeight: string): Promise<ApiResponse<Block>>;
    transactions(idOrHeight: string, query?: TransactionsInBlockApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
    search(payload?: SearchBlockApiBody, query?: ApiQuery): Promise<ApiResponseWithPagination<Block[]>>;
}
