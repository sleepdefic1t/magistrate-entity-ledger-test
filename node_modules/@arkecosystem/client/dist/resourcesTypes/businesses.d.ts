import { ApiBody, ApiQuery } from "../interfaces";
export declare class Business {
    address: string;
    publicKey: string;
    name: string;
    website: string;
    vat: string;
    repository: string;
    isResigned: true;
}
export interface AllBusinessesApiQuery extends ApiQuery {
    orderBy?: string;
    publicKey?: string;
    isResigned?: boolean;
}
export interface BusinessBridgechainsApiQuery extends ApiQuery {
    orderBy?: string;
    isResigned?: boolean;
}
export interface SearchBusinesssApiQuery extends ApiQuery {
    orderBy?: string;
}
export interface SearchBusinesssApiBody extends ApiBody {
    address?: string;
    publicKey?: string;
    name?: string;
    website?: string;
    vat?: string;
    repository?: string;
    isResigned?: boolean;
}
