import React from 'react';

const MenuItem = ({ item, addToOrder }) => {
  const handleClick = () => {
    addToOrder(item);
  };

  return (
    <div className="menu-item" onClick={handleClick}>
      <img src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;






