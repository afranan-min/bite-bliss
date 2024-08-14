// src/screens/ShowOrders.js
import React, { useState, useEffect } from 'react';

const ShowOrders = () => {
  const [orders, setOrders] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const toggleDetails = (orderIndex, groupIndex) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [`${orderIndex}-${groupIndex}`]: !prevDetails[`${orderIndex}-${groupIndex}`],
    }));
  };

  return (
    <div className="container">
      <h2>Orders</h2>
      {orders.map((order, orderIndex) => (
        <div key={orderIndex} className="order mb-4">
          <h3>Order #{orderIndex + 1}</h3>
          <p>Email: {order.email}</p>
          {order.order_data.map((orderGroup, groupIndex) => (
            <div key={groupIndex} className="mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Order Date: {orderGroup[0].Order_date}</h4>
                <button
                  className="btn btn-secondary me-3"
                  onClick={() => toggleDetails(orderIndex, groupIndex)}
                >
                  {showDetails[`${orderIndex}-${groupIndex}`] ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
              {showDetails[`${orderIndex}-${groupIndex}`] && (
                <div className="mt-3">
                  {orderGroup.slice(1).map((item, itemIdx) => (
                    <div key={itemIdx} className="mb-3">
                      <p>Item Name: {item.name}</p>
                      <p>Quantity: {item.qty}</p>
                      <p>Size: {item.size}</p>
                      <p>Price: {item.price}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShowOrders;
