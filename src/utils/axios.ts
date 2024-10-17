/* eslint-disable no-empty */
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { jwtDecode } from "jwt-decode";
import moment from "moment";
import Cookies from "js-cookie";

const getRefreshToken = async (refresh_token: string) => {
  const appUrl =
    process.env.API_INA_BASE_URL + "/ext/user/refresh-token";
  const result = await axios({
    url: appUrl,
    method: "POST",
    headers: {
      access_key: process.env.SERVICE_ACCESS_KEY,
      app_key: process.env.SERVICE_APP_KEY,
      refresh_token,
    },
  })
    .then((response) => {
      // Handle successful like
      // console.log(response.data);
      return response;
    })
    .catch((error) => {
      // Handle errors
      // console.error(error);
      return error;
    });
  return result;
};

export const apiUrl = process.env.BASE_API_URL;
export const baseUrl = `${apiUrl}/api`;
const fetchApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-Request-ID": uuidv4(),
  },
});

// Add a request interceptor
fetchApi.interceptors.request.use(
  async (config) => {
    try {
      const inaku_token = Cookies.get("inaku_token");
      const inaku_refresh_token = Cookies.get("inaku_refresh_token");
      if (inaku_token) {
        config.headers["token"] = inaku_token;
        const decoded = jwtDecode(inaku_token as string);
        const decodedRefresh = jwtDecode(inaku_refresh_token as string);
        const expiryAccessToken = decoded?.exp ? decoded.exp : null;
        const expiryRefreshToken = decodedRefresh?.exp ? decodedRefresh.exp : 0;
        if (expiryAccessToken) {
          const now = moment().unix();
          const statusIsAfter = moment(now).isSameOrAfter(
            expiryAccessToken - 45
          );
          const statusIsBeforeRefresh = moment(now).isSameOrBefore(
            expiryRefreshToken - 45
          );
          if (statusIsBeforeRefresh) {
            if (statusIsAfter) {
              // doing fetch refresh token
              const response = await getRefreshToken(
                inaku_refresh_token as string
              );
              if (response?.data?.statusCode === 200) {
                // const defaultAccTokenExp = new Date().getTime() + 5 * 60000;
                const defaultRefTokenExp =
                  new Date().getTime() + 7 * 24 * 60 * 60000;
                const newAccessToken = response.data?.data?.access_token || "";
                // const newAccessTokenExpiry = new Date(
                //   response.data?.data?.access_token_exp || defaultAccTokenExp,
                // );
                const newRefreshToken =
                  response.data?.data?.refresh_token || "";
                const newRefreshTokenExpiry = new Date(
                  response.data?.data?.refresh_token_exp || defaultRefTokenExp
                );
                Cookies.set("inaku_token", newAccessToken, {
                  expires: newRefreshTokenExpiry,
                });
                Cookies.set("inaku_refresh_token", newRefreshToken, {
                  expires: newRefreshTokenExpiry,
                });
                config.headers["token"] = newAccessToken;
              }
            } else {
              // access token still valid
            }
          } else {
            // force to sign out
          }
        }
      } else {
        // case if inaku_token not found
      }
    } catch (error) {
      return config;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
fetchApi.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default fetchApi;