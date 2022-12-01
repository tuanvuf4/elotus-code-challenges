import classNames from 'classnames'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IMovieItemAPIResponse, ETypeOfView } from 'src/app/common/models/movie.model'
import {
  getBackDropImageSize,
  getPosterImageSize,
} from 'src/app/common/utils/images.utils'
import {
  getBackDropImageSizes,
  getImageBaseUrl,
  getPosterImageSizes,
} from 'src/app/store/config'
import { getTypeView } from 'src/app/store/movies'
import './style.scss'

export default function Movie(props: IMovieItemAPIResponse) {
  const { title, backdrop_path, overview } = props

  const backDropImageSizes = useSelector(getBackDropImageSizes)
  const posterImageSizes = useSelector(getPosterImageSizes)
  const imageBaseUrl = useSelector(getImageBaseUrl)
  const view = useSelector(getTypeView)

  const posterSize = getPosterImageSize(posterImageSizes)
  const backDropSize = getBackDropImageSize(backDropImageSizes)
  // console.log('posterSize ', posterSize)
  // console.log('backDropSize ', backDropSize)

  const shortText = (text: string, size = 20) => {
    const total = text.split(' ')
    if (total.length > size) {
      return total.splice(0, size).join(' ') + '...'
    }
    return text
  }

  return (
    <div
      className={classNames(
        'movie-item',
        view === ETypeOfView.LIST ? ' list' : '',
      )}
    >
      <div className='thumbnail'>
        <img
          loading='lazy'
          src={imageBaseUrl + posterSize + backdrop_path}
          alt=''
        />
        <div className='image-skeleton'></div>
      </div>
      <div className='content'>
        <h2>{shortText(title, 10)}</h2>
        <p>{shortText(overview)}</p>
      </div>
    </div>
  )
}
