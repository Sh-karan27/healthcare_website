import React from 'react';
import { best_doctor } from '../data/best_doctors';

import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const BestDoctors: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-evenly min-h-screen p-6 w-full bg-gray-100'>
      {/* Heading */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-5xl font-bold text-primary mb-4'>
          India&apos;s Finest Doctors
        </h1>
        <p className='text-sm md:text-lg text-text-light max-w-2xl mx-auto'>
          At UNCOVER, we bring you India&apos;s finest Doctors hailing from some
          of the top institutions like AIIMS, Manipal, Max, etc., so you know
          you are always in the safest hands.
        </p>
      </div>

      {/* Image Scroll */}
      <div className='flex flex-wrap justify-center gap-20 w-full p-4'>
        {best_doctor.map((curr, i) => (
          <div
            key={i}
            className='flex flex-col items-center gap-6 w-full sm:w-80 md:w-72 lg:w-64'>
            <img
              src={curr.image}
              alt={curr.name}
              className='w-full rounded-[3rem] object-cover'
            />
            <div className='flex flex-col items-start gap-2'>
              <h1 className='text-lg font-semibold text-text-light'>
                {curr.name}
              </h1>
              <p className='text-heading-light-section_heading text-sm md:text-base'>
                {curr.bio}
              </p>
              <h1 className='text-gray-500 text-sm md:text-base'>
                Experience: {curr.experience}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className='flex items-center justify-center gap-6 mt-8'>
        <button className='bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary-dark transition'>
          <FaLongArrowAltLeft className='text-xl' />
        </button>
        <button className='bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary-dark transition'>
          <FaLongArrowAltRight className='text-xl' />
        </button>
      </div>
    </div>
  );
};

export default BestDoctors;
