import React from 'react';

const AdminOrders = () => {
  const orders = [
    {
      id: '#12345',
      product: 'MacBook Air (M1, 2020)',
      customer: 'Darrell Steward',
      date: 'Apr 15, 08:01 AM',
      total: '$1,099.00',
      paymentStatus: 'Pending',
      items: '1 items',
      deliveryMethod: 'Free Shipping',
    },
    {
      id: '#12346',
      product: 'MacBook Pro 13-inch (2020)',
      customer: 'Courtney Henry',
      date: 'Apr 15, 09:35 AM',
      total: '$2,998.00',
      paymentStatus: 'Completed',
      items: '2 items',
      deliveryMethod: 'Free Shipping',
    },
    {
      id: '#12347',
      product: 'MacBook Air (Retina, 13-inch, 2018)',
      customer: 'Arlene McCoy',
      date: 'Apr 15, 10:30 AM',
      total: '$1,499.00',
      paymentStatus: 'Completed',
      items: '1 items',
      deliveryMethod: 'Free Shipping',
    },
    {
      id: '#12347',
      product: 'MacBook Air (Retina, 13-inch, 2018)',
      customer: 'Arlene McCoy',
      date: 'Apr 15, 10:30 AM',
      total: '$1,499.00',
      paymentStatus: 'Completed',
      items: '1 items',
      deliveryMethod: 'Free Shipping',
    },
    {
      id: '#12347',
      product: 'MacBook Air (Retina, 13-inch, 2018)',
      customer: 'Arlene McCoy',
      date: 'Apr 15, 10:30 AM',
      total: '$1,499.00',
      paymentStatus: 'Completed',
      items: '1 items',
      deliveryMethod: 'Free Shipping',
    },
    {
      id: '#12347',
      product: 'MacBook Air (Retina, 13-inch, 2018)',
      customer: 'Arlene McCoy',
      date: 'Apr 15, 10:30 AM',
      total: '$1,499.00',
      paymentStatus: 'Completed',
      items: '1 items',
      deliveryMethod: 'Free Shipping',
    },
    {
      id: '#12347',
      product: 'MacBook Air (Retina, 13-inch, 2018)',
      customer: 'Arlene McCoy',
      date: 'Apr 15, 10:30 AM',
      total: '$1,499.00',
      paymentStatus: 'Completed',
      items: '1 items',
      deliveryMethod: 'Free Shipping',
    },
    {
      id: '#12347',
      product: 'MacBook Air (Retina, 13-inch, 2018)',
      customer: 'Arlene McCoy',
      date: 'Apr 15, 10:30 AM',
      total: '$1,499.00',
      paymentStatus: 'Completed',
      items: '1 items',
      deliveryMethod: 'Free Shipping',
    },
    {
      id: '#12347',
      product: 'MacBook Air (Retina, 13-inch, 2018)',
      customer: 'Arlene McCoy',
      date: 'Apr 15, 10:30 AM',
      total: '$1,499.00',
      paymentStatus: 'Completed',
      items: '1 items',
      deliveryMethod: 'Free Shipping',
    },
    // Add remaining orders data similarly
  ];

  return (
    <div className='p-4 bg-transparent min-h-screen mt-14'>
      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-semibold text-gray-700'>Orders</h1>
        <div className='flex gap-2'>
          <button className='px-4 py-2 bg-white text-gray-700 rounded'>
            Export
          </button>
          <button className='px-4 py-2 bg-gray-700 text-white rounded'>
            Create Order
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-5 gap-4 bg-white p-4 rounded shadow mb-6 '>
        <div className='text-center'>
          <p className='text-gray-700 font-semibold text-xl'>Today</p>
          <p className='text-xl font-bold text-text-light'>48</p>
        </div>
        <div className='text-center'>
          <p className='text-gray-700 font-semibold text-xl'>Total Orders</p>
          <p className='text-xl font-bold text-text-light'>493</p>
        </div>
        <div className='text-center'>
          <p className='text-gray-700 font-semibold text-xl'>Returns</p>
          <p className='text-xl font-bold text-text-light'>6</p>
        </div>
        <div className='text-center'>
          <p className='text-gray-700 font-semibold text-xl'>
            Fulfilled Orders
          </p>
          <p className='text-xl font-bold text-text-light'>359</p>
        </div>
        <div className='text-center'>
          <p className='text-gray-700 font-semibold text-xl'>
            Delivered Orders
          </p>
          <p className='text-xl font-bold text-text-light'>353</p>
        </div>
      </div>

      {/* Tabs */}
      <div className='flex gap-4 mb-4'>
        <button className='px-4 py-2 bg-text-light text-white rounded'>
          All
        </button>
        <button className='px-2 py-1 text-white bg-gray-700 rounded'>
          Unpaid
        </button>
        <button className='px-2 py-1 text-white bg-gray-700 rounded'>
          Need to Ship
        </button>
        <button className='px-2 py-1 text-white bg-gray-700 rounded'>
          Sent
        </button>
        <button className='px-2 py-1 text-white bg-gray-700 rounded'>
          Completed
        </button>
        <button className='px-2 py-1 text-white bg-gray-700 rounded'>
          Cancellation
        </button>
        <button className='px-2 py-1 text-white bg-gray-700 rounded'>
          Returns
        </button>
      </div>

      {/* Table */}
      <div className='bg-white p-4 rounded shadow '>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='text-gray-700 text-lg font-semibold'>
              <th className='border-b py-2 '>Order</th>
              <th className='border-b py-2'>Customer</th>
              <th className='border-b py-2'>Date</th>
              <th className='border-b py-2'>Payment Status</th>
              <th className='border-b py-2'>Total</th>
              <th className='border-b py-2'>Items</th>
              <th className='border-b py-2'>Delivery Method</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className='hover:bg-gray-100'>
                <td className='py-2 border-b text-text-light '>
                  {order.product}
                </td>
                <td className='py-2 border-b text-gray-500'>
                  {order.customer}
                </td>
                <td className='py-2 border-b text-gray-500'>{order.date}</td>
                <td className='py-2 border-b text-gray-500'>
                  {order.paymentStatus}
                </td>
                <td className='py-2 border-b text-text-light'>{order.total}</td>
                <td className='py-2 border-b text-gray-500'>{order.items}</td>
                <td className='py-2 border-btext-text-light text-gray-500'>
                  {order.deliveryMethod}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex justify-between items-center mt-4'>
        <p className='text-gray-700 text-xl'>Items per page:</p>
        <select className=' rounded px-2 py-1 bg-bacground-light text-white outline-none  '>
          <option className='bg-gray-700'>10</option>
          <option className='bg-gray-700'>20</option>
          <option className='bg-gray-700'>30</option>
        </select>
        <div className='flex gap-2'>
          <button className='px-2 py-1  rounded text-white bg-bacground-light'>
            Previous
          </button>
          <button className='px-2 py-1  rounded text-white bg-gray-700'>
            1
          </button>
          <button className='px-2 py-1 rounded text-white bg-gray-700'>
            2
          </button>
          <button className='px-2 py-1  rounded text-white bg-gray-700'>
            3
          </button>
          <button className='px-2 py-1  rounded text-white bg-bacground-light'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
