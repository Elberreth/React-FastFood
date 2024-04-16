import React from 'react';

const MenuItem = ({ item, addToOrder }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <button onClick={() => addToOrder(item)}>Add to Order</button>
    </div>
  );
};

export default MenuItem;

