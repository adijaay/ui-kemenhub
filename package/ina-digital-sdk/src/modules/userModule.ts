import { ServiceApi } from "../api/apiService";
import { BASE_URL } from "../utils/const";

export const User = {
  getUser(inaConst: { secret_key?: string, mode: string, base_url?: string }): Promise<any> | null {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
      throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const token = getTokenUser(inaConst.mode);
    if (token != null && token != '') {
      const response = ServiceApi.GET(
        {
          url: inaConst.base_url != null ? inaConst.base_url + "/external/user/detail" : BASE_URL + "/external/user/detail",
          params: {
            "token": token
          },
          headers: {
            "secret_key": inaConst.secret_key,
          }
        },
        inaConst.secret_key
      );
      return response
    }
    else {
      return null
    }
  }
}

export function getUsers(inaConst: { secret_key?: string, mode: string, base_url?: string }) {
  if (inaConst.secret_key == null || inaConst.secret_key == "") {
    throw "Secret Key for Ina Digital SDK Lib is Undefined";
  }
  const token = getTokenUser(inaConst.mode);
  if (token != null && token != '') {
    const response = ServiceApi.GET(
      {
        url: inaConst.base_url != null ? inaConst.base_url  + "/external/user/detail" : BASE_URL + "/external/user/detail",
        params: {
          "token": token
        },
        headers: {
          "secret_key": inaConst.secret_key,
        }
      },
      inaConst.secret_key
    );
    return response
  }
  else{
    return null
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