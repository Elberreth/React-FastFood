import React, { useState } from 'react';

// Component for displaying menu items
const MenuItem = ({ item, addToOrder }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <button onClick={() => addToOrder(item)}>Add to Order</button>
    </div>
  );
};

// Component for displaying the order list
const OrderList = ({ order }) => {
  return (
    <div>
      <h2>Order</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main App component
const App = () => {
  const [order, setOrder] = useState([]);
  const [theme, setTheme] = useState('light');

  const addToOrder = (item) => {
    // Check if the item is already in the order list
    const index = order.findIndex((i) => i.name === item.name);
    if (index !== -1) {
      // If item is already in the order list, update its quantity
      const updatedOrder = [...order];
      updatedOrder[index].quantity += 1;
      setOrder(updatedOrder);
    } else {
      // If item is not in the order list, add it
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Fast Food Ordering App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="menu">
        {/* Render menu items */}
        {/* <MenuItem item={menuItem} addToOrder={addToOrder} /> */}
      </div>
      <div className="order">
        {/* Render order list */}
        {/* <OrderList order={order} /> */}
      </div>
    </div>
  );
};

export default App;
