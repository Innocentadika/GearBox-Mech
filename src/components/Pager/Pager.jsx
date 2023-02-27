import React from 'react'
import cover from '../assets/cover.png'
import { useState } from 'react'
import dataMore from './dataMore'



const Pager = () => {
  const [name, setMessage ] = useState('');
  const handleClickback = () => {
    setMessage( <div>{dataMore.map((dataMore, index)=> ( <div key={index}><span>{dataMore.message0}</span></div>))}</div> );
  }

    const handleClick = () => {
      setMessage( <div>{dataMore.map((dataMore, index)=> ( <div key={index}><span>{dataMore.message1}</span></div>))} <div className='text-right'><button className=' rounded font-serif bg-red-600 w-auto lg:text-lg ' onClick={handleClickback}>close</button></div> </div> );
    }
    const handleClickAgain = () => {
      setMessage( <div>{dataMore.map((dataMore, index)=> ( <div key={index}><span>{dataMore.message2}</span></div>))} <div className='text-right'><button className=' rounded font-serif bg-red-600 w-auto lg:text-lg ' onClick={handleClickback}>close</button></div> </div> );
    }
    const handleClickMore = () => {
      setMessage( <div>{dataMore.map((dataMore, index)=> ( <div key={index}><span>{dataMore.message3}</span></div>))} <div className='text-right'><button className=' rounded font-serif bg-red-600 w-auto lg:text-lg ' onClick={handleClickback}>close</button></div> </div> );
    }

  return (
    <div>
        <div className='p-4 flex space-x-4 text-xs transform-gpu lg:text-lg'>
      <div className='items-center text-left justify-center '>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full  rounded-r-full' src={cover} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 pb-1'>Production</p>
        
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClick}>View details &gt;&gt;</button>
</div>


      </div>

      <div className='items-center text-left justify-center'>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full rounded-r-full' src={cover} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 pb-1'>Services</p>
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClickAgain}>View details &gt;&gt;</button>
</div>
      </div>
      <div className='items-center text-left justify-center'>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full rounded-r-full' src={cover} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 pb-1'>Client</p>
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClickMore}>View details &gt;&gt;</button>
</div>
      </div>
      </div>
    
      <p className='bg-gray-800 font-thin pl-2 text-slate-200 text-sm p-1'>{name}</p>
      
    </div>
  )
}

export default Pager;

