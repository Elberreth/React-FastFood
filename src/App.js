import React, { useState } from 'react';
import Menu from './Menu'; // Component to display menu items
import Order from './Order'; // Component to display order list
import ThemeToggle from './ThemeToggle'; // Component to toggle dark/light theme

function App() {
  const [menuItems, setMenuItems] = useState([]); // State to store menu items
  const [orderItems, setOrderItems] = useState([]); // State to store order items
  const [theme, setTheme] = useState('light'); // State to store current theme

  // Function to add item to order
  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} />
      <h1>Fast Food Ordering App</h1>
      <div className="container">
        <Menu menuItems={menuItems} addToOrder={addToOrder} />
        <Order orderItems={orderItems} />
      </div>
    </div>
  );
}

export default App;
