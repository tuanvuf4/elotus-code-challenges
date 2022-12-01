import * as APIUtil from '../../../core/apiUtils'
import { IHttpResponse, response } from '../../models/http.model'
import { appConfig } from 'src/app/config/appConfig'
import { IMovieAPIResponse } from '../../models/movie.model'

export const getMoviesNowPlaying = (
  page: number = 1,
): Promise<IHttpResponse<IMovieAPIResponse>> =>
  APIUtil.getApi(`${appConfig.baseURL}/movie/now_playing`, { page }).then(
    response,
  )

export const getMoviesTopRated = (
  page: number = 1,
): Promise<IHttpResponse<IMovieAPIResponse>> =>
  APIUtil.getApi(`${appConfig.baseURL}/movie/top_rated/`, { page }).then(
    response,
  )

export const getMovieDetail = (
  id: string,
): Promise<IHttpResponse<IMovieAPIResponse>> =>
  APIUtil.getApi(`${appConfig.baseURL}/movie/${id}`).then(response)

export const getErrorAPI = (
  page: number = 1,
): Promise<IHttpResponse<IMovieAPIResponse>> =>
  APIUtil.getApi(`${appConfig.baseURL}/movieError`, { page }).then(
    response,
  )
