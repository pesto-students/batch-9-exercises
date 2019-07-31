const { ADD_ITEM, CLEAR_LIST, PURCHASE_ITEM } = require('./constants');

const shoppingList = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          purchased: false,
        },
      ];
    case CLEAR_LIST:
      return [];
    case PURCHASE_ITEM: {
      const purchasedItemIndex = state.indexOf(item => item.id === action.id);
      return [
        ...state.slice(0, purchasedItemIndex), {
          id: state[purchasedItemIndex].id,
          text: state[purchasedItemIndex].text,
          purchased: true,
        }, ...state.slice(purchasedItemIndex + 1),
      ];
    }
    default:
      return state;
  }
};

export default shoppingList;
