import './style.scss'
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  getTypeView,
  updateTypeOfView,
} from 'src/app/store/movies'
import { TtypeOfView } from 'src/app/common/models/movie.model'

export default function ViewOptions(props: any) {
  const view = useSelector(getTypeView)

  const dispatch = useDispatch()

  return (
    <div className='view-options'>
      <Button
        className={view === TtypeOfView.LIST ? 'active' : ''}
        type='ghost'
        shape='default'
        onClick={() => dispatch(updateTypeOfView(TtypeOfView.LIST))}
        icon={<UnorderedListOutlined />}
      />

      <Button
        className={view === TtypeOfView.GRID ? 'active' : ''}
        type='ghost'
        shape='default'
        onClick={() => dispatch(updateTypeOfView(TtypeOfView.GRID))}
        icon={<TableOutlined />}
      />
    </div>
  )
}
