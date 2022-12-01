interface IHttpCode {
  code: number
  message: string
}

// 2xx
const OK: IHttpCode = { code: 200, message: 'Ok' },
  CREATED: IHttpCode = { code: 201, message: 'Created' },
  // 4xx
  FORBIDDEN: IHttpCode = { code: 403, message: 'Forbidden' },
  UNAUTHORIZED: IHttpCode = { code: 401, message: 'Unauthorized' },
  BAD_REQUEST: IHttpCode = { code: 400, message: 'Bad Request' },
  NOT_FOUND: IHttpCode = { code: 404, message: 'Not Found' },
  METHOD_NOT_ALLOWED: IHttpCode = { code: 405, message: 'Method Not Allowed' },
  // 5xx
  SERVER_ERROR: IHttpCode = { code: 500, message: 'Internal Server Error' },
  BAD_GATEWAY: IHttpCode = { code: 200, message: 'Bad Gateway' }

export const HttpUtils = {
  isOk: (code: number | string): boolean => {
    return Number(code) === OK.code
  },
}
