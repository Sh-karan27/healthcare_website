import React from 'react';
import SelectTest from '../components/SelectTest';
import Cardiac from '../components/Cardiac';
import Anatomy from '../components/Anatomy';
import EyeCheckup from '@/components/EyeCheckup';

const BookingTest = () => {
  return (
    <div className='flex flex-col items-center justify-evenly min-h-screen w-full'>
      <SelectTest />
      <Anatomy />
      <EyeCheckup />
      <Cardiac />
    </div>
  );
};

export default BookingTest;
