// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';

import Intro from './IntroPage';
import SignIn from './SignInPage';
import KiwiLogin from './KiwiLogin';
import ForgottenPassword from './ForgottenPassword';
import { CheckRecoveryLink, CheckMagicLink } from './EmailPage';
import StaticFAQ from './StaticFAQ';
import FAQArticleDetail from './StaticFAQ/FAQArticleDetail';
import ContentPage from './common/layout/ContentPage';

const Routes = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/kiwi-login" component={KiwiLogin} />
        <Route path="/check-magic-link" component={CheckMagicLink} />
        <Route path="/check-recovery-link" component={CheckRecoveryLink} />
        <Route path="/forgotten-password" component={ForgottenPassword} />
        <Route
          exact
          path="/faq/:categoryId?"
          component={ContentPage(StaticFAQ)}
        />
        <Route
          path="/faq/:categoryId/article/:articleId"
          component={ContentPage(FAQArticleDetail)}
        />
      </Switch>
    </MemoryRouter>
  );
};

export default Routes;
