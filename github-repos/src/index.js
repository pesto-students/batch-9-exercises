/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './config/redux';

const wrappedComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(wrappedComponent, document.getElementById('root'));
registerServiceWorker();
