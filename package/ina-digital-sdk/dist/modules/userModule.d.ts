export declare const User: {
    getUser(inaConst: {
        secret_key?: string;
        mode: string;
        base_url?: string;
    }): Promise<any> | null;
};
export declare function getUsers(inaConst: {
    secret_key?: string;
    mode: string;
    base_url?: string;
}): Promise<any>;
