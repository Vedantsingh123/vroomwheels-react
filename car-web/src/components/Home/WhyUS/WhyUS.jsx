import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import WhyUSCard from './WhyUSCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WhyUS = () => {
    const icon1 = <RiCustomerService2Fill className='text-blue-600 mx-auto' size={48}/>;
    const icon2 = <FaUsers  className='text-blue-600 mx-auto' size={48}/>;
    const icon3 = <FaShippingFast  className='text-blue-600 mx-auto' size={48}/>;

    const settings = {
        accessibility:true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
      };

  return (
    <div className='mt-10'>
        <div className='flex flex-col items-center text-center'>
        <h1 className='font-bold text-3xl text-black'>Why <span className='text-red-500'>VroomWheels</span> ?</h1>
        <p className='px-3 mt-2'>Cars are a symbol of independence and mobility, and represent personal freedom and individualism.</p>
        </div>
        <div className='mt-8'>
        <Slider {...settings}>
            <WhyUSCard icon={icon1} title = "Qualified Cars"/>
            <WhyUSCard icon={icon2} title = "Modern Facility"/>
            <WhyUSCard icon={icon3} title = "Easy Booking"/>
            <WhyUSCard icon={icon1} title = "Satisfied Customer"/>
            <WhyUSCard icon={icon2} title = "Financing Options"/>
        </Slider>  
        </div>
    </div>
  )
}

export default WhyUS;