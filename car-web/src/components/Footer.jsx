import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-zinc-900 px-5 mt-14 text-white p-8 lg:px-28 md:px-16'>
        <div className='flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-1/4'>
            <h1 className='font-semibold text-2xl mb-4'>VroomWheels</h1>
            <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div>
            <h1 className='font-semibold text-xl pb-4 md:pt-0 pt-5'>Pages</h1>
            <div className='flex flex-col gap-2 font-medium '>
            <ul className=' space-y-2'>
            <li className="hover:translate-x-3 transition duration-200 ease-linear">
              <Link to="/">Home</Link >
            </li>
            <li className="hover:translate-x-3 transition duration-200 ease-linear">
              <Link  to="/about">About Us</Link >
            </li>
            <li className="hover:translate-x-3 transition duration-200 ease-linear">
              <Link  to="/cars">Our Cars</Link >
            </li>
            <li className="hover:translate-x-3 transition duration-200 ease-linear">
              <Link  to="/services" >Services</Link >
            </li>
            <li className="hover:translate-x-3 transition duration-200 ease-linear">
              <Link  to="/sign-in" >Sign-In</Link >
            </li>
            <li className="hover:translate-x-3 transition duration-200 ease-linear">
              <Link  to="/sign-up" >Sign-Up</Link >
            </li>
          </ul>
            </div>
        </div>
        <div className=''>
            <h1 className='font-semibold text-xl pb-4 md:pt-0 pt-5'>Learn More</h1>
            <div className='flex flex-col gap-2 font-medium '>
                <h3 className='hover:translate-x-3 transition duration-200 ease-linear'>User-Friendly</h3>
               <h3 className='hover:translate-x-3 transition duration-200 ease-linear'> Search and Filters</h3>
               <h3 className='hover:translate-x-3 transition duration-200 ease-linear'>Secure Payment</h3>
               <h3 className='hover:translate-x-3 transition duration-200 ease-linear'>Geolite Services</h3>
            </div>
        </div>
    </div>
    <div className='mt-10'>
        <p className='text-center text-xl py-4'>&copy;copyright developed by <span className='text-red-500 font-semibold'>Vedant SIngh</span> All rights an reserved</p>
    </div>
    </div>
  )
}

export default Footer