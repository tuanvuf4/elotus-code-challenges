
interface IPaginationConfig {
  pageSize: number
  initCurrentPage: number
  perPageOptions: number[]
}

export const paginationConfig: IPaginationConfig = {
  pageSize: 10,
  initCurrentPage: 0,
  perPageOptions: [5, 10, 15],
}

export const appConfig = {
  apiKey: '10c4b25085ce9f34e426a981fb38e85e',
}
