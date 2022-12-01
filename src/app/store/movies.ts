import {
  ActionReducerMapBuilder,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAppState } from '.'
import { IHttpResponse } from '../common/models/http.model'
import {
  IMovieAPIResponse,
  IMovieItemAPIResponse,
  ETypeOfView,
  ETypeOfMovies,
} from '../common/models/movie.model'
import { getMoviesAPI, loadMoreMoviesAPI } from './asyncActions/movies'

export interface IMoviesState {
  typeOfMovie: ETypeOfMovies
  typeOfView: ETypeOfView
  textSearch: string
  movies: IMovieItemAPIResponse[]
  page: number
  total_pages: number
  total_results: number
}

const initialState: IMoviesState = {
  typeOfMovie: ETypeOfMovies.NOW_PLAYING,
  typeOfView: ETypeOfView.GRID,
  textSearch: '',
  movies: [],
  page: 1,
  total_pages: 0,
  total_results: 0,
}

const moviesReducer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies(
      state: IMoviesState,
      action: PayloadAction<IMovieItemAPIResponse[]>,
    ) {
      state.movies = [...state.movies, ...action.payload]
    },
    updateTypeOfView(state: IMoviesState, action: PayloadAction<ETypeOfView>) {
      state.typeOfView = action.payload
    },
    updateTypeOfMovie(
      state: IMoviesState,
      action: PayloadAction<ETypeOfMovies>,
    ) {
      state.typeOfMovie = action.payload
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(
        getMoviesAPI.fulfilled,
        (state: IMoviesState, action: PayloadAction<IMovieAPIResponse>) => {
          state.movies = action.payload.results
          state.page = action.payload.page
          state.total_pages = action.payload.total_pages
          state.total_results = action.payload.total_results
        },
      )
      .addCase(
        loadMoreMoviesAPI.fulfilled,
        (state: IMoviesState, action: PayloadAction<IMovieAPIResponse>) => {
          state.movies = [...state.movies, ...action.payload.results]
          state.page = action.payload.page
          state.total_pages = action.payload.total_pages
          state.total_results = action.payload.total_results
        },
      )
  },
})

const rootState = (state: IAppState) => state.movies

export const getTypeView = createSelector(
  rootState,
  (state: IMoviesState) => state.typeOfView,
)
export const getTypeOfMovie = createSelector(
  rootState,
  (state: IMoviesState) => state.typeOfMovie,
)
export const getMovies = createSelector(
  rootState,
  (state: IMoviesState) => state.movies,
)
export const getCurrentPage = createSelector(
  rootState,
  (state: IMoviesState) => state.page,
)
export const getTotalPage = createSelector(
  rootState,
  (state: IMoviesState) => state.total_pages,
)
export const getTotalResults = createSelector(
  rootState,
  (state: IMoviesState) => state.total_results,
)

export const { updateTypeOfMovie, updateTypeOfView, addMovies } =
  moviesReducer.actions

export default moviesReducer
