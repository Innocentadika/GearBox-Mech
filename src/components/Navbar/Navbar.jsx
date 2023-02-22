import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='flex space-x-2 font-serif bg-slate-300'>
<Link to='/'>Home</Link>
<Link to='/contacts'>Contact Us</Link>
<Link to='/'>More</Link>
        </div>
      <Outlet />
    </div>
  )
}

export default Navbar;
