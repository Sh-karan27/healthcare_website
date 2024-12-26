import React from 'react';
import { HealthCondition, healthConditions } from '../data/healthConditions';

// ConditionCard Component
const ConditionCard: React.FC<{ condition: HealthCondition }> = ({
  condition,
}) => {
  const IconComponent = condition.icon;

  return (
    <div className='relative bg-slate-50 rounded-lg p-4 h-20 flex items-center justify-center overflow-hidden group transition-all duration-500 ease-in-out'>
      <span className='text-base font-medium text-left z-10 text-[#74C69D] group-hover:text-white group-focus-within:text-white transition-colors duration-300 mr-16'>
        {condition.title}
      </span>

      <div className='absolute top-0 right-0 -mt-3 -mr-3 z-20 bg-[#74C69D] text-white p-5 rounded-full'>
        <IconComponent className='w-8 h-8' />
      </div>

      <div className='absolute inset-0 bg-[#74C69D] transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100 origin-right z-0 transform group-hover:skew-x-6 rounded-lg'></div>
    </div>
  );
};

// TestBooking Component
const TestBooking: React.FC = () => {
  return (
    <div>
      {/* DentalHero Section */}
      <section className='container mx-auto px-4 py-12 md:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='space-y-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#74C69D]'>
              Your New <span className='text-[#74C69D]'>Smile</span>
              <br />
              Starts Here
            </h1>
            <p className='text-gray-600 leading-relaxed max-w-full sm:max-w-xl'>
              Your well-being is our top priority. Health encompasses a range of
              conditions, from common illnesses and chronic diseases to dental
              care and mental health. At Medicare, we offer comprehensive
              services to address all your health needs. Our dedicated team of
              professionals is here to support you in achieving a healthier,
              happier life. Book your appointment today and take the first step
              towards complete well-being!
            </p>
            <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full'>
              GET APPOINTMENT
            </button>
          </div>

          {/* Updated Image Section */}
          <div className='grid grid-cols-2 gap-1 w-full max-w-lg mx-auto'>
            <img
              src='https://images.pexels.com/photos/8450136/pexels-photo-8450136.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Image 1'
              className='w-full h-64 object-cover rounded-lg'
              loading='lazy'
            />
            <img
              src='https://images.pexels.com/photos/8850993/pexels-photo-8850993.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Image 2'
              className='w-full h-64 object-cover rounded-lg'
              loading='lazy'
            />
            <img
              src='https://images.pexels.com/photos/8450127/pexels-photo-8450127.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Image 3'
              className='w-full h-64 object-cover rounded-lg'
              loading='lazy'
            />
            <img
              src='https://images.pexels.com/photos/4084639/pexels-photo-4084639.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Image 4'
              className='w-full h-64 object-cover rounded-lg'
              loading='lazy'
            />
          </div>
        </div>
      </section>

      {/* TestBooking Section */}
      <div className='max-w-7xl mx-auto p-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {healthConditions.map((condition) => (
            <ConditionCard key={condition.id} condition={condition} />
          ))}
        </div>
        <div className='mt-8 flex justify-end'>
          <button className='bg-[#74C69D] text-white text-base font-medium px-6 py-3 rounded-full hover:bg-sky-600 focus:bg-sky-600 transition-colors duration-300'>
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestBooking;
