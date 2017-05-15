import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import App from './screens/App';
import './index.css';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
