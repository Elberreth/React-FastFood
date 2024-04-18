const handleClick = () => {
    const itemsToAdd = Array.from({ length: quantity }, () => item); // Create an array of items
    addToOrder(itemsToAdd);
    setQuantity(1);
  };
  