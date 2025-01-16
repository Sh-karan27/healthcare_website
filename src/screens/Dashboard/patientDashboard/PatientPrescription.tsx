import React, { useState } from 'react';
import { FaFilePrescription } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { CiCirclePlus } from 'react-icons/ci';
const PatientPrescription = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePrescriptions = [
    {
      name: 'Propanol 20mg Tab',
      expiry: '01 July 2020',
      pharmacy: 'Priceline Pharmacy Potts Point',
      dispenseDate: '12 Jan 2020',
      quantity: '35 Tabs / 30 Days',
      repeats: 3,
    },
    {
      name: 'Propanol 20mg Tab',
      expiry: '01 July 2020',
      pharmacy: 'Priceline Pharmacy Potts Point',
      dispenseDate: '12 Jan 2020',
      quantity: '35 Tabs / 30 Days',
      repeats: 3,
    },
    {
      name: 'Propanol 20mg Tab',
      expiry: '01 July 2020',
      pharmacy: 'Priceline Pharmacy Potts Point',
      dispenseDate: '12 Jan 2020',
      quantity: '35 Tabs / 30 Days',
      repeats: 3,
    },
    {
      name: 'Propanol 20mg Tab',
      expiry: '01 July 2020',
      pharmacy: 'Priceline Pharmacy Potts Point',
      dispenseDate: '12 Jan 2020',
      quantity: '35 Tabs / 30 Days',
      repeats: 3,
    },
    {
      name: 'Propanol 20mg Tab',
      expiry: '01 July 2020',
      pharmacy: 'Priceline Pharmacy Potts Point',
      dispenseDate: '12 Jan 2020',
      quantity: '35 Tabs / 30 Days',
      repeats: 3,
    },
  ];

  const previousPrescriptions = [
    {
      name: 'Simvastatin 40mg Tab',
      expiry: '22 February 2020',
      repeats: 0,
    },
    {
      name: 'Citaloptam 20mg Tab',
      expiry: '2 May 2020',
      repeats: 0,
    },
  ];

  const patientNotes = [
    {
      title: 'Irregular Heart Rhythm',
      date: '12 January 2020',
      description:
        'Patient complained about heart arrhythmia while taking prednisone. Have recommended to reduce the dosage to 5mg per day.',
    },
    {
      title: 'Patient History',
      date: '12 January 2020',
      description: 'Patients health history including previous operations.',
      file: 'Myhealthrecord.pdf',
    },
  ];

  const togglePrescription = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className='grid grid-cols-3 gap-6 p-6 w-full mt-14 h-full'>
      {/* Active Prescriptions */}
      <div className=' rounded-lg w-full overflow-y-auto'>
        <div className=' flex items-center justify-between'>
          <h2 className='text-lg font-semibold mb-4 text-bacground-light'>
            Active Prescription
          </h2>
          <CiCirclePlus className='text-bacground-light text-3xl' />
        </div>
        {activePrescriptions.map((prescription, index) => (
          <div
            key={index}
            className='rounded-lg p-2 mb-2 w-full flex flex-col items-center justify-center gap-2'>
            <div
              className='flex justify-between w-full p-2 items-start bg-white shadow-md cursor-pointer'
              onClick={() => togglePrescription(index)}>
              <div className='flex items-center justify-center'>
                <FaFilePrescription className='text-bacground-light text-4xl' />
                <h3 className='text-md font-bold text-text-light flex flex-col items-left'>
                  {prescription.name}
                  <p className='text-sm text-gray-400'>
                    Expiry Date: {prescription.expiry}
                  </p>
                </h3>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-xl text-text-light'>
                  {prescription.repeats} Rpts.
                </span>
                {activeIndex === index ? (
                  <IoIosArrowUp className='text-gray-400' />
                ) : (
                  <IoIosArrowDown className='text-gray-400' />
                )}
              </div>
            </div>

            {activeIndex === index && (
              <div className='flex justify-center w-full p-2 flex-col items-start bg-white shadow-md'>
                <div className='flex flex-col justify-center items-start gap-2 mt-2'>
                  <div className='flex flex-col items-left'>
                    <p className='text-sm text-gray-600 flex items-center'>
                      <GrLocationPin /> Pharmacy Filled:
                    </p>
                    <p className='text-sm text-gray-600'>
                      {prescription.pharmacy}
                    </p>
                  </div>
                  <div className='flex items-start justify-center gap-6'>
                    <span className='text-sm text-gray-600 flex items-center'>
                      <span> Dispense Date:</span> {prescription.dispenseDate}
                    </span>
                    <span className='text-sm text-gray-600 flex flex-col items-left'>
                      <span> Quantity/Days Supply:</span>{' '}
                      {prescription.quantity}
                    </span>
                  </div>
                </div>
                <div className='flex items-center justify-between w-full mt-2 gap-4'>
                  <button className='px-12 py-4 border-text-light border text-text-light text-sm rounded'>
                    Change
                  </button>
                  <button className='px-12 py-4 bg-text-light text-white text-sm rounded'>
                    Renew
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Previous Prescriptions */}
      <div className=' p-4 rounded-lg max-h-screen overflow-y-auto'>
        <h2 className='text-lg font-semibold mb-4 text-bacground-light'>
          Previous Prescription
        </h2>
        {previousPrescriptions.map((prescription, index) => (
          <div
            key={index}
            className='  p-4 mb-4 bg-gray-200  flex justify-between items-center'>
            <div className='text-right flex flex-col items-center justify-left gap-2'>
              <h3 className='text-md font-semibold text-gray-500'>
                {prescription.name}
              </h3>
              <p className='text-sm text-gray-600'>
                Expiry Date: {prescription.expiry}
              </p>
            </div>
            <p className='text-xl text-gray-70'>{prescription.repeats} Rpts.</p>
          </div>
        ))}
      </div>

      {/* Patient Notes */}
      <div className=' p-4 rounded-lg max-h-screen overflow-y-auto'>
        <h2 className='text-lg font-semibold mb-4 text-text-light'>Patient Notes</h2>
        {patientNotes.map((note, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50'>
            <h3 className='text-md font-bold text-text-light'>{note.title}</h3>
            <p className='text-sm text-gray-600'>{note.date}</p>
            <p className='text-sm text-gray-600 mt-2'>{note.description}</p>
            {note.file && (
              <a
                href='#'
                className='text-text-light text-sm mt-2 inline-block underline'>
                {note.file}
              </a>
            )}
          </div>
        ))}
        <button className='px-4 py-2 bg-text-light text-white text-sm rounded mt-4 w-full'>
          Add New Note
        </button>
      </div>
    </div>
  );
};

export default PatientPrescription;
