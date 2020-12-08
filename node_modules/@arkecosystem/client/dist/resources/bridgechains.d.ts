import { ApiResponseWithPagination } from "../interfaces";
import { Resource } from "./resource";
import { AllBridgechainsApiQuery, SearchBridgechainsApiBody, SearchBridgechainsApiQuery, Bridgechain } from "../resourcesTypes";
export declare class Bridgechains extends Resource {
    all(query?: AllBridgechainsApiQuery): Promise<ApiResponseWithPagination<Bridgechain[]>>;
    search(payload?: SearchBridgechainsApiBody, query?: SearchBridgechainsApiQuery): Promise<ApiResponseWithPagination<Bridgechain[]>>;
}
