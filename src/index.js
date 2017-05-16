import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

import AppRoutes from './routes';
import store from './redux/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
