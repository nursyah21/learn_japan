import { useRoutes } from 'hookrouter'
import Home from './pages/Home'
import About from './pages/About'

const routes = {
    '/': () => <Home />,
    '/about': () => <About />
}

export default function App() {
    const routeResult = useRoutes(routes)
    return (
        <div className='container mx-auto'>
            {routeResult || <>404 Not Found</>}
        </div>
    )
}