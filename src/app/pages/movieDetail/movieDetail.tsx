import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CImage from 'src/app/common/components/customImage/customImage'
import { getMovieDetail } from 'src/app/common/services/apis/moviesApi'
import { getBackDropImageSize } from 'src/app/common/utils/images.utils'
import { getBackDropImageSizes, getImageBaseUrl } from 'src/app/store/config'
import './style.scss'

export default function MovieDetail(props: any) {
  const [movie, setMovie] = useState<any>({})
  const [imgSrc, setImgSrc] = useState<string>('')

  const params: any = useParams()

  const imageBaseUrl = useSelector(getImageBaseUrl)
  const backDropImageSizes = useSelector(getBackDropImageSizes)
  const backdropImage = getBackDropImageSize(backDropImageSizes)

  useEffect(() => {
    getMovieDetail(params['id']).then((resp) => {
      setMovie(resp.data)
    })
  }, [])

  useEffect(() => {
    if (movie) {
      setImgSrc(imageBaseUrl + backdropImage + movie.backdrop_path)
    }
  }, [movie])

  return (
    <div className='movieDetail'>
      <h2 className='title'>{movie.title}</h2>
      <div className='backdrop'>
        <CImage path={imgSrc} />
      </div>
      <div className='overview'>{movie.overview}</div>
    </div>
  )
}
