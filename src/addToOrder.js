const addToOrder = (item, quantity, orderItems, setOrderItems) => {
    const index = orderItems.findIndex((orderItem) => orderItem.name === item.name);
    if (index !== -1) {
      
      const updatedOrder = [...orderItems];
      updatedOrder[index].quantity += quantity;
      setOrderItems(updatedOrder);
    } else {
     
      setOrderItems([...orderItems, { ...item, quantity }]);
    }
  };
  
  export default addToOrder;
  
  
  
  