/* @refresh reload */
import { render } from 'solid-js/web'
// import App from './App'
import { Router, Route } from '@solidjs/router'
import './index.css'
import Home from './pages/home'
import NotFound from './pages/404'

const App = props => (
    <>
        {props.children}
    </>
)

const root = document.getElementById('root')

render(() =>
    <Router root={App}>
        <Route path={'/'} component={<Home />} />
        <Route path={'/*'} component={<NotFound />} />
    </Router>
    , root)
