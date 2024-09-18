import { AxiosRequestConfig } from "axios";
export declare class ServiceApi {
    static GET(props: Omit<AxiosRequestConfig, "method">, secret: string): Promise<any>;
    static POST<Data>(props: Omit<AxiosRequestConfig<Data>, "method">, secret: string, options?: {
        isFormData?: boolean;
    }): Promise<any>;
}
