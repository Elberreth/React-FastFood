import React, { useState } from 'react';

const MenuItem = ({ item, addToOrder }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity > 0 ? newQuantity : 1); 
  };

  const handleClick = () => {
    
    const itemsToAdd = Array.from({ length: quantity }, () => item);
    
    addToOrder(itemsToAdd);
    
    setQuantity(1);
  };

  return (
    <div className="menu-item">
      <img src={item.imageUrl} alt={item.name} className="menu-item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>${item.price.toFixed(2)}</p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          className="menu-item-quantity"
        />
        <button onClick={handleClick}>Add {quantity} to Order</button>
      </div>
    </div>
  );
};

export default MenuItem;














