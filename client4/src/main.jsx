import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {useRoutes} from 'hookrouter'

import Home from './pages/Home'
import About from './pages/About'

const routes = {
  '/': () => <Home />,
  '/about': () => <About />,
}

const App = () => {
  const routeResult = useRoutes(routes)
  return routeResult || <>404 Not Found</>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
