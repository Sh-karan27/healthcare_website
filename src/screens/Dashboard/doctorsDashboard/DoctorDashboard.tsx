import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import DoctorAppointment from './DoctorAppointment';
import DoctorPatient from './DoctorPatient';
import DoctorDashboardHome from './DoctorDashboardHome';
import DoctorInbox from './DoctorInbox';
import { menuItems } from '@/data/doctor_dashboard_data';
import DoctorPrescription from './DoctorPrescription';

const DoctorDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('home'); // Default component

  // Function to render the component based on activeComponent
  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <DoctorDashboardHome />;
      case 'appointments':
        return <DoctorAppointment />;
      case 'prescription':
        return <DoctorPrescription />;
      case 'patients':
        return <DoctorPatient />;
      case 'inbox':
        return <DoctorInbox />;
      default:
        return <h1>Welcome to the Dashboard</h1>;
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-evenly lg:flex-row bg-gradient-to-l from-text-light to-white'>
      {/* Sidebar */}
      <div className='lg:w-[17rem] w-full bg-transparent'>
        <Sidebar
          activeComponent={activeComponent} // Pass the active component
          setActiveComponent={setActiveComponent}
          navItems={menuItems}
        />
      </div>

      {/* Main Content */}
      <div className='lg:flex-1 p-4 h-full w-full mt-20'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default DoctorDashboard;
