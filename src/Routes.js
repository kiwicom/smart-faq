// @flow

import { Route, Switch } from 'react-router-dom';
import * as React from 'react';
import Intro from './IntroPage';
import Email from './EmailPage';
import SignIn from './SignInPage';

export const allRoutes = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  CHECK_EMAIL: '/check-email',
  STATIC_FAQ: '/static-faq',
};
const Routes = () => {
  return (
    <Switch>
      <Route exact path={allRoutes.HOME} component={Intro} />
      <Route path={allRoutes.SIGN_IN} component={SignIn} />
      <Route
        path={allRoutes.STATIC_FAQ}
        component={() => <div>STATIC FAQ PAGE</div>}
      />
      <Route exact path={allRoutes.CHECK_EMAIL} component={Email} />
    </Switch>
  );
};

export default Routes;
