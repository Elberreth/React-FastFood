import React, { useState } from 'react';
import MenuItem from './MenuItem'; 
import OrderList from './OrderList'; 
import ThemeToggle from './ThemeToggle'; 
import Menu from './Menu';

function App() {
  const [menuItems, setMenuItems] = useState([]); 
  const [orderItems, setOrderItems] = useState([]); 
  const [theme, setTheme] = useState('light'); 

  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} />
      <h1>Fast Food Ordering App</h1>
      <div className="container">
        <Menu menuItems={menuItems} addToOrder={addToOrder} />
        <div className="menu">
          <h2>Menu</h2>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} addToOrder={addToOrder} />
          ))}
        </div>
        <OrderList orderItems={orderItems} />
      </div>
    </div>
  );
}

export default App;


