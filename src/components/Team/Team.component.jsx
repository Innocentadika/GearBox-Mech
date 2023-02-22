import React from 'react'
import WireFlower from '../assets/7.png'
const Team = () => {
  return (
    <div>
      <div className='flex-col p-2 space-y-2 bg-zinc-900'>
        <div className='flex space-x-6 rounded  bg-slate-200'>
        <div className=''>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
        </div>
        <div>
        <img className='rounded' src={WireFlower} alt="description1" />
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-200'>
        <div>
        <img className='rounded' src={WireFlower} alt="description1" />
        </div>
        <div className=''>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-200'>
        <div className=''>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
        </div>
        <div>
        <img className='rounded' src={WireFlower} alt="description1" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Team;