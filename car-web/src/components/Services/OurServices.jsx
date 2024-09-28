import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { SiCoronaengine } from "react-icons/si";
import { FaCar } from "react-icons/fa";
import { SiGoogleearthengine } from "react-icons/si";
import { GiCarWheel } from "react-icons/gi";
import OurServicesCard from './OurServicesCard';


const OurServices = () => {
    const icon1 = <GiCarWheel className='text-blue-600 mx-auto' size={48}/>;
    const icon2 = <SiGoogleearthengine className='text-blue-600 mx-auto' size={48}/>;
    const icon3 = <MdDesignServices className='text-blue-600 mx-auto' size={48}/>;
    const icon4 = <IoSettingsOutline className='text-blue-600 mx-auto' size={48}/>;
    const icon5 = <FaCar className='text-blue-600 mx-auto' size={48}/>;
    const icon6 = <SiCoronaengine className='text-blue-600 mx-auto' size={48}/>;
  return (
    <div>
        <div className='pt-24'> 
            <h1 className='text-4xl font-bold text-center'>Our <span className='text-red-500'>Services</span></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 mt-7'>
            <OurServicesCard icon={icon1} title="Tyres and Wheels"/>
            <OurServicesCard icon={icon2} title="Exhaust System"/>
            <OurServicesCard icon={icon3} title="Cars Maintenance"/>
            <OurServicesCard icon={icon4} title="Brake Repairs"/>
            <OurServicesCard icon={icon5} title="Body Services"/>
            <OurServicesCard icon={icon6} title="Engine services"/>
        </div>
    </div>
  )
}

export default OurServices