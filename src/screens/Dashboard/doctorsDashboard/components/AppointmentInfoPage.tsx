import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { IoPhonePortrait } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
const AppointmentInfoPage = ({ handleToggleModel }) => {
  return (
    <div className='p-6  flex w-full h-full justify-center items-left gap-2 fixed inset-0 bg-black bg-opacity-25 z-50 '>
      <IoCloseCircleOutline
        onClick={() => handleToggleModel()}
        className='text-white text-5xl hover:text-text-light cursor-pointer'
      />
      <div className=' rounded-lg bg-white flex flex-col  p-4 justify-evenly w-1/2  gap-3'>
        {/* Header Section */}
        <div className=' p-4 border-2 border-text-light rounded-lg'>
          <div className='flex items-center '>
            <img
              src='https://plus.unsplash.com/premium_photo-1661685719955-0c8dae8ebad1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Profile'
              className='w-16 h-16 rounded-full mr-4'
            />
            <div className='text-bacground-light'>
              <h2 className='text-xl font-semibold'>Jerome Bellingham</h2>
              <p className='text-gray-500 flex items-center gap-1'>
                <MdEmail /> jeromebellingham93@mail.com
              </p>
              <p className='text-gray-500 flex items-center gap-1'>
                <IoPhonePortrait /> +62 837 356 343 23
              </p>
            </div>
          </div>

          {/* Reason Section */}
          <div className='mb-6'>
            <h3 className='text-lg f mb-2 text-text-light  font-semibold'>
              Reason
            </h3>
            <p className='text-gray-500 font-semibold bg-gray-100 p-4 rounded-lg'>
              Eating sweet foods, not brushing your teeth regularly, often drink
              cold water when eating food that is still hot.
            </p>
          </div>

          {/* Diagnosis and Pharmacy */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
            <div>
              <h3 className='text-lg  mb-2 text-text-light font-semibold'>
                Diagnosis
              </h3>
              <p className='text-gray-500 font-semibold'>
                Cavities, Exposed nerves causing pain, Tartar teeth
              </p>
            </div>
            <div>
              <h3 className='text-lg mb-2 text-text-light font-semibold'>
                Preferred Pharmacy
              </h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Cataflam 50 mg',
                  'Ponstan 500 mg',
                  'Mefinal 500 mg',
                  'Ibuprofen 400 mg',
                ].map((med, idx) => (
                  <span
                    key={idx}
                    className='bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm'>
                    {med}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Booking Information */}
        <div className='flex flex-col items-left justify-center w-full'>
          <h3 className='text-lg font-medium mb-2 text-gray-500'>
            Booking Information
          </h3>

          <div className='flex justify-between items-center border-2 border-text-light p-4 rounded-lg'>
            <div className='flex flex-col text-gray-500'>
              <h1>Date:</h1>
              <div>
                <h1>Thursday,12 November</h1>
                <h1>9:00AM - 10:00AM</h1>
              </div>
            </div>
            <div className='flex flex-col text-gray-500'>
              <h1>Appointment Type:</h1>
              <button className='flex items-center border p-2 rounded-lg text-blue-950 border-blue-950 font-semibold'>
                <FaWhatsapp className='text-green-500 text-xl' /> Chat WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Planning Schedule */}
        <div className=' text-gray-500'>
          <h3 className='text-lg font-medium mb-4'>Planning Schedule</h3>
          <ul className='space-y-4'>
            {[
              {
                date: '12 Oct 2023, 10:30 AM',
                activity: 'Check up tooth',
                doctor: 'Drg. Dianne Rachel',
                assistant: 'Maria Kitty',
                room: 'Dental A12',
              },
              {
                date: '12 Oct 2023, 11:30 AM',
                activity: 'Prosthetic Tooth Fabrication',
                doctor: 'Drg. Dianne Rachel',
                assistant: 'Markonah Nickly',
                room: 'Laboratorium Tooth 1',
              },
            ].map((schedule, idx) => (
              <li
                key={idx}
                className='border-2 p-4 border-text-light rounded-lg  flex items-left justify-between'>
                <div className='text-md'>
                  <p className='text-gray-500 font-semibold'>
                    <span className='font-sembold'>{schedule.date}</span>
                  </p>
                  <p className='text-gray-500 font-semibold'>
                    <span className='font-sembold'>Activity:</span>{' '}
                    {schedule.activity}
                  </p>
                </div>
                <div className='text-md'>
                  <p className='text-gray-500 font-semibold'>
                    <span className='font-sembold'>Doctor:</span>{' '}
                    {schedule.doctor}
                  </p>
                  <p className='text-gray-500 font-semibold'>
                    <span className='font-sembold'>Assistant Doctor:</span>{' '}
                    {schedule.assistant}
                  </p>
                </div>
                <p className='text-gray-500 font-semibold text-md'>
                  <span className='font-sembold'>Room:</span> {schedule.room}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className=' flex justify-end gap-2'>
          <button
            onClick={() => handleToggleModel()}
            className='border-bacground-light border text-text-light px-4 py-2 rounded-lg flex gap-1 items-center '>
            <IoCloseSharp />
            Decline
          </button>
          <button
            onClick={() => handleToggleModel()}
            className='bg-bacground-light text-white px-4 py-2 rounded-lg flex gap-1 items-center'>
            <FaCheck /> Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfoPage;
