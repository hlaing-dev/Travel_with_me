import React from 'react'
import { color } from '../../../config/color'
import { Link } from 'react-router-dom'

const SubNav = props => {
    const { } = props
    return (
        <div style={{ backgroundColor: color.subNav, height: 70 }}>
            <div className="d-flex flex-row pt-2">
                <ul className="nav pr-5">
                    <li className="nav-item">
                        <Link className="nav-link p-3 " style={{ color: color.subNavText }} to="/"><i class="fa fa-eye pr-2"></i>Information</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link p-3" style={{ color: color.subNavText }} to="/"><i className="fa fa-map pr-2"></i>Tour Plan</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link p-3" style={{ color: color.subNavText }} to="/tour"><i className="fa fa-map-marker pr-2"></i>Location</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link p-3" style={{ color: color.subNavText }} to="/about"><i class="fa fa-image pr-2"></i>Gallery</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link p-3" style={{ color: color.subNavText }} to="/about"><i className="fa fa-comment pr-2"></i>Reviews</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SubNav