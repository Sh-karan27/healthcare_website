import React, { useState } from 'react';
import Sidebar from './DoctorDashboardSidebar';
import DoctorAppointment from './components/DoctorAppointment';
import DoctorPharmacy from './components/DoctorPrescription';
import DoctorPatient from './components/DoctorPatient';
import DoctorBlogs from './components/DoctorBlogs';
import DoctorDashboardHome from './components/DoctorDashboardHome';
import DoctorInbox from './DoctorInbox';

const DoctorDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('home'); // Default component

  // Function to render the component based on activeComponent
  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <DoctorDashboardHome />;
      case 'appointments':
        return <DoctorAppointment />;
      case 'pharmacy':
        return <DoctorPharmacy />;
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
