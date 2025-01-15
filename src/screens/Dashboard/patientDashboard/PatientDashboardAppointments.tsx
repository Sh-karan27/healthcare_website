import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import dayjs from 'dayjs';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { FaList } from 'react-icons/fa6';

const PatientDashboardAppointments = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const currentYear = currentDate.year();
  const currentMonth = currentDate.month();

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = currentDate.startOf('month').day();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  const emptyStartDays = Array.from({ length: firstDayOfMonth }, () => null);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const monthName = currentDate.format('MMMM');

  return (
    <div className='p-6 rounded-lg flex flex-col items-center justify-center gap-5 w-full h-full mt-14'>
      {/* Header with Appointments and Search */}
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-3xl font-bold text-gray-700'>Appointments</h2>
        <button className='bg-bacground-light text-white px-4 py-2 rounded-md hover:bg-text-light'>
          + New Appointment
        </button>
      </div>

      <div className='w-full flex justify-between items-center'>
        <h2 className='text-lg font-bold text-gray-600 flex items-center gap-2 '>
          <FaCalendarAlt className='text-bacground-light ' /> All Appointments
        </h2>
        <div className='flex items-center gap-4'>
          <input
            type='text'
            placeholder='Search anything here'
            className='border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-bacground-light'
          />
          <div className='flex items-center gap-2'>
            <button className='border px-3 py-2 rounded-md text-gray-600 font-semibold'>
              Week
            </button>
            <div className='border flex gap-2 p-2 rounded-lg '>
              <FaCalendarAlt className='text-text-light text-xl cursor-pointer ' />
              <FaList className='text-gray-600 text-xl cursor-pointer' />
            </div>
          </div>
        </div>
      </div>

      {/* Month Navigation and Calendar Header */}
      <div className='flex justify-start w-full'>
        <div className='flex items-center justify-center gap-2'>
          <button
            onClick={handlePrevMonth}
            className='text-xl rounded-md border p-1 text-gray-600'>
            <IoIosArrowBack />
          </button>
          <h3 className='text-lg font-semibold text-gray-600 '>
            {monthName} {currentYear}
          </h3>
          <button
            onClick={handleNextMonth}
            className='text-xl rounded-md border p-1 text-gray-600'>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Fixed Height Calendar */}
      <div className='w-full h-full flex flex-col gap-2'>
        {/* Calendar Header */}
        <div className='grid grid-cols-7 gap-1 text-center w-full text-bacground-light'>
          <div className='font-semibold'>Sun</div>
          <div className='font-semibold'>Mon</div>
          <div className='font-semibold'>Tue</div>
          <div className='font-semibold'>Wed</div>
          <div className='font-semibold'>Thu</div>
          <div className='font-semibold'>Fri</div>
          <div className='font-semibold'>Sat</div>
        </div>

        {/* Calendar Days */}
        <div className='grid grid-cols-7 gap-1 w-full h-[42rem]'>
          {/* Empty Days */}
          {emptyStartDays.map((_, index) => (
            <div key={`empty-${index}`} className='h-[7rem]'></div>
          ))}

          {/* Days of the Month */}
          {daysArray.map((day) => (
            <div
              key={day}
              className='h-[7rem] text-gray-700 border flex p-2 justify-end relative bg-gray-100 hover:bg-blue-50 cursor-pointer'>
              {day}

              {/* Example: Adding an appointment on specific dates */}
              {day === 3 && (
                <div className='absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>
                  10:00 AM - 11:00 AM
                </div>
              )}

              {day === 17 && (
                <div className='absolute bottom-2 left-2 bg-bacground-light text-white text-xs px-2 py-1 rounded-md'>
                  1:00 PM - 2:00 PM
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboardAppointments;
