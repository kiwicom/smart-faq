// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql } from 'react-relay';
import css from 'styled-jsx/css';
import { Heading } from '@kiwicom/orbit-components';

import QueryRenderer from '../relay/QueryRenderer';
import BookingError from '../SingleBookingPage/BookingError';
import { Loader, ScrollableContent } from '../common';
import BookingCardsList from './BookingCardsList';
import type { AllBookingsQuery } from './__generated__/AllBookingsQuery.graphql';

const styles = css`
  .allBookings {
    width: 100%;
    height: 100%;
    padding: 40px 30px 40px 30px;
  }
  div.scroll {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 305px;
  }
`;

type Props = {||};

type AllBookingsQueryProps = {
  props: ?AllBookingsQuery,
  error: ?Error,
};

const allBookingsQuery = graphql`
  query AllBookingsQuery {
    future: customerBookings(only: FUTURE) {
      ...BookingCardsList_booking
    }
    past: customerBookings(only: PAST) {
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
      <ScrollableContent styles="background-color: #f5f7f9;">
        <div className="allBookings">
          <Heading weight="medium" size="medium">
            Bookings
          </Heading>
          {future && (
            <div data-cy="upcoming-bookings">
              <BookingCardsList booking={future} title="Upcoming" />
            </div>
          )}
          {past && (
            <div data-cy="past-bookings">
              <BookingCardsList booking={past} title="Past" />
            </div>
          )}
          {!future && !past && <Loader />}
          <style>{styles}</style>
        </div>
      </ScrollableContent>
    );
  };

  render() {
    return (
      <QueryRenderer
        query={allBookingsQuery}
        render={this.renderBookings}
        cacheConfig={{ force: true }}
        variables={{}}
      />
    );
  }
}

export default AllBooking;
