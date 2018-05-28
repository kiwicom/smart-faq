// @flow

import { withRouter, Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import css from 'styled-jsx/css';
import type { RouterHistory } from 'react-router-dom';

import ContentHeader from '../ContentHeader';
import StaticFAQ from '../StaticFAQ';
import FAQArticleDetail from '../StaticFAQ/FAQArticleDetail';
import AllBookings from '../AllBookings';
import routeDefinitions from '../routeDefinitions';
import NearestBooking from '../SingleBookingPage/NearestBooking';
import SelectedBooking from '../SingleBookingPage/SelectedBooking';

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
  div.BookingInfo {
    width: 548px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .BookingInfo {
      display: none;
    }

    div.ContentPage {
      min-width: 320px;
      width: 100vw;
    }

    div.FAQ {
      width: 100%;
    }
  }
`;

const BookingRoutes = (returnToLogin: () => void) => (
  <MemoryRouter
    initialEntries={[routeDefinitions.NEAREST_BOOKING]}
    initialIndex={0}
  >
    <Switch>
      <Route
        exact
        path={routeDefinitions.NEAREST_BOOKING}
        component={props => (
          <NearestBooking {...props} returnToLogin={returnToLogin} />
        )}
      />
      <Route
        exact
        path={`${routeDefinitions.SELECTED_BOOKING}/:bookingId`}
        component={props => (
          <SelectedBooking {...props} returnToLogin={returnToLogin} />
        )}
      />
      <Route
        exact
        path={routeDefinitions.ALL_BOOKINGS}
        component={props => (
          <AllBookings {...props} returnToLogin={returnToLogin} />
        )}
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
        path={`${routeDefinitions.FAQ_ARTICLE}/:categoryId/:articleId`}
        component={FAQArticleDetail}
      />
    </Switch>
  </MemoryRouter>
);

type Props = {
  history: RouterHistory,
};
const ContentPage = (props: Props) => {
  const returnToLogin = () =>
    props.history.push({
      pathname: routeDefinitions.SIGN_IN,
      state: { sessionExpired: true },
    });
  return (
    <div className="ContentPage">
      <ContentHeader />
      <div className="Body">
        <div className="BookingInfo">{BookingRoutes(returnToLogin)}</div>
        <div className="FAQ">{FAQRoutes}</div>
      </div>
      <style jsx global>
        {style}
      </style>
    </div>
  );
};

export default withRouter(ContentPage);
