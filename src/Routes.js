// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import Intro from './IntroPage';
import StaticFAQ from './StaticFAQ';
import SignIn from './SignInPage';
import KiwiLogin from './KiwiLogin';
import UpcomingBooking from './UpcomingBooking';
import ForgottenPassword from './ForgottenPassword';
import { CheckRecoveryLink, CheckMagicLink } from './EmailPage';
import routeDefinitions from './routeDefinitions';

const Routes = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path={routeDefinitions.HOME} component={UpcomingBooking} />
        <Route exact path={routeDefinitions.SIGN_IN} component={SignIn} />
        <Route
          exact
          path={`${routeDefinitions.STATIC_FAQ}/:categoryId?`}
          component={StaticFAQ}
        />
        <Route exact path={routeDefinitions.KIWI_LOGIN} component={KiwiLogin} />
        <Route
          exact
          path={routeDefinitions.CHECK_MAGIC_LINK}
          component={CheckMagicLink}
        />
        <Route
          exact
          path={routeDefinitions.CHECK_RECOVERY_LINK}
          component={CheckRecoveryLink}
        />
        <Route
          exact
          path={routeDefinitions.FORGOTTEN_PASSWORD}
          component={ForgottenPassword}
        />
      </Switch>
    </MemoryRouter>
  );
};

export default Routes;
