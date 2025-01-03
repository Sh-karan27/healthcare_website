import React from 'react';
import Eyes from '../assets/Eyes.png';

const EyeCheckup = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-evenly bg-gradient-to-r from-blue-50 to-indigo-100 p-8'>
      <h1 className='text-6xl font-extrabold text-text-light drop-shadow-md'>
        A Vision Worth Seeing
      </h1>
      <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full flex flex-col items-start justify-center p-6 space-y-6'>
          <h2 className='text-4xl lg:text-5xl font-bold text-text-light leading-tight'>
            Eye Check-Up: Clarity for Your Future
          </h2>
          <p className='text-lg lg:text-xl text-gray-700 leading-relaxed'>
            Your eyes do so much for you—why not give them the care they
            deserve? With advanced screening methods, we help you maintain clear
            vision and detect potential issues before they grow. A brighter
            world starts with healthy eyes. See the difference today!
          </p>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold text-text-light'>
              Why Your Eyes Deserve the Best:
            </h3>
            <ul className='list-disc list-inside text-gray-700 space-y-3'>
              <li>
                <strong>Cutting-Edge Technology:</strong> Bringing precision and
                accuracy to every check-up.
              </li>
              <li>
                <strong>Customized Care:</strong> Personalized advice for
                maintaining peak eye health.
              </li>
              <li>
                <strong>Preventive Insights:</strong> Early detection ensures
                long-term clarity.
              </li>
            </ul>
          </div>
        </div>

        <div className='lg:w-1/2 w-full flex flex-col items-center justify-center p-6'>
          <div className='relative w-full max-w-md'>
            <img src={Eyes} alt='' />
          </div>
          <div className='mt-8 text-center space-y-3'>
            <h3 className='text-2xl lg:text-3xl font-medium text-gray-800'>
              “Love is blind, but your vision shouldn’t be!”
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeCheckup;
