import { ServiceApi } from "../api/apiService";
import { BASE_URL } from "../utils/const";

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

export const UserAddress = {
  getAddressDetail(idAddress: number, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.GET(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/detail/" + idAddress : BASE_URL + "/external/address/detail/" + idAddress,
        params: {
          "token": tokenUser
        },
        headers: {
          "jwt_token": tokenUser,
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key
    );
    return response
  },

  getAddressList(params: { page: number, perPage: number }, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.GET(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/list" : BASE_URL + "/external/address/list",
        params: {
          "data": JSON.stringify({
            "startRow": params.page === 1 ? 0 : (params.page * params.perPage) - params.perPage,
            "endRow": params.page === 1 ? params.perPage : (params.page * params.perPage),
            "rowGroupCols": [],
            "valueCols": [],
            "pivotCols": [],
            "pivotMode": false,
            "groupKeys": [],
            "sortModel": [{ "colId": "utama", "sort": "desc" }, { "colId": "createdAt", "sort": "desc" }],
            "filterModel": {},
          }),
          "q": "",
        },
        headers: {
          "jwt_token": tokenUser,
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key
    );
    return response
  },

  deleteAddress(idAddress: number, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.POST(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/delete/" + idAddress : BASE_URL + "/external/address/delete/" + idAddress,
        headers: {
          "jwt_token": tokenUser,
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key,
      {}
    );
    return response
  },

  updateAddress(idAddress: number, data: IAddress, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.POST(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/update/" + idAddress : BASE_URL + "/external/address/update/" + idAddress,
        headers: {
          "jwt_token": tokenUser,
          "secret_key": inaConst.secret_key,
        },
        data: data
      },
      inaConst.secret_key,
      {}
    );
    return response
  },

  createAddress(data: IAddress, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = ServiceApi.POST(
      {
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/create" : BASE_URL + "/external/address/create",
        headers: {
          "jwt_token": tokenUser,
          "secret_key": inaConst.secret_key,
        },
        data: data
      },
      inaConst.secret_key,
      {}
    );
    return response
  }
}

export function getAddressDetail(idAddress: number, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.GET(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/address/detail/" + idAddress : BASE_URL + "/external/address/detail/" + idAddress,
      params: {
        "token": tokenUser
      },
      headers: {
        "jwt_token": tokenUser,
        "secret_key": inaConst.secret_key,
      }
    },
    inaConst.secret_key
  );
  return response
}

export function getAddressList(params: { page: number, perPage: number }, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.GET(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "external/address/list" : BASE_URL + "external/address/list",
      params: {
        "data": JSON.stringify({
          "startRow": params.page === 1 ? 0 : (params.page * params.perPage) - params.perPage,
          "endRow": params.page === 1 ? params.perPage : (params.page * params.perPage),
          "rowGroupCols": [],
          "valueCols": [],
          "pivotCols": [],
          "pivotMode": false,
          "groupKeys": [],
          "sortModel": [{ "colId": "utama", "sort": "desc" }, { "colId": "createdAt", "sort": "desc" }],
          "filterModel": {},
        }),
        "q": "",
      },
      headers: {
        "jwt_token": tokenUser,
        "secret_key": inaConst.secret_key,
      }
    },
    inaConst.secret_key
  );
  return response
}

export function deleteAddress(idAddress: number, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.POST(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/address/delete/" + idAddress : BASE_URL + "/external/address/delete/" + idAddress,
      headers: {
        "jwt_token": tokenUser,
        "secret_key": inaConst.secret_key,
      }
    },
    inaConst.secret_key,
    {}
  );
  return response
}

export function updateAddress(idAddress: number, data: IAddress, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.POST(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/address/update/" + idAddress : BASE_URL + "/external/address/update/" + idAddress,
      headers: {
        "jwt_token": tokenUser,
        "secret_key": inaConst.secret_key,
      },
      data: data
    },
    inaConst.secret_key,
    {}
  );
  return response
}

export function createAddress(data: IAddress, inaConst : { secret_key?: string, mode: string, base_url?: string }): Promise<any> {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const tokenUser = getTokenUser(inaConst.mode);
  const response = ServiceApi.POST(
    {
      url: inaConst.base_url != null ? inaConst.base_url + "/external/address/create" : BASE_URL + "/external/address/create",
      headers: {
        "jwt_token": tokenUser,
        "secret_key": inaConst.secret_key,
      },
      data: data
    },
    inaConst.secret_key,
    {}
  );
  return response
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
