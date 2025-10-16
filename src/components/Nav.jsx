import React from 'react'
import { Link} from 'react-router-dom'


const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  )
}

export default Nav