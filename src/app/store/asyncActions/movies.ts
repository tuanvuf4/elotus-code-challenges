import { createAsyncThunk } from '@reduxjs/toolkit'
import { ETypeOfMovies, ETypeOfView } from 'src/app/common/models/movie.model'
import { getAppConfig } from 'src/app/common/services/apis/configApi'
import { getMoviesNowPlaying, getMoviesTopRated } from 'src/app/common/services/apis/moviesApi'

interface IParamsGetMovies {
  type: ETypeOfMovies,
  page: number
}

export const getMoviesAPI = createAsyncThunk(
  'getMoviesAPI',
  async (params: IParamsGetMovies) => {
    switch (params.type) {
      case ETypeOfMovies.NOW_PLAYING:
        return (await getMoviesNowPlaying(params.page)).data

      case ETypeOfMovies.TOP_RATED:
        return (await getMoviesTopRated(params.page)).data

      default:
        return []
    }
  },
)

export const loadMoreMoviesAPI = createAsyncThunk(
  'loadMoreMoviesAPI',
  async (params: IParamsGetMovies) => {
    switch (params.type) {
      case ETypeOfMovies.NOW_PLAYING:
        return (await getMoviesNowPlaying(params.page)).data

      case ETypeOfMovies.TOP_RATED:
        return (await getMoviesTopRated(params.page)).data

      default:
        return []
    }
  },
)

export const getConfig = createAsyncThunk('getConfig', async () => {
  return (await getAppConfig()).data
})
