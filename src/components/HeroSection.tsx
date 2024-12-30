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
    <div className='hero-section min-h-screen flex flex-col items-start justify-between'>
      {/* Image Slider Section */}
      <div className='flex items-center justify-center w-full h-full'>
        <ImagesSliderDemo />
      </div>

      {/* Banner Section */}
      <div
        className='relative h-[20rem] w-full flex flex-col lg:flex-row items-center justify-evenly p-4 lg:p-8'
        style={{
          backgroundImage: `url(${HeroSectionBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        {/* Overlay */}
        <div className='absolute inset-0 bg-bacground-light opacity-70 z-10'></div>

        {/* Content */}
        <div className='relative z-20 flex flex-col lg:flex-row items-center justify-evenly gap-4 lg:gap-8 w-full'>
          {hero_banner_arr.map((curr, i) => (
            <div
              key={i}
              className='flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-5 text-center'>
              <div className='flex items-center justify-center flex-wrap'>
                <p className='whitespace-pre-wrap text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tighter'>
                  <NumberTicker value={curr.number} />
                </p>
                <p className='whitespace-pre-wrap text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white ml-1'>
                  {curr.symbol}
                </p>
              </div>
              <p className='whitespace-pre-wrap text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-white'>
                {curr.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
