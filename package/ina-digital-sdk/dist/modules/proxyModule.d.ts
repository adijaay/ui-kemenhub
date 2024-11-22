import { AxiosResponse } from "axios";
export interface IProxy {
    id?: string;
    name?: string;
    key?: string;
    url: string;
    method: string;
    headers?: any;
    timeout?: number;
    params?: any;
    payload?: any;
    data?: any;
    status?: string;
    message?: string;
    code?: number;
    createdAt?: string;
    updatedAt?: string;
}
export declare function ExternalRequest(data: IProxy, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<AxiosResponse<any, any>>;
