import './App.css'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Notfound from './components/Notfound/Notfound.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  let routes = createBrowserRouter([
    {
      path: '', 
      element: <Layout />, 
      children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <Notfound /> }  
      ]
    }
  ], { basename: '/reactportofolio' }) // حدد basename هنا

  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App
