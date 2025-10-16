import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <nav>
        <ul>
          <li>
            <Link to='/state'>State</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home