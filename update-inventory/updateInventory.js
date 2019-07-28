const arrayToObject = args => args.reduce((obj, element) => {
  obj[element[1]] = element[0];
  return obj;
}, {});

const addInventoryItems = (inventoryA, inventoryB, returnObject) => {
  for (const prop in inventoryA) {
    if (!returnObject[prop]) {
      if (inventoryB[prop]) {
        returnObject[prop] = parseInt(inventoryA[prop]) + parseInt(inventoryB[prop]);
      } else {
        returnObject[prop] = inventoryA[prop];
      }
    }
  }
  return returnObject;
}

function objectFlip(obj) {
  const ret = {};
  Object.keys(obj).forEach((key) => {
    ret[obj[key]] = key;
  });
  return ret;
}

function updateInventory(currentInventory, newInventory) {
  const currentInventoryObject = arrayToObject(currentInventory);
  const newInventoryObject = arrayToObject(newInventory);
  const addCurrentToNew = addInventoryItems(currentInventoryObject, newInventoryObject, {});
  const inventoryObjects = addInventoryItems(newInventoryObject, currentInventoryObject, addCurrentToNew);
  return Object.entries(objectFlip(inventoryObjects));
}

export {
  updateInventory,
};
