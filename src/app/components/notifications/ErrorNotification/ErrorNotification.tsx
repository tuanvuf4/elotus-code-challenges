import { notification } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getErrorMessage,
  getIsShowError,
  hideError,
} from 'src/app/store/config'
import './style.scss'

export default function ErrorNotification() {

  const show = useSelector(getIsShowError)
  const errMsg = useSelector(getErrorMessage)

  const dispatch = useDispatch()

  useEffect(() => {
    if (show) {
      notification.open({
        type: 'error',
        message: 'Something went wrong!',
        description: errMsg,
        duration: 3,
        onClick: () => {
          dispatch(hideError())
          notification.destroy()
        },
        onClose: () => {
          dispatch(hideError())
        }
      })
    }
  }, [show])

  return <></>
}
