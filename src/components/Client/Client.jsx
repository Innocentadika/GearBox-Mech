import React from 'react';
import { Slide } from 'react-slideshow-image';
import slideImages from './clientData'

const pStyle = {
  fontWeight: 'bold', 
  color: 'white'
}

const Clientshow = () => {
    return (

      <div >
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className='flex px-20 lg:px-32 sm:px-32  max-xl:flex-col  justify-center' key={index}>
              <div className=''>
                <img className='rounded ' style={{width: 400}} src={slideImage.image} alt="" />
                
              </div>
              <div className='p-5 sm:px-16 lg:p-20'>
                    <div className='py-1 flex-col'>
                    <p className='lg:text-2xl sm:text-lg' style={pStyle}>{slideImage.caption}</p>
                    <p className='lg:text-lg sm:text-base' >{slideImage.caption2}</p>
                    <div className='flex pt-1'>
                      <img src={slideImage.star1} alt="" />
                      <img src={slideImage.star1} alt="" />
                      <img src={slideImage.star1} alt="" />
                      <img src={slideImage.star1} alt="" />
                      <img src={slideImage.star1} alt="" />
                    </div>
                    </div>
                </div>
            </div>
          ))} 
        </Slide>
        <p className='text-green-500 text-center font-serif lg:text-lg sm:text-base'>Welcome  to Nachimo .E. Works</p>
        <p className='text-center font-serif lg:text-lg sm:text-base'>Located: <span className='text-blue-300 italic'>Industrial Area.</span></p>
      </div>
    )
}
export default Clientshow;