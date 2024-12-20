import React from 'react';
import HeroSection from '../components/HeroSection';
import Specialist from '../components/Specialist';
import BestDoctors from '../components/BestDoctors';
import TestBooking from '../components/TestBooking';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <BestDoctors />
      <TestBooking />
    </>
  );
};

export default Home;
