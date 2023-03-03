import React from 'react'
import Metalic8 from '../assets/metalic8.png'
import Metalic5 from '../assets/metalic5.png'
import Metal9 from '../assets/metalic9.png'
import Metal2 from '../assets/2.png'
import Metalic7 from '../assets/metalic7.png'
import Piramid from '../assets/goldenpiramid.png'
import Window from '../assets/blackgate.png'
import DoorA from '../assets/packageddoor.png'

const Team = () => {
  return (
    <div>
      
      <div className='flex-col p-2  space-y-2 bg-zinc-900 text-sm xl:text-lg'>

        <div className='flex space-x-6 rounded  bg-slate-100  '>
        <div >
        <img style={{width: 900}} className='rounded xl:h-72 xl:w-96' src={Metalic8} alt="description1" />
        </div>

        <div className='xl:p-10 sm:p-8'>
        <p>Customized mobile stand design based on your preferences.
We are here to help you with all your metal fabrication and powder coating needs</p>
      
        </div>
        
        </div>

        <div className='sm:flex lg:flex space-y-3 space-x-6 rounded  bg-slate-100'>
        <div>
        <img style={{width: 900}} className='rounded xl:h-96' src={Metal9} alt="description1" />
        </div>
        <div className='xl:p-10 sm:p-8'>
        <p>Let's discuss our creative ideas if you want a fresh twist on a time-honored product or want to give your surroundings a new dimension. Our architectural feature gates, door grills, screens, and wall panels provide flexible design choices without sacrificing aesthetics in the sake of utility. <br /> <br />
We've created a novel product concept that gives you a selection of premium materials, distinctive designs, and finishes. If you can't find exactly what you're looking for, we will be happy to create custom designs that will make your ideas come to life.</p>
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-100 '>

        <div>
        <img style={{width: 900}} className='rounded' src={Metal2} alt="description1" />
        </div>

        <div className='xl:p-10 sm:p-8'>
        <p>Our gates are built to enhance your property's beautification and security. The patterns are designed according to your needs. Nachimo Engineers fabricate the doors, gates, grills, staircases and balconies from mild steel.</p>
        </div>
        
        </div>

        <div className='sm:flex lg:flex space-y-3 space-x-6 rounded  bg-slate-100'>
        <div>
        <img style={{width: 900}}  className='rounded' src={Metalic7} alt="description1" />
        </div>
        <div className='xl:p-10 sm:p-1'>
        <p>The sense of arrival continues to be important at home entrances. Often, it can serve as an introduction for both owners and visitors and can play a huge role in their first impression. <br /> Our laser cut panels make a bold statement as balustrades in homes, schools, restaurants and many more.</p>
        <p>In addition to being extensions of your personality, the entrance of your home should also reflect your individuality. <br /> Our decorative driveway gates make your home stand out no matter what your style is... Whether you're looking for something more modern or something more classic</p>
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-100  '>

        <div >
        <img style={{width: 900}} className='rounded xl:h-72 xl:w-96' src={Metalic5} alt="description1" />
        </div>

        <div className='xl:p-10 sm:p-4'>
        <p>Customed bulcony standline design based on your preferences.
We are here to help you with all your metal fabrication and powder coating needs.</p>
        <p><span className='font-semibold'>Following are five advantages of using our screens as balustrades</span>: <br />
<li>For an appearance and feel that is modern.</li>
<li>To give the impression of solitude and light through pattern.</li>
<li>Resilient to the elements.</li>
<li>To create the appearance of spaciousness.</li>
</p>
      
        </div>
        </div>

        <div className='sm:flex lg:flex space-y-3 space-x-6 rounded  bg-slate-100'>
        <div>
        <img style={{width: 900}}  className='rounded' src={Piramid} alt="description1" />
        </div>
        <div className='xl:p-10 sm:p-1'>
        <p>You have everything you need if you have a garden and our garden columns. <br /> Beautiful garden screen panels are made by Nachimo Engineering Works to improve the appearance of your living area. <br /> With us, you're sure to find the ideal garden screening solution, whether you're adding a design element or just need a little more solitude. <br /> With our garden screens, you may improve your house and garden. Beautiful patterns from our selection will quickly enhance the beauty, seclusion, and shelter of your outdoor area. <br /> Please contact us if you need further information.</p>
        </div>
        </div>

        <div className='flex space-x-6 rounded  bg-slate-100  '>

        <div >
        <img style={{width: 900}} className='rounded xl:h-72 xl:w-96' src={DoorA} alt="description1" />
        </div>

        <div className='xl:p-8 sm:p-4'>
        <p>Bored of your outdated, uninteresting, and perhaps even rusted gate? <br /> We do, however, have the ideal answer for you! Astonishing Contemporary laser cut design pattern Metal Gate available for seeing. <br /> This bespoke gate is composed of powder-coated steel, which is strong and resistant to the elements. <br /> Moreover, it may be ordered in any color to precisely complement your house. And therefore no worries if you can't find a style you like! Any shape, size, or style can be altered by us to create the ideal aesthetic for your house. <br /> So don't hesitate any longer and use our incredible Decorative Metal Gate to revamp your house!</p>
      
        </div>
        
        </div>

        <div className='sm:flex lg:flex space-y-3 space-x-6 rounded  bg-slate-100'>
        <div>
        <img style={{width: 900}}  className='rounded' src={Window} alt="description1" />
        </div>
        <div className='xl:p-10 sm:p-8'>
        <p>We create curb appeal for your home with exterior design elements. <br /> Are you presenting an elegant, shabby or quirky image of your home to the world? <br /> You may be looking for an idea to give your home that face-lift you so desire. <br /> The beautiful gate above illustrates how perforated panels can accentuate the outside of your home.</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Team;