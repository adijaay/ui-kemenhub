export interface IAddress {
    utama: number;
    label: string;
    penerima: string;
    phone: string;
    prov?: string;
    prov_id?: number;
    kota?: string;
    kota_id?: number;
    kec?: string;
    kec_id?: number;
    kel?: string;
    kel_id?: number;
    kode_pos: string;
    alamat: string;
    catatan?: string;
    lat?: string;
    lon?: string;
    shipper?: object;
    shipper_txt?: string;
    wilayah?: any;
}
export declare const UserAddress: {
    getAddressDetail(idAddress: number, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<any>;
    getAddressList(params: {
        page: number;
        perPage: number;
    }, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<any>;
    deleteAddress(idAddress: number, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<any>;
    updateAddress(idAddress: number, data: IAddress, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<any>;
    createAddress(data: IAddress, inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<any>;
};
export declare function getAddressDetail(idAddress: number, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<any>;
export declare function getAddressList(params: {
    page: number;
    perPage: number;
}, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<any>;
export declare function deleteAddress(idAddress: number, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<any>;
export declare function updateAddress(idAddress: number, data: IAddress, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<any>;
export declare function createAddress(data: IAddress, inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<any>;
