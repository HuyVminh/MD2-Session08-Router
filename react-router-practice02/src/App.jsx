import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import PortFolio from './Components/PortFolio'
import Contact from './Components/Contact'
import { useState } from 'react'

function App() {
  const [isToggle, setIsToggle] = useState(false);


  const handleToggle = () => {
    setIsToggle(!isToggle);
  }

  const styleNavLink = ({ isActive }) => (
    {
      color: isActive ? 'orange' : 'white',
      borderRadius: '2px'
    }
  )

  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className={isToggle ? "active" : ""}>
          <div className="p-4 pt-5">
            <a
              href="#"
              className="img logo rounded-circle mb-5"
              style={{ backgroundImage: "url(images/logo.jpg)" }}
            />
            <ul className="list-unstyled components mb-5">
              <li className="active">
                <NavLink to={"/"} style={styleNavLink}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"} style={styleNavLink}>About</NavLink>
              </li>
              <li>
                <NavLink to={"PortFolio"} style={styleNavLink}>PortFolio</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} style={styleNavLink}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* Page Content  */}
        <div id="content" className="p-4 p-md-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-primary"
                onClick={handleToggle}
              >
                <i className="fa fa-bars" />
                <span className="sr-only">Toggle Menu</span>
              </button>
              <button
                className="btn btn-dark d-inline-block d-lg-none
                      ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle
                      navigation"
              >
                <i className="fa fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink to={"/"} className={"dropdown-toggle nav-link"}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/about"} className={"dropdown-toggle nav-link"}>About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"PortFolio"} className={"dropdown-toggle nav-link"}>PortFolio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/contact"} className={"dropdown-toggle nav-link"}>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/portfolio' element={<PortFolio />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
