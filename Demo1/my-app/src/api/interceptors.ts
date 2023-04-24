import  {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";

import refreshToken from "./refreshToken";
import axios from "./axios";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
    // console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  //   console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  let errorJson: any = error.toJSON();
  const originalRequest: any = error.config;
  if (error.response?.data === "Token is not valid") {
    if (errorJson.status === 403) {
      const token = await refreshToken();
      originalRequest!.headers["authorization"] ="Bearer "+ token;
      return axios.request(originalRequest);
    }
  }
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
