import React from 'react'
import Hero from '../components/Home/Hero/Hero';
import Featured from '../components/Home/Featured/Featured';
import WhyUS from '../components/Home/WhyUS/WhyUS';
import OurMission from '../components/Home/OurMission/OurMission';
import CarNews from '../components/Home/CarNews/CarNews';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <WhyUS/>
      <OurMission/>
      <CarNews/>
      <Footer/>
    </div>
  )
}

export default Home