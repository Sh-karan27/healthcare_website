import { appointmentData } from '@/data/appointment_data'; // Adjust the path as per your file structure
import { CiCircleCheck } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { FcCancel } from 'react-icons/fc';

const DashboardAppointment = () => {
  return (
    <div className='flex flex-col lg:flex-row flex-wrap items-start justify-evenly gap-6 w-full h-auto p-4'>
      {/* Box 1: Upcoming Appointments */}
      <div className='w-full hidden  lg:w-[60%] bg-white rounded-lg shadow-lg p-6 md:flex flex-col'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6 border-b pb-2'>
          Upcoming Appointments
        </h2>
        <div className='overflow-y-auto h-[40vh] md:h-[50vh]'>
          <table className='table-auto w-full'>
            <thead>
              <tr className='border-b bg-gray-100'>
                <th className='px-4 py-3 text-left text-gray-600 font-medium'>
                  Name
                </th>
                <th className='px-4 py-3 text-left text-gray-600 font-medium'>
                  Date
                </th>
                <th className='px-4 py-3 text-left text-gray-600 font-medium'>
                  Time
                </th>
                <th className='px-4 py-3 text-center text-gray-600 font-medium'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment, index) => (
                <tr
                  key={index}
                  className='hover:bg-gray-50 transition-colors border-b'>
                  <td className='px-4 py-3 text-gray-700'>
                    {appointment.name}
                  </td>
                  <td className='px-4 py-3 text-gray-700'>
                    {appointment.Date}
                  </td>
                  <td className='px-4 py-3 text-gray-700'>
                    {appointment.Time}
                  </td>
                  <td className='flex items-center justify-center px-4 py-3 gap-3'>
                    <button
                      className='text-green-600 hover:bg-green-50 p-2 rounded-full text-xl'
                      title='Approve'>
                      <CiCircleCheck />
                    </button>
                    <button
                      className='text-red-600 hover:bg-red-50 p-2 rounded-full text-xl'
                      title='Reject'>
                      <FcCancel />
                    </button>
                    <button
                      className='text-blue-600 hover:bg-blue-50 p-2 rounded-full text-xl'
                      title='View'>
                      <IoEyeOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Box 2: Appointment Statistics */}
      <div className='w-full lg:w-[35%] h-auto bg-white rounded-lg shadow-lg p-4 flex flex-col'>
        <h2 className='text-lg font-bold text-gray-700 mb-4'>
          Appointment Statistics
        </h2>
        <ul className='flex flex-col gap-4'>
          <li className='flex justify-between'>
            <span className='font-medium'>Total Appointments:</span>
            <span className='font-bold text-gray-600'>
              {appointmentData.length}
            </span>
          </li>
          <li className='flex justify-between'>
            <span className='font-medium'>Approved:</span>
            <span className='font-bold text-green-500'>12</span>
          </li>
          <li className='flex justify-between'>
            <span className='font-medium'>Rejected:</span>
            <span className='font-bold text-red-500'>3</span>
          </li>
          <li className='flex justify-between'>
            <span className='font-medium'>Pending:</span>
            <span className='font-bold text-yellow-500'>5</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardAppointment;
