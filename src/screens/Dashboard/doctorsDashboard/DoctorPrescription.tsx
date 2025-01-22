import React from 'react';
import { FaLock } from 'react-icons/fa';
const DoctorPrescription = () => {
  return (
    <div className='p-6 min-h-screen'>
      <div className='text-3xl font-semibold mb-4 text-gray-600'>Hi Kevin</div>
      <div className='text-gray-600 text-sm mb-6'>
        You have{' '}
        <span className='text-text-light bg-gray-200 font-bold p-1 rounded-lg'>
          12 patients
        </span>{' '}
        requesting prescription refills and{' '}
        <span className='text-text-light bg-gray-200 font-bold p-1 rounded-lg'>
          4 messages
        </span>
      </div>

      {/* Overview Section */}
      <div className='grid grid-cols-3 gap-6 mb-8'>
        <div className='p-4 bg-white shadow rounded-md'>
          <div className='text-2xl font-semibold flex items-center'>
            86 <span className='text-green-500 text-sm ml-2'>+11</span>
          </div>
          <div className='text-gray-600 mt-1'>Prescriptions this month</div>
          <div className='text-red-500 text-sm'>3 Controlled</div>
        </div>

        <div className='p-4 bg-white shadow rounded-md'>
          <div className='text-2xl font-semibold flex items-center'>
            24 <span className='text-green-500 text-sm ml-2'>+34</span>
          </div>
          <div className='text-gray-600 mt-1'>Patients requesting refills</div>
        </div>

        <div className='p-4 bg-white shadow rounded-md'>
          <div className='text-2xl font-semibold flex items-center'>
            11 <span className='text-green-500 text-sm ml-2'>+5</span>
          </div>
          <div className='text-gray-600 mt-1'>New patient requests</div>
          <div className='text-purple-500 text-sm'>Schedule</div>
        </div>
      </div>

      {/* Prescription Status Section */}
      <div className='flex justify-center gap-5 items-start w-full'>
        <div className='mb-8 w-3/4'>
          <div className=' font-semibold mb-4 text-gray-600 text-xl'>
            Prescription Status
          </div>
          <div className='bg-white shadow rounded-md p-4'>
            {[
              'Diazepam (Valium)',
              'Abacavir sulfate (Ziagen)',
              'Morphine sulfate (Oramorph)',
              'Tazarotene (Fabior)',
            ].map((med, index) => (
              <div
                key={index}
                className='flex justify-between items-center border-b last:border-b-0 py-4'>
                {/* Left Section */}
                <div className='flex-1'>
                  <div className='font-semibold text-gray-600 text-lg flex items-center gap-2'>
                    {med} <FaLock className='text-bacground-light font-bold' />
                  </div>
                  <div className='text-sm text-text-light font-semibold '>
                    Last prescribed 04 Jan, 2020
                  </div>
                </div>

                {/* Center Section */}
                <div className='flex-1 text-center'>
                  <div className='font-semibold text-gray-500'>
                    11 Active Prescriptions
                  </div>
                </div>

                {/* Right Section */}
                <div className='flex-1 text-right'>
                  <div className='text-sm text-gray-500'>0 Refill Requests</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className=' font-semibold mb-4 text-gray-600 text-xl'>
            Upcoming
          </div>
          <div className='bg-white shadow rounded-md p-4'>
            <div className='flex flex-col justify-between items-left border-b last:border-b-0 py-4 gap-2'>
              <button className='text-text-light border-text-light border rounded-md p-1'>
                CONSULT
              </button>
              <div className='font-semibold text-gray-600 text-xl'>
                Damien Lewis - Standard Consult
              </div>
              <div className='flex items-center gap-4 border px-1 py-2 rounded-md'>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww'
                  alt=''
                  className='w-10 h-10 rounded-full'
                />
                <div>
                  <h1 className='font-semibold text-text-light'>
                    Damien Lewis
                  </h1>
                  <h1 className='text-md text-gray-500'>(61) 435755567</h1>
                </div>
              </div>
              <div className='text-sm text-gray-500'>10:30am - 11:00am</div>

              <div className='flex items-center justify-between'>
                <button className='text-text-light border border-text-light rounded-md px-4 py-2 mr-2'>
                  Edit Consult
                </button>
                <button className='bg-text-light text-white rounded-md px-4 py-2'>
                  Start Consult
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPrescription;
