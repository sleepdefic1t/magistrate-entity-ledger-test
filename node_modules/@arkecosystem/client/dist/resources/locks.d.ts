import { ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { AllLocksApiQuery, SearchLocksApiBody, SearchLocksApiQuery, SearchLocksUnlockedApiBody, SearchLocksUnlockedApiQuery, Lock } from "../resourcesTypes/locks";
import { Resource } from "./resource";
import { Transaction } from "../resourcesTypes";
export declare class Locks extends Resource {
    all(query?: AllLocksApiQuery): Promise<ApiResponseWithPagination<Lock[]>>;
    get(id: string): Promise<ApiResponse<Lock>>;
    search(payload?: SearchLocksApiBody, query?: SearchLocksApiQuery): Promise<ApiResponseWithPagination<Lock[]>>;
    unlocked(payload?: SearchLocksUnlockedApiBody, query?: SearchLocksUnlockedApiQuery): Promise<ApiResponseWithPagination<Transaction[]>>;
}
