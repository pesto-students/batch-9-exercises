function updateInventory(inventory1, inventory2) {
  const inventory1Object = inventory1.reduce((object, [value, key]) => {
    object[key] = value;
    return object;
  }, {});

  const inventory2Object = inventory2.reduce((object, [value, key]) => {
    object[key] = value;
    return object;
  }, {});

  let mergeInventoryObject = { ...inventory1Object };

  Object.keys(inventory2Object).forEach(key => {
    if (Boolean(mergeInventoryObject[key])) {
      mergeInventoryObject[key] = inventory2Object[key] + inventory1Object[key];
    } else {
      mergeInventoryObject[key] = inventory2Object[key];
    }
  });

  console.log(mergeInventoryObject);

  // mergeInventoryObject.sort((a, b) => a[0] - b[0]);
  Object.keys(mergeInventoryObject)
    .sort()
    .forEach(key => {
      const value = mergeInventoryObject[key];
      delete mergeInventoryObject[key];
      mergeInventoryObject[key] = value;
    });

  const mergeInventoryKeys = Object.keys(mergeInventoryObject);
  const mergeInventoryValues = Object.values(mergeInventoryObject);

  return mergeInventoryKeys.map((key, index) => [
    mergeInventoryValues[index],
    key
  ]);
}

// updateInventory(
//   [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']],
//   [
//     [2, 'Hair Pin'],
//     [3, 'Half-Eaten Apple'],
//     [67, 'Bowling Ball'],
//     [7, 'Toothpaste']
//   ]
// );
export { updateInventory };
