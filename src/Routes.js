// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';

import Intro from './IntroPage';
import ContentPage from './ContentPage';
import NoBookingPage from './NoBookingPage';
import SignIn from './SignInPage';
import SignOut from './SignOutPage';
import KiwiLogin from './KiwiLogin';
import ForgottenPassword from './ForgottenPassword';
import { CheckRecoveryLink, CheckMagicLink } from './EmailPage';
import routeDefinitions from './routeDefinitions';

const Routes = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path={routeDefinitions.HOME} component={Intro} />
        <Route exact path={routeDefinitions.SIGN_IN} component={SignIn} />
        <Route exact path={routeDefinitions.SIGN_OUT} component={SignOut} />
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
        <Route exact path={routeDefinitions.CONTENT} component={ContentPage} />
        <Route
          exact
          path={routeDefinitions.NO_BOOKING}
          component={NoBookingPage}
        />
      </Switch>
    </MemoryRouter>
  );
};

export default Routes;
