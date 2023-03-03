import React from 'react'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import cover from '../assets/cover.png'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';


const Socials = () => {
    
    const handleClick = () => {
        const encodedMessage = encodeURIComponent('Thank you for reaching out to Nachimo Engineering Works, How may we assist you?');
        const waUrl = `https://wa.me/${254745314641}?text=${encodedMessage}`;
        window.open(waUrl);
    };

  return (
    <>
    
    <div className='min-h-screen  bg-slate-200 items-center justify-center '>
      <div><Navbar /></div>
        <div className='text-center text-neutral-800 font-serif text-xl pt-2'>
          <p className='text-xl italic font-bold p-2'>Nachimo .E. Works</p>
<p>Thank you for reaching out to us.</p>

<div className='px-2  sm:px-36 lg:px-96'>
<button style={{height:30}} className=' py-1 bg-gray-100 rounded items-center  flex'>
<MdEmail size={30} className='text-orange-400' />
<h2 className=' text-center text-base text-slate-800 font-bold '>nachimoengineeringworks@gmail.com</h2>
</button>
</div>
        </div>
        
    <div className='flex p-3 pt-8 space-x-4 text-center justify-center'>
    <button style={{width:180, height:50}} onClick={handleClick}className='bg-green-600 py-2 px-4 rounded  flex'><FaWhatsapp size={30} class='ml-2 text-white '/><h2 className=' text-center text-base pl-2 text-white font-bold '>Whatsapp Us</h2></button>
    <a href='https://www.facebook.com/profile.php?id=100089637483861'><button style={{width:180, height:50}} className='bg-blue-600 py-2 px-4 rounded items-center  flex'><FaFacebook class='ml-2 text-white text-3xl '/><h2 className='text-center text-base pl-2 text-white font-bold'>Facebook</h2></button></a>
      </div>
      <div className=' lg:pl-16  lg:scale-75'>
        <img className=' max-xl:scale-50 rounded animate-spin  lg:ml-96 lg:h-96 lg:scale-75' src={cover} alt="cover" />
      </div>
      <p className='text-xl italic font-bold p-6 text-green-800 font-serif text-center'>Empowering Local Industry</p>
      <p className='text-3xl italic font-extrabold p-2 text-center animate-bounce z-50'><span>K</span><span className='text-red-600'>E</span><span className='text-green-700'>N</span><span className='text-red-600'>Y</span><span>A</span></p>
      
    </div>
    <div><Footer/></div>
    </>
  )
}

export default Socials;
