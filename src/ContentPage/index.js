// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import css from 'styled-jsx/css';

import ContentHeader from '../ContentHeader';
import StaticFAQ from '../StaticFAQ';
import FAQArticleDetail from '../StaticFAQ/FAQArticleDetail';
import UpcomingBooking from '../UpcomingBooking';
import routeDefinitions from '../routeDefinitions';

const style = css`
  div.ContentPage {
    min-width: 480px;
    height: 100vh;
  }
  div.ContentPage .Body {
    display: flex;
    height: calc(100% - (64px));
  }
  div.FAQ {
    width: 480px;
  }
`;

const BookingRoutes = (
  <MemoryRouter
    initialEntries={[routeDefinitions.UPCOMING_BOOKING]}
    initialIndex={0}
  >
    <Switch>
      <Route
        exact
        path={routeDefinitions.UPCOMING_BOOKING}
        component={UpcomingBooking}
      />
    </Switch>
  </MemoryRouter>
);
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
const ContentPage = () => {
  return (
    <div className="ContentPage">
      <ContentHeader />
      <div className="Body">
        <div className="BookingInfo">{BookingRoutes}</div>
        <div className="FAQ">{FAQRoutes}</div>
      </div>
      <style jsx global>
        {style}
      </style>
    </div>
  );
};

export default ContentPage;
