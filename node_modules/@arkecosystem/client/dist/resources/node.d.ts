import { ApiResponse, ApiExtendedResponse } from "../interfaces";
import { Resource } from "./resource";
import { NodeConfiguration, NodeCryptoConfiguration, NodeFeeStatisticsBody, NodeFeeStatisticsMeta, NodeStatus, NodeSyncingStatus } from "../resourcesTypes/node";
export declare class Node extends Resource {
    configuration(): Promise<ApiResponse<NodeConfiguration>>;
    crypto(): Promise<ApiResponse<NodeCryptoConfiguration>>;
    fees(days: number): Promise<ApiExtendedResponse<NodeFeeStatisticsBody, NodeFeeStatisticsMeta>>;
    status(): Promise<ApiResponse<NodeStatus>>;
    syncing(): Promise<ApiResponse<NodeSyncingStatus>>;
}
