import PatientSidebar from '@/screens/Dashboard/patientDashboard/PatientSidebar';
import PatientHomePage from '@/components/PatientHomePage';
import { useState } from 'react';
import PatientDashboardAppointments from './PatientDashboardAppointments';
import PatientDashboardMedication from './PatientDashboardMedication';
import PatientDashboardDoctor from './PatientDashboardDoctor';
import SensorData from './SensorData';
import PatientDashboardAnalysis from './PatientDashboardHistory';
import PatientPrescription from './PatientPrescription';
import PatientLabreport from './PatientLabreport';
import PatientDashboardHistory from './PatientDashboardHistory';

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
      case 'sensor data':
        return <SensorData />;
      default:
        return <h1>Welcome to the Dashboard</h1>;
    }
  };
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-50'>
      {/* Sidebar */}
      <PatientSidebar
        activeComponent={activeComponent} // Pass the active component
        setActiveComponent={setActiveComponent}
      />
      <div className='lg:flex-1 p-4 w-full h-full'>{renderComponent()}</div>
    </div>
  );
};

export default PatientDashboard;
