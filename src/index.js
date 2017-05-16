import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

import './config/reactotron';

import AppRoutes from './routes';
import store from './redux/store';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
