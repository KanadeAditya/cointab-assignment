import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/userdetails'}>User Details</Link>
    </div>
  )
}

export default Navbar