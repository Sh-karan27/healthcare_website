import React from 'react';
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip
);

import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
const DashboardGraph = () => {
  const lineData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Male',
        data: [800, 950, 870, 890, 920, 620, 580, 600, 620, 700, 750, 800],
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        tension: 0.4,
        pointBackgroundColor: '#4A90E2',
      },
      {
        label: 'Female',
        data: [600, 700, 750, 800, 770, 680, 640, 650, 700, 720, 760, 800],
        borderColor: '#50E3C2',
        backgroundColor: 'rgba(80, 227, 194, 0.2)',
        tension: 0.4,
        pointBackgroundColor: '#50E3C2',
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: 'Patient Visits (Yearly)',
        font: {
          size: 18,
        },
        color: '#333',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
          color: '#666',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Patients',
          color: '#666',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
    },
  };

  // Data for Bar Chart
  const barData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], // Days of the week
    datasets: [
      {
        label: 'Patients',
        data: [900, 300, 600, 800, 750, 500, 700],
        backgroundColor: 'rgba(74, 144, 226, 0.8)', // Professional blue color
        borderRadius: 5, // Rounded corners
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: 'Patients (This Week)',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#333',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
    },
  };
  return (
    <div className='bg-transparent flex flex-wrap items-center justify-evenly w-full h-auto p-4'>
      <div className='w-full lg:w-[50%] h-[30vh]'>
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className='w-full lg:w-[35%] h-[30vh]'>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default DashboardGraph;
