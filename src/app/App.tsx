import React, { memo, useEffect } from 'react'
import { Col, Layout, Row } from 'antd'
import AppHeader from './components/header/header'
import Movies from './components/movies/movies'
import TabBar from './components/tabBar/tabBar'

import 'antd/dist/reset.css'
import '../styles/styles.scss'
import InfiniteScroll from './components/infiniteScroll/infiniteScroll'
import ViewOptions from './components/viewOptions/viewOptions'
import { Loading } from './common/components/loading/loading'
import { getAppConfig, updateAppConfig } from './store/config'
import { useDispatch } from 'react-redux'
import { getConfig } from './store/asyncActions/movies'

const { Header, Content } = Layout

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConfig())
  }, [])

  return (
    <div className='wrapper'>
      <Layout>
        <Header>
          <AppHeader></AppHeader>
        </Header>
        <Content>
          <div className='app-container'>
            <div className='toolbar'>
              <TabBar></TabBar>
              <ViewOptions></ViewOptions>
            </div>

            <Movies></Movies>

            {/* <InfiniteScroll></InfiniteScroll> */}
          </div>
        </Content>

        <Loading></Loading>
      </Layout>
    </div>
  )
}

export default App
