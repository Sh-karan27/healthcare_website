import React, { useState } from 'react';
import { FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { BiSearch, BiBarChartAlt2 } from 'react-icons/bi';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { patientMenuItems } from '@/data/patient_dashboard';

const PatientSidebar = ({ activeComponent, setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar open/close

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col h-screen bg-gray-100 shadow-md  ${
        isOpen ? 'w-64' : 'w-16'
      } transition-all duration-300`}>
      {/* Header */}
      <div className='mt-20 flex items-center justify-between px-4 py-4 bg-text-light text-white'>
        <div className={`flex items-center ${!isOpen && 'hidden'}`}>
          <BiBarChartAlt2 size={28} className='mr-2' />
          <span className='text-lg font-bold'>e-pulse</span>
        </div>
        <button
          onClick={toggleSidebar}
          className='text-white focus:outline-none text-xl'>
          {isOpen ? <BsFillArrowLeftSquareFill /> : '☰'}
        </button>
      </div>

      {/* Search Bar */}
      <div
        className={`flex items-center px-4 py-2 bg-gray-200 ${
          !isOpen && 'hidden'
        }`}>
        <BiSearch className='text-gray-500 mr-2' />
        <input
          type='text'
          placeholder='Search'
          className='w-full bg-transparent outline-none'
        />
      </div>

      {/* Menu Items */}
      <ul className='flex-grow px-4 space-y-2 mt-10'>
        {patientMenuItems.map((item) => (
          <li
            key={item.key}
            className={`flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100 ${
              activeComponent === item.key ? 'bg-blue-100' : 'bg-transparent'
            }`}
            onClick={() => setActiveComponent(item.key)}>
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className='px-4 py-2 border-t'>
        <ul className='space-y-2'>
          <li className='flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100'>
            <FaCogs size={20} className='text-text-light' />
            {isOpen && <span>Settings</span>}
          </li>
          <li className='flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100'>
            <FaSignOutAlt size={20} className='text-text-light' />
            {isOpen && <span>Logout</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatientSidebar;
