import { FC, useEffect } from 'react';
import { BrowserRouter as Router, useRoutes, useNavigate, useLocation } from 'react-router-dom'
import routerConfig from './routes/index.jsx'

import './App.less';
import './App.scss';

const App: FC = () => {

  let navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/') {
      navigate('/login')
    }
  }, [pathname])
  return useRoutes(routerConfig)
}

const AppWrapper: FC = () => {

  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;
