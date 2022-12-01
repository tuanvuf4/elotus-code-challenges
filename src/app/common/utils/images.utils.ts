import { ETypeOfView } from '../models/movie.model'

export const getPosterImageSize = (sizes: string[], type: ETypeOfView) => {
  console.log('===================== ')
  console.log('sizes ', sizes)
  console.log('type ', type === 1 ? "GRID" : 'LIST')
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
  const wWidth = window.innerWidth

  switch (true) {
    case wWidth > 1200:
      return sizes[3]

    case wWidth > 989:
      return sizes[2]

    case wWidth > 639 && wWidth < 990:
      return sizes[1]

    case wWidth > 0 && wWidth < 640:
      return sizes[1]

    default:
      return sizes[3]
  }
}
