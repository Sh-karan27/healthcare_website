import React from 'react';
import { FaMessage } from 'react-icons/fa6';
import Sidebar from '@/components/SidebarPatientDashboard';
import { IoIosArrowForward } from 'react-icons/io';
import BloodPressureGraph from '@/components/BloodPressureGraph';

const PatientDashboard = () => {
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-50'>
      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}
      <div className='flex-1 p-6 lg:p-10'>
        {/* Header */}
        <div className='mb-6'>
          <h1 className='text-5xl font-semibold text-text-light'>
            Welcome, Monika
          </h1>
          <p className='text-gray-800 text-xl mt-1 flex items-center gap-2'>
            You’ve got a new message from Dr. Pawel. Do not forget to check your
            inbox. <FaMessage className='text-text-light text-2xl' />
          </p>
        </div>

        {/* Monitoring and Appointment Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          {/* Blood Pressure Monitoring */}
          <div className='bg-white '>
            <BloodPressureGraph />
          </div>

          {/* Next Appointment */}
          <div className='bg-white shadow-sm rounded-lg p-6 flex flex-col items-start gap-2'>
            <h2 className='text-xl text-text-light font-semibold  '>
              Next Appointment
            </h2>
            <p className='text-gray-500 font-medium'>Friday, 4 November</p>
            <p className='text-gray-500 text-sm'>11:30 - 12:00 (30 min)</p>
            <p className='text-text-light text-sm font-semibold'>
              Szpital Uniwersytecki Dębinki 7, 80-211 Gdańsk
            </p>
            <div className='flex items-center gap-2 '>
              <img
                src='https://plus.unsplash.com/premium_photo-1664476459351-59625a0fef11?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Monika Wróbel'
                className='w-10 h-10 rounded-full '
              />
              <div>
                <p className='text-gray-500 text-sm '>Dr. Pawel Kowalski</p>
                <p className='text-gray-500 text-sm '>Cardiologist</p>
              </div>
            </div>

            <div className='mt-4 flex gap-2'>
              <button className='px-4 py-2 text-sm font-medium text-text-light  rounded border border-text-light'>
                Reschedule
              </button>
              <button className='px-4 py-2 text-sm font-medium  border border-text-light bg-text-light text-white rounded '>
                Details
              </button>
            </div>
          </div>
        </div>

        {/* Prescriptions */}
        <div className='bg-white shadow-sm rounded-lg p-6'>
          <h2 className='text-xl  text-text-light font-semibold mb-4'>
            Prescriptions
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-600'>
              <thead className='text-xs uppercase bg-gray-100 text-gray-700'>
                <tr>
                  <th scope='col' className='px-4 py-2'>
                    Date
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    Number
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    Prescription Type
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    Physician
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: '01.08.2022',
                    number: '10EWK59',
                    type: 'NORMAL',
                    physician: 'Pawel Kowalski',
                  },
                  {
                    date: '18.06.2022',
                    number: '1IN4PLR',
                    type: 'NORMAL',
                    physician: 'Sonia Makowska',
                  },
                  {
                    date: '20.04.2022',
                    number: '1M0DHTR',
                    type: 'NORMAL',
                    physician: 'Pawel Kowalski',
                  },
                  {
                    date: '12.02.2022',
                    number: '1I09ZY0',
                    type: 'NORMAL',
                    physician: 'Natalia Lesnowska',
                  },
                  {
                    date: '18.12.2022',
                    number: '1LFCXHT',
                    type: 'NORMAL',
                    physician: 'Weronika Urbanska',
                  },
                ].map((item, index) => (
                  <tr key={index} className='border-b'>
                    <td className='px-4 py-2'>{item.date}</td>
                    <td className='px-4 py-2'>{item.number}</td>
                    <td className='px-4 py-2'>{item.type}</td>
                    <td className='px-4 py-2'>{item.physician}</td>
                    <td className='px-4 py-2 text-blue-600 hover:underline cursor-pointer'>
                      Show Details
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Profile Section */}

      <div className='bg-white shadow-sm  p-6 w-80 mx-auto h-full flex items-center justify-center'>
        <div className='flex flex-col items-center justify-evenly h-[90%]'>
          {/* User Info Section */}
          <div className='flex flex-col items-start mb-2 gap-5'>
            <img
              src='https://plus.unsplash.com/premium_photo-1664476459351-59625a0fef11?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Monika Wróbel'
              className='w-[7rem] h-[7rem] rounded-full mr-4'
            />
            <div>
              <h3 className='text-xl font-medium text-gray-700'>
                Monika Wróbel
              </h3>
              <p className='text-gray-500 text-xl'>35 years</p>
            </div>
          </div>

          {/* Health Details */}
          <div className='text-sm text-white grid grid-cols-3 gap-4 items-center '>
            <div className='bg-text-light p-1 rounded-sm'>
              <p className=' font-medium'>Blood</p>
              <p>A Rh+</p>
            </div>
            <div className='bg-text-light p-1 rounded-sm'>
              <p className=' font-medium'>Height</p>
              <p>160 cm</p>
            </div>
            <div className='bg-text-light p-1 rounded-sm'>
              <p className=' font-medium'>Weight</p>
              <p>52 kg</p>
            </div>
          </div>

          {/* Recent Visit */}
          <div className='p-4 border rounded-md border-text-light'>
            <h4 className=' text-text-light mb-1 font-semibold'>
              Dr. Pawel Kowalski
            </h4>
            <p className='text-xs text-gray-400 mb-2'>02.11.2022</p>
            <p className='text-sm text-white bg-text-light p-3 '>
              Your test results are pretty fine. But I’ll prescribe something to
              keep the condition under control.
            </p>
          </div>

          {/* Buttons */}
          <div className='space-y-4 w-[10rem] text-white'>
            <button className='w-full text-left bg-text-light p-2 rounded-lg flex items-center justify-between shadow'>
              <span>Diseases</span>
              <span className='text-white'>
                <IoIosArrowForward />
              </span>
            </button>
            <button className='w-full text-left bg-text-light p-2 rounded-lg flex items-center justify-between shadow'>
              <span>My Visits</span>
              <span className='text-white'>
                <IoIosArrowForward />
              </span>
            </button>
            <button className='w-full text-left bg-text-light p-2 rounded-lg flex items-center justify-between shadow'>
              <span>Health Monitor</span>
              <span className='text-white'>
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
