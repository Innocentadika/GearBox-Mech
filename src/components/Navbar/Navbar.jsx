import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='flex space-x-1 font-serif bg-zinc-600'>
<Link className='bg-slate-400 rounded' to='/'>Home</Link>
<Link className='bg-slate-400 rounded' to='/contacts'>Contact Us</Link>
<Link className='bg-slate-400 rounded' to='/more'>More</Link>
        </div>
      <Outlet />
    </div>
  )
}

export default Navbar;


