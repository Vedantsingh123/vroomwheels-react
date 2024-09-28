import React from 'react'
import img from '../../../assets/carimg2.jpg';

const OurMission = () => {
  return (
    <div className='bg-black '>
        <div className='flex justify-center mt-16'>
            <h1 className='font-bold text-3xl text-white mt-4'>Our <span className='text-red-500'>Mission</span></h1>
        </div>
    <div className='flex flex-col md:flex-row justify-center mt-10 items-center'>
        <div className='w-full md:w-2/4 flex  items-center'>
            <img src={img} alt="" className='rounded-lg w-full'/>
        </div>
        <div className='w-full md:w-2/4 text-white px-4 space-y-4'>
        <h1 className='font-bold text-red-500 text-lg lg:text-3xl'>To create community where every journey is extra ordinary</h1>
        <h2 className='font-semibold text-lg lg:text-2xl'>Enpower individuals to achieve sustainable moibilty solutions and inspire a positive impact on the enviroment</h2>
        <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, vis at sumo etiam iriure, solet ornatus veritus pri et, </p>
        <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, vis at sumo etiam iriure, solet ornatus veritus pri et, nam soleat integre splendide ut. An persius iuvaret nam, quo affert noluisse at. At nec eius novum maiestatis, mel choro mollis id, eu eam harum aliquid labores. Per dolorum quaerendum reprehendunt te. Vis veritus interesset cu, etiam causae te quo. Ea usu brute soluta eloquentiam.</p>
        </div>
    </div>
    </div>
  )
}

export default OurMission