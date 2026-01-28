import React from 'react'
import {Link} from "react-router-dom"
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Users</Link></li>
            <li><Link to="/services">Products</Link></li>
            <li><Link to="/reducer">Reducer</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar