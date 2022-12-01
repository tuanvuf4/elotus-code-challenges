import './style.scss'
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  getTypeView,
  updateTypeOfView,
} from 'src/app/store/movies'
import { ETypeOfView } from 'src/app/common/models/movie.model'

export default function ViewOptions(props: any) {
  const view = useSelector(getTypeView)

  const dispatch = useDispatch()

  return (
    <div className='view-options'>
      <Button
        className={view === ETypeOfView.LIST ? 'active' : ''}
        type='ghost'
        shape='default'
        onClick={() => dispatch(updateTypeOfView(ETypeOfView.LIST))}
        icon={<UnorderedListOutlined />}
      />

      <Button
        className={view === ETypeOfView.GRID ? 'active' : ''}
        type='ghost'
        shape='default'
        onClick={() => dispatch(updateTypeOfView(ETypeOfView.GRID))}
        icon={<TableOutlined />}
      />
    </div>
  )
}
