import React from "react";
import HeroSection from "../components/HeroSection";
import Specialist from "../components/Specialist";
import BestDoctors from "../components/BestDoctors";
import TestBooking from "../components/TestBooking";
import { AnimatedTestimonialsDemo } from "../components/AnimatedTestimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <BestDoctors />
      <TestBooking />
      <AnimatedTestimonialsDemo />
    </>
  );
};

export default Home;

