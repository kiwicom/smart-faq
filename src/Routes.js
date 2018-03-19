// @flow

import { Route, Switch } from 'react-router-dom';
import * as React from 'react';
import Intro from './IntroPage';
import Email from './EmailPage';

export const allRoutes = {
  HOME: '/',
  LOGIN: '/login',
  CHECK_EMAIL: '/check-email',
  STATIC_FAQ: '/static-faq',
};
const Routes = () => {
  return (
    <Switch>
      <Route exact path={allRoutes.HOME} component={Intro} />
      <Route path={allRoutes.LOGIN} component={() => `LOGIN PAGE`} />
      <Route
        path={allRoutes.STATIC_FAQ}
        component={() => <div>STATIC FAQ PAGE</div>}
      />
      <Route exact path={allRoutes.CHECK_EMAIL} component={Email} />
    </Switch>
  );
};

export default Routes;
