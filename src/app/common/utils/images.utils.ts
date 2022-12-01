export const getPosterImageSize = (sizes: string[]) => {
  const wWidth = window.innerWidth
  switch (true) {
    case wWidth > 989:
      return sizes[2]

    case wWidth > 639 && wWidth < 990:
      return sizes[3]

    case wWidth > 479 && wWidth < 640:
      return sizes[4]

    case wWidth > 0 && wWidth < 480:
      return sizes[5]

    default:
      return sizes[6]
  }
}

export const getBackDropImageSize = (sizes: string[]) => {
  const wWidth = window.innerWidth

  switch (true) {
    case wWidth > 989:
      return sizes[0]

    case wWidth > 639 && wWidth < 990:
      return sizes[2]

    case wWidth > 0 && wWidth < 640:
      return sizes[1]

    default:
      return sizes[3]
  }
}
