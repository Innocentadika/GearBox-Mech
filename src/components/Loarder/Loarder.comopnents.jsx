import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Pager from '../Pager/Pager';
import Slideshow from '../Slider/Slider.component';
import Navbar from '../Navbar/Navbar';
import Team from '../Team/Team.component';
import Footer from '../Footer/Footer';
const Loarder = () => {
 
  return (
    <div className='min-h-screen'>
      <Navbar />
    <div className='justify-center text-2xl text-center items-center'>
      <h1 style={{ paddingTop: '1rem', paddingBottom: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{ color: 'gray', fontWeight: 'bold', fontFamily: 'sansf'}}>
          <Typewriter
            words={['Learn', 'Perfect', 'Engineer@', 'Nachimo']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        Engineering Works
      </h1>
    </div>
      <>
      <Slideshow />
      <Pager />
      <Team />
      </>
      <Footer/>
    </div>

  );
}
export default Loarder;