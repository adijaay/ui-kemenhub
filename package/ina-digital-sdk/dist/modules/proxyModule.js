"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalRequest = void 0;
const axios_1 = require("axios");
const apiService_1 = require("../api/apiService");
const const_1 = require("../utils/const");
function ExternalRequest(data, inaConst) {
    if (inaConst.secret_key == null || inaConst.secret_key == "") {
        throw "Secret Key for Ina Digital SDK Lib is Undefined";
    }
    if (data.url.includes("localhost")) {
        const response = (0, axios_1.default)({
            url: data.url,
            method: data.method.toLowerCase(),
            headers: data.headers != null ? data.headers : {},
            params: data.params != null ? data.params : {},
            data: data.payload != null ? data.payload : {},
        });
        return response;
    }
    else {
        const response = apiService_1.ServiceApi.POST({
            url: inaConst.base_url != null ? inaConst.base_url + "/external/proxy" : const_1.BASE_URL + "/external/proxy",
            data: data,
            headers: {
                "secret_key": inaConst.secret_key,
            }
        }, inaConst.secret_key, {});
        return response;
    }
}
exports.ExternalRequest = ExternalRequest;
