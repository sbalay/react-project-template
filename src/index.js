import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import DummyComponent from './screens/App/DummyComponent';

const history = createBrowserHistory();

import App from './screens/App';
import './index.css';

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route path="/" component={App} />
      <Route path="/dummy" component={DummyComponent} />
    </div>
  </Router>,
  document.getElementById('root')
);
