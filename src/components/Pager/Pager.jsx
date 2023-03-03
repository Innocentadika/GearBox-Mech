import React from 'react'
import work from '../assets/cover.png'
import client from '../assets/production.png'
import Service from '../assets/service.png'
import { useState } from 'react'
import dataMore from './dataMore'
import Clientshow from '../Client/Client'
import Serviceshow from '../Services/Services'



const Pager = () => {
  const [name, setMessage ] = useState('');
  const handleClickback = () => {
    setMessage( <div>{dataMore.map((dataMore, index)=> ( <div key={index}><span>{dataMore.message0}</span></div>))}</div> );
  }

    const handleClick = () => {
      setMessage( <div>{dataMore.map((dataMore, index)=> ( <div key={index}><span>{dataMore.message1}</span></div>))} <div className='text-right'><button className=' rounded font-serif bg-red-600 w-auto lg:text-lg ' onClick={handleClickback}>close</button></div> </div> );
    }
    const handleClickAgain = () => {
      setMessage( <div>{dataMore.map((dataMore, index)=> ( <div key={index}><span>{dataMore.message2}</span></div>))} <><Serviceshow/> </> <div className='text-right'><button className=' rounded font-serif bg-red-600 w-auto lg:text-lg ' onClick={handleClickback}>close</button></div> </div> );
    }
    const handleClickMore = () => {
      setMessage( <div>{dataMore.map((dataMore, index)=> ( <div key={index}><span>{dataMore.message3}</span></div>))} <><Clientshow /></> <div className='text-right'><button className=' rounded font-serif bg-red-600 w-auto lg:text-lg space-y-2' onClick={handleClickback}>close</button></div> </div> );

    }

  return (
    <div>
        <div className='p-4 lg:flex sm:flex  lg:space-x-4 sm:space-x-4 space-y-3  text-xs lg:text-lg'>
          
      <div className='items-center text-left justify-center sm:w-2/4 lg:w-2/4 max-lg:pt-2'>
        <div className='lg:px-28 px-14 sm:px-8'>
        <img style={{width: 200}} className='rounded-l-full  rounded-r-full ' src={work} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 p-1'>Production</p>
        
<p>We are a firm of independent designers, engineers, and technical specialists offering a wide range of services both in mechanical and electrical engineering.</p>
<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClick}>View details &gt;&gt;</button>
</div>

      </div>

      <div className='items-center text-left justify-center sm:w-2/4 lg:w-2/4'>
        <div className='lg:px-28 px-14 sm:px-8'>
        <img style={{width: 200}} className='rounded-l-full rounded-r-full text-center' src={Service} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 p-1'>Services</p>
<div className='flex-col py-1'>
<p>Among the services we offer to our clients are:</p> 
<p> 1. Design and fabrication for grills, gates,      balconies & windows.</p>
<p>2. Laser cutting for gates, staircases, balconies etc..</p>
<p>3. Powder coating.</p> 
<p>4. Welding and many more...</p>
</div>

<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClickAgain}>View details &gt;&gt;</button>
</div>
      </div>

      <div className='items-center text-left justify-center sm:w-2/4 lg:w-2/4'>
        <div className='lg:px-28 px-14 sm:px-8'>
        <img style={{width: 200}}  className='rounded-l-full rounded-r-full' src={client} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 p-1'>Client</p>
<p>Some representative placeholder content for the three columns of text below . <span>&#128075;</span> This section provides our location, <span className='italic text-green-400'>click view details</span>.</p>
<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClickMore}>View details &gt;&gt;</button>
</div>
      </div>
      </div>
    
      <p className='bg-gray-800 font-thin pl-2 text-slate-200 text-sm lg:text-lg sm:text-base p-1'>{name}</p>
      
    </div>
  )
}

export default Pager;

