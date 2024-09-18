"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.User = void 0;
const apiService_1 = require("../api/apiService");
const const_1 = require("../utils/const");
exports.User = {
    getUser(inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const token = getTokenUser(inaConst.mode);
        if (token != null && token != '') {
            const response = apiService_1.ServiceApi.GET({
                url: inaConst.base_url != null ? inaConst.base_url + "/external/user/detail" : const_1.BASE_URL + "/external/user/detail",
                params: {
                    "token": token
                },
                headers: {
                    "secret_key": inaConst.secret_key,
                }
            }, inaConst.secret_key);
            return response;
        }
        else {
            return null;
        }
    }
};
function getUsers(inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const token = getTokenUser(inaConst.mode);
    if (token != null && token != '') {
        const response = apiService_1.ServiceApi.GET({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/user/detail" : const_1.BASE_URL + "/external/user/detail",
            params: {
                "token": token
            },
            headers: {
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key);
        return response;
    }
    else {
        return null;
    }
}
exports.getUsers = getUsers;
function getTokenUser(mode) {
    let tokenUser = "";
    if (mode == 'dev') {
        tokenUser = "wSOUiuEE0P";
    }
    else {
        const url = new URL(window.location.href);
        const token = url.searchParams.get("token");
        if (token != null && token != '') {
            tokenUser = token;
        }
        else {
            let user = getCookie("token");
            tokenUser = user;
        }
    }
    return tokenUser;
}
function getCookie(cname) {
    let name = cname + "=";
    if (typeof window !== "undefined") {
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
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
