const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    console.log("New Quantity:", newQuantity); 
    setQuantity(newQuantity);
  };
  