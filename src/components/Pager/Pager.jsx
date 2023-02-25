import React from 'react'
import cover from '../assets/cover.png'
import { useState } from 'react'



const Pager = () => {
  const [name, setMessage] = useState('');

    const handleClick = () => {
      setMessage('my message');
    }
    const handleClickAgain = () => {
      setMessage('my second message ');
    }
    const handleClickMore = () => {
      setMessage('my third message');
    }

  return (
    <div>
        <div className='p-4 flex space-x-4 text-xs transform-gpu lg:text-lg'>
      <div className='items-center text-left justify-center '>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full  rounded-r-full' src={cover} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 pb-1'>Heading 1</p>
        
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClick}>View details &gt;&gt;</button>
</div>


      </div>

      <div className='items-center text-left justify-center'>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full rounded-r-full' src={cover} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 pb-1'>Heading 2</p>
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClickAgain}>View details &gt;&gt;</button>
</div>
      </div>
      <div className='items-center text-left justify-center'>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full rounded-r-full' src={cover} alt="crown1" />
        </div>
        <p className='text-lg text-center font-bold text-gray-500 pb-1'>Heading 3</p>
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 text-center '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={handleClickMore}>View details &gt;&gt;</button>
</div>
      </div>
      </div>
    
      <p className='bg-gray-800 font-extralight pl-1 text-white'>{name}</p>
      
    </div>
  )
}

export default Pager;

