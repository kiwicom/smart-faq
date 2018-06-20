// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';

import Intro from './IntroPage';
import SignIn from './SignInPage';
import KiwiLogin from './KiwiLogin';
import ForgottenPassword from './ForgottenPassword';
import { CheckRecoveryLink, CheckMagicLink } from './EmailPage';
import ContentPage from './common/layout/ContentPage';

type Props = {|
  initialRoute: string,
|};

const Routes = (props: Props) => {
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Switch>
        <Route
          exact
          path="/"
          render={p => <Intro initialRoute={props.initialRoute} {...p} />}
        />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/kiwi-login" component={KiwiLogin} />
        <Route path="/check-magic-link" component={CheckMagicLink} />
        <Route path="/check-recovery-link" component={CheckRecoveryLink} />
        <Route path="/forgotten-password" component={ForgottenPassword} />
        <Route
          exact
          path="/faq/:categoryId?"
          render={p => <ContentPage initialRoute={props.initialRoute} {...p} />}
        />
        <Route
          path="/faq/:categoryId/article/:articleId"
          render={p => <ContentPage initialRoute={props.initialRoute} {...p} />}
        />
      </Switch>
    </MemoryRouter>
  );
};

export default Routes;
