"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddress = exports.updateAddress = exports.deleteAddress = exports.getAddressList = exports.getAddressDetail = exports.UserAddress = void 0;
const apiService_1 = require("../api/apiService");
const const_1 = require("../utils/const");
exports.UserAddress = {
    getAddressDetail(idAddress, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.GET({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/address/detail/" + idAddress : const_1.BASE_URL + "/external/address/detail/" + idAddress,
            params: {
                "token": tokenUser
            },
            headers: {
                "jwt_token": tokenUser,
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key);
        return response;
    },
    getAddressList(params, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.GET({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/address/list" : const_1.BASE_URL + "/external/address/list",
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
        }, inaConst.secret_key);
        return response;
    },
    deleteAddress(idAddress, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.POST({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/address/delete/" + idAddress : const_1.BASE_URL + "/external/address/delete/" + idAddress,
            headers: {
                "jwt_token": tokenUser,
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key, {});
        return response;
    },
    updateAddress(idAddress, data, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.POST({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/address/update/" + idAddress : const_1.BASE_URL + "/external/address/update/" + idAddress,
            headers: {
                "jwt_token": tokenUser,
                "secret_key": inaConst.secret_key,
            },
            data: data
        }, inaConst.secret_key, {});
        return response;
    },
    createAddress(data, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.POST({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/address/create" : const_1.BASE_URL + "/external/address/create",
            headers: {
                "jwt_token": tokenUser,
                "secret_key": inaConst.secret_key,
            },
            data: data
        }, inaConst.secret_key, {});
        return response;
    }
};
function getAddressDetail(idAddress, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.GET({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/detail/" + idAddress : const_1.BASE_URL + "/external/address/detail/" + idAddress,
        params: {
            "token": tokenUser
        },
        headers: {
            "jwt_token": tokenUser,
            "secret_key": inaConst.secret_key,
        }
    }, inaConst.secret_key);
    return response;
}
exports.getAddressDetail = getAddressDetail;
function getAddressList(params, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.GET({
        url: inaConst.base_url != null ? inaConst.base_url + "external/address/list" : const_1.BASE_URL + "external/address/list",
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
    }, inaConst.secret_key);
    return response;
}
exports.getAddressList = getAddressList;
function deleteAddress(idAddress, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.POST({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/delete/" + idAddress : const_1.BASE_URL + "/external/address/delete/" + idAddress,
        headers: {
            "jwt_token": tokenUser,
            "secret_key": inaConst.secret_key,
        }
    }, inaConst.secret_key, {});
    return response;
}
exports.deleteAddress = deleteAddress;
function updateAddress(idAddress, data, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.POST({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/update/" + idAddress : const_1.BASE_URL + "/external/address/update/" + idAddress,
        headers: {
            "jwt_token": tokenUser,
            "secret_key": inaConst.secret_key,
        },
        data: data
    }, inaConst.secret_key, {});
    return response;
}
exports.updateAddress = updateAddress;
function createAddress(data, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.POST({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/address/create" : const_1.BASE_URL + "/external/address/create",
        headers: {
            "jwt_token": tokenUser,
            "secret_key": inaConst.secret_key,
        },
        data: data
    }, inaConst.secret_key, {});
    return response;
}
exports.createAddress = createAddress;
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
