import React from 'react'
import car from '../../../assets/car.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white'>
        <div className='h-screen flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full md:w-2/4 px-4 space-y-5'>
                <h1 className='text-4xl md:text-6xl font-bold'>Experience the <span className='text-red-500'>Pure</span> Joy of Driving</h1>
                <p className='text-lg md:text-2xl font-medium'>Unleash Your Professional Persona, Drive in Confidence</p>
                <p className='text-sm md:text-base'> This personal-use vehicle provides the maximum amount of comfort compared to other vehicles. A car has one engine, four tyres,windows, a steering wheel, headlights, taillights, and boot space. </p>

                <div className='flex gap-8 '>
                    <button className='px-4 py-2 rounded-md bg-red-500 hover:scale-95 transtion duration-150 ease-in'>Explore More</button>
                    <button className='px-6 py-2 border-2 rounded-md border-red-500 hover:scale-95 transtion duration-150 ease-in'>See Cars</button>
                </div>
            </div>
            <div className='w-full md:w-2/4 mt-7'>
            <img src={car} alt=""className='w-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero