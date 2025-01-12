import PatientHistoryTimeline from '@/components/ui/PatientHistoryTimeline';
import React from 'react';

const PatientDashboardHistory = () => {
  return (
    <div className='flex flex-col items-center justify-center   p-4  h-full mt-14'>
      <div className='  w-full   h-full'>
        <div className='flex gap-4'>
          {/* Patient Details */}
          <div className=' flex flex-col items-start'>
            <div className='text-center mb-4'>
              <img
                src='https://plus.unsplash.com/premium_photo-1664476459351-59625a0fef11?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Patient'
                className='rounded-full mx-auto w-28 h-28 object-cover border'
              />
            </div>
            <h2 className='text-3xl font-semibold mt-2 text-bacground-light'>
              Ellen Ross
            </h2>
            <div className='mb-6'>
              <h3 className='text-bacground text-bacground-light text-xl font-semibold'>
                Details:
              </h3>
              <ul className='text-md mt-2 text-gray-500'>
                <li>
                  <strong>Age:</strong> 100
                </li>
                <li>
                  <strong>Birthday:</strong> 10/09/1914
                </li>
                <li>
                  <strong>Weight:</strong> 65 kg
                </li>
                <li>
                  <strong>Height:</strong> 100 cm
                </li>
                <li>
                  <strong>Gender:</strong> Female
                </li>
                <li>
                  <strong>Guardian:</strong> Jonathan Ross
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-bacground-light font-semibold'>Allergies</h3>
              <ul className='text-sm mt-2 text-gray-500'>
                <li>
                  <strong>Penicillin:</strong> Hives (Moderate to severe)
                </li>
                <li>
                  <strong>Codeine:</strong> Shortness of Breath (Moderate to
                  severe)
                </li>
                <li>
                  <strong>Bee Stings:</strong> Anaphylactic Shock (Moderate to
                  severe)
                </li>
              </ul>
            </div>
          </div>

          {/* History Timeline */}
          <div className='w-2/3'>
            <div className='mb-6'>
              <h3 className='text-3xl text-gray-500 font-bold mb-4'>History</h3>
              <div className='flex items-center justify-between'>
                <div className='flex gap-2'>
                  <button className='text-white bg-bacground-light p-2 rounded-md'>
                    By Date
                  </button>
                  <button className='text-white bg-bacground-light p-2 rounded-md'>
                    By Condition
                  </button>
                  <button className='text-white bg-bacground-light p-2 rounded-md'>
                    By Type
                  </button>
                </div>
                <div>
                  <input
                    type='date'
                    className='border text-white bg-text-light rounded-md p-1 text-sm mr-2'
                    defaultValue='2012-01-13'
                  />
                  <input
                    type='date'
                    className='border text-white bg-text-light rounded-md p-1 text-sm'
                    defaultValue='2014-01-13'
                  />
                </div>
              </div>
            </div>

            <div className='border-t pt-4'>
              <div className='mb-6'>
                <button className='bg-bacground-light text-white px-4 py-2 rounded-md text-sm'>
                  View Annual Progress Report
                </button>
              </div>

              <PatientHistoryTimeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboardHistory;
