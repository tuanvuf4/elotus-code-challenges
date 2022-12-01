import { Tabs } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ETypeOfMovies, ETypeOfView } from 'src/app/common/models/movie.model'
import { getMoviesAPI } from 'src/app/store/asyncActions/movies'
import { updateTypeOfMovie } from 'src/app/store/movies'
import './style.scss'

export default function TabBar(props: any) {
  const dispatch = useDispatch()

  const onTabClick = (key: string) => {
    console.log('key ', key)
    if (key === 'NOW_PLAYING') {
      dispatch(updateTypeOfMovie(ETypeOfMovies.NOW_PLAYING))
      dispatch(getMoviesAPI({
        type: ETypeOfMovies.NOW_PLAYING,
        page: 1
      }))
    }
    if (key === 'TOP_RATED') {
      dispatch(updateTypeOfMovie(ETypeOfMovies.TOP_RATED))
      dispatch(getMoviesAPI({
        type: ETypeOfMovies.TOP_RATED,
        page: 1
      }))
    }
  }
  return (
    <Tabs onTabClick={(key) => onTabClick(key)}>
      <Tabs.TabPane tab='Now Playing' key={'NOW_PLAYING'}></Tabs.TabPane>
      <Tabs.TabPane tab='Top Rated' key={'TOP_RATED'}></Tabs.TabPane>
    </Tabs>
  )
}
