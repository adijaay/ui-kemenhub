import fetchApi from "@/utils/axios";
import { encrypt } from "@/utils/encrypt";
import { getCookie } from "@/utils/utils";
import { v4 as uuidv4 } from "uuid";
import { AxiosResponse } from "axios";
import { fetchDataKendaraan } from "@/hooks/fetch";

jest.mock("@/utils/axios");
jest.mock("@/utils/encrypt");
jest.mock("@/utils/utils");
jest.mock("uuid");

describe("fetchDataKendaraan", () => {
  const mockToken = "mockToken";
  const mockUuid = "mock-uuid";
  const mockEncryptedData = "encrypted-data";
  const mockResponseData = {};

  beforeEach(() => {
    (getCookie as jest.Mock).mockReturnValue(mockToken);
    (uuidv4 as jest.Mock).mockReturnValue(mockUuid);
    (fetchApi.post as jest.Mock).mockResolvedValue({ data: mockResponseData } as AxiosResponse);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch data successfully when encryption returns a string", async () => {
    (encrypt as jest.Mock).mockReturnValue(mockEncryptedData);

    const data = await fetchDataKendaraan("123ABC");

    expect(getCookie).toHaveBeenCalledWith("inaku_token");
    expect(encrypt).toHaveBeenCalledWith({ no_reg_kendaraan: "123ABC" });
    expect(fetchApi.post).toHaveBeenCalledWith(
      "/v1/layak-jalan",
      expect.any(FormData),
      {
        headers: {
          token: mockToken,
          "Content-Type": "multipart/form-data",
          "X-Request-ID": mockUuid,
        },
      }
    );
    expect(data).toEqual(mockResponseData);
  });
});
