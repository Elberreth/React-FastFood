const handleClick = () => {
    const itemsToAdd = Array.from({ length: quantity }, () => item); 
    addToOrder(itemsToAdd);
    setQuantity(1);
  };
  