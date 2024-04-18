import React, { useState } from 'react';
import MenuItem from './MenuItem'; 
import OrderList from './OrderList'; 
import ThemeToggle from './ThemeToggle'; 
import Menu from './Menu';

function App() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Classic Burger', description: 'Juicy beef patty with lettuce, tomato, onion, and pickles', price: 8.99 },
    { name: 'Cheeseburger', description: 'Classic burger with melted cheese', price: 9.99 },
    { name: 'Bacon Burger', description: 'Delicious burger topped with crispy bacon', price: 10.99 }
  ]); // State for menu items
  const [orderItems, setOrderItems] = useState([]); // State for order items
  const [theme, setTheme] = useState('light'); // State for theme

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
        {/* Menu */}
        <Menu menuItems={menuItems} addToOrder={addToOrder} />
        <div className="menu">
          <h2>Menu</h2>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} addToOrder={addToOrder} />
          ))}
        </div>

        {/* Order List */}
        <OrderList orderItems={orderItems} />
      </div>
    </div>
  );
}

export default App;






