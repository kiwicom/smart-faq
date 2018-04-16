// @flow

import { Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import css from 'styled-jsx/css';
import withAuth from '../HOC/withAuth';
import ContentHeader from '../ContentHeader';
import StaticFAQ from '../StaticFAQ';
import FAQArticleDetail from '../StaticFAQ/FAQArticleDetail';
import UpcomingBooking from '../UpcomingBooking';
import routeDefinitions from '../routeDefinitions';

const style = css`
  div.ContentPage {
    position: absolute;
    right: 0;
    min-width: 480px;
    height: 100vh;
  }
  div.ContentPage .Header {
    display: flex;
    align-items: center;
    height: 64px;
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
const ContentPage = () => {
  return (
    <div className="ContentPage">
      <div className="Header">
        <ContentHeader />
      </div>
      <div className="Body">
        <div className="BookingInfo">{BookingRoutes}</div>
        <div className="FAQ">
          <MemoryRouter
            initialEntries={[routeDefinitions.STATIC_FAQ]}
            initialIndex={0}
          >
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
        </div>
      </div>
      <style jsx global>
        {style}
      </style>
    </div>
  );
};

export default withAuth(ContentPage);
