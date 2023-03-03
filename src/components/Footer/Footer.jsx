import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
       <div className='flex space-x-96  font-sans items-center text-center border-gray-600 border p-1 pt-4 pb-2 max-xl:space-x-1'>
        <div className='flex space-x-1 pl-8 max-xl:pl-1'>
<span className='text-gray-900'>©2017-2023 Company, Inc.</span>
<div className='text-blue-600 space-x-2'>
<Link to=''>Privacy</Link>
<Link to=''>Terms</Link>
<a href='https://github.com/Innocentadika'>github</a>
</div>
        </div>
        <div className='pl-96 text-xl max-xl:pl-0 sm:pl-56'><ScrollToTop/></div>
      </div>
    </div>
  )
}

export default Footer;
