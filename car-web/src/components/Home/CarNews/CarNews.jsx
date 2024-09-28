import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarNewsCard from './CarNewsCard';

const CarNews = () => {
    const newsData = [
          {
            id: 0,
            img: "https://assets.porsche.com/in/chandigarh/-/media/Project/DealerWebsites/India/Chandigarh/Stage/News-and-Events/Desktop/Porsche-centre-Chandigarh.jpg?rev=f016c6fe445c4f54a39228b386d0632d",
            news: "Porsche Penske Motorsport works team wins the WEC race in Fuji",
          },
          {
            id: 1,
            img: "https://media.wired.com/photos/66740cd2868f76e67cdc96da/3:2/w_1280,c_limit/Bugatti_Header.jpg",
            news: "Bugatti’s $4 Million Hybrid Hypercar Has the Craziest Steering Wheel We’ve Ever Seen",
          },
          {
            id: 2,
            img: "https://media.wired.com/photos/64f7c231542c5d0935dca057/3:2/w_1280,c_limit/Lamborghini-Lanzador-Drive-Featured-Gear.jpg",
            news: "First Drive: Lamborghini's Lanzador EV Is Shooting for the Moon",
          },
          {
            id: 3,
            img: "https://media.wired.com/photos/5bf490e6e80cd160065512fe/3:2/w_1280,c_limit/RR_EVQ_20MY_Capability_S44_221118_09.jpg",
            news: "Range Rover's New Evoque Is Made to Conquer the Parking Lot",
          },
          {
            id: 4,
            img: "https://media.wired.com/photos/6423826d7f6ce88e606d7b55/3:2/w_1280,c_limit/Lamborghini-Revuelto-Featured-Gear.jpg",
            news: "Lamborghini’s New Hybrid Makes a Flashy Entrance",
          },
          {
            id: 5,
            img: "https://media.wired.com/photos/5ba001400aec005ccb674452/3:2/w_1280,c_limit/Audi-E-Tron_2.jpg",
            news: "Audi at Last Unveils the E-tron, Its First All-Electric SUV",
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
    <div className='text-center'>
        <h1 className='font-bold text-3xl mt-4'>Cars <span className='text-red-500'>NewsRoom</span></h1>
        <p className='mt-2'>Lorem ipsum dolor sit amet, vis at sumo etiam iriure, solet </p>
        <div className='mt-5'>
            <Slider {...settings}>
                {newsData.map((item) => (
                   <CarNewsCard 
                    key ={item.id}
                    img = {item.img}
                    news = {item.news}
                   />
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default CarNews;