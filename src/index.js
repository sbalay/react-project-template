import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';

import './config/reactotron';

import createBrowserHistory from 'history/createBrowserHistory';
import DummyComponent from './screens/App/DummyComponent';
import App from './screens/App';
import store from './redux/store';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={App} />
        <Route path="/dummy" component={DummyComponent} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
