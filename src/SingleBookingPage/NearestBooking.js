// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import BookingNotFound from './BookingNotFound';
import OneWay from './bookingTypes/OneWay';
import Return from './bookingTypes/Return';
import Multicity from './bookingTypes/Multicity';
import Contact from './bookingItem/Contact';
import Notification from './bookingItem/Notification';
import Header from './bookingItem/Header';
import bookingTypes from '../common/booking/bookingTypes';
import { URGENCY_THRESHOLD } from '../helpers/dateUtils';
import type { NearestBooking_bookingEdges } from './__generated__/NearestBooking_bookingEdges.graphql';

type Props = {|
  bookingEdges: NearestBooking_bookingEdges,
|};

class NearestBooking extends React.Component<Props> {
  getDate = booking => {
    let date = 0;
    const type = idx(booking, _ => _.type);

    if (type === bookingTypes.ONE_WAY) {
      date = idx(booking, _ => _.oneWay.trip.arrival.time) || 0;
    }

    if (type === bookingTypes.RETURN) {
      date = idx(booking, _ => _.return.inbound.arrival.time) || 0;
    }

    if (type === bookingTypes.MULTICITY) {
      date = idx(booking, _ => _.multicity.end.time) || 0;
    }

    return new Date(date);
  };

  getBookingByType = booking => {
    if (booking.type === bookingTypes.ONE_WAY) {
      return booking.oneWay;
    }

    if (booking.type === bookingTypes.RETURN) {
      return booking.return;
    }

    if (booking.type === bookingTypes.MULTICITY) {
      return booking.multicity;
    }

    return null;
  };

  renderByType = booking => {
    const bookingByType = this.getBookingByType(booking);

    if (booking.type === bookingTypes.ONE_WAY) {
      return <OneWay booking={bookingByType} />;
    }

    if (booking.type === bookingTypes.RETURN) {
      return <Return booking={bookingByType} />;
    }

    if (booking.type === bookingTypes.MULTICITY) {
      return <Multicity booking={bookingByType} />;
    }

    return null;
  };

  getNearestBooking = bookings => {
    if (!bookings || bookings.length === 0) {
      return null;
    }

    const bookingsWithDelta = bookings
      .map(bookingEdge => {
        if (!bookingEdge || !bookingEdge.node) {
          return null;
        }

        const booking = bookingEdge.node;
        const delta = this.getDate(booking) - new Date();

        return { delta, booking: booking };
      })
      .filter(Boolean);
    const nearestUpcomingBooking = bookingsWithDelta
      .filter(({ delta }) => delta > 0)
      .reduce((nearestBooking, bookingWithDelta) => {
        if (!nearestBooking) {
          return bookingWithDelta;
        }

        if (nearestBooking.delta > bookingWithDelta.delta) {
          return bookingWithDelta;
        }

        return nearestBooking;
      }, null);

    // T.O.D.O. return nearest past booking (let's wait for another GraphQL update)
    return nearestUpcomingBooking || null;
  };

  render() {
    const { bookingEdges } = this.props;
    const nearestBooking = this.getNearestBooking(bookingEdges);

    if (nearestBooking) {
      const deltaInHours = nearestBooking.delta / 36e5; // ms to hours
      const isUrgent = deltaInHours > 0 && deltaInHours < URGENCY_THRESHOLD;

      return (
        <div className="nearestBooking">
          <Header booking={this.getBookingByType(nearestBooking.booking)} />
          <Notification isUrgent={isUrgent} hoursLeft={deltaInHours} />
          {this.renderByType(nearestBooking.booking)}
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={nearestBooking.booking.directAccessURL}
            >
              <button className="manage-booking">Manage my booking</button>
            </a>
          </div>
          {isUrgent && <Contact />}
          <style jsx>
            {`
              .nearestBooking {
                width: 480px;
                padding: 40px;
                background-color: #f5f7f9;
                height: 100%;
              }
              .buttons {
                display: flex;
                justify-content: center;
                margin-top: 24px;
              }
              .manage-booking {
                font-weight: bold;
                font-size: 14px;
                width: 260px;
                height: 44px;
                padding: 12px 42px;
                border-radius: 3px;
                background-color: #e8edf1;
                border: none;
                color: #46515e;
                cursor: pointer;
              }
            `}
          </style>
        </div>
      );
    }

    return <BookingNotFound />;
  }
}

export default createFragmentContainer(
  NearestBooking,
  graphql`
    fragment NearestBooking_bookingEdges on BookingEdge @relay(plural: true) {
      node {
        type
        oneWay {
          databaseId
          trip {
            arrival {
              time
            }
          }
          ...OneWay_booking
          ...Header_booking
        }
        return {
          databaseId
          inbound {
            arrival {
              time
            }
          }
          ...Return_booking
          ...Header_booking
        }
        multicity {
          databaseId
          end {
            time
          }
          ...Multicity_booking
          ...Header_booking
        }
        directAccessURL
      }
    }
  `,
);
