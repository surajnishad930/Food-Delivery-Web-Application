// Backend order access and order management will be implemented later and temporarely i have uses the hard code data but for the user all the functionality have been implemented and working properly.


import React from 'react';

const Orders = () => {

  const orders = [
    {
      id: 1,
      customer: 'Suraj',
      food: 'Burger',
      quantity: 2,
      price: 120,
      status: 'Pending'
    },
    {
      id: 2,
      customer: 'Rahul',
      food: 'Pizza',
      quantity: 1,
      price: 250,
      status: 'Pending'
    },
    {
      id: 3,
      customer: 'Aman',
      food: 'Biryani',
      quantity: 3,
      price: 180,
      status: 'Pending'
    }
  ];

  return (
    <div className='container mt-4'>

      <h2 className='mb-4'>Orders</h2>

      {
        orders.map((order) => (

          <div className='card mb-3' key={order.id}>

            <div className='card-body'>

              <div className='d-flex justify-content-between align-items-center'>

                <div>
                  <h5>Order #{order.id}</h5>

                  <p className='mb-1'>
                    Customer: {order.customer}
                  </p>

                  <p className='mb-1'>
                    Food: {order.food}
                  </p>

                  <p className='mb-1'>
                    Quantity: {order.quantity}
                  </p>

                  <p className='mb-0'>
                    Price: ₹{order.price}
                  </p>
                </div>

                <span className='badge bg-warning text-dark'>
                  {order.status}
                </span>

              </div>

            </div>

          </div>

        ))
      }

    </div>
  )
}

export default Orders;