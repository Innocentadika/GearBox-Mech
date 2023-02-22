import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Pager from '../Pager/Pager';
import Slideshow from '../Slider/Slider.component';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Team from '../Team/Team.component';

const Loarder = () => {

  return (
    <div className='min-h-screen'>
      <Navbar />
    <div className='justify-center text-2xl text-center items-center'>
      <h1 style={{ paddingTop: '0.1rem', paddingBottom: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{ color: 'red', fontWeight: 'bold', fontFamily: 'sansf'}}>
          <Typewriter
            words={['Learn', 'Perfect', 'Engineer', 'Repeat!']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        GearBox
      </h1>
    </div>
      <>
      <Slideshow />
      <Pager />
      <Team />
      </>
      <div className='flex space-x-96  font-sans items-center text-center border-gray-600 border p-1 pt-4 pb-2 max-xl:space-x-1'>
        <div className='flex space-x-1 pl-8 max-xl:pl-1'>
<span>2017-2023 Company, Inc.</span>
<div className='text-blue-600 space-x-2'>
<Link to=''>Privacy</Link>
<Link to=''>Terms</Link>
</div>
        </div>
        <div className='pl-96 max-xl:pl-0 sm:pl-56'>Back to top</div>
      </div>
    </div>

  );
}
export default Loarder;