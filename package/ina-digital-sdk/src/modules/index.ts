import { getFilesGallery } from "./camModule";
import { getDevice } from "./checkDeviceModule";
import { initCookies } from "./initCookies";
import { getLocation } from "./locationModule";
import { ExternalRequest, IProxy } from "./proxyModule";
import { ITransaction, Transaction } from "./transactionModule";
import { IAddress, UserAddress } from "./userAddressModule";
import { getUsers } from "./userModule";

export class InaLib {
  constructor(readonly inaConst : { secret_key?: string, mode: string, base_url?: string }) { 
    initCookies(this.inaConst);
    if(this.inaConst.mode == 'dev'){
      if(this.inaConst.secret_key == null || this.inaConst.secret_key == ""){
        this.inaConst.secret_key = "zY1I3UU8UtnyJCbeLGbrQbw9msAcNewT-780-39";
      }
    }
  }

  GetLocation() {
    return getLocation();
  }

  GetDevice() {
    return getDevice();
  }

  GetFilesGallery() {
    return getFilesGallery();
  }

  ExternalRequest(data: IProxy) {
    return ExternalRequest(data, this.inaConst);
  }

  AddTransaction(data: ITransaction) {
    return Transaction.add(data, this.inaConst)
  }

  EditTransaction(data: ITransaction) {
    return Transaction.update(data, this.inaConst);
  }

  DetailTransaction(data: ITransaction) {
    return Transaction.detail(data, this.inaConst);
  }

  DeleteTransaction(data: ITransaction) {
    return Transaction.delete(data, this.inaConst);
  }

  ListTransaction(params: { page: number, perPage: number }) {
    return Transaction.list(params, this.inaConst);
  }

  Transaction: any = {
    add(data: ITransaction): any{
      return Transaction.add(data, this.inaConst)
    },
    edit(data: ITransaction): any{
      return Transaction.update(data, this.inaConst)
    },
    detail(data: ITransaction): any{
      return Transaction.detail(data, this.inaConst)
    },
    delete(data: ITransaction): any{
      return Transaction.delete(data, this.inaConst)
    },
    list(params: { page: number, perPage: number }): any{
      return Transaction.list(params, this.inaConst)
    },
  }

  GetAddressList(params: { page: number, perPage: number }) {
    return UserAddress.getAddressList(params, this.inaConst);
  }

  GetAddressDetail(idAddress: number) {
    return UserAddress.getAddressDetail(idAddress, this.inaConst);
  }

  AddAddress(data: IAddress) {
    return UserAddress.createAddress(data, this.inaConst);
  }

  EditAddress(idAddress: number, data: IAddress) {
    return UserAddress.updateAddress(idAddress, data, this.inaConst);
  }

  DeleteAddress(idAddress: number) {
    return UserAddress.deleteAddress(idAddress, this.inaConst)
  }

  UserAddress: any = {
    list(params: { page: number, perPage: number }): any{
      return UserAddress.getAddressList(params, this.inaConst);
    },
    detail(idAddress: number): any{
      return UserAddress.getAddressDetail(idAddress, this.inaConst);
    },
    add(data: IAddress): any{
      return UserAddress.createAddress(data, this.inaConst);
    },
    edit(idAddress: number, data: IAddress): any{
      return UserAddress.updateAddress(idAddress, data, this.inaConst);
    },
    delete(idAddress: number): any{
      return UserAddress.deleteAddress(idAddress, this.inaConst)
    }
  }

  GetUserDetail() {
    return getUsers(this.inaConst);
  }
}
