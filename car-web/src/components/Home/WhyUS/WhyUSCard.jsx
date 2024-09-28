import React from 'react'

const WhyUSCard = ({icon, title}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center border-2 border-zinc-800 rounded-lg p-4 space-y-6 bg-slate-100 hover:bg-slate-700 hover:text-white hover:scale-95 transition duration-200 ease-in-out'>
        <p>{icon}</p>
        <h1 className='text-red-500 font-bold text-3xl'>{title}</h1>

        <p className='text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
    </div>
  )
}

export default WhyUSCard;