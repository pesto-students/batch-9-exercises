import * as ActionTypes from './constants';
import axios from 'axios';

export const fetchGithubRepositories = username => {
  return dispatch => {
    axios
      .get('https://api.github.com/users/' + username + '/repos')
      .then(res => {
        dispatch(dispatchFetchGithubRepoSuccess(res.data));
      })
      .catch(err => console.log(err));
  };
};

const dispatchFetchGithubRepoSuccess = repos => {
  return {
    type: ActionTypes.FETCH_REPO,
    data: repos
  };
};
