import React from 'react';
import { Link } from'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav-Link'>
        <a href="/" style={{ textDecoration: "none" }}>Home</a>
        <a href="/practice" style={{ textDecoration: "none" }} >User</a>
        <a href="/entertainment" style={{ textDecoration: "none" }} >Entertainment</a>
      </div>
      <div>
       <Link to='/auth' ><button>Login</button></Link>
      </div>
    </div>
  )
}

export default NavBar