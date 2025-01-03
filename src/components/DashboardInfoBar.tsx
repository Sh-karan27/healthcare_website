import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { FaBriefcase, FaCarSide } from 'react-icons/fa6';
import { GoGraph } from 'react-icons/go';
import { IoPersonSharp } from 'react-icons/io5';

const DashboardInfoBar = () => {
  return (
    <div className='w-full lg:w-3/4 bg-gradient-to-l from-text-light to-white  shadow-2xl flex flex-wrap items-center justify-evenly h-auto p-4 rounded-md mt-8'>
      {[
        {
          color: 'bg-red-400',
          icon: BsPeople,
          label: 'Total Patient',
          value: '2.0040',
        },
        {
          color: 'bg-orange-500',
          icon: GoGraph,
          label: 'Avg. Cost',
          value: '2.600',
        },
        {
          color: 'bg-yellow-500',
          icon: IoPersonSharp,
          label: 'Staff Member',
          value: '150',
        },
        {
          color: 'bg-blue-500',
          icon: FaBriefcase,
          label: 'Total Appointments',
          value: '255',
        },
        {
          color: 'bg-green-500',
          icon: FaCarSide,
          label: 'Total Vehicles',
          value: '50',
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className='w-[45%] lg:w-[18%] flex items-center gap-2 mb-4  '>
          <div className={`${item.color} p-2 rounded-full`}>
            <item.icon className='text-white text-3xl' />
          </div>
          <div>
            <h1 className='text-sm lg:text-base text-gray-600'>{item.label}</h1>
            <h1 className='text-sm lg:text-base text-gray-600'>{item.value}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardInfoBar;
