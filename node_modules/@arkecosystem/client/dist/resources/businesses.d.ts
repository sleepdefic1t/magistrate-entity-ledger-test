import { ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { Resource } from "./resource";
import { AllBusinessesApiQuery, BusinessBridgechainsApiQuery, SearchBusinesssApiBody, SearchBusinesssApiQuery, Business, Bridgechain } from "../resourcesTypes";
export declare class Businesses extends Resource {
    all(query?: AllBusinessesApiQuery): Promise<ApiResponseWithPagination<Business[]>>;
    get(walletAddress: string): Promise<ApiResponse<Business>>;
    bridgechains(walletAddress: string, query?: BusinessBridgechainsApiQuery): Promise<ApiResponseWithPagination<Bridgechain[]>>;
    bridgechain(walletAddress: string, genesisHash: string): Promise<ApiResponse<Bridgechain>>;
    search(payload?: SearchBusinesssApiBody, query?: SearchBusinesssApiQuery): Promise<ApiResponseWithPagination<Business[]>>;
}
