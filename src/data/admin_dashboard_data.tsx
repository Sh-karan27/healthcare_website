import { FaCalendarAlt, FaHome, FaUser } from 'react-icons/fa';
import { FaPills, FaUserDoctor } from 'react-icons/fa6';
import { LiaRupeeSignSolid } from 'react-icons/lia';

export const adminSidebarItems = [
  {
    key: 'home',
    label: 'Home',
    icon: <FaHome size={20} className='text-text-light' />,
  },
  {
    key: 'appointments',
    label: 'Appointments',
    icon: <FaCalendarAlt size={20} className='text-text-light' />,
  },
  {
    key: 'pharmacy',
    label: 'Pharmacy',
    icon: <FaPills size={20} className='text-text-light' />,
  },

  {
    key: 'patients',
    label: 'Patients',
    icon: <FaUser size={20} className='text-text-light' />,
  },
  {
    key: 'doctors',
    label: 'Doctors',
    icon: <FaUserDoctor size={20} className='text-text-light' />,
  },
  {
    key: 'salary',
    label: 'Salary',
    icon: <LiaRupeeSignSolid size={20} className='text-text-light' />,
  },
];
