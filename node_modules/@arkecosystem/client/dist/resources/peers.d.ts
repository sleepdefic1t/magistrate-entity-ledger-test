import { ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { AllPeersApiQuery, Peer } from "../resourcesTypes/peers";
import { Resource } from "./resource";
export declare class Peers extends Resource {
    all(query?: AllPeersApiQuery): Promise<ApiResponseWithPagination<Peer[]>>;
    get(ip: string): Promise<ApiResponse<Peer>>;
}
