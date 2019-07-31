import React from 'react';
import { Provider } from 'react-redux';
import redux from './config/redux';
import './App.css';
import GithubFetchUserRepoForm from './screens/GithubFetchUserRepoForm'
const App = () => (
  <Provider store={redux}>
    <div>
    <div>App</div>
    <GithubFetchUserRepoForm/>
    </div>
    
  </Provider>
);

export default App;
