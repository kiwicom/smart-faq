// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';

import UrlSync from './URLSyncer';
import Redirector from './Redirector';
import Intro from './IntroPage';
import SignIn from './SignInPage';
import KiwiLogin from './KiwiLogin';
import ForgottenPassword from './ForgottenPassword';
import { CheckRecoveryLink, CheckMagicLink } from './EmailPage';
import ContentPage from './common/layout/ContentPage';

const Routes = () => {
  return (
    <MemoryRouter>
      <React.Fragment>
        <Redirector />
        <UrlSync />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/kiwi-login" component={KiwiLogin} />
          <Route path="/check-magic-link" component={CheckMagicLink} />
          <Route path="/check-recovery-link" component={CheckRecoveryLink} />
          <Route path="/forgotten-password" component={ForgottenPassword} />
          <Route exact path="/faq/:categoryId?" component={ContentPage} />
          <Route
            path="/faq/:categoryId/article/:articleId"
            component={ContentPage}
          />
        </Switch>
      </React.Fragment>
    </MemoryRouter>
  );
};

export default Routes;
