import { IPagingResponse } from './paging.model'

export interface IHttpResponseArrayPaging<T> {
  status: number
  statusText: string
  data: {
    contents: T[]
    paging: IPagingResponse
  }
}

export interface IHttpResponseArray<T> {
  status: number
  statusText: string
  data: {
    contents: T[]
  }
}

export interface IHttpResponse<T> {
  status: number
  statusText: string
  data: T
}

export const response = (data: any): IHttpResponse<any> => ({
  status: data['status'],
  statusText: data['statusText'],
  data: data['data'],
})
