import React from 'react';
import { Link } from'react-router-dom';

const NavBar = () => {
  return (
   <header>
    <div className='container'>
    <Link to='/'>
        <h1>Workout Buddy</h1>
    </Link>
    <Link to='/practice'>
      <h1>User</h1>
    </Link>
    <Link to='/entertainment'>
      <h1>Entertainment</h1>
    </Link>
    </div>
   </header>  )
}

export default NavBar