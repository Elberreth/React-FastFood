import React, { useState } from 'react';

const MenuItem = ({ item, addToOrder }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleClick = () => {
    const itemsToAdd = Array.from({ length: quantity }, () => item); // Create an array of items with the selected quantity
    addToOrder(itemsToAdd);
    setQuantity(1); // Reset quantity to 1 after adding items to the order
  };

  return (
    <div className="menu-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <input type="number" min="1" value={quantity} onChange={handleChange} />
      <button onClick={handleClick}>Order</button>
    </div>
  );
};

export default MenuItem;















