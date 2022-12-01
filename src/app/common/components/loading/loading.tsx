import './loading.scss'
import { ReactComponent as IconLoading } from 'src/assets/images/sprinner.svg'
import { useAxiosLoader } from 'src/app/core/http'
import { useEffect, useState } from 'react'

export type LoadingProps = {}

export const Loading = () => {
  const [active] = useAxiosLoader()

  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (active) {
      setShow(true)
    } else {
      setTimeout(() => {
        setShow(false)
      }, 1000)
    }
  }, [active])

  return (
    <div className={`loading ${show ? 'active' : ''}`}>
      <IconLoading />
    </div>
  )
}
