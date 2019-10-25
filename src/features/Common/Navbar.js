import React from 'react'
import { color } from '../../config/color'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
             <div className="p-2 align-middle d-flex justify-content-between"
            style={{ backgroundColor: color.navbar }}
        >
            <div className="d-flex">
                <h3 className="pl-5" ></h3>
            </div>

            <ul className="nav pr-5">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
              
                <li className="nav-item">
                    <Link className="nav-link" to="/destination">Destination</Link>
                </li>
              
                <li className="nav-item">
                    <Link className="nav-link" to="/tour">Tours</Link>
                </li>
              
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar