import PatientHomePage from '@/screens/Dashboard/patientDashboard/PatientHomePage';
import { useState } from 'react';
import PatientDashboardAppointments from './PatientDashboardAppointments';
import PatientDashboardDoctor from './PatientDashboardDoctor';
import PatientPrescription from './PatientPrescription';
import PatientLabreport from './PatientLabreport';
import PatientDashboardHistory from './PatientDashboardHistory';
import Sidebar from '../Sidebar';
import { patientMenuItems } from '@/data/patient_dashboard';

const PatientDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <PatientHomePage />;
      case 'appointments':
        return <PatientDashboardAppointments />;
      case 'history':
        return <PatientDashboardHistory />;
      case 'doctors':
        return <PatientDashboardDoctor />;
      case 'prescription':
        return <PatientPrescription />;
      case 'lab-report':
        return <PatientLabreport />;

      default:
        return <h1>Welcome to the Dashboard</h1>;
    }
  };
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-50'>
      {/* Sidebar */}
      <Sidebar
        activeComponent={activeComponent} // Pass the active component
        setActiveComponent={setActiveComponent}
        navItems={patientMenuItems}
      />
      <div className='lg:flex-1 p-4 w-full h-full'>{renderComponent()}</div>
    </div>
  );
};

export default PatientDashboard;
