import React from 'react'

const Vision = () => {
  return (
    <div>
    <div className='flex flex-col justify-center md:flex-row gap-5 items-center mt-16 px-2'>
        <div className='w-full md:w-2/5'>
            <img src="https://www.shutterstock.com/image-illustration/future-automotive-smart-vehicles-intelligent-600nw-1810898773.jpg" alt="" className='rounded-lg'/>
        </div>
        <div className='w-full md:w-2/4 space-y-4'> 
            <h1 className='text-4xl font-bold'><span className='text-red-500'>Our</span> Vision</h1>
            <h2 className='text-lg lg:text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </h2>
            <p className='text-sm lg:text-base'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            <p className='text-sm lg:text-base'>quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </div>
    </div>
    <div className='flex flex-col-reverse justify-center md:flex-row gap-5 items-center mt-16 px-2'>
        <div className='w-full md:w-2/4 space-y-4'> 
            <h1 className='text-4xl font-bold'>Our <span className='text-red-500'>Core</span> Values</h1>
            <h2 className='text-lg lg:text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </h2>
            <p className='text-sm lg:text-base'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            <p className='text-sm lg:text-base'>quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </div>
        <div className='w-full md:w-2/5'>
            <img src="https://media.licdn.com/dms/image/sync/D4E27AQEAdLDFP44NpQ/articleshare-shrink_800/0/1719413272176?e=2147483647&v=beta&t=iWpJYNRg7Ya3_jeR6o0-JoBpFs8zvFu5uvh0QZUKxDw" alt="" className='rounded-lg'/>
        </div>
    </div>
    </div>
     
  )
}

export default Vision