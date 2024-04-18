import React, { useState } from 'react';

const MenuItem = ({ item, addToOrder }) => {
  const [quantity, setQuantity] = useState(1); 

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToOrder = () => {
    addToOrder({ ...item, quantity }); 
    setQuantity(1); 
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
      <button onClick={handleAddToOrder}>Add to Order</button>
    </div>
  );
};

export default MenuItem;





