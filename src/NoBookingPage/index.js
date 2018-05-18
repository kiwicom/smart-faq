// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import css from 'styled-jsx/css';

import Intro from '../IntroPage';
import SignIn from '../SignInPage';
import KiwiLogin from '../KiwiLogin';
import ForgottenPassword from '../ForgottenPassword';
import { CheckRecoveryLink, CheckMagicLink } from '../EmailPage';
import StaticFAQ from '../StaticFAQ';
import FAQArticleDetail from '../StaticFAQ/FAQArticleDetail';
import routeDefinitions from '../routeDefinitions';

const style = css`
  div.NoBookingPage {
    max-width: 480px;
    min-width: 480px;
    height: 100vh;
  }
  div.NoBookingPage .Body {
    display: flex;
    height: calc(100% - (64px));
  }
  div.FAQ {
    width: 480px;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    div.NoBookingPage {
      min-width: 320px;
      width: 100vw;
    }

    div.FAQ {
      width: 100%;
    }
  }
`;

const FAQRoutes = (
  <MemoryRouter initialEntries={[routeDefinitions.STATIC_FAQ]} initialIndex={0}>
    <Switch>
      <Route exact path={routeDefinitions.HOME} component={Intro} />
      <Route exact path={routeDefinitions.SIGN_IN} component={SignIn} />
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
      <Route
        exact
        path={`${routeDefinitions.STATIC_FAQ}/:categoryId?`}
        component={StaticFAQ}
      />
      <Route
        exact
        path={`${routeDefinitions.FAQ_ARTICLE}/:categoryId/:articleId`}
        component={FAQArticleDetail}
      />
    </Switch>
  </MemoryRouter>
);
const NoBookingPage = () => (
  <div className="NoBookingPage">
    <div className="Body">{FAQRoutes}</div>
    <style jsx global>
      {style}
    </style>
  </div>
);

export default NoBookingPage;
