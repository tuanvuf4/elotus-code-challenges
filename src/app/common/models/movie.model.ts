export interface IMovieAPIResponse {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: IMovieItemAPIResponse[]
  total_pages: number
  total_results: number
}

export interface IMovieItemAPIResponse {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: number
  vote_count: number
}

export enum TtypeOfView {
  LIST,
  GRID,
}

export enum TtypeOfMovies {
  NOW_PLAYING,
  TOP_RATED,
}