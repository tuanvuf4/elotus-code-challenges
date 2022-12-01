import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function CImage(props: any) {

  const { path } = props

  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const [imgSrc, setImgSrc] = useState<string>('')

  useEffect(() => {
    if (path) {
      setFadeIn(true)
      setImgSrc(path)
    }
  }, [path])

  return (
    <img
      className={classNames(fadeIn ? ' fadeIn' : '')}
      loading='lazy'
      src={imgSrc}
      alt=''
    />
  )
}
