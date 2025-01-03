import React from 'react';
import {
  FaTh,
  FaCalendarCheck,
  FaUserMd,
  FaUsers,
  FaShoppingCart,
  FaBlog,
  FaSignOutAlt,
  FaBriefcase,
} from 'react-icons/fa';
const DashboardSidebar = () => {
  return (
    <div className='w-full h-full bg-white p-6 shadow-lg flex flex-col justify-between lg:h-screen'>
      {/* Logo Section */}
      <div className='mt-16'>
        <div className='flex items-center gap-2 mb-8'>
          <div className='text-blue-500 text-3xl font-bold'>Q</div>
          <span className='text-gray-800 font-semibold text-lg'>Quedrok</span>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className='space-y-4'>
            {[
              { icon: FaTh, label: 'Dashboard' },
              { icon: FaCalendarCheck, label: 'Appointment' },
              { icon: FaUserMd, label: 'Doctors' },
              { icon: FaUsers, label: 'Patients' },
              { icon: FaShoppingCart, label: 'Pharmacy' },
              { icon: FaBlog, label: 'Blogs' },
              { icon: FaSignOutAlt, label: 'Logout' },
            ].map((item, idx) => (
              <li
                key={idx}
                className='flex items-center gap-4 text-gray-600 hover:text-blue-500'>
                <item.icon className='text-lg' />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Appointment Section */}
      <div className='bg-blue-100 rounded-lg p-4 text-center'>
        <div className='flex justify-center mb-4'>
          <FaBriefcase className='text-blue-500 text-3xl' />
        </div>
        <h3 className='text-blue-600 font-bold mb-2'>Appointment</h3>
        <p className='text-sm text-gray-500 mb-4'>
          Would you like to make a new appointment?
        </p>
        <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'>
          Book An App
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
