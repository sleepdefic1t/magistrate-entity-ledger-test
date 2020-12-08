import { ApiQuery, ApiResponse } from "../interfaces";
import { Resource } from "./resource";
import { Transaction } from "../resourcesTypes";
export declare class Votes extends Resource {
    all(query?: ApiQuery): Promise<ApiResponse<Transaction>>;
    get(id: string): Promise<ApiResponse<Transaction>>;
}
