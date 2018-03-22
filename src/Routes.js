// @flow

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import Intro from './IntroPage';
import StaticFAQ from './StaticFAQ';
import SignIn from './SignInPage';
import KiwiLogin from './KiwiLogin';
import ForgottenPassword from './ForgottenPassword';
import { CheckRecoveryLink, CheckMagicLink } from './EmailPage';
import routeDefinitions from './routeDefinitions';
import store from './store';
import Layout from './Layout';

const Routes = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path={routeDefinitions.HOME} component={Intro} />
          <Route exact path={routeDefinitions.SIGN_IN} component={SignIn} />
          <Route
            exact
            path={routeDefinitions.STATIC_FAQ}
            component={StaticFAQ}
          />
          <Route
            exact
            path={routeDefinitions.KIWI_LOGIN}
            component={KiwiLogin}
          />
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
      </Layout>
    </Provider>
  );
};

export default Routes;
