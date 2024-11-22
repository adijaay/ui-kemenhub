import axios, { AxiosRequestConfig } from "axios";
import debug from "../utils/debug";
import { Any } from "../utils/Any";
import eliminateObjectFalseValue from "../utils/eliminateObjectFalseValue";
import { aesDecode, aesEncode } from "../utils/encryptParser";


const TAG = "ServiceApi";
export class ServiceApi {
  static async GET(props: Omit<AxiosRequestConfig, "method">, secret: string) {
    secret = cleanSecretKey(secret);
    const TAG_METHOD = "get";
    try {
      const response = await axios({
        ...props,
        method: "GET",
      });
      try {
        const raw = aesDecode({ encryptedText: response.data.data, secret: secret });
        response.data.data = JSON.parse(raw);
      } catch (err) {
        debug.error("err_decode", err);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async POST<Data>(props: Omit<AxiosRequestConfig<Data>, "method">, secret: string, options?: { isFormData?: boolean }) {
    secret = cleanSecretKey(secret);
    const TAG_METHOD = "post";
    const isFormData = options?.isFormData ?? false;
    let formData: FormData | undefined = undefined;
    const rawDatas: Any = {};
    try {

      if (isFormData) {
        formData = new FormData();
        Object
          .entries(props.data ?? {})
          .forEach(([key, value]) => {
            if (value instanceof File) {
              formData?.append(key, value as string | Blob);
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
        const raw = aesEncode({ plainText: stringData, secret: secret });
        const newData = new FormData();
        newData.append("data", raw);
        Object
          .entries(formData ?? {})
          .forEach(([key, value]) => {
            newData.append(key, value as string | Blob);
          });
        datas = newData;
      } catch (err) {
        debug.error("err_decode", err);
      }

      const response = await axios({
        ...props,
        data: datas,
        headers: eliminateObjectFalseValue({
          ...props.headers,
          "Content-Type": isFormData ? "multipart/form-data" : undefined,
        }),
        method: "POST",
      });

      try {
        const raw = aesDecode({ encryptedText: response.data.data, secret: secret });
        response.data.data = JSON.parse(raw);
      } catch (err) {
        debug.error("err_decode", err);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

function cleanSecretKey(rawSecret: string) {
  const rawSecretKey = rawSecret.split("-");
  const secretKey = rawSecretKey[0];
  return secretKey;
}