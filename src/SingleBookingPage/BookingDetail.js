// @flow

import * as React from 'react';
import { DateTime } from 'luxon';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import OneWay from './bookingTypes/OneWay';
import Return from './bookingTypes/Return';
import MulticityOverlay from './bookingTypes/MulticityOverlay';
import Contact from './bookingItem/Contact';
import Notification from './bookingItem/Notification';
import Header from './bookingItem/Header';
import bookingTypes from '../common/booking/bookingTypes';
import { URGENCY_THRESHOLD } from '../helpers/dateUtils';
import type { NearestBooking_booking } from './__generated__/NearestBookingQuery.graphql';

type Props = {|
  booking: NearestBooking_booking,
|};

class BookingDetail extends React.Component<Props> {
  renderByType = booking => {
    if (booking.type === bookingTypes.ONE_WAY) {
      return <OneWay booking={booking} />;
    }

    if (booking.type === bookingTypes.RETURN) {
      return <Return booking={booking} />;
    }

    if (booking.type === bookingTypes.MULTICITY) {
      return <MulticityOverlay booking={booking} />;
    }

    return null;
  };

  getDepartureByType = booking => {
    let date = null;

    if (booking.type === bookingTypes.ONE_WAY) {
      date = idx(booking, _ => _.trip.departure.time);
    }

    if (booking.type === bookingTypes.RETURN) {
      date = idx(booking, _ => _.outbound.departure.time);
    }

    if (booking.type === bookingTypes.MULTICITY) {
      date = idx(booking, _ => _.start.time);
    }

    return date ? new Date(date) : null;
  };

  render() {
    const { booking } = this.props;
    const { contactDetails } = booking;
    const departure = this.getDepartureByType(booking);
    const timeDelta = departure
      ? DateTime.fromJSDate(departure, { zone: 'utc' }).diffNow('hours').hours
      : null;
    const isUrgent =
      timeDelta !== null && URGENCY_THRESHOLD > timeDelta && timeDelta >= 0;
    // show notification only when the whole trip doesn't started yet
    const showNotification = timeDelta !== null && timeDelta > 0;

    return (
      <div className="nearestBooking">
        <Header booking={booking} isFuture={showNotification} />
        {showNotification &&
          timeDelta && (
            <Notification hoursLeft={timeDelta} isUrgent={isUrgent} />
          )}
        {this.renderByType(booking)}
        <div className="buttons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={booking.directAccessURL}
          >
            <button className="manage-booking">Manage my booking</button>
          </a>
        </div>
        {isUrgent && <Contact contactDetails={contactDetails} />}
        <style jsx>
          {`
            .nearestBooking {
              width: 100%;
              padding: 40px;
              background-color: #f5f7f9;
              height: 100%;
              overflow-y: auto;
              overflow-x: hidden;
              max-height: 100%;
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
}

export default createFragmentContainer(
  BookingDetail,
  graphql`
    fragment BookingDetail_booking on BookingInterface {
      type
      directAccessURL
      contactDetails {
        phone
        email
      }
      ...Header_booking
      ... on BookingOneWay {
        ...OneWay_booking
        trip {
          departure {
            time
          }
        }
      }
      ... on BookingReturn {
        ...Return_booking
        outbound {
          departure {
            time
          }
        }
      }
      ... on BookingMulticity {
        ...MulticityOverlay_booking
        start {
          time
        }
      }
    }
  `,
);
