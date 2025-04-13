import { TResponseData } from "@/definitions/vehicle";
import fetchApi from "@/utils/axios";
import { getCookie } from "@/utils/utils";
import { AxiosResponse } from "axios";
import { v4 as uuidv4 } from "uuid";

export const fetchDataKendaraan = async (
  no_reg_kendaraan: string | string[],
) => {
  const token = getCookie("inaku_token");
  const formBody = {
    no_reg_kendaraan,
  };

  console.log("token", token);

  const response: AxiosResponse = await fetchApi.post(
    "/v1/layak-jalan",
    formBody,
    {
      headers: {
        token: token,
        "Content-Type": "application/json",
        "X-Request-ID": uuidv4(),
      },
    },
  );

  const { data }: { data: TResponseData } = response;

  return data;
};
