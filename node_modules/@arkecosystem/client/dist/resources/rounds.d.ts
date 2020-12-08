import { ApiResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Rounds extends Resource {
    delegates(roundNumber: number): Promise<ApiResponse<{
        publicKey: string;
        votes: string;
    }[]>>;
}
