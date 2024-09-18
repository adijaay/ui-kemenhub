import { ServiceApi } from "../api/apiService";
import { BASE_URL } from "../utils/const";
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

export const Transaction = {
  add(data: ITransaction, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.POST(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/create" : BASE_URL + "/external/transaction/create",
        data: data,
        headers: {
          "jwt_token": data.tokenUser,
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key,
      {}
    );

    return response;
  },

  update(data: ITransaction, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.POST(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/update/"+data.unique_id : BASE_URL + "/external/transaction/update/"+data.unique_id,
        data: data,
        headers: {
          "jwt_token": data.tokenUser,
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key,
    {}
    );

    return response;
  },

  detail(data: ITransaction, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.GET(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/detail/"+data.unique_id : BASE_URL + "/external/transaction/detail/"+data.unique_id,
        params: data,
        headers: {
          "jwt_token": data.tokenUser,
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key
    );

    return response;
  },

  delete(data: ITransaction, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.POST(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/delete/"+data.unique_id : BASE_URL + "/external/transaction/delete/"+data.unique_id,
        data: data,
        headers: {
          "jwt_token": data.tokenUser,
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key
    );

    return response;
  },

  list(params: { page: number, perPage: number }, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    let data: ITransaction = {
      title: "",
      description: "",
      link: "",
      unique_id: ""
    };
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.GET(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/list" : BASE_URL + "/external/transaction/list",
        params:{
          page: params.page,
          perPage: params.perPage,
          id_layanan: data.id_layanan,
          id_microsite: data.id_microsite,
        },
        headers: {
          "jwt_token": data.tokenUser,
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key
    );

    return response;
  }
}

export function add(data: ITransaction, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
  data.id_layanan = parseInt(idLayanan);
  data.id_microsite = parseInt(idMicrosite);
  data.tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.POST(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/create" : BASE_URL + "/external/transaction/create",
      data: data,
      headers: {
        "jwt_token": data.tokenUser,
        "secret_key": inaConst.secret_key,
      }
    },
    inaConst.secret_key,
    {}
  );

  return response;
};

export function update(data: ITransaction, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
  if (inaConst.secret_key == null ||inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
  data.id_layanan = parseInt(idLayanan);
  data.id_microsite = parseInt(idMicrosite);
  data.tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.POST(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/update/"+data.unique_id : BASE_URL + "/external/transaction/update/"+data.unique_id,
      data: data,
      headers: {
        "jwt_token": data.tokenUser,
        "secret_key": inaConst.secret_key,
      }
    },
    inaConst.secret_key,
    {}
  );

  return response;
};

export function detail(data: ITransaction, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
  data.id_layanan = parseInt(idLayanan);
  data.id_microsite = parseInt(idMicrosite);
  data.tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.GET(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/detail/"+data.unique_id : BASE_URL + "/external/transaction/detail/"+data.unique_id,
      params: data,
      headers: {
        "jwt_token": data.tokenUser,
        "secret_key": inaConst.secret_key,
      }
    },
    inaConst.secret_key
  );

  return response;
}

export function deletes(data: ITransaction, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
  data.id_layanan = parseInt(idLayanan);
  data.id_microsite = parseInt(idMicrosite);
  data.tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.POST(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/delete/"+data.unique_id : BASE_URL + "/external/transaction/delete/"+data.unique_id,
      data: data,
      headers: {
        "jwt_token": data.tokenUser,
        "secret_key": inaConst.secret_key,
      }
    },
    inaConst.secret_key
  );

  return response;
};

export function list(params: { page: number, perPage: number }, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<AxiosResponse<any, any>> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
  let data: ITransaction = {
    title: "",
    description: "",
    link: "",
    unique_id: ""
  };
  data.id_layanan = parseInt(idLayanan);
  data.id_microsite = parseInt(idMicrosite);
  data.tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.GET(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/list" : BASE_URL + "/external/transaction/list",
      data: data,
      params:{
        page: params.page,
        perPage: params.perPage,
        id_layanan: data.id_layanan,
        id_microsite: data.id_microsite,
      },
      headers: {
        "jwt_token": data.tokenUser,
        "secret_key": inaConst.secret_key,
      }
    },
    inaConst.secret_key
  );

  return response;
};

function getIdLayananMicrosite(secret_key: string) {
  const host = window.location.host;
  const subdomain = host.split('.')[0]
  const rawPaths: any[] = []
  if(subdomain.includes("localhost")){
    const rawSecretKey = secret_key.split("-");
    rawPaths.push(rawSecretKey[1]);
    rawPaths.push(rawSecretKey[2]);
  }
  else{
    const rawSubDomain = subdomain.split("-");
    rawPaths.push(rawSubDomain[1]);
    rawPaths.push(rawSubDomain[2]);
  }
  let idLayanan = rawPaths[0];
  let idMicrosite = rawPaths[1];
  return {
    idLayanan,
    idMicrosite
  }
}

function getTokenUser(mode: string) {
  let tokenUser: any = "";
  if (mode == 'dev') {
    tokenUser = "wSOUiuEE0P"
  }
  else {
    const url: any = new URL(window.location.href);
    const token: any = url.searchParams.get("token")
    if (token != null && token != '') {
      tokenUser = token
    }
    else {
      let user: any = getCookie("token");
      tokenUser = user;
    }
  }

  return tokenUser;
}

function getCookie(cname: any) {
  let name: any = cname + "=";
  if (typeof window !== "undefined") {
    let ca: any = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c: any = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}