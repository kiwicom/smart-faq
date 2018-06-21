// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';

import UrlSync from './UrlSync';
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
    <MemoryRouter initialEntries={[props.initialRoute]} initialIndex={0}>
      <UrlSync>
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
      </UrlSync>
    </MemoryRouter>
  );
};

export default Routes;
