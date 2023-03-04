import React from 'react'
import './more.css'
import moreData from './moreData'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';


const More = () => {
  return (
    <>
    <Navbar/>
    <div className="startup">
        <section className='startup2'>
      <div className='container grid5 mtop'>
        {moreData.map((items, index) => (
            <div className='grow box'key={index}>
              <img style={{height: 150, width: 800}} src={items.image } alt='' className=' px-10'/>
                <h4>{items.title}</h4>
                <label>{items.review}</label>
    </div>
        ))}
    </div>
    </section>
    </div>
    <Footer/>
    </>
  )
}

export default More;
