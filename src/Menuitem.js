import React from 'react';

const MenuItem = ({ item, addToOrder }) => {
  const { name, description, price, imageUrl } = item;

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p> 
      <button onClick={() => addToOrder(item)}>Add to Order</button>
    </div>
  );
};

export default MenuItem;
















