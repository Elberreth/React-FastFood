const addToOrder = (itemsToAdd) => {
    setOrderItems((prevOrderItems) => {
     
      let updatedOrderItems = [...prevOrderItems];
  
      
      itemsToAdd.forEach((item) => {
        
        const existingItemIndex = updatedOrderItems.findIndex((orderItem) => orderItem.name === item.name);
  
        if (existingItemIndex !== -1) {
          
          updatedOrderItems[existingItemIndex].quantity += 1;
        } else {
          
          updatedOrderItems.push({ ...item, quantity: 1 });
        }
      });
  
      return updatedOrderItems;
    });
  };
  