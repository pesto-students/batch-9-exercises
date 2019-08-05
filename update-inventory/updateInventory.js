function updateInventory(inventory, freshDelivery) {
  const combinedInventory = [...inventory, ...freshDelivery];
  const updatedInventoryObject = combinedInventory.reduce((newInventory, [quantity, item]) => (
    {
      ...newInventory,
      [item]: (newInventory[item] || 0) + quantity,
    }
  ), {});
  return Object.keys(updatedInventoryObject).sort().map(key => [updatedInventoryObject[key], key]);
}

export {
  updateInventory,
};
