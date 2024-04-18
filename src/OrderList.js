import React from 'react';

const OrderList = ({ orderItems, removeFromOrder }) => {
  const handleRemove = (index) => {
    removeFromOrder(index);
  };

  return (
    <div>
      <h2>Order</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity} - ${item.price * item.quantity}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;

