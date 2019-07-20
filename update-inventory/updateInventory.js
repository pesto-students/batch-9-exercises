
const getUpdateInventoryObj = allInventory => allInventory
  .reduce((updatedInventory, [itemQuantity, itemName]) => ({
    ...updatedInventory,
    [itemName]: (updatedInventory[itemName] || 0) + itemQuantity,
  }), {});


function updateInventory(currentInventory, newInventory) {
  const allInventory = [...currentInventory, ...newInventory];
  const updatedInventoryObj = getUpdateInventoryObj(allInventory);
  // console.log('updatedInventoryObj', updatedInventoryObj);
  return Object.keys(updatedInventoryObj)
    .sort()
    .map(key => [updatedInventoryObj[key], key]);
}

export {
  updateInventory,
};
