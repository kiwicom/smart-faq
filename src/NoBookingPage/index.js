// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import css from 'styled-jsx/css';

import ContentHeader from '../ContentHeader';
import StaticFAQ from '../StaticFAQ';
import FAQArticleDetail from '../StaticFAQ/FAQArticleDetail';
import routeDefinitions from '../routeDefinitions';

const style = css`
  div.NoBookingPage {
    position: absolute;
    right: 0;
    min-width: 480px;
    height: 100vh;
  }
  div.NoBookingPage .Header {
    display: flex;
    align-items: center;
    height: 64px;
  }
  div.NoBookingPage .Body {
    display: flex;
    height: calc(100% - (64px));
  }
  div.FAQ {
    width: 480px;
  }
`;

const FAQRoutes = (
  <MemoryRouter initialEntries={[routeDefinitions.STATIC_FAQ]} initialIndex={0}>
    <Switch>
      <Route
        exact
        path={`${routeDefinitions.STATIC_FAQ}/:categoryId?`}
        component={StaticFAQ}
      />
      <Route
        exact
        path={`${routeDefinitions.FAQ_ARTICLE}/:articleId`}
        component={FAQArticleDetail}
      />
    </Switch>
  </MemoryRouter>
);
const NoBookingPage = () => {
  return (
    <div className="NoBookingPage">
      <div className="Header">
        <ContentHeader />
      </div>
      <div className="Body">{FAQRoutes}</div>
      <style jsx global>
        {style}
      </style>
    </div>
  );
};

export default NoBookingPage;
