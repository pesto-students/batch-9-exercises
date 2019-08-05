import * as ActionTypes from './constants';

export const addItem = name => {
  return {
    type: ActionTypes.ADD_ITEM,
    data: { name }
  };
};

export const clearList = () => {
  return {
    type: ActionTypes.CLEAR_LIST
  };
};
