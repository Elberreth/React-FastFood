import React from 'react';

const OrderList = ({ orderItems, removeFromOrder }) => {
  
  const calculateOrderTotalPrice = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  
  const groupOrderItemsByName = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      if (!groupedItems[item.name]) {
        groupedItems[item.name] = [item];
      } else {
        groupedItems[item.name].push(item);
      }
    });
    return groupedItems;
  };

 
  const groupedOrderItems = groupOrderItemsByName(orderItems);

  return (
    <div className="order-list">
      <h2>Order Summary</h2>
      {Object.keys(groupedOrderItems).map((itemName, index) => (
        <div key={index} className="order-item">
          <h3>{itemName}</h3>
          {groupedOrderItems[itemName].map((item, itemIndex) => (
            <div key={itemIndex}>
              <p>Quantity: {item.quantity}</p>
              <p>Price per item: ${item.price ? item.price.toFixed(2) : 'N/A'}</p> 
              <button onClick={() => removeFromOrder(orderItems.indexOf(item))}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${calculateOrderTotalPrice(groupedOrderItems[itemName]).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderList;


