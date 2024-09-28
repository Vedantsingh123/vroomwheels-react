import React from 'react'

const CarsCard = ({id, img, name, price}) => {
  return (
    <div className='border-2 border-zinc-900 rounded-xl bg-slate-100 cursor-pointer mb-2' key={id}> 
        <img src={img} alt=""className='w-full rounded-t-xl' />
        <h1 className='font-bold text-xl pl-5 text-red-500'>{name}</h1>
        <p className='pl-5 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className='flex justify-between px-6 py-3'>
            <p className='font-semibold text-xl'>₹{price}</p>
            <button className='bg-red-500 hover:bg-zinc-800  text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:scale-95 transition duration-200 ease-in'>Book Now</button>
        </div>
    </div>
  )
}

export default CarsCard