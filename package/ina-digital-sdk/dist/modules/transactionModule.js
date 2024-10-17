"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.deletes = exports.detail = exports.update = exports.add = exports.Transaction = void 0;
const apiService_1 = require("../api/apiService");
const const_1 = require("../utils/const");
exports.Transaction = {
    add(data, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
        data.id_layanan = parseInt(idLayanan);
        data.id_microsite = parseInt(idMicrosite);
        data.tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.POST({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/address/create" : const_1.BASE_URL + "/external/transaction/create",
            data: data,
            headers: {
                "jwt_token": data.tokenUser,
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key, {});
        return response;
    },
    update(data, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
        data.id_layanan = parseInt(idLayanan);
        data.id_microsite = parseInt(idMicrosite);
        data.tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.POST({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/update/" + data.unique_id : const_1.BASE_URL + "/external/transaction/update/" + data.unique_id,
            data: data,
            headers: {
                "jwt_token": data.tokenUser,
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key, {});
        return response;
    },
    detail(data, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
        data.id_layanan = parseInt(idLayanan);
        data.id_microsite = parseInt(idMicrosite);
        data.tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.GET({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/detail/" + data.unique_id : const_1.BASE_URL + "/external/transaction/detail/" + data.unique_id,
            params: data,
            headers: {
                "jwt_token": data.tokenUser,
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key);
        return response;
    },
    delete(data, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
        data.id_layanan = parseInt(idLayanan);
        data.id_microsite = parseInt(idMicrosite);
        data.tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.POST({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/delete/" + data.unique_id : const_1.BASE_URL + "/external/transaction/delete/" + data.unique_id,
            data: data,
            headers: {
                "jwt_token": data.tokenUser,
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key);
        return response;
    },
    list(params, inaConst) {
        if (inaConst.secret_key == null || inaConst.secret_key == "") {
            throw "Secret Key for Ina Digital SDK Lib is Undefined";
        }
        const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
        let data = {
            title: "",
            description: "",
            link: "",
            unique_id: ""
        };
        data.id_layanan = parseInt(idLayanan);
        data.id_microsite = parseInt(idMicrosite);
        data.tokenUser = getTokenUser(inaConst.mode);
        const response = apiService_1.ServiceApi.GET({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/list" : const_1.BASE_URL + "/external/transaction/list",
            params: {
                page: params.page,
                perPage: params.perPage,
                id_layanan: data.id_layanan,
                id_microsite: data.id_microsite,
            },
            headers: {
                "jwt_token": data.tokenUser,
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key);
        return response;
    }
};
function add(data, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.POST({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/create" : const_1.BASE_URL + "/external/transaction/create",
        data: data,
        headers: {
            "jwt_token": data.tokenUser,
            "secret_key": inaConst.secret_key,
        }
    }, inaConst.secret_key, {});
    return response;
}
exports.add = add;
;
function update(data, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.POST({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/update/" + data.unique_id : const_1.BASE_URL + "/external/transaction/update/" + data.unique_id,
        data: data,
        headers: {
            "jwt_token": data.tokenUser,
            "secret_key": inaConst.secret_key,
        }
    }, inaConst.secret_key, {});
    return response;
}
exports.update = update;
;
function detail(data, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.GET({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/detail/" + data.unique_id : const_1.BASE_URL + "/external/transaction/detail/" + data.unique_id,
        params: data,
        headers: {
            "jwt_token": data.tokenUser,
            "secret_key": inaConst.secret_key,
        }
    }, inaConst.secret_key);
    return response;
}
exports.detail = detail;
function deletes(data, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.POST({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/delete/" + data.unique_id : const_1.BASE_URL + "/external/transaction/delete/" + data.unique_id,
        data: data,
        headers: {
            "jwt_token": data.tokenUser,
            "secret_key": inaConst.secret_key,
        }
    }, inaConst.secret_key);
    return response;
}
exports.deletes = deletes;
;
function list(params, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    const { idLayanan, idMicrosite } = getIdLayananMicrosite(inaConst.secret_key);
    let data = {
        title: "",
        description: "",
        link: "",
        unique_id: ""
    };
    data.id_layanan = parseInt(idLayanan);
    data.id_microsite = parseInt(idMicrosite);
    data.tokenUser = getTokenUser(inaConst.mode);
    const response = apiService_1.ServiceApi.GET({
        url: inaConst.base_url != null ? inaConst.base_url + "/external/transaction/list" : const_1.BASE_URL + "/external/transaction/list",
        data: data,
        params: {
            page: params.page,
            perPage: params.perPage,
            id_layanan: data.id_layanan,
            id_microsite: data.id_microsite,
        },
        headers: {
            "jwt_token": data.tokenUser,
            "secret_key": inaConst.secret_key,
        }
    }, inaConst.secret_key);
    return response;
}
exports.list = list;
;
function getIdLayananMicrosite(secret_key) {
    const host = window.location.host;
    const subdomain = host.split('.')[0];
    const rawPaths = [];
    if (subdomain.includes("localhost")) {
        const rawSecretKey = secret_key.split("-");
        rawPaths.push(rawSecretKey[1]);
        rawPaths.push(rawSecretKey[2]);
    }
    else {
        const rawSubDomain = subdomain.split("-");
        rawPaths.push(rawSubDomain[1]);
        rawPaths.push(rawSubDomain[2]);
    }
    let idLayanan = rawPaths[0];
    let idMicrosite = rawPaths[1];
    return {
        idLayanan,
        idMicrosite
    };
}
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
