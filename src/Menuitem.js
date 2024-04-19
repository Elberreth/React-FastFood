import React, { useState } from 'react';

const MenuItem = ({ item, addToOrder }) => {
  const { name, description, price, imageUrl } = item;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
        />
      </label>
      <button onClick={() => addToOrder({ ...item, quantity })}>Add to Order</button>
    </div>
  );
};

export default MenuItem;


















