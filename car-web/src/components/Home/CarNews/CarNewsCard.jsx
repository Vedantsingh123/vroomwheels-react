import React from 'react'

const CarNewsCard = ({id, img, news}) => {
  return (
    <div key={id} className='rounded-lg text-center border-2 border-zinc-900 hover:scale-95 transition duration-200 ease-in space-y-6'>
          <img src={img} alt="img" className='rounded-t-lg'/>
          <h3 className='font-medium'>{news}</h3>
    </div>
  )
}

export default CarNewsCard;