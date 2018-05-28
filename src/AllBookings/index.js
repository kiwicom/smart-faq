// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql } from 'react-relay';
import css from 'styled-jsx/css';
import { Heading } from '@kiwicom/orbit-components';

import QueryRenderer from '../relay/QueryRenderer';
import BookingError from '../SingleBookingPage/BookingError';
import BookingCardList from './BookingCardsList';
import { Loader } from '../common';
import type { AllBookingsQuery } from './__generated__/AllBookingsQuery.graphql';

const styles = css`
  .allBookings {
    width: 548px;
    padding: 40px 30px 40px 30px;
    background-color: #f5f7f9;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
  }
  div.subtitle {
    margin-top: 14px;
    margin-bottom: 12px;
  }
  div.scroll {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 305px;
  }
`;

type Props = {|
  returnToLogin: () => void,
|};

type AllBookingsQueryProps = {
  props: ?AllBookingsQuery,
  error: ?Error,
};

const allBookingsQuery = graphql`
  query AllBookingsQuery {
    future: allBookings(only: FUTURE) {
      ...BookingCardsList_booking
    }
    past: allBookings(only: PAST) {
      ...BookingCardsList_booking
    }
  }
`;

class AllBooking extends React.Component<Props> {
  renderBookings = (queryProps: AllBookingsQueryProps) => {
    const { props, error } = queryProps;

    const future = idx(props, _ => _.future);
    const past = idx(props, _ => _.past);

    if (error) {
      return <BookingError />;
    }

    return (
      <div className="allBookings">
        <Heading weight="medium" size="medium">
          Bookings
        </Heading>
        {!future && !past && <Loader />}
        {future && (
          <React.Fragment>
            <div className="subtitle">
              <Heading weight="medium" size="small">
                Upcoming
              </Heading>
            </div>
            <BookingCardList booking={future} />
          </React.Fragment>
        )}
        {past && (
          <React.Fragment>
            <div className="subtitle">
              <Heading weight="medium" size="small">
                Past
              </Heading>
            </div>
            <BookingCardList booking={past} />
          </React.Fragment>
        )}
        <style>{styles}</style>
      </div>
    );
  };

  render() {
    return (
      <QueryRenderer
        query={allBookingsQuery}
        render={this.renderBookings}
        cacheConfig={{ force: true }}
        variables={{}}
        logoutCallback={this.props.returnToLogin}
      />
    );
  }
}

export default AllBooking;
