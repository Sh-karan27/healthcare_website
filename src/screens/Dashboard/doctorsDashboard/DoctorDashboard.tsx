import React, { useState } from 'react';
import Sidebar from './DoctorDashboardSidebar';
import DoctorAppointment from './components/DoctorAppointment';
import DoctorPharmacy from './components/DoctorPrescription';
import DoctorPatient from './components/DoctorPatient';
import DoctorBlogs from './components/DoctorBlogs';
import DoctorDashboardHome from './components/DoctorDashboardHome';

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
      case 'blogs':
        return <DoctorBlogs />;
      default:
        return <h1>Welcome to the Dashboard</h1>;
    }
  };

  return (
    <div className='w-full h-full flex flex-col lg:flex-row bg-gradient-to-l from-text-light to-white'>
      {/* Sidebar */}
      <div className='lg:w-[17rem] w-full bg-transparent lg:flex-shrink-0 fixed h-full '>
        <Sidebar
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      </div>

      {/* Main Content */}
      <div className='flex-1 ml-7 p-4 w-full overflow-y-auto mt-5 lg:mt-0    '>
        {renderComponent()}
      </div>
    </div>
  );
};

export default DoctorDashboard;
