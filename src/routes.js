import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import DummyComponent from './screens/DummyComponent/DummyComponent';
import App from './screens/App';

const history = createBrowserHistory();

function AppRoutes() {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={App} />
        <Route path="/dummy" component={DummyComponent} />
      </div>
    </Router>
  );
}

export default AppRoutes;
