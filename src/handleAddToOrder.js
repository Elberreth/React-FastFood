const handleAddToOrder = (itemsToAdd) => {
    const updatedOrder = [...orderItems];
    
    
    itemsToAdd.forEach((item) => {
      const index = updatedOrder.findIndex((orderItem) => orderItem.name === item.name);
      
      
      if (index !== -1) {
        updatedOrder[index].quantity += 1;
      } else {
        
        updatedOrder.push({ ...item, quantity: 1 });
      }
    });
  
    setOrderItems(updatedOrder);
  };
  