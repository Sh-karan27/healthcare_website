import { appointmentData } from "@/data/appointment_data"; // Adjust the path as per your file structure
import { CiCircleCheck } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";

const DashboardAppointment = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly w-full h-auto p-4">
      {/* Box 1 */}
      <div className="w-full lg:w-[50%] h-[30vh] bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Upcoming Appointments
        </h2>
        <div className="overflow-y-auto h-full">
          <table className="table-auto w-full ">
            <thead>
              <tr className="border-b  bg-bacground-light text-white">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b">
                  <td className="px-4 py-2">{appointment.name}</td>
                  <td className="px-4 py-2">{appointment.Date}</td>
                  <td className="px-4 py-2">{appointment.Time}</td>
                  <td className="flex items-center justify-center px-4 py-2">
                    <button
                      className="text-green-500 px-2 py-1 rounded text-xl"
                      title="Approve"
                    >
                      <CiCircleCheck />
                    </button>
                    <button
                      className="text-red-500 px-2 py-1 rounded text-xl"
                      title="Reject"
                    >
                      <FcCancel />
                    </button>
                    <button
                      className="text-blue-500 px-2 py-1 rounded text-xl"
                      title="View"
                    >
                      <IoEyeOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Box 2 */}
      <div className="w-full lg:w-[35%] h-[30vh] bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Appointment Statistics
        </h2>
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between">
            <span className="font-medium">Total Appointments:</span>
            <span className="font-bold text-gray-600">
              {appointmentData.length}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Approved:</span>
            <span className="font-bold text-green-500">12</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Rejected:</span>
            <span className="font-bold text-red-500">3</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Pending:</span>
            <span className="font-bold text-yellow-500">5</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardAppointment;
