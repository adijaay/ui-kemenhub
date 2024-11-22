"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceApi = void 0;
const axios_1 = require("axios");
const debug_1 = require("../utils/debug");
const eliminateObjectFalseValue_1 = require("../utils/eliminateObjectFalseValue");
const encryptParser_1 = require("../utils/encryptParser");
const TAG = "ServiceApi";
class ServiceApi {
    static async GET(props, secret) {
        secret = cleanSecretKey(secret);
        const TAG_METHOD = "get";
        try {
            const response = await (0, axios_1.default)({
                ...props,
                method: "GET",
            });
            try {
                const raw = (0, encryptParser_1.aesDecode)({ encryptedText: response.data.data, secret: secret });
                response.data.data = JSON.parse(raw);
            }
            catch (err) {
                debug_1.default.error("err_decode", err);
            }
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
    static async POST(props, secret, options) {
        var _a, _b;
        secret = cleanSecretKey(secret);
        const TAG_METHOD = "post";
        const isFormData = (_a = options === null || options === void 0 ? void 0 : options.isFormData) !== null && _a !== void 0 ? _a : false;
        let formData = undefined;
        const rawDatas = {};
        try {
            if (isFormData) {
                formData = new FormData();
                Object
                    .entries((_b = props.data) !== null && _b !== void 0 ? _b : {})
                    .forEach(([key, value]) => {
                    if (value instanceof File) {
                        formData === null || formData === void 0 ? void 0 : formData.append(key, value);
                    }
                    else {
                        rawDatas[key] = value;
                    }
                });
            }
            let datas = isFormData ? rawDatas : props.data;
            if (datas == null) {
                datas = {};
                datas["dtm"] = new Date();
            }
            else {
                datas["dtm"] = new Date();
            }
            const stringData = JSON.stringify(datas);
            try {
                const raw = (0, encryptParser_1.aesEncode)({ plainText: stringData, secret: secret });
                const newData = new FormData();
                newData.append("data", raw);
                Object
                    .entries(formData !== null && formData !== void 0 ? formData : {})
                    .forEach(([key, value]) => {
                    newData.append(key, value);
                });
                datas = newData;
            }
            catch (err) {
                debug_1.default.error("err_decode", err);
            }
            const response = await (0, axios_1.default)({
                ...props,
                data: datas,
                headers: (0, eliminateObjectFalseValue_1.default)({
                    ...props.headers,
                    "Content-Type": isFormData ? "multipart/form-data" : undefined,
                }),
                method: "POST",
            });
            try {
                const raw = (0, encryptParser_1.aesDecode)({ encryptedText: response.data.data, secret: secret });
                response.data.data = JSON.parse(raw);
            }
            catch (err) {
                debug_1.default.error("err_decode", err);
            }
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ServiceApi = ServiceApi;
function cleanSecretKey(rawSecret) {
    const rawSecretKey = rawSecret.split("-");
    const secretKey = rawSecretKey[0];
    return secretKey;
}
