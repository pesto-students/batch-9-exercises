/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

const defaultItemNameIndex = 1;
const defaultItemCountIndex = 0;

const addItemToInventory = (accumulatedInventory, currentItem) => {
  const currentItemName = currentItem[defaultItemNameIndex];
  const currentItemCount = currentItem[defaultItemCountIndex];
  const itemIndexInAccumulatedInventory = accumulatedInventory.findIndex(item => item.indexOf(currentItemName) > 0);
  if (itemIndexInAccumulatedInventory > -1) {
    accumulatedInventory[itemIndexInAccumulatedInventory][defaultItemCountIndex] += currentItemCount;
  } else {
    accumulatedInventory.push(currentItem);
  }

  return accumulatedInventory;
};
function updateInventory(newInventory, currentInventory) {
  const updatedInventory = currentInventory.reduce(addItemToInventory, newInventory);
  updatedInventory.sort((item1, item2) => item1[defaultItemNameIndex] > item2[defaultItemNameIndex]);
  return updatedInventory;
}

export {
  updateInventory,
};
