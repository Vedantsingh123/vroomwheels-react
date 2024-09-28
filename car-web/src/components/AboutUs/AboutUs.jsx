import React from 'react'
import Vision from './Vision'
import OurApproach from './OurApproach'

const AboutUs = () => {
  return (
    <div className='pt-24'>
          <div>
            <h1 className='font-bold text-4xl text-center '>
                About <span className='text-red-500'>Us</span>
            </h1>
          </div>
          <Vision/>
          <OurApproach/>
    </div>
  )
}

export default AboutUs