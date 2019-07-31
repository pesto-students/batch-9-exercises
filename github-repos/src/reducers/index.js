import { FETCH_GITHUB_REPOS } from '../constants/action-types';
const initialState = {
    repos: []
};

function rootReducer(state = initialState, action) {
    if (action.type === FETCH_GITHUB_REPOS) {

    }

    return state;
}

export default rootReducer;