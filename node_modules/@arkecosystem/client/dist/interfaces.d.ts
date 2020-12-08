export interface IResponse<T> {
    body: T;
    headers: Record<string, string>;
    status: number;
}
export declare type DataResponse<T> = {
    data: T;
    errors: any;
};
export interface ResponseWithPagination {
    meta: {
        count: number;
        pageCount: number;
        totalCount: number;
        next?: string;
        previous?: string;
        self: string;
        first: string;
        last: string;
    };
}
export interface ApiResponse<T> extends IResponse<DataResponse<T>> {
}
export interface ApiExtendedResponse<T, U extends Record<string, any>> extends IResponse<DataResponse<T> & U> {
}
export interface ApiResponseWithPagination<T> extends ApiExtendedResponse<T, ResponseWithPagination> {
}
export interface ApiQuery extends Record<string, any> {
    page?: number;
    limit?: number;
}
export interface ApiBody extends Record<string, any> {
}
