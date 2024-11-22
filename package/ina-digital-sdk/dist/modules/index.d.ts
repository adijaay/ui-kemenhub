import { IProxy } from "./proxyModule";
import { ITransaction } from "./transactionModule";
import { IAddress } from "./userAddressModule";
export declare class InaLib {
    readonly inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    };
    constructor(inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    });
    GetLocation(): Promise<unknown>;
    GetDevice(): import("bowser").Parser.Parser;
    GetFilesGallery(): any;
    ExternalRequest(data: IProxy): Promise<import("axios").AxiosResponse<any, any>>;
    AddTransaction(data: ITransaction): Promise<import("axios").AxiosResponse<any, any>>;
    EditTransaction(data: ITransaction): Promise<import("axios").AxiosResponse<any, any>>;
    DetailTransaction(data: ITransaction): Promise<import("axios").AxiosResponse<any, any>>;
    DeleteTransaction(data: ITransaction): Promise<import("axios").AxiosResponse<any, any>>;
    ListTransaction(params: {
        page: number;
        perPage: number;
    }): Promise<import("axios").AxiosResponse<any, any>>;
    Transaction: any;
    GetAddressList(params: {
        page: number;
        perPage: number;
    }): Promise<any>;
    GetAddressDetail(idAddress: number): Promise<any>;
    AddAddress(data: IAddress): Promise<any>;
    EditAddress(idAddress: number, data: IAddress): Promise<any>;
    DeleteAddress(idAddress: number): Promise<any>;
    UserAddress: any;
    GetUserDetail(): Promise<any>;
}
