import { ETypeOfView } from '../models/movie.model'

export const getPosterImageSize = (sizes: string[], type: ETypeOfView) => {
  const wWidth = window.innerWidth

  if (type === ETypeOfView.GRID) {
    switch (true) {
      case wWidth > 991:
        return sizes[3]

      case wWidth >= 768 && wWidth <= 991:
        return sizes[4]

      case wWidth >= 576 && wWidth <= 767:
        return sizes[5]

      case wWidth > 0 && wWidth <= 575:
        return sizes[6]

      default:
        return sizes[4]
    }
  } else {
    switch (true) {
        case wWidth >= 576:
        return sizes[4]

        case wWidth > 0 && wWidth <= 575:
        return sizes[3]

      default:
        return sizes[3]
    }
  }
}

export const getBackDropImageSize = (sizes: string[]) => {
  console.log('sizes ', sizes)
  const wWidth = window.innerWidth

  switch (true) {
      case wWidth >= 768:
        return sizes[3]

      case wWidth >= 576 && wWidth <= 767:
        return sizes[2]

      case wWidth > 0 && wWidth <= 575:
        return sizes[1]

      default:
        return sizes[2]
  }
}
