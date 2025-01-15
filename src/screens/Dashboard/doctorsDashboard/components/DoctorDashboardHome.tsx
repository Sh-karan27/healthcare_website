import DashboardAppointment from '@/screens/Dashboard/doctorsDashboard/DoctorDashboardAppointment';
import DashboardGraph from '@/screens/Dashboard/doctorsDashboard/DoctorDashboardGraph';
import DashboardInfoBar from '@/screens/Dashboard/doctorsDashboard/DoctorDashboardInfoBar';

const DoctorDashboardHome = () => {
  return (
    <div className=' flex flex-col items-center justify-center  w-full h-full p-4 gap-10'>
      <DashboardInfoBar />
      <DashboardGraph />
      <DashboardAppointment />
    </div>
  );
};

export default DoctorDashboardHome;
