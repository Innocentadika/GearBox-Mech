import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.css'
import slideImages from './dataSlide'

const spanStyle = {
  padding: '10px',
  fontWeight: 'bold', 
  color: 'orange'
}

const Slideshow = () => {
    return (

      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='metal rounded' style={{  'backgroundImage': `url(${slideImage.image})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;