import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ETypeOfView,
} from 'src/app/common/models/movie.model'
import {
  getMoviesAPI,
  loadMoreMoviesAPI,
} from 'src/app/store/asyncActions/movies'
import {
  getCurrentPage,
  getMovies,
  getTypeOfMovie,
  getTypeView,
} from 'src/app/store/movies'
import Movie from '../movie/movie'
import './style.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import InfiniteScrollComponent from '../infiniteScroll/infiniteScroll'
import { useHistory } from 'react-router-dom'

export default function Movies(props: any) {
  const dispatch = useDispatch()

  const view = useSelector(getTypeView)
  const typeOfMovie = useSelector(getTypeOfMovie)
  const movies = useSelector(getMovies)
  const currentPage = useSelector(getCurrentPage)

  

  useEffect(() => {
    dispatch(
      getMoviesAPI({
        type: typeOfMovie,
        page: 1,
      }),
    )
  }, [])

  const getMoreMovies = () => {
    dispatch(
      loadMoreMoviesAPI({
        type: typeOfMovie,
        page: currentPage + 1,
      }),
    )
  }

  return (
    <div className='movies'>
      <InfiniteScroll
        dataLength={movies.length}
        next={getMoreMovies}
        // pullDownToRefresh
        pullDownToRefreshThreshold={0}
        // refreshFunction={getMoreMovies}
        hasMore={true}
        loader={<InfiniteScrollComponent />}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {movies.map((movie, key) => {
            if (view === ETypeOfView.GRID) {
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

            if (view === ETypeOfView.LIST) {
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
      </InfiniteScroll>
    </div>
  )
}
