import { useState } from 'react'

import './App.css'
import { Link, NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/About/AboutPage'
import ContactPage from './components/Contact/ContactPage'
import NotFound from './components/NotFound'
import AboutProduct from './components/About/AboutProduct'
import AboutUser from './components/About/AboutUser'
import AboutIndex from './components/About/AboutIndex'
import DemoNavigate from './components/DemoNavigate'
import Course from './components/DynamicRouter/Course'
import CourseDetail from './components/DynamicRouter/CourseDetail'
import CourseDetailType from './components/DynamicRouter/CourseDetailType'
import Admin from './components/PrivateRouter/Admin'
import Login from './components/PrivateRouter/Login'
import PrivateRouter from './components/PrivateRouter/PrivateRouter'

function App() {
  const [count, setCount] = useState(0)

  const styleNavLink = ({ isActive }) => (
    {
      color: isActive ? 'red' : 'black',
      backgroundColor: isActive ? 'yellow' : 'green',
      borderRadius: '2px'
    }
  )
  return (
    <>
      <Router>
        <ul>
          <li>
            <NavLink to={"/"} style={styleNavLink}>Home Page</NavLink>
          </li>

          <li>
            <NavLink to={"/about"} style={styleNavLink}>About Page</NavLink>

            <ul>
              <li>
                <NavLink to={"/about/about-product"} style={styleNavLink}>About Product</NavLink>
              </li>
              <li>
                <NavLink to={"/about/about-user"} style={styleNavLink}>About User</NavLink>
              </li>
            </ul>

          </li>

          <li>
            <NavLink to={"/contact"} style={styleNavLink}>Contact Page</NavLink>
          </li>
        </ul>

        <DemoNavigate />

        <Routes>
          {/* Route nhận 2 tham số :
            + path: Đường dẫn URL
            + element: component tương ứng
             */}
          <Route path='/' element={<HomePage />}></Route>

          <Route path='/about' element={<AboutPage />}>
            {/* Route Index */}
            <Route index element={<AboutIndex />}></Route>
            {/* Nest Route : Định tuyến lồng nhau */}
            <Route path='about-product' element={<AboutProduct />}></Route>
            <Route path='about-user' element={<AboutUser />}></Route>
          </Route>

          <Route path='/contact' element={<ContactPage />}></Route>

          {/* Dynamic Router */}
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/course/:name/:price" element={<CourseDetailType />} />

          {/* Private Router */}
          <Route element={<PrivateRouter />}>
            <Route path='/admin' element={<Admin />}></Route>
          </Route>

          <Route path='/login' element={<Login />}></Route>
          {/* Router báo lỗi */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
