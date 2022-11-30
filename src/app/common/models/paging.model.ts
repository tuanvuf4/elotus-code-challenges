export interface IPaging {
  page: number
  size: number
}

export interface IPagingResponse {
  pageNumber: number
  pageSize: number
  totalPage: number
  totalRecord: number
}