import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', Systolic: 140, Diastolic: 90 },
  { name: 'Tue', Systolic: 135, Diastolic: 85 },
  { name: 'Wed', Systolic: 130, Diastolic: 80 },
  { name: 'Thu', Systolic: 145, Diastolic: 95 },
  { name: 'Fri', Systolic: 120, Diastolic: 75 },
  { name: 'Sat', Systolic: 138, Diastolic: 88 },
  { name: 'Sun', Systolic: 132, Diastolic: 82 },
];

const BloodPressureGraph = () => {
  return (
    <div className='bg-white shadow-sm rounded-lg p-6'>
      <h2 className='text-xl  text-text-light font-semibold mb-4'>
        Close Monitoring
      </h2>
      <div>
        <h3 className='text-sm font-medium text-gray-500 mb-2'>
          Blood Pressure
        </h3>
        <div className='flex justify-between items-center mb-4'>
          <span className='text-gray-500 text-sm'>Weekly</span>
        </div>
        <div className='h-48 bg-blue-50 rounded flex items-center justify-center'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis domain={[60, 160]} />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='Systolic'
                stroke='#52b788'
                strokeWidth={2}
                dot={{ r: 6 }}
              />
              <Line
                type='monotone'
                dataKey='Diastolic'
                stroke='#38bdf8'
                strokeWidth={2}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureGraph;
