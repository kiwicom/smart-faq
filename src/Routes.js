// @flow

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import Intro from './IntroPage';
import Email from './EmailPage';
import StaticFAQ from './StaticFAQ';
import SignIn from './SignInPage';
import KiwiLogin from './KiwiLogin';
import routeDefinitions from './routeDefinitions';
import store from './store';
import Layout from './Layout';

const Routes = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path={routeDefinitions.HOME} component={Intro} />
          <Route path={routeDefinitions.SIGN_IN} component={SignIn} />
          <Route path={routeDefinitions.STATIC_FAQ} component={StaticFAQ} />
          <Route exact path={routeDefinitions.CHECK_EMAIL} component={Email} />
          <Route
            exact
            path={routeDefinitions.KIWI_LOGIN}
            component={KiwiLogin}
          />
        </Switch>
      </Layout>
    </Provider>
  );
};

export default Routes;
