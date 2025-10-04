import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Conatct from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github,{ githubloader} from './components/github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {path:"", element:<Home/>},
//       {path:"about", element:<About/>},
//       {path:"contact",element:<Conatct />}
//     ]
//   }
// ])
const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home />}></Route>
     <Route path='about' element={<About />}></Route>
     <Route path='contact' element={<Conatct />}></Route>
     <Route path='user/:userid' element={<User />}></Route>
     <Route
      loader={githubloader}
      path='github'
      element={<Github />}
      >
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
