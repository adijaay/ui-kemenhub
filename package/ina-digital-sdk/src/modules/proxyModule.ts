import axios, { AxiosResponse } from "axios";
import { ServiceApi } from "../api/apiService";
import { BASE_URL } from "../utils/const";

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

export function ExternalRequest (data: IProxy, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  if(data.url.includes("localhost")){
    const response = axios({
      url: data.url,
      method: data.method.toLowerCase(),
      headers: data.headers != null ? data.headers : {},
      params: data.params != null ? data.params : {},
      data: data.payload != null ? data.payload : {},
    });

    return response;
  }
  else{
    const response = ServiceApi.POST(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/proxy" : BASE_URL + "/external/proxy",
        data: data,
        headers: {
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key,
      {}
    );

    return response;
  }
}