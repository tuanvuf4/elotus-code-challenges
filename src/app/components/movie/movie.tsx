import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CImage from 'src/app/common/components/customImage/customImage'
import {
  IMovieItemAPIResponse,
  ETypeOfView,
} from 'src/app/common/models/movie.model'
import {
  getBackDropImageSize,
  getPosterImageSize,
} from 'src/app/common/utils/images.utils'
import { shortText } from 'src/app/common/utils/text'
import {
  getBackDropImageSizes,
  getImageBaseUrl,
  getPosterImageSizes,
} from 'src/app/store/config'
import { getTypeView } from 'src/app/store/movies'
import './style.scss'

export default function Movie(props: IMovieItemAPIResponse) {
  const { title, poster_path, overview, id } = props

  const [imgSrc, setImgSrc] = useState<string>('')

  const history = useHistory()

  const imageBaseUrl = useSelector(getImageBaseUrl)
  const posterImageSizes = useSelector(getPosterImageSizes)
  const view = useSelector(getTypeView)

  const posterSize = getPosterImageSize(posterImageSizes)

  const toPage = (url: string) => {
    history.push(url)
  }

  useEffect(() => {
    if (poster_path) {
      setImgSrc(imageBaseUrl + posterSize + poster_path)
    }
  }, [poster_path])

  return (
    <div
      className={classNames(
        'movie-item',
        view === ETypeOfView.LIST ? ' list' : '',
      )}
      onClick={() => toPage('/movie/' + id)}
    >
      <div className='thumbnail'>
        <CImage path={imgSrc} />
        <div className='image-skeleton'></div>
      </div>
      <div className='content'>
        <h2>{shortText(title, 10)}</h2>
        <p>{shortText(overview)}</p>
      </div>
    </div>
  )
}
