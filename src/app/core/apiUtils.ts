import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { store } from '../store';
import { IConfigState } from '../store/config';
import { apiConfig } from './apiConfig';

const getHeaders = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const getHttpConfig = (headers = {}, config: AxiosRequestConfig = {}) => {
  return { baseURL: apiConfig.baseURL, ...config, ...headers };
};

export const axiosInstance = axios.create(getHttpConfig());

export const getApi = (
  url: string,
  httpConfig = getHttpConfig(getHeaders)
): Promise<any> =>
  new Promise((resolve, reject) => {
    axiosInstance
      .get(url + '?api_key=' + apiConfig.apiKey, { ...httpConfig })
      .then(
        (data) => resolve(data),
        (err) => reject(err)
      );
  });

export const postApi = (
  url: string,
  data: Record<any, any> = {},
  httpConfig = getHttpConfig(getHeaders)
): Promise<any> =>
  new Promise((resolve, reject) => {
    axiosInstance.post(url, data, { ...httpConfig }).then(
      (data) => resolve(data),
      (err) => reject(err)
    );
  });

export const putApi = (
  url: string,
  data: Record<any, any> = {},
  httpConfig = getHttpConfig(getHeaders)
): Promise<any> =>
  new Promise((resolve, reject) => {
    axiosInstance.put(url, data, { ...httpConfig }).then(
      (data) => resolve(data),
      (err) => reject(err)
    );
  });

export const deleteApi = (
  url: string,
  httpConfig = getHttpConfig(getHeaders)
): Promise<any> =>
  new Promise((resolve, reject) => {
    axiosInstance.delete(url, { ...httpConfig }).then(
      (data) => resolve(data),
      (err) => reject(err)
    );
  });
