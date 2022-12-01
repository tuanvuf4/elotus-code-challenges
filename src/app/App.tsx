import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Layout } from 'antd'
import AppHeader from './components/header/header'
import Movies from './components/movies/movies'
import TabBar from './components/tabBar/tabBar'

import 'antd/dist/reset.css'
import '../styles/styles.scss'
import ViewOptions from './components/viewOptions/viewOptions'
import { Loading } from './common/components/loading/loading'
import { useDispatch } from 'react-redux'
import { getConfig } from './store/asyncActions/movies'
import ErrorNotification from './components/notifications/ErrorNotification/ErrorNotification'
import MovieDetail from './pages/movieDetail/movieDetail'
import Home from './pages/home/home'
import { routes } from 'src/router'

const { Header, Content } = Layout

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConfig())
  }, [])

  function RouteWithSubRoutes(route: any) {
    return (
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    )
  }

  return (
    <Router>
      <div className='wrapper'>
        <Layout>
          <Header>
            <AppHeader></AppHeader>
          </Header>
          <Content>
            <div className='app-container'>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>

              <ErrorNotification></ErrorNotification>
            </div>
          </Content>

          <Loading></Loading>
        </Layout>
      </div>
    </Router>
  )
}

export default App
