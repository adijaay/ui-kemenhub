import { AxiosResponse } from "axios";
export interface ITransaction {
    title: string;
    description: string;
    link: string;
    id_layanan?: number;
    id_microsite?: number;
    unique_id: string;
    harga?: number;
    keterangan?: string;
    status?: string;
    tokenUser?: string;
}
export declare const Transaction: {
    add(data: ITransaction, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<AxiosResponse<any, any>>;
    update(data: ITransaction, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<AxiosResponse<any, any>>;
    detail(data: ITransaction, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<AxiosResponse<any, any>>;
    delete(data: ITransaction, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<AxiosResponse<any, any>>;
    list(params: {
        page: number;
        perPage: number;
    }, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<AxiosResponse<any, any>>;
};
export declare function add(data: ITransaction, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<AxiosResponse<any, any>>;
export declare function update(data: ITransaction, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<AxiosResponse<any, any>>;
export declare function detail(data: ITransaction, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<AxiosResponse<any, any>>;
export declare function deletes(data: ITransaction, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<AxiosResponse<any, any>>;
export declare function list(params: {
    page: number;
    perPage: number;
}, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<AxiosResponse<any, any>>;
