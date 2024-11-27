import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <div className='navbar-left'> <h1>MOHAMMAD SAMEER</h1> </div>
      <div className='navbar-right'>
     <Link to={`/home`}>Home</Link>
     <Link to={`/About`}>About</Link>
     <Link to={`/Project`}>Project</Link>
     </div>  
    </div>
  )
}

export default Navbar