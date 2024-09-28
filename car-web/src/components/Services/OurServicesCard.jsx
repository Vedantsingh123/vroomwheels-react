import React from 'react'

const OurServicesCard = ({icon, title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 border-2 border-zinc-900 rounded-md hover:bg-slate-700 hover:text-white hover:scale-95 transition duration-300 ease-in-out'>
        <p>{icon}</p>
        <h1 className='text-3xl font-bold text-red-500'>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae eaque. Fugit aliquid, obcaecati error omnis necessitatibus voluptatum, exercitationem temporibus esse eius vitae quia eaque, eum sint aspernatur placeat ipsa.  Iure, molestiae eaque. Fugit aliquid, obcaecati error omnis necessitatibus</p>
    </div>
  )
}

export default OurServicesCard