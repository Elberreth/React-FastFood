import React, { useState } from 'react';

const MenuItem = ({ item, addToOrder }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleClick = () => {
    addToOrder(item, quantity);
    // Reset quantity after adding to order
    setQuantity(1);
  };

  return (
    <div className="menu-item">
      <img src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>${item.price.toFixed(2)}</p>
        <input type="number" value={quantity} min="1" onChange={handleQuantityChange} />
        <button onClick={handleClick}>Add to Order</button>
      </div>
    </div>
  );
};

export default MenuItem;








