// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

import QueryRenderer from '../relay/QueryRenderer';
import { Loader } from '../common';
import bookingTypes from '../common/booking/bookingTypes';
import BookingError from '../SingleBookingPage/BookingError';
import OneWayBooking from './BookingTypes/OneWayBooking';
import ReturnBooking from './BookingTypes/ReturnBooking';
import MulticityBooking from './BookingTypes/MulticityBooking';
import type { AllBookingsQuery } from './__generated__/AllBookingsQuery.graphql';

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
  query AllBookingsQuery($only: AllBookingsOnlyEnum) {
    allBookings(only: $only) {
      edges {
        node {
          id
          type
          oneWay {
            ...OneWayBooking_booking
          }
          return {
            ...ReturnBooking_booking
          }
          multicity {
            ...MulticityBooking_booking
          }
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

    return bookings.length ? this.renderCardsByType(bookings) : <Loader />;
  };

  renderAllBookings = (only: string) => (
    <QueryRenderer
      query={allBookingsQuery}
      render={this.renderBookings}
      cacheConfig={{ force: true }}
      variables={{ only }}
    />
  );

  renderCardsByType = (bookings: AllBookingsQuery[]) => (
    <div className="scroll">
      {bookings.map(booking => {
        const { type, id } = booking;
        switch (type) {
          case bookingTypes.ONE_WAY:
            return <OneWayBooking key={id} booking={booking.oneWay} />;
          case bookingTypes.RETURN:
            return <ReturnBooking key={id} booking={booking.return} />;
          case bookingTypes.MULTICITY:
            return <MulticityBooking key={id} booking={booking.multicity} />;
        }
        return null;
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
