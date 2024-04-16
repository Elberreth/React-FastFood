// OrderList.js
import React from 'react';

const OrderList = ({ orderItems }) => {
  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity} - Total Price: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
