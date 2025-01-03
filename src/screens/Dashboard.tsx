import DashboardAppointment from '@/components/DashboardAppointment';
import DashboardGraph from '@/components/DashboardGraph';
import DashboardInfoBar from '@/components/DashboardInfoBar';
import DashboardSidebar from '@/components/DashboardSidebar';

const Dashboard = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-between lg:flex-row bg-gradient-to-r from-text-light to-white'>
      {/* Sidebar */}
      <div className='lg:w-[17rem] w-full bg-transparent'>
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className=' flex flex-col items-center justify-center lg:justify-center  w-full h-full p-4 gap-10'>
        <DashboardInfoBar />
        <DashboardGraph />
        <DashboardAppointment />
      </div>
    </div>
  );
};

export default Dashboard;
