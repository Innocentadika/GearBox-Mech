import React from 'react'
import crown1 from '../assets/1.png'

const Pager = () => {

    const Message1 = (m) => {
        m.preventDefault();
console.log("am the one");
    }

  return (
    <div>
        <div className='p-4 flex space-x-4 text-xs transform-gpu lg:text-lg'>
      <div className='items-center text-left justify-center '>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full rounded-r-full' src={crown1} alt="crown1" />
        </div>
        
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 lg:pl-24 '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={Message1}>View details &gt;&gt;</button>
</div>
      </div>

      <div className='items-center text-left justify-center'>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full rounded-r-full' src={crown1} alt="crown1" />
        </div>
        
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 lg:pl-24 '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={Message1}>View details &gt;&gt;</button>
</div>
      </div>
      <div className='items-center text-left justify-center'>
        <div className='items-center justify-center max-lg:scale-75 lg:scale-75'>
        <img className='rounded-l-full rounded-r-full' src={crown1} alt="crown1" />
        </div>
        
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<div className='pt-2 lg:pl-24 '>
<button className='bg-gray-700 rounded text-white text-sm h-8 lg:text-lg' onClick={Message1}>View details &gt;&gt;</button>
</div>
      </div>
      </div>
    </div>
  )
}

export default Pager;
