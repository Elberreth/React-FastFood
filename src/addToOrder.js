const addToOrder = (item, quantity, orderItems, setOrderItems) => {
    const index = orderItems.findIndex((orderItem) => orderItem.name === item.name);
    if (index !== -1) {
      // Item already exists in order, update its quantity
      const updatedOrder = [...orderItems];
      updatedOrder[index].quantity += quantity;
      setOrderItems(updatedOrder);
    } else {
      // Item doesn't exist in order, add it with the specified quantity
      setOrderItems([...orderItems, { ...item, quantity }]);
    }
  };
  
  export default addToOrder;
  
  
  
  