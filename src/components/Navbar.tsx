import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { FaUserDoctor } from 'react-icons/fa6';
import { LuFlaskConical } from 'react-icons/lu';
import { IoIosPeople } from 'react-icons/io';
import { FaRegIdCard } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? 'bg-bacground-light' : 'bg-transparent'
      } transition-all duration-300`}>
      <div className='flex justify-between items-center py-6 px-6 '>
        {/* logo */}
        <div>
          <h1
            className={`${
              isScrolled ? 'bg-white' : 'bg-gray-500'
            } bg-clip-text text-transparent font-bold text-xl xl:text-3xl`}>
            meddo health
          </h1>
        </div>

        {/* Hamburger icon */}
        <div className='xl:hidden'>
          <RxHamburgerMenu
            className='text-white text-3xl cursor-pointer'
            onClick={toggleSidebar}
          />
        </div>

        {/* Desktop nav items */}
        <div className='hidden xl:flex justify-center items-center gap-8 font-heading text-[15px] font-semibold text-white'>
          <NavLink
            to='/appointment'
            className={`cursor-pointer relative group text-lg ${
              isScrolled ? 'text-white' : 'text-gray-500'
            }`}>
            Appointment
            <span
              className={`absolute left-0 bottom-[-2px] w-0 h-[2px] ${
                isScrolled ? 'bg-white' : 'bg-gray-500'
              } transition-all duration-300 group-hover:w-full `}></span>
          </NavLink>
          <NavLink
            to='/test'
            className={`cursor-pointer relative group text-lg ${
              isScrolled ? 'text-white' : 'text-gray-500'
            }`}>
            Test
            <span
              className={`absolute left-0 bottom-[-2px] w-0 h-[2px] ${
                isScrolled ? 'bg-white' : 'bg-gray-500'
              } transition-all duration-300 group-hover:w-full `}></span>
          </NavLink>
          <NavLink
            to='/dashboard'
            className={`cursor-pointer relative group text-lg ${
              isScrolled ? 'text-white' : 'text-gray-500'
            }`}>
            Create ABHA
            <span
              className={`absolute left-0 bottom-[-2px] w-0 h-[2px] ${
                isScrolled ? 'bg-white' : 'bg-gray-500'
              } transition-all duration-300 group-hover:w-full `}></span>
          </NavLink>
          <NavLink
            to='/'
            className={`cursor-pointer relative group text-lg ${
              isScrolled ? 'text-white' : 'text-gray-500'
            }`}>
            My Care
            <span
              className={`absolute left-0 bottom-[-2px] w-0 h-[2px] ${
                isScrolled ? 'bg-white' : 'bg-gray-500'
              } transition-all duration-300 group-hover:w-full `}></span>
          </NavLink>
        </div>

        {/* Desktop nav buttons */}
        <div className='hidden xl:flex justify-between items-center gap-8'>
          <button
            className={`
              font-semibold px-4 py-2 rounded-lg text-[18px] font-heading tracking-wider 
              transition-all duration-200 
              ${
                isScrolled
                  ? 'bg-white text-text-light hover:text-gray-700'
                  : 'bg-gray-500 text-white hover:bg-heading-light-normal_heading'
              }
            `}>
            Download App
          </button>

          <button
            className={` border ${
              isScrolled
                ? 'border-white text-white'
                : 'text-white border-gray-500 bg-gray-500'
            } px-4 py-2 rounded-lg  text-[18px] font-semibold font-heading tracking-wider`}>
            Sign In
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-heading-dark-section_heading p-6 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out xl:hidden`}>
        <div className='flex justify-between items-center'>
          <h1 className='bg-gray-300 bg-clip-text text-transparent font-bold text-3xl lg:text-4xl'>
            meddo health
          </h1>
          <IoClose
            className='text-white text-3xl cursor-pointer'
            onClick={toggleSidebar}
          />
        </div>

        {/* Sidebar content */}
        <div className='flex flex-col items-start mt-8 space-y-4 font-heading text-[15px] font-semibold text-white'>
          <div className='cursor-pointer flex items-center gap-4'>
            <FaUserDoctor className='text-white text-xl' />
            <span>Book a Doctor</span>
          </div>
          <div className='cursor-pointer flex items-center gap-4'>
            <LuFlaskConical className='text-white text-xl' />
            <span>Explore Services</span>
          </div>
          <div className='cursor-pointer flex items-center gap-4'>
            <IoIosPeople className='text-white text-xl' />
            <span>Create ABHA</span>
          </div>
          <div className='cursor-pointer flex items-center gap-4'>
            <FaRegIdCard className='text-light text-xl' />
            <span>My Care</span>
          </div>

          <button className='bg-text-light text-white font-semibold px-4 py-2 rounded-lg text-[18px] font-heading tracking-wider hover:bg-heading-light-normal_heading transition-all duration-200 mt-6'>
            Download App
          </button>
          <button className='bg-transparent border border-white px-4 py-2 rounded-lg text-white text-[18px] font-semibold font-heading tracking-wider mt-4'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
