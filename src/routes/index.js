import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import routes from './routes';

export const history = createBrowserHistory({});

const Routes = () => (
  <Router history={history}>
    <Switch>
      {routes.map((route, i) =>  <Route key={i} {...route} />)}
    </Switch>
  </Router>
);

export default Routes;
