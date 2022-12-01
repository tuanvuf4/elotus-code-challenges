import './style.scss'
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  getTypeOfMovie,
  getTypeView,
  updateTypeOfView,
} from 'src/app/store/movies'
import { ETypeOfView } from 'src/app/common/models/movie.model'
import { getMoviesAPI } from 'src/app/store/asyncActions/movies'

export default function ViewOptions(props: any) {
  const view = useSelector(getTypeView)
  const typeOfMovie = useSelector(getTypeOfMovie)

  const dispatch = useDispatch()

  const getMovies = (type: ETypeOfView) => {
    dispatch(updateTypeOfView(type))
    dispatch(
      getMoviesAPI({
        type: typeOfMovie,
        page: 1,
      }),
    )
  }

  return (
    <div className='view-options'>
      <Button
        className={view === ETypeOfView.LIST ? 'active' : ''}
        type='ghost'
        shape='default'
        onClick={() => getMovies(ETypeOfView.LIST)}
        icon={<UnorderedListOutlined />}
      />

      <Button
        className={view === ETypeOfView.GRID ? 'active' : ''}
        type='ghost'
        shape='default'
        onClick={() => getMovies(ETypeOfView.GRID)}
        icon={<TableOutlined />}
      />
    </div>
  )
}
