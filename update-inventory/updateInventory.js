const getInventoryObj = allInventory => allInventory
  .reduce((updatedInventoryObj, [quantity, name]) => ({
    ...updatedInventoryObj,
    [name]: (updatedInventoryObj[name] || 0) + quantity,
  }), {});

function updateInventory(currentInventory, newInventory) {
  const allInventory = [...currentInventory, ...newInventory];
  const newInventoryObj = getInventoryObj(allInventory);
  return Object.keys(newInventoryObj)
    .sort()
    .map(key => [newInventoryObj[key], key]);
}

export {
  updateInventory,
};
