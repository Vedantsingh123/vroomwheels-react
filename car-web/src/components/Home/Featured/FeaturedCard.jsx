import React from 'react'

const FeaturedCard = ({id, img, name ,price}) => {
  return (
    <div className='border-2 border-zinc-800 bg-slate-100 text-black rounded-xl mb-2 cursor-pointer hover:scale-95 transition duration-150 ease-in'>
        <div>
            <img src={img} alt='img' className='w-full h-auto rounded-t-xl'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-xl text-red-500 mt-2'>{name}</h1>
            <div className='mt-2'>
                <h2 className='font-medium text-lg'>Starting at ₹{price}</h2>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard