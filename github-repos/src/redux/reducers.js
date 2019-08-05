import * as actionTypes from './constants';

const initialState = {
  repositories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPO:
      return { ...state, repositories: action.data };
  }
  return state;
};

export default reducer;
