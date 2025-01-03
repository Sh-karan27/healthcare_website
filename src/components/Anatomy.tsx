import React from 'react';
import AnatomyImage from '../assets/Anatomy.png';

const Anatomy = () => {
  return (
    <div className='min-h-screen w-full flex flex-col  items-center justify-evenly bg-gray-50 p-6'>
      <h1 className='text-5xl font-bold text-bacground-light'>
        Know your Anatomy
      </h1>
      <div className='w-full flex items-center justify-evenly p-4'>
        <div className='lg:w-1/2 w-full flex flex-col items-start justify-center p-6 space-y-6'>
          <h1 className='text-3xl lg:text-4xl font-bold text-bacground-light leading-tight'>
            Comprehensive Health Check-Up: Your Gateway to Wellness
          </h1>
          <p className='text-lg text-gray-600 leading-relaxed'>
            A full body check-up is more than just a routine—it’s a step towards
            a healthier, happier you. By assessing the vital functions of your
            body, we aim to detect potential health issues early and help you
            make informed decisions about your well-being. From heart health and
            liver function to metabolic screenings and nutritional assessments,
            our detailed tests leave no stone unturned. Invest in your health
            today—because prevention is better than cure.
          </p>
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold text-bacground-light'>
              Why Choose Us for Your Full Body Check-Up?
            </h2>
            <ul className='list-disc list-inside text-gray-600 space-y-2'>
              <li>
                <strong>Advanced Diagnostics:</strong> Leveraging cutting-edge
                technology for accurate results.
              </li>
              <li>
                <strong>Personalized Care Plans:</strong> Recommendations
                tailored to your unique health needs.
              </li>
              <li>
                <strong>Timely Insights:</strong> Early detection saves
                lives—act now for a brighter tomorrow.
              </li>
            </ul>
          </div>
        </div>

        <div className='lg:w-1/2 w-full flex flex-col items-center justify-center p-6'>
          <img
            className='w-full max-w-md rounded-lg '
            src={AnatomyImage}
            alt='Anatomy Illustration'
          />
          <h2 className='text-xl lg:text-3xl font-medium text-text-light mt-6 text-center'>
            “A full check-up today keeps the doctor away tomorrow.”
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Anatomy;
