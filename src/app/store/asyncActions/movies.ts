import { createAsyncThunk } from '@reduxjs/toolkit'
import { TtypeOfMovies } from 'src/app/common/models/movie.model'
import { getMoviesNowPlaying } from 'src/app/common/services/apis/moviesApi'

export const getMoviesAPI = createAsyncThunk('getMoviesAPI', async (type: TtypeOfMovies) => {
  switch (type) {
    case TtypeOfMovies.NOW_PLAYING:
      return (await getMoviesNowPlaying()).data

    case TtypeOfMovies.TOP_RATED:
      return (await getMoviesNowPlaying()).data

    default:
      return []
      break
  }
})
