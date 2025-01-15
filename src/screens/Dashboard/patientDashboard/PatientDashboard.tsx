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
    <div className='w-full h-full flex flex-col lg:flex-row bg-gradient-to-l from-text-light to-white'>
      {/* Sidebar */}
      <div className='lg:w-[17rem] w-full bg-transparent lg:flex-shrink-0 fixed lg:relative h-full z-10'>
        <PatientSidebar
          activeComponent={activeComponent} // Pass the active component
          setActiveComponent={setActiveComponent}
        />
      </div>

      {/* Main Content */}
      <div className='lg:flex-1 w-full h-full lg:ml-[17rem] p-4 overflow-y-auto'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default PatientDashboard;
