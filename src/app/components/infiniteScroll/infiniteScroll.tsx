import './style.scss'
import { ReactComponent as IconLoading } from 'src/assets/images/sprinner.svg'
import { useAxiosLoader } from 'src/app/core/http'

export default function InfiniteScrollComponent(props: any) {

  const [active] = useAxiosLoader()

  return (
    <div className='infiniteScroll'>
      {active && <IconLoading></IconLoading>}
    </div>
  )
}
