import React, { useState } from 'react';
import MenuItem from './MenuItem'; 
import OrderList from './OrderList'; 
import ThemeToggle from './ThemeToggle'; 
import Menu from './Menu';

function App() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Classic Burger', description: 'Juicy beef patty with lettuce, tomato, onion, and pickles', price: 8.99, imageUrl: 'images/classicburger.jpg' },
    { name: 'Cheeseburger', description: 'Classic burger with melted cheese', price: 9.99, imageUrl: 'images/cheeseburger.jpg' },
    { name: 'Bacon Burger', description: 'Delicious burger topped with crispy bacon', price: 10.99, imageUrl: 'images/baconburger.jpg' }
  ]); 
  const [orderItems, setOrderItems] = useState([]); 
  const [theme, setTheme] = useState('light'); 

  const addToOrder = (item) => {
    setOrderItems([...orderItems, { ...item, quantity: 1 }]);
  };

  const removeFromOrder = (index) => {
    const updatedOrder = [...orderItems];
    updatedOrder.splice(index, 1);
    setOrderItems(updatedOrder);
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
        
       
        <OrderList orderItems={orderItems} removeFromOrder={removeFromOrder} />
      </div>
    </div>
  );
}

export default App;








