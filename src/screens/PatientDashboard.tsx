import React from 'react';

import PatientSidebar from '@/components/PatientSidebar';
import PatientHomePage from '@/components/PatientHomePage';

const PatientDashboard = () => {
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-50'>
      {/* Sidebar */}

      <PatientSidebar />
      {/* Patient Home Page */}
      <PatientHomePage />
    </div>
  );
};

export default PatientDashboard;
