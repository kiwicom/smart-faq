// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

import QueryRenderer from '../relay/QueryRenderer';
import { Loader } from '../common';
import BookingError from '../SingleBookingPage/BookingError';
import BookingCard from './BookingCard';
import type { AllBookingsQuery } from './__generated__/AllBookingsQuery.graphql';
import type { BookingCard_booking } from './__generated__/BookingCard_booking.graphql';

const styles = css`
  .allBookings {
    width: 548px;
    padding: 40px 30px 40px 30px;
    background-color: #f5f7f9;
    height: 100%;
  }
  div.subtitle {
    margin-top: 14px;
    margin-bottom: 12px;
  }
  div.scroll {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 280px;
  }
`;

type Props = {||};

type AllBookingsQueryProps = {
  props: ?AllBookingsQuery,
  error: ?Error,
};

const allBookingsQuery = graphql`
  query AllBookingsQuery($only: AllBookingsOnlyEnum) {
    allBookings(only: $only) {
      edges {
        node {
          ...BookingCard_booking
        }
      }
    }
  }
`;

class AllBooking extends React.Component<Props> {
  renderBookings = (queryProps: AllBookingsQueryProps) => {
    const { props, error } = queryProps;

    if (error) {
      return <BookingError />;
    }

    const edges = idx(props, _ => _.allBookings.edges) || [];
    const bookings = edges.map(edge => edge.node);

    return props ? this.renderCards(bookings) : <Loader />;
  };

  renderAllBookings = (only: string) => (
    <QueryRenderer
      query={allBookingsQuery}
      render={this.renderBookings}
      cacheConfig={{ force: true }}
      variables={{ only }}
    />
  );

  renderCards = (bookings: BookingCard_booking[]) => (
    <div className="scroll">
      {bookings.map((booking, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <BookingCard key={i} booking={booking} />;
      })}
    </div>
  );

  render() {
    return (
      <div className="allBookings">
        <Typography size="header" type="attention">
          Bookings
        </Typography>
        <div className="subtitle">
          <Typography size="large" type="attention" variant="bold">
            Upcoming
          </Typography>
        </div>
        {this.renderAllBookings('FUTURE')}
        <div className="subtitle">
          <Typography size="large" type="primary" variant="bold">
            Past
          </Typography>
        </div>
        {this.renderAllBookings('PAST')}
        <style>{styles}</style>
      </div>
    );
  }
}

export default AllBooking;
