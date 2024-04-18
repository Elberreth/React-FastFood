import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems, addToOrder }) => {
  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} addToOrder={addToOrder} />
      ))}
    </div>
  );
};

export default Menu;

