import React from 'react'
import CarsCard from './CarsCard';

const OurCars = () => {

    const ourCars = [
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


  return (
    <div>
        <div className='pt-24'>
           <h1 className='font-bold text-4xl text-center'>Our <span className='text-red-500'>Cars</span></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 mt-5'> 
            {ourCars.map((items) => (
                <CarsCard key={items.id}
                img={items.img}
                name={items.name}
                price={items.price}
                />
            ))}
        </div>
    </div>
  )
}

export default OurCars