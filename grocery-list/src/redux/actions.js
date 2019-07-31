/* eslint-disable no-plusplus */
const { ADD_ITEM, CLEAR_LIST, PURCHASE_ITEM } = require('./constants');

let itemId = 0;
export const addItem = text => ({
  type: ADD_ITEM,
  id: itemId++,
  text,
});

export const clearList = () => ({
  type: CLEAR_LIST,
});

export const purchaseItem = id => ({
  type: PURCHASE_ITEM,
  id,
});
