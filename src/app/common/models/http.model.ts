import { IPagingResponse } from "./paging.model"

export interface IHttpResponseArrayPaging<T> {
  status: {
    timestamp: typeof Date,
    code: number
  },
  data: {
    contents: T[]
    paging: IPagingResponse
  }
}

export interface IHttpResponseArray<T> {
  status: {
    timestamp: typeof Date,
    code: number
  },
  data: {
    contents: T[]
  }
}

export interface IHttpResponse<T> {
  status: {
    timestamp: typeof Date,
    code: number
  },
  data: T
}