// @flow

import { Route, Switch } from 'react-router-dom';
import * as React from 'react';

import Intro from './IntroPage';
import SignIn from './SignInPage';
import KiwiLogin from './KiwiLogin';
import ForgottenPassword from './ForgottenPassword';
import { CheckRecoveryLink, CheckMagicLink } from './EmailPage';
import ContentPage from './common/layout/ContentPage';
import QueryParamRouter from './helpers/QueryParamRouter';

type Props = {|
  route: string,
|};

const Routes = (props: Props) => {
  return (
    <QueryParamRouter route={props.route}>
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
        <Route path="/emergency/:categoryId" component={ContentPage} />
        <Route
          path="/emergency/:categoryId/article/:articleId"
          component={ContentPage}
        />
      </Switch>
    </QueryParamRouter>
  );
};

export default Routes;
