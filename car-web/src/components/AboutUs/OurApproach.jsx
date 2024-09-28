import React from 'react'

const OurApproach = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row gap-5 items-center mt-16 px-2'>
    <div className='w-full md:w-2/5'>
        <img src="https://media.istockphoto.com/id/1364951753/photo/auto-service-interior-background-with-cars-on-the-lift.jpg?s=612x612&w=0&k=20&c=jd3IpV-koWUZrSHkwSwSdcA-s7bCRwcY233pSQafUJ4=" alt="" className='rounded-lg'/>
    </div>
    <div className='w-full md:w-2/4 space-y-4'> 
        <h1 className='text-4xl font-bold'>Our <span className='text-red-500'>Approach</span></h1>
        <h2 className='text-lg lg:text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </h2>
        <p className='text-sm lg:text-base'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
        <p className='text-sm lg:text-base'>quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    </div>
</div>
  )
}

export default OurApproach