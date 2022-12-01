import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import AppHeader from './components/header/header'

import 'antd/dist/reset.css'
import '../styles/styles.scss'
import { Loading } from './common/components/loading/loading'
import { useDispatch } from 'react-redux'
import { getConfig } from './store/asyncActions/movies'
import ErrorNotification from './components/notifications/ErrorNotification/ErrorNotification'
import { routes } from 'src/router'
import { getErrorAPI } from './common/services/apis/moviesApi'

const { Header, Content } = Layout

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConfig())
    getErrorAPI().then((resp) => resp)
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
