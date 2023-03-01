import React from 'react'
import Metalic8 from '../assets/metalic8.png'
import Metalic5 from '../assets/metalic5.png'
import Metal9 from '../assets/metalic9.png'
import Metal2 from '../assets/2.png'
import Metalic7 from '../assets/metalic7.png'

const Team = () => {
  return (
    <div>
      <div className='flex-col p-2  space-y-2 bg-zinc-900 text-sm xl:text-lg'>
        <div className='flex space-x-6 rounded  bg-slate-100  '>
        <div className='xl:p-10 sm:p-8'>
        <p>Customized mobile stand design based on your preferences.
We are here to help you with all your metal fabrication and powder coating needs</p>
      
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
        <p>Secure your premises with our laser cut gates that are strong and durable to enhance your security.</p>
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-100 '>
        <div className='xl:p-10 sm:p-8'>
        <p>Our gates are built to enhance your property's beautification and security. The patterns are designed according to your needs. Nachimo Engineers fabricate the doors, gates, grills, staircases and balconies from mild steel.</p>
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
        <p>The sense of arrival continues to be important at home entrances. Often, it can serve as an introduction for both owners and visitors and can play a huge role in their first impression. Our laser cut panels make a bold statement as balustrades in homes, schools, restaurants and many more.</p>
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-100  '>
        <div className='xl:p-10 sm:p-8'>
        <p>Customed bulcony standline design based on your preferences.
We are here to help you with all your metal fabrication and powder coating needs.</p>
      
        </div>
        <div >
        <img style={{width: 900}} className='rounded xl:h-72 xl:w-96' src={Metalic5} alt="description1" />
        </div>
        </div>

      </div>
    </div>
  )
}

export default Team;