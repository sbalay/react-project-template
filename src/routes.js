import React from 'react';
import { Route } from 'react-router-dom';

import DummyComponent from './screens/DummyComponent/DummyComponent';
import App from './screens/App';

function AppRoutes() {
  return (
    <div>
      <Route path="/" component={App} />
      <Route path="/dummy" component={DummyComponent} />
    </div>
  );
}

export default AppRoutes;
