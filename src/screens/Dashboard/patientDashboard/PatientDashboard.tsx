import PatientSidebar from '@/screens/Dashboard/patientDashboard/PatientSidebar';
import PatientHomePage from '@/components/PatientHomePage';
import { useState } from 'react';
import PatientDashboardAppointments from './PatientDashboardAppointments';
import PatientDashboardMedication from './PatientDashboardMedication';
import PatientDashboardDoctor from './PatientDashboardDoctor';
import SensorData from './SensorData';
import PatientDashboardAnalysis from './PatientDashboardAnalysis';
import PatientPrescription from './PatientPrescription';
import PatientLabreport from './PatientLabreport';

const PatientDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <PatientHomePage />;
      case 'appointments':
        return <PatientDashboardAppointments />;
      case 'analysis':
        return <PatientDashboardAnalysis />;
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
      <div className='lg:flex-1 p-4 w-full h-[85%]'>{renderComponent()}</div>
    </div>
  );
};

export default PatientDashboard;
