import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { IoCalendarOutline } from 'react-icons/io5';
import AppointmentInfoPage from './AppointmentInfoPage';

interface PatientStat {
  title: string;
  count: number;
  change: number;
  description: string;
}

interface Patient {
  id: string;
  name: string;
  date: string;
  phone: string;
  email: string;
  doctor: string;
  schedule: string;
  category: string;
  img: string;
}

const DoctorAppointment = () => {
  const [activeTab, setActiveTab] = useState<'queue' | 'urgent' | 'accepted'>(
    'queue'
  );
  const [toggleModel, setToggleModel] = useState(false);
  const [layout, setLayout] = useState<'card' | 'table'>('card'); // State to toggle layout

  const patientStats: PatientStat[] = [
    {
      title: 'All Apply Queue',
      count: 1432,
      change: 4,
      description: 'In this Month',
    },
    {
      title: 'New Patient Regular',
      count: 432,
      change: 16,
      description: 'In this Month',
    },
    {
      title: 'New Patient Member',
      count: 500,
      change: 2,
      description: 'In this Month',
    },
    {
      title: 'New Patient Appointment',
      count: 500,
      change: 5,
      description: 'In this Month',
    },
  ];

  const patientData: Record<string, Patient[]> = {
    accepted: [
      {
        id: '#98127',
        name: 'James Defoe',
        date: '5 Jan, 2023',
        phone: '+62 321 765 432 1',
        email: 'jamesdefoe@mail',
        doctor: 'Dr. Olivia Benson',
        schedule: '6 Jan, 2023 - 13:00',
        category: 'Member',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
      {
        id: '#98127',
        name: 'James Defoe',
        date: '5 Jan, 2023',
        phone: '+62 321 765 432 1',
        email: 'jamesdefoe@mail',
        doctor: 'Dr. Olivia Benson',
        schedule: '6 Jan, 2023 - 13:00',
        category: 'Member',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
      {
        id: '#98127',
        name: 'James Defoe',
        date: '5 Jan, 2023',
        phone: '+62 321 765 432 1',
        email: 'jamesdefoe@mail',
        doctor: 'Dr. Olivia Benson',
        schedule: '6 Jan, 2023 - 13:00',
        category: 'Member',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
    ],

    queue: [
      {
        id: '#66423',
        name: 'Kathryn Murphy',
        date: '12 Dec, 2023',
        phone: '+62 821 784 390 87',
        email: 'kathryn23@mail',
        doctor: 'Dr. Marvin Marverick',
        schedule: '4 Jan, 2023 - 11:30',
        category: 'Member',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
      {
        id: '#66423',
        name: 'Kathryn Murphy',
        date: '12 Dec, 2023',
        phone: '+62 821 784 390 87',
        email: 'kathryn23@mail',
        doctor: 'Dr. Marvin Marverick',
        schedule: '4 Jan, 2023 - 11:30',
        category: 'Member',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
    ],

    urgent: [
      {
        id: '#24355',
        name: 'Darrell Steward',
        date: '12 Dec, 2023',
        phone: '+62 210 498 503 4',
        email: 'darrellsteward@mail',
        doctor: 'Dr. Floyd Moukoko',
        schedule: '2 Jan, 2023 - 09:30',
        category: 'Assurance',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
      {
        id: '#24355',
        name: 'Darrell Steward',
        date: '12 Dec, 2023',
        phone: '+62 210 498 503 4',
        email: 'darrellsteward@mail',
        doctor: 'Dr. Floyd Moukoko',
        schedule: '2 Jan, 2023 - 09:30',
        category: 'Assurance',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
      {
        id: '#24355',
        name: 'Darrell Steward',
        date: '12 Dec, 2023',
        phone: '+62 210 498 503 4',
        email: 'darrellsteward@mail',
        doctor: 'Dr. Floyd Moukoko',
        schedule: '2 Jan, 2023 - 09:30',
        category: 'Assurance',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
      {
        id: '#24355',
        name: 'Darrell Steward',
        date: '12 Dec, 2023',
        phone: '+62 210 498 503 4',
        email: 'darrellsteward@mail',
        doctor: 'Dr. Floyd Moukoko',
        schedule: '2 Jan, 2023 - 09:30',
        category: 'Assurance',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      },
    ],
  };

  const handleTabChange = (tab: 'queue' | 'urgent' | 'accepted') => {
    setActiveTab(tab);
  };

  const handleToggleModel = () => {
    setToggleModel(!toggleModel);
  };

  const toggleLayout = () => {
    setLayout(layout === 'card' ? 'table' : 'card'); // Toggle layout state
  };

  return (
    <div className='flex flex-col items-center justify-center p-4 w-full h-full gap-5'>
      {/* Header */}
      <div className='w-full flex items-center justify-between p-4'>
        <h1 className='font-semibold text-3xl text-gray-700'>
          Approval New Patient
        </h1>
        <button className='flex items-center gap-4 p-2 bg-white text-text-light text-xl rounded-lg'>
          <IoCalendarOutline className='text-gray-800 ' />
          January
          <div className='flex items-center'>
            {' '}
            <FaChevronLeft className='text-gray-800' />
            <FaChevronRight className='text-gray-800' />
          </div>
        </button>
      </div>

      {/* Layout Toggle Button */}
      <div className='flex justify-between w-full px-4'>
        <button
          onClick={toggleLayout}
          className='bg-blue-500 text-white rounded-md px-4 py-2'>
          {layout === 'card' ? 'Switch to Table View' : 'Switch to Card View'}
        </button>
      </div>

      {/* Stats */}
      <div className='flex w-full items-center justify-between px-4'>
        {patientStats.map((stat, index) => (
          <div
            key={index}
            className='bg-white shadow rounded-md p-4 w-[20rem] flex flex-col items-start h-[8rem]'>
            <h3 className='text-sm text-gray-600 font-medium'>{stat.title}</h3>
            <h2 className='text-2xl font-bold text-gray-500'>
              {stat.count} Patient
            </h2>
            <div className='flex items-center gap-1 text-sm'>
              <p className='bg-gray-200 text-bacground-light font-semibold text-lg py-1 px-2 rounded-lg'>
                + {stat.change}
              </p>
              <p className='text-bacground-light font-semibold text-md'>
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className='w-full flex gap-4 border-b-2 mb-4 px-4'>
        {Object.keys(patientData).map((tab) => (
          <button
            key={tab}
            onClick={() =>
              handleTabChange(tab as 'queue' | 'urgent' | 'accepted')
            }
            className={`py-2 px-4 border-b-2 ${
              activeTab === tab
                ? 'border-text-light text-text-light'
                : 'border-transparent text-gray-500'
            }`}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Patient Data */}
      {layout === 'card' ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4'>
          {patientData[activeTab].map((patient, index) => (
            <div
              key={index}
              className='bg-white shadow rounded-md p-4 flex flex-col items-start justify-center gap-4'>
              <div className='flex items-center justify-between w-full border-b-2 border-text-light p-2'>
                <p className='text-sm text-gray-600'>
                  <strong>ID:</strong> {patient.id}
                </p>
                <p className='text-sm text-gray-600'>{patient.category}</p>
              </div>

              <div className='flex items-center justify-between w-full '>
                <div className='flex items-center justify-center gap-2'>
                  <img
                    src={patient.img}
                    alt={patient.name}
                    className='w-10 h-10 rounded-full'
                  />
                  <div className='flex flex-col items-left justify-center'>
                    <h3 className='text-sm font-bold text-gray-500 '>
                      Patient name
                    </h3>
                    <h3 className='text-sm font-bold text-gray-800 '>
                      {patient.name}
                    </h3>
                  </div>
                </div>
                <p className='text-sm text-gray-600'>
                  <strong>Schedule:</strong> {patient.schedule}
                </p>
              </div>
              <div className='flex items-center justify-between w-full '>
                <p className='text-sm text-gray-600'>
                  <strong>Phone:</strong> {patient.phone}
                </p>
                <p className='text-sm text-gray-600'>
                  <strong>Email:</strong> {patient.email}
                </p>
              </div>
              <h1
                onClick={() => handleToggleModel()}
                className='text-text-light underline cursor-pointer'>
                View Details
              </h1>
              <div className='mt-4 flex justify-between w-full'>
                <button className='text-text-light border border-text-light rounded px-4 py-2'>
                  Decline
                </button>
                <button className='text-white bg-bacground-light rounded px-4 py-2'>
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full px-4'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='py-2 px-4 border-b'>ID</th>
                <th className='py-2 px-4 border-b'>Name</th>
                <th className='py-2 px-4 border-b'>Doctor</th>
                <th className='py-2 px-4 border-b'>Schedule</th>
                <th className='py-2 px-4 border-b'>Phone</th>
                <th className='py-2 px-4 border-b'>Email</th>
                <th className='py-2 px-4 border-b'>Action</th>
              </tr>
            </thead>
            <tbody>
              {patientData[activeTab].map((patient, index) => (
                <tr key={index}>
                  <td className='py-2 px-4 border-b'>{patient.id}</td>
                  <td className='py-2 px-4 border-b'>{patient.name}</td>
                  <td className='py-2 px-4 border-b'>{patient.doctor}</td>
                  <td className='py-2 px-4 border-b'>{patient.schedule}</td>
                  <td className='py-2 px-4 border-b'>{patient.phone}</td>
                  <td className='py-2 px-4 border-b'>{patient.email}</td>
                  <td className='py-2 px-4 border-b'>
                    <button
                      onClick={() => handleToggleModel()}
                      className='text-text-light underline'>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for Viewing Details */}
      {toggleModel && (
        <AppointmentInfoPage handleToggleModel={handleToggleModel} />
      )}
    </div>
  );
};

export default DoctorAppointment;
