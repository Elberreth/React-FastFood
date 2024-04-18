const addToOrder = (item, orderItems, setOrderItems) => {
    const index = orderItems.findIndex((orderItem) => orderItem.name === item.name);
    if (index !== -1) {
     
      const updatedOrder = [...orderItems];
      updatedOrder[index].quantity += 1;
      setOrderItems(updatedOrder);
    } else {
      
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };
  
  export default addToOrder;
  
  