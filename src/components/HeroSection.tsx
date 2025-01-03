import React, { useEffect, useState } from 'react';
import { hero_section_arr } from '../data/hero_section';
import { ImagesSliderDemo } from './acertinity_ui_components/ImagesSliderDemo';
import HeroSectionBanner from '../assets/HeroSectionBanner.jpeg';
import { hero_banner_arr } from '@/data/hero_banner_data';
import NumberTicker from './ui/number-ticker';

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % hero_section_arr.length;
        console.log('Current Index:', newIndex); // Debugging
        return newIndex;
      });
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero-section min-h-screen flex  items-center justify-center'>
      <ImagesSliderDemo />
    </div>
  );
};

export default HeroSection;
