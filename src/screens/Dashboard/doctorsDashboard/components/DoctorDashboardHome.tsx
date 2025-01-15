import DashboardAppointment from '@/screens/Dashboard/doctorsDashboard/DoctorDashboardAppointment';
import DashboardGraph from '@/screens/Dashboard/doctorsDashboard/DoctorDashboardGraph';
import DashboardInfoBar from '@/screens/Dashboard/doctorsDashboard/DoctorDashboardInfoBar';

const DoctorDashboardHome = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-4 gap-6 md:gap-8 lg:gap-10'>
      {/* Info Bar */}
      <div className='w-full max-w-5xl'>
        <DashboardInfoBar />
      </div>

      {/* Graph Section */}
      <div className='w-full max-w-5xl'>
        <DashboardGraph />
      </div>

      {/* Appointment Section */}
      <div className='w-full max-w-5xl'>
        <DashboardAppointment />
      </div>
    </div>
  );
};

export default DoctorDashboardHome;
