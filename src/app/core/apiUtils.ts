import axios, { AxiosRequestConfig } from 'axios'
import { appConfig } from '../config/appConfig'

import { showError } from '../store/config'

let localStore: any;

export const injectStore = (_store: any) => {
  localStore = _store
}

const getHeaders = {
  headers: {
    'Content-Type': 'application/json',
  },
}

const errorHandle = (errorMessage: string) => {
  localStore.dispatch(
    showError({
      isShowError: true,
      errorMessage,
    }),
  )
}

const getHttpConfig = (headers = {}, config: AxiosRequestConfig = {}) => {
  return { baseURL: appConfig.baseURL, ...config, ...headers }
}

export const axiosInstance = axios.create(getHttpConfig())

export const getApi = (url: string, params = {}): Promise<any> =>
  new Promise((resolve, reject) => {
    axiosInstance
      .get(url + '?api_key=' + appConfig.apiKey, {
        params,
        ...getHttpConfig(getHeaders),
      })
      .then(
        (data) => resolve(data),
        (err) => {
          console.log('err ', err)
          errorHandle(err.message)
          reject(err)
        },
      )
  })

export const postApi = (
  url: string,
  data: Record<any, any> = {},
  httpConfig = getHttpConfig(getHeaders),
): Promise<any> =>
  new Promise((resolve, reject) => {
    axiosInstance.post(url, data, { ...httpConfig }).then(
      (data) => resolve(data),
      (err) => {
        console.log('err ', err)
        // errorHandle(err.message)
        reject(err)
      },
    )
  })

export const putApi = (
  url: string,
  data: Record<any, any> = {},
  httpConfig = getHttpConfig(getHeaders),
): Promise<any> =>
  new Promise((resolve, reject) => {
    axiosInstance.put(url, data, { ...httpConfig }).then(
      (data) => resolve(data),
      (err) => {
        console.log('err ', err)
        // errorHandle(err.message)
        reject(err)
      },
    )
  })

export const deleteApi = (
  url: string,
  httpConfig = getHttpConfig(getHeaders),
): Promise<any> =>
  new Promise((resolve, reject) => {
    axiosInstance.delete(url, { ...httpConfig }).then(
      (data) => resolve(data),
      (err) => {
        console.log('err ', err)
        // errorHandle(err.message)
        reject(err)
      },
    )
  })
