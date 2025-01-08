import { dashboardInfoData } from "@/data/doctor_dashboard_data";

const DashboardInfoBar = () => {
  return (
    <div className="w-full lg:w-3/4 bg-white flex flex-wrap items-center justify-evenly h-auto p-2 rounded-md mt-16">
      {dashboardInfoData.map((item, idx) => (
        <div
          key={idx}
          className="w-full sm:w-[48%] lg:w-[10%] flex items-center gap-4 mb-4"
        >
          <div
            className={`${item.color} p-2 rounded-full flex items-center justify-center`}
          >
            <item.icon className="text-white text-md sm:text-2xl lg:text-2xl" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base lg:text-md text-gray-600 font-medium">
              {item.label}
            </h1>
            <h1 className="text-sm sm:text-base lg:text-md text-gray-800 font-semibold">
              {item.value}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardInfoBar;
