import * as actionTypes from './constants';

const initialState = {
  list: [{ name: 'Apple' }, { name: 'Orange' }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return { list: [...state.list, action.data] };
    case actionTypes.CLEAR_LIST:
      return { list: [] };
    default:
      return state;
  }
};

export default reducer;
