import React from 'react';

const AdminAppointmentRecords = () => {
  const data = [
    {
      date: 'Monday, September 2nd, 2024',
      appointments: [
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        // Add other records as per the screenshot
      ],
    },
    {
      date: 'Tuesday, September 3rd, 2024',
      appointments: [
        {
          time: '9:15 AM',
          duration: '2.5h',
          clientName: 'Donald Skinner',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Root Canals',
          contact: '+1 (858) 079 7678',
          location: 'Chula Vista Office',
        },
        {
          time: '9:15 AM',
          duration: '2.5h',
          clientName: 'Donald Skinner',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Root Canals',
          contact: '+1 (858) 079 7678',
          location: 'Chula Vista Office',
        },
        {
          time: '9:15 AM',
          duration: '2.5h',
          clientName: 'Donald Skinner',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Root Canals',
          contact: '+1 (858) 079 7678',
          location: 'Chula Vista Office',
        },
        {
          time: '9:15 AM',
          duration: '2.5h',
          clientName: 'Donald Skinner',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Root Canals',
          contact: '+1 (858) 079 7678',
          location: 'Chula Vista Office',
        },
        {
          time: '9:15 AM',
          duration: '2.5h',
          clientName: 'Donald Skinner',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Root Canals',
          contact: '+1 (858) 079 7678',
          location: 'Chula Vista Office',
        },
        {
          time: '9:15 AM',
          duration: '2.5h',
          clientName: 'Donald Skinner',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Root Canals',
          contact: '+1 (858) 079 7678',
          location: 'Chula Vista Office',
        },
        // Add other records as per the screenshot
      ],
    },
    {
      date: 'Wednesday, September 4th, 2024',
      appointments: [
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        {
          time: '7:15 AM',
          duration: '2.5h',
          clientName: 'Marleigh Miles',
          dentistName: 'Dr. Brianna Ellison',
          serviceName: 'Dental Cleanings',
          contact: '+1 (619) 123 5678',
          location: 'Hillcrest Office',
        },
        // Add other records as per the screenshot
      ],
    },
  ];

  return (
    <div className='space-y-2 p-4 overflow-y-scroll h-[90%]  mt-14'>
      {data.map((day, index) => (
        <div key={index} className='space-y-2'>
          <h2 className='text-lg font-semibold text-gray-800'>{day.date}</h2>
          <table className='min-w-full table-auto border-collapse border border-gray-300 overflow-y-scroll'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Time
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Duration
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Client Name
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Dentist Name
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Service Name
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Contact
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {day.appointments.map((appointment, i) => (
                <tr key={i} className='odd:bg-white even:bg-gray-50'>
                  <td className='border border-gray-300 px-2 py-1'>
                    {appointment.time}
                  </td>
                  <td className='border border-gray-300 px-2 py-1'>
                    {appointment.duration}
                  </td>
                  <td className='border border-gray-300 px-2 py-1'>
                    {appointment.clientName}
                  </td>
                  <td className='border border-gray-300 px-2 py-1'>
                    {appointment.dentistName}
                  </td>
                  <td className='border border-gray-300 px-2 py-1'>
                    {appointment.serviceName}
                  </td>
                  <td className='border border-gray-300 px-2 py-1'>
                    {appointment.contact}
                  </td>
                  <td className='border border-gray-300 px-2 py-1'>
                    {appointment.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AdminAppointmentRecords;
