import React from 'react'
import { color } from '../../config/color'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div style={{ position: "absolute", zIndex: "200" }} className="p-2 align-middle d-flex justify-content-between transparent">
                <div className="d-flex">
                    <h3 className="pl-5" style={{
                        fontFamily: "Impact", letterSpacing: "2px", color: "#ffffff",
                        textShadow: "-2px -2px 3px #FF9800"
                    }}> Travel With Me</h3>
                </div>

                <ul className="nav" style={{paddingRight: "5rem"}}>
                    <li className="nav-item">
                        <Link className="nav-link navFont" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link navFont" to="/destination">Destination</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link navFont" to="/tour">Tours</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link navFont" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar