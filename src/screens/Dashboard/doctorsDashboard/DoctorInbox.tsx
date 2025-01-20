import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { GoReply } from 'react-icons/go';
import { LuReplyAll } from 'react-icons/lu';
import { MdFastForward } from 'react-icons/md';
import { MdDeleteSweep } from 'react-icons/md';
import { MdLabelImportantOutline } from 'react-icons/md';

const inbox = [
  {
    client: 'Hannah Morgan',
    description: 'Follow-up appointment request',
    content:
      "Hi Doctor, I hope you're doing well. I would like to schedule a follow-up appointment regarding my back pain...",
    time: '1:24 PM',
    date: 'Yesterday',
  },
  {
    client: 'Megan Clark',
    description: 'Prescription refill needed',
    content:
      'Hello Doctor, I hope this message finds you well. I need a refill for the medication you prescribed...',
    time: '12:32 PM',
    date: 'Yesterday',
  },
  {
    client: 'Brandon Williams',
    description: 'Test results inquiry',
    content:
      'Good afternoon, Doctor. I was wondering if my blood test results are available yet... lorem if my blood test results are available yet... loremif my blood test results are available yet... loremif my blood test results are available yet... loremif my blood test results are available yet... lorem',
    time: '11:15 AM',
    date: 'Yesterday',
  },
  // Add other entries here...
];

const DoctorInbox = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter emails based on the search term
  const filteredInbox = inbox.filter(
    (email) =>
      email.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col lg:flex-row h-screen mt-10'>
      {/* Sidebar */}
      <div className='lg:w-1/3 w-full border-r overflow-y-auto lg:h-full'>
        {/* Search Input */}
        <div className='p-4 flex justify-between w-full items-center border-b border-text-light'>
          <input
            type='text'
            placeholder='Search emails...'
            className='px-4 py-2 w-full lg:w-1/2 rounded-md border focus:outline-none focus:ring-2 focus:ring-text-light'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiCirclePlus className='text-3xl text-white font-semibold' />
        </div>
        <div className='flex items-center justify-evenly p-4'>
          <button className='px-4 py-1 bg-gray-700 text-white rounded-lg'>
            All
          </button>
          <button className='px-4 py-1 bg-gray-700 text-white rounded-lg'>
            Read
          </button>
          <button className='px-4 py-1 bg-gray-700 text-white rounded-lg'>
            Unread
          </button>
        </div>

        {/* Email List */}
        {filteredInbox.map((email, index) => (
          <div
            key={index}
            className={`p-4 border-b border-text-light cursor-pointer ${
              selectedEmail === index ? 'bg-gray-600' : ''
            }`}
            onClick={() => setSelectedEmail(index)}>
            <h3 className='font-semibold text-text-light'>{email.client}</h3>
            <p className='text-sm text-gray-400 font-semibold truncate'>
              {email.description}
            </p>
            <p className='text-xs text-gray-600'>{email.time}</p>
          </div>
        ))}
      </div>

      {/* Email Details */}
      <div className='lg:w-2/3 w-full p-6'>
        {selectedEmail !== null ? (
          <div className=''>
            <div className='flex flex-wrap space-x-4 mb-6'>
              <button className='flex items-center px-4 py-2 justify-center font-semb text-gray-700'>
                <GoReply />
                <span className='ml-2 text-sm'>Reply</span>
              </button>
              <button className='flex items-center px-4 py-2 justify-center font-semb text-gray-700'>
                <LuReplyAll />
                <span className='ml-2 text-sm'>Reply All</span>
              </button>
              <button className='flex items-center px-4 py-2 justify-center font-semb text-gray-700'>
                <MdFastForward />
                <span className='ml-2 text-sm'>Forward</span>
              </button>
              <button className='flex items-center px-4 py-2 justify-center font-semb text-gray-700'>
                <MdDeleteSweep />
                <span className='ml-2 text-sm'>Delete</span>
              </button>
              <button className='flex items-center px-4 py-2 justify-center font-semb text-gray-700'>
                <MdLabelImportantOutline />
                <span className='ml-2 text-sm'>Important</span>
              </button>
            </div>
            <h2 className='text-2xl font-bold text-gray-700'>
              {filteredInbox[selectedEmail].client}
            </h2>
            <p className='text-sm text-gray-700 font-semibold mb-4'>
              {filteredInbox[selectedEmail].description}
            </p>
            <p className='text-gray-500'>
              {filteredInbox[selectedEmail].content}
            </p>

            {/* Action Buttons */}
          </div>
        ) : (
          <div className='text-center text-gray-500'>
            Select an email to view details.
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorInbox;
