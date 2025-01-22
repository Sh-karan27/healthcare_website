import React from 'react';

const AdminSalary = () => {
  return (
    <div className='p-6 bg-gray-100 min-h-screen mt-14 rounded-md'>
      {/* Header */}
      <header className='flex justify-between items-center mb-6'>
        <div>
          <h1 className='text-3xl font-bold text-gray-700'>Orders</h1>
          <p className='text-gray-500'>Jan 1 - Jan 30, 2024</p>
        </div>
        <div className='space-x-2'>
          <button className='bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300'>
            Export
          </button>
          <button className='bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700'>
            Create order
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className='grid grid-cols-4 gap-4 mb-6'>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl font-semibold text-gray-700'>Total Orders</h2>
          <p className='text-2xl   font-bold text-text-light'>21</p>
          <p className='text-green-500'>+25.2% last week</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl font-semibold text-gray-700'>
            Order items over time
          </h2>
          <p className='text-2xl font-bold text-text-light'>15</p>
          <p className='text-red-500'>-18.2% last week</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl font-semibold text-gray-700'>Return Orders</h2>
          <p className='text-2xl   font-bold text-text-light'>0</p>
          <p className='text-red-500'>-1.2% last week</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl font-semibold text-gray-700'>
            Fulfilled orders over time
          </h2>
          <p className='text-2xl font-bold text-text-light'>12</p>
          <p className='text-green-500'>+12.2% last week</p>
        </div>
      </div>

      {/* Filters */}
      <div className='flex items-center space-x-4 mb-6'>
        <button className='px-4 py-2 bg-gray-600 text-white rounded-md'>
          All
        </button>
        <button className='px-4 py-2 border border-text-light text-gray-700 rounded-md'>
          Unfulfilled
        </button>
        <button className='px-4 py-2 border border-text-light text-gray-700 rounded-md'>
          Unpaid
        </button>
        <button className='px-4 py-2 border border-text-light text-gray-700 rounded-md'>
          Open
        </button>
        <button className='px-4 py-2 border border-text-light text-gray-700 rounded-md'>
          Closed
        </button>
        <button className='px-4 py-2 bg-text-light text-white rounded-md hover:bg-gray-700'>
          Add
        </button>
      </div>

      {/* Orders Table */}
      <div className='bg-white rounded-lg shadow overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Order
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Date
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Customer
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Payment
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Total
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Delivery
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Items
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Fulfillment
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-text-light uppercase'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {orders.map((order) => (
              <tr key={order.order}>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
                  {order.order}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
                  {order.date}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
                  {order.customer}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                    order.payment === 'Success'
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }`}>
                  {order.payment}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
                  ${order.total}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
                  {order.delivery}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
                  {order.items}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                    order.fulfillment === 'Fulfilled'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}>
                  {order.fulfillment}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
                  ...
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const orders = [
  {
    order: '#1002',
    date: '11 Feb, 2024',
    customer: 'Wade Warren',
    payment: 'Pending',
    total: 200,
    delivery: 'N/A',
    items: '2 items',
    fulfillment: 'Unfulfilled',
  },
  {
    order: '#1004',
    date: '13 Feb, 2024',
    customer: 'Esther Howard',
    payment: 'Success',
    total: 22,
    delivery: 'N/A',
    items: '3 items',
    fulfillment: 'Fulfilled',
  },
  {
    order: '#1007',
    date: '15 Feb, 2024',
    customer: 'Jenny Wilson',
    payment: 'Pending',
    total: 25,
    delivery: 'N/A',
    items: '1 item',
    fulfillment: 'Unfulfilled',
  },
  {
    order: '#1009',
    date: '17 Feb, 2024',
    customer: 'Guy Hawkins',
    payment: 'Success',
    total: 27,
    delivery: 'N/A',
    items: '5 items',
    fulfillment: 'Fulfilled',
  },
  {
    order: '#1011',
    date: '19 Feb, 2024',
    customer: 'Jacob Jones',
    payment: 'Pending',
    total: 32,
    delivery: 'N/A',
    items: '4 items',
    fulfillment: 'Unfulfilled',
  },
  {
    order: '#1013',
    date: '21 Feb, 2024',
    customer: 'Kristin Watson',
    payment: 'Success',
    total: 28,
    delivery: 'N/A',
    items: '3 items',
    fulfillment: 'Fulfilled',
  },
  {
    order: '#1015',
    date: '23 Feb, 2024',
    customer: 'Albert Flores',
    payment: 'Pending',
    total: 28,
    delivery: 'N/A',
    items: '2 items',
    fulfillment: 'Unfulfilled',
  },
  {
    order: '#1018',
    date: '25 Feb, 2024',
    customer: 'Eleanor Pena',
    payment: 'Success',
    total: 35,
    delivery: 'N/A',
    items: '5 items',
    fulfillment: 'Fulfilled',
  },
  {
    order: '#1019',
    date: '27 Feb, 2024',
    customer: 'Theresa Webb',
    payment: 'Pending',
    total: 20,
    delivery: 'N/A',
    items: '2 items',
    fulfillment: 'Unfulfilled',
  },
];

export default AdminSalary;
