import { patient_appointments } from '@/data/patient_dashboard';
import React from 'react';

const PatientPrescription = () => {
  return (
    <div className='bg-white shadow-sm rounded-lg p-6'>
      <h2 className='text-xl  text-text-light font-semibold mb-4'>
        Prescriptions
      </h2>
      <div className='overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-600'>
          <thead className='text-xs uppercase bg-gray-100 text-gray-700'>
            <tr>
              <th scope='col' className='px-4 py-2'>
                Date
              </th>
              <th scope='col' className='px-4 py-2'>
                Number
              </th>
              <th scope='col' className='px-4 py-2'>
                Prescription Type
              </th>
              <th scope='col' className='px-4 py-2'>
                Physician
              </th>
              <th scope='col' className='px-4 py-2'>
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {patient_appointments.map((item, index) => (
              <tr key={index} className='border-b'>
                <td className='px-4 py-2'>{item.date}</td>
                <td className='px-4 py-2'>{item.number}</td>
                <td className='px-4 py-2'>{item.type}</td>
                <td className='px-4 py-2'>{item.physician}</td>
                <td className='px-4 py-2 text-blue-600 hover:underline cursor-pointer'>
                  Show Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientPrescription;
