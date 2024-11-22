import { TEncResponseData } from "@/definitions/vehicle";
import fetchApi from "@/utils/axios";
import { encrypt } from "@/utils/encrypt";
import { getCookie } from "@/utils/utils";
import { AxiosResponse } from "axios";
import { v4 as uuidv4 } from "uuid";

export const fetchDataKendaraan = async (no_reg_kendaraan : string | string[]) => {
  const token = getCookie("inaku_token");

  const formData = new FormData();
  const formBody = {
    no_reg_kendaraan,
  };

  const encryptedForm = encrypt(formBody);
  if (typeof encryptedForm === "string") {
    formData.append("data", encryptedForm);
  } else {
    console.error("Encrypted failed, expected a string.");
  }

  const response: AxiosResponse = await fetchApi.post("/v1/layak-jalan", formData, {
    headers: {
      token: token,
      "Content-Type": "multipart/form-data",
      "X-Request-ID": uuidv4(),
    },
  });

  const { data } : { data: TEncResponseData } = response;

  return data;
};