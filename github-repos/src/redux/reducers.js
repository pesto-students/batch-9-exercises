import { combineReducers } from 'redux';
import githubUsers from './githubUsers';

export default combineReducers({
  app: githubUsers,
});
