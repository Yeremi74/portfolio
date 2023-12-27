import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation
} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import { useEffect, useState } from 'react'

let changeActiveSearch = null

const Layout = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  changeActiveSearch = () => setSearchActive(!searchActive)
  const location = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [location])

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        console.log('Las teclas Control + K fueron presionadas', searchActive)
        changeActiveSearch()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [searchActive])

  return (
    <div className='container'>
      <Navbar
        searchActive={searchActive}
        setSearchActive={setSearchActive}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export { changeActiveSearch }
export default App
