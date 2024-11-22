"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InaLib = void 0;
const camModule_1 = require("./camModule");
const checkDeviceModule_1 = require("./checkDeviceModule");
const initCookies_1 = require("./initCookies");
const locationModule_1 = require("./locationModule");
const proxyModule_1 = require("./proxyModule");
const transactionModule_1 = require("./transactionModule");
const userAddressModule_1 = require("./userAddressModule");
const userModule_1 = require("./userModule");
class InaLib {
    constructor(inaConst) {
        this.inaConst = inaConst;
        this.Transaction = {
            add(data) {
                return transactionModule_1.Transaction.add(data, this.inaConst);
            },
            edit(data) {
                return transactionModule_1.Transaction.update(data, this.inaConst);
            },
            detail(data) {
                return transactionModule_1.Transaction.detail(data, this.inaConst);
            },
            delete(data) {
                return transactionModule_1.Transaction.delete(data, this.inaConst);
            },
            list(params) {
                return transactionModule_1.Transaction.list(params, this.inaConst);
            },
        };
        this.UserAddress = {
            list(params) {
                return userAddressModule_1.UserAddress.getAddressList(params, this.inaConst);
            },
            detail(idAddress) {
                return userAddressModule_1.UserAddress.getAddressDetail(idAddress, this.inaConst);
            },
            add(data) {
                return userAddressModule_1.UserAddress.createAddress(data, this.inaConst);
            },
            edit(idAddress, data) {
                return userAddressModule_1.UserAddress.updateAddress(idAddress, data, this.inaConst);
            },
            delete(idAddress) {
                return userAddressModule_1.UserAddress.deleteAddress(idAddress, this.inaConst);
            }
        };
        (0, initCookies_1.initCookies)(this.inaConst);
        if (this.inaConst.mode == 'dev') {
            if (this.inaConst.secret_key == null || this.inaConst.secret_key == "") {
                this.inaConst.secret_key = "zY1I3UU8UtnyJCbeLGbrQbw9msAcNewT-780-39";
            }
        }
    }
    GetLocation() {
        return (0, locationModule_1.getLocation)();
    }
    GetDevice() {
        return (0, checkDeviceModule_1.getDevice)();
    }
    GetFilesGallery() {
        return (0, camModule_1.getFilesGallery)();
    }
    ExternalRequest(data) {
        return (0, proxyModule_1.ExternalRequest)(data, this.inaConst);
    }
    AddTransaction(data) {
        return transactionModule_1.Transaction.add(data, this.inaConst);
    }
    EditTransaction(data) {
        return transactionModule_1.Transaction.update(data, this.inaConst);
    }
    DetailTransaction(data) {
        return transactionModule_1.Transaction.detail(data, this.inaConst);
    }
    DeleteTransaction(data) {
        return transactionModule_1.Transaction.delete(data, this.inaConst);
    }
    ListTransaction(params) {
        return transactionModule_1.Transaction.list(params, this.inaConst);
    }
    GetAddressList(params) {
        return userAddressModule_1.UserAddress.getAddressList(params, this.inaConst);
    }
    GetAddressDetail(idAddress) {
        return userAddressModule_1.UserAddress.getAddressDetail(idAddress, this.inaConst);
    }
    AddAddress(data) {
        return userAddressModule_1.UserAddress.createAddress(data, this.inaConst);
    }
    EditAddress(idAddress, data) {
        return userAddressModule_1.UserAddress.updateAddress(idAddress, data, this.inaConst);
    }
    DeleteAddress(idAddress) {
        return userAddressModule_1.UserAddress.deleteAddress(idAddress, this.inaConst);
    }
    GetUserDetail() {
        return (0, userModule_1.getUsers)(this.inaConst);
    }
}
exports.InaLib = InaLib;
