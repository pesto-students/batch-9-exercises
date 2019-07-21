
function updateInventory(currentInventory, addedInventory) {
  const updatedInventoryObject = [...currentInventory, ...addedInventory]
    .reduce((updatedInventory, [itemQuantity, itemName]) => ({
      ...updatedInventory,
      [itemName]: (updatedInventory[itemName] || 0) + itemQuantity,
    }), {});
  return Object.keys(updatedInventoryObject)
    .sort()
    .map(key => [updatedInventoryObject[key], key]);
}

export {
  updateInventory,
};
