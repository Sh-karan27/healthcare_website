import React from 'react';
import SelectTest from '../components/SelectTest';
import Cardiac from '../components/Cardiac';
import Anatomy from '../components/Anatomy';

const BookingTest = () => {
  return (
    <div className='flex items-center justify-center'>
      <SelectTest />
      <Cardiac />
      <Anatomy />
    </div>
  );
};

export default BookingTest;
