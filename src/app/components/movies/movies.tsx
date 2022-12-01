import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  IMovieItemAPIResponse,
  TtypeOfMovies,
  TtypeOfView,
} from 'src/app/common/models/movie.model'
import {
  getMoviesNowPlaying,
  getMoviesTopRated,
} from 'src/app/common/services/apis/moviesApi'
import { getMoviesAPI } from 'src/app/store/asyncActions/movies'
import {
  addMovies,
  getMovies,
  getTypeOfMovie,
  getTypeView,
} from 'src/app/store/movies'
import Movie from '../movie/movie'
import './style.scss'

export default function Movies (props: any) {
  const dispatch = useDispatch()

  const view = useSelector(getTypeView)
  const typeOfMovie = useSelector(getTypeOfMovie)
  const movies = useSelector(getMovies)

  useEffect(() => {
    dispatch(getMoviesAPI(typeOfMovie))
  }, [])

  return (
    <div className='movies'>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {movies.map((movie, key) => {
          if (view === TtypeOfView.GRID) {
            return (
              <Col
                key={key}
                xs={24}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                className='gutter-row movie-item-wrapper'
                span={6}
              >
                <Movie {...movie}></Movie>
              </Col>
            )
          }

          if (view === TtypeOfView.LIST) {
            return (
              <Col
                key={key}
                xs={24}
                className='gutter-row movie-item-wrapper'
                span={6}
              >
                <Movie {...movie}></Movie>
              </Col>
            )
          }
        })}
      </Row>
    </div>
  )
}
