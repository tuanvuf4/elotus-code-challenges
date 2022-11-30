import * as APIUtil from '../../../core/apiUtils'
import { apiConfig } from '../../../core/apiConfig'
import { IHttpResponse, IHttpResponseArrayPaging } from '../../models/http.model'

export const getMovies = (ticketId: string): Promise<IHttpResponse<any>> => (
  APIUtil.getApi(`${apiConfig.baseURL}/service-requests/view-detail/${ticketId}`).then(data => data['data'])
)

export const getMoviesNowPlaying = (): Promise<IHttpResponse<any>> => (
  APIUtil.getApi(`${apiConfig.baseURL}/movie/now_playing`).then(data => data['data'])
)
