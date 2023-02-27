import React from 'react'
import Metalic8 from '../assets/metalic8.png'
import Metal9 from '../assets/9.png'
import Metal2 from '../assets/2.png'
import Metalic7 from '../assets/metalic7.png'

const Team = () => {
  return (
    <div>
      <div className='flex-col p-2  space-y-2 bg-zinc-900 text-sm xl:text-lg'>
        <div className='flex space-x-6 rounded  bg-slate-100  '>
        <div className='xl:p-10 sm:p-8'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
      
        </div>
        <div >
        <img style={{width: 900}} className='rounded xl:h-72 xl:w-96' src={Metalic8} alt="description1" />
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-100'>
        <div>
        <img style={{width: 900}} className='rounded xl:h-96' src={Metal9} alt="description1" />
        </div>
        <div className='xl:p-10 sm:p-8'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-100 '>
        <div className='xl:p-10 sm:p-8'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
        </div>
        <div>
        <img style={{width: 900}} className='rounded' src={Metal2} alt="description1" />
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-100'>
        <div>
        <img style={{width: 900}}  className='rounded' src={Metalic7} alt="description1" />
        </div>
        <div className='xl:p-10 sm:p-8'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Team;