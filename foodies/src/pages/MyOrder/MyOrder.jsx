import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { getCartData } from '../../service/cartService';

const MyOrder = () => {

  const { token, foodList } = useContext(StoreContext);

  const [cartItems, setCartItems] = useState({});

  const loadCartData = async () => {
    try {
      const items = await getCartData(token);
      setCartItems(items);
    } catch (error) {
      console.error('Error while fetching cart data', error);
    }
  };

  useEffect(() => {
    if (token) {
      loadCartData();
    }
  }, [token]);

  return (
    <div className='container mt-4'>

      <h2 className='mb-4'>My Orders</h2>

      {
        Object.keys(cartItems).length === 0 ?
          <p>No orders found.</p>
          :
          Object.entries(cartItems).map(([foodId, quantity]) => {

            const food = foodList.find(
              food => food.id === foodId
            );

            if (!food || quantity <= 0) {
              return null;
            }

            return (
              <div className='card mb-3' key={foodId}>

                <div className='card-body d-flex align-items-center justify-content-between'>

                  <div className='d-flex align-items-center'>

                    <img
                      src={food.imageUrl}
                      alt=''
                      width={80}
                      height={80}
                      className='rounded'
                    />

                    <div className='ms-3'>
                      <h5>{food.name}</h5>
                      <p className='mb-1'>
                        Quantity: {quantity}
                      </p>
                      <p className='mb-0'>
                        Price: ₹{food.price}
                      </p>
                    </div>

                  </div>

                  <span className='badge bg-warning text-dark'>
                    Pending
                  </span>

                </div>

              </div>
            );
          })
      }

    </div>
  )
}

export default MyOrder;

// import React, { useContext, useEffect, useState } from 'react';
// import './MyOrder.css';
// import axios from 'axios';
// import { StoreContext } from '../../context/StoreContext';

// const MyOrder = () => {

//   const { token, foodList } = useContext(StoreContext);

//   const [orders, setOrders] = useState([]);

//   const loadOrders = async () => {
//     try {
//       const response = await axios.get(
//         'http://localhost:8080/api/orders',
//         {
//           headers: {
//             "Authorization": `Bearer ${token}`
//           }
//         }
//       );

//       setOrders(response.data);

//     } catch (error) {
//       console.error('Error while fetching orders', error);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       loadOrders();
//     }
//   }, [token]);

//   return (
//     <div className='container mt-4'>

//       <h2 className='mb-4'>My Orders</h2>

//       {
//         orders.length === 0 ?
//           <p>No orders found.</p>
//           :
//           orders.map((order, index) => (

//             <div className='card mb-4' key={order.id || index}>

//               <div className='card-body'>

//                 <div className='d-flex justify-content-between mb-3'>
//                   <h5>Order #{index + 1}</h5>

//                   <span className='badge bg-warning text-dark'>
//                     Pending
//                   </span>
//                 </div>

//                 {
//                   order.items.map((item, itemIndex) => {

//                     const food = foodList.find(
//                       food => food.id === item.foodId
//                     );

//                     return (
//                       <div
//                         className='d-flex align-items-center border-bottom py-3'
//                         key={itemIndex}
//                       >

//                         {
//                           food &&
//                           <img
//                             src={food.imageUrl}
//                             alt=''
//                             width={70}
//                             height={70}
//                             className='rounded'
//                           />
//                         }

//                         <div className='ms-3'>
//                           <h6>{food ? food.name : 'Food Item'}</h6>

//                           <p className='mb-0'>
//                             Quantity: {item.quantity}
//                           </p>

//                           {
//                             food &&
//                             <p className='mb-0'>
//                               Price: ₹{food.price}
//                             </p>
//                           }
//                         </div>

//                       </div>
//                     );

//                   })
//                 }

//               </div>

//             </div>

//           ))
//       }

//     </div>
//   )
// }

// export default MyOrder;