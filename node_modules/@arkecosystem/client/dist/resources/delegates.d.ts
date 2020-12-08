import { ApiQuery, ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { AllDelegatesApiQuery, DelegateBlocksApiQuery, DelegateVotersApiQuery, SearchDelegatesApiBody, Delegate, Voter } from "../resourcesTypes/delegates";
import { Resource } from "./resource";
import { Block } from "..";
export declare class Delegates extends Resource {
    all(query?: AllDelegatesApiQuery): Promise<ApiResponseWithPagination<Delegate[]>>;
    get(usernameOrAddressOrPublicKey: string): Promise<ApiResponse<Delegate>>;
    blocks(usernameOrAddressOrPublicKey: string, query?: DelegateBlocksApiQuery): Promise<ApiResponseWithPagination<Block[]>>;
    voters(usernameOrAddressOrPublicKey: string, query?: DelegateVotersApiQuery): Promise<ApiResponseWithPagination<Voter[]>>;
    search(payload?: SearchDelegatesApiBody, query?: ApiQuery): Promise<ApiResponseWithPagination<Delegate[]>>;
}
