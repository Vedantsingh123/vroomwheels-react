import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    const carsData = [
        {
            id: 0,
            img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/812/7859/1591619494883/front-left-side-47.jpg?impolicy=resize&imwidth=360",
            name: "Ferrari 812",
            price: "5.75 Cr",
        },
        {
            id: 1,
            img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/9081/Land-Rover-Defender-3.0-Diesel-110-X-Dynamic-HSE/1720674556929/front-left-side-47.jpg?impolicy=resize&imwidth=360",
            name: "Land Rover Defender",
            price: "1.04 - 1.57 Cr",
        },
        {
            id: 2,
            img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Rolls-Royce/Rolls-Royce-Phantom/7783/1587206758888/front-left-side-47.jpg?impolicy=resize&imwidth=360",
            name: "Rolls-Royce Phantom",
            price: "s.8.99 - 10.48 Cr",
        },
        {
            id: 3,
            img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bentley/Flying-Spur/11205/1695731100809/front-left-side-47.jpg?impolicy=resize&imwidth=360",
            name: "Bentley Flying Spur",
            price: "5.25 - 7.60 Cr",
        },
        {
            id: 4,
            img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/XM/10570/1689672872537/front-left-side-47.jpg?impolicy=resize&imwidth=360",
            name: "BMW XM",
            price: "2.60 Cr",
        },
        {
            id: 5,
            img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Vellfire/10337/1715313437175/front-left-side-47.jpg?impolicy=resize&imwidth=360",
            name: "Toyota Vellfire",
            price: "1.22 - 1.32 Cr",
        },

    ];

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
    <div className='mt-6'>
        <h1 className='text-4xl font-bold text-center'>Featured <span className='text-red-500'>Cars</span></h1>
        <p className='font-medium px-3 text-center mt-2'>Cars are a convenient way to travel, and can be used for everyday tasks</p>
        <div className='mt-8'>
          <Slider {...settings}>
            {carsData.map((item) => (
                <FeaturedCard 
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                />
            ))}
          </Slider>
        </div>
    </div>
  )
}

export default Featured