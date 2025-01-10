import { BsClipboardData, BsGraphUpArrow } from 'react-icons/bs';
import { FaCalendarAlt, FaHome } from 'react-icons/fa';
import { FaPills, FaUserDoctor } from 'react-icons/fa6';
import { TbTestPipe } from 'react-icons/tb';

export const patient_appointments = [
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
];

export const patientMenuItems = [
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
    key: 'analysis',
    label: 'Analysis',
    icon: <BsGraphUpArrow size={20} className='text-text-light' />,
  },
  {
    key: 'doctors',
    label: 'Doctors',
    icon: <FaUserDoctor size={20} className='text-text-light' />,
  },
  {
    key: 'sensor data',
    label: 'Sensor Data',
    icon: <BsClipboardData size={20} className='text-text-light' />,
  },
  {
    key: 'prescription',
    label: 'Prescription',
    icon: <FaPills size={20} className='text-text-light' />,
  },
  {
    key: 'lab-report',
    label: 'Lab Reports',
    icon: <TbTestPipe size={20} className='text-text-light' />,
  },
];
