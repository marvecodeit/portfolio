import React from 'react'
import './Navbar.css'
import logo from '../../public/assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-text"> 
      <i style={{ marginTop:40 }}>ChiTech <br /> ....building dreams to reality.</i>
    

      <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Navbar