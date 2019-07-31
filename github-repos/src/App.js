import React from 'react';
import { Provider } from 'react-redux';
import redux from './config/redux';
import './App.css';

const App = () => (
  <Provider store={redux}>
    <div>App</div>
  </Provider>
);

export default App;
