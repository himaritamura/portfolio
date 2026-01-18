import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'

import About from './pages/about.jsx'
import Portfolio from './pages/portfolio.jsx'
import Resume from './pages/resume.jsx'

const navLinkStyles = ({ isActive }) => ({
  textDecoration: isActive ? 'underline' : 'none',
  padding: '5px 10px'
});

function App() {
//   const [count, setCount] = useState(0)

  return (
      <div className="custom-cursor">
          <header>
              <div className="navbar">
                  <NavLink to="/" style={navLinkStyles}>ABOUT</NavLink>
                  <NavLink to="/portfolio" style={navLinkStyles}>PORTFOLIO</NavLink>
                  <NavLink to="/resume" style={navLinkStyles}>RESUME</NavLink>

              </div>
          </header>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path = "/resume" element={<Resume />} />
          </Routes>
          

          <footer>
              <div className="footercol1">
                  <p>DESIGN && DEV BY</p>
                  <p>Himari Tamura</p>
              </div>
              <div className="footercol2">
                  <p>Thanks for visiting!</p>
              </div>
              <div className="footercol3">
                  <ul>
                      <li><a href="#">himari@umich.edu</a></li>
                      <li><a href="https://www.linkedin.com/in/himari-tamura/">linkedin.com/himari-tamura</a></li>
                      <li><a href="https://github.com/himaritamura">github.com/himaritamura</a></li>
                  </ul>
              </div>
          </footer>
      </div>
  )
}

export default App
