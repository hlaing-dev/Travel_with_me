import React from 'react'
import { color } from '../../config/color'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top ph-background" style={{position: "absolute"}} id="mainNav">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand js-scroll-trigger" href="#page-top"> <h3 className="pl-5" style={{
            fontFamily: "Impact", letterSpacing: "2px", color: "#ffffff",
            textShadow: "-2px -2px 3px #FF9800"
          }}> Travel With Me</h3></a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/destination">Destination</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/tour">Tours</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default Navbar