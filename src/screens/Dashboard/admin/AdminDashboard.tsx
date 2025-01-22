import React, { useState } from 'react';
import AdminHome from './home/AdminHome';
import AdminAppointmentRecords from './appointment_records/AdminAppointmentRecords';
import AdminDoctorsRecords from './doctor_records/AdminDoctorsRecords';
import AdminPharmacy from './pharmacy/AdminPharmacy';
import AdminPatientRecords from './patient_records/AdminPatientRecords';
import AdminSidebar from './AdminSidebar';
import AdminSalary from './salary/AdminSalary';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('home'); // Default component

  // Function to render the component based on activeComponent
  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <AdminHome />;
      case 'appointments':
        return <AdminAppointmentRecords />;
      case 'pharmacy':
        return <AdminPharmacy />;
      case 'patients':
        return <AdminPatientRecords />;
      case 'doctors':
        return <AdminDoctorsRecords />;
      case 'salary':
        return <AdminSalary />;
      default:
        return <h1>Welcome to the Dashboard</h1>;
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-evenly lg:flex-row bg-gradient-to-l from-text-light to-white'>
      {/* Sidebar */}
      <div className='lg:w-[17rem] w-full bg-transparent'>
        <AdminSidebar
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

export default AdminDashboard;
