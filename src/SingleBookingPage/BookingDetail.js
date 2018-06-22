// @flow

import idx from 'idx';
import * as React from 'react';
import css from 'styled-jsx/css';
import { DateTime } from 'luxon';
import { withRouter } from 'react-router';
import { graphql, createFragmentContainer } from 'react-relay';
import { Baggages } from '@kiwicom/orbit-components/lib/icons';

import OneWay from './bookingTypes/OneWay';
import Return from './bookingTypes/Return';
import MulticityOverlay from './bookingTypes/MulticityOverlay';
import Contact from './bookingItem/Contact';
import Notification from './bookingItem/Notification';
import Header from './bookingItem/Header';
import { simpleTracker } from '../helpers/analytics/trackers';
import { ScrollableContent } from '../common';
import bookingTypes from '../common/booking/bookingTypes';
import { URGENCY_THRESHOLD } from '../helpers/dateUtils';
import replaceWithCurrentDomain from '../helpers/replaceWithCurrentDomain';
import type { NearestBooking_booking } from './__generated__/NearestBookingQuery.graphql';

type Props = {|
  booking: NearestBooking_booking,
  history: {
    push: string => void,
  },
|};

const styles = css`
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
  p.iconLabel {
    display: inline-block;
    width: 56px;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #00a991;
    margin-left: 8px;
  }
  button.baggageButton {
    width: 116px;
    height: 44px;
    border-radius: 3px;
    background-color: #f5f7f9;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 24px;
  }
  button.active {
    background-color: #e8edf1;
  }
  .eTicket {
    font-size: 14px;
    color: #171b1e;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }
  .eTicket:hover {
    color: #00907b;
  }
`;

const goToMMB = () =>
  simpleTracker('smartFAQBookingOverview', {
    action: 'goToMMB',
  });

const isBaggageActive = true;

class BookingDetail extends React.Component<Props> {
  renderByType = (booking: NearestBooking_booking) => {
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

  getDepartureByType = (booking: NearestBooking_booking) => {
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

  getArrivalByType = (booking: NearestBooking_booking) => {
    let date = null;

    if (booking.type === bookingTypes.ONE_WAY) {
      date = idx(booking, _ => _.trip.arrival.time);
    }

    if (booking.type === bookingTypes.RETURN) {
      date = idx(booking, _ => _.inbound.arrival.time);
    }

    if (booking.type === bookingTypes.MULTICITY) {
      date = idx(booking, _ => _.end.time);
    }

    return date ? new Date(date) : null;
  };

  decideIfIsFutureAndUrgent = (time: ?Date) => {
    const timeDelta = time
      ? DateTime.fromJSDate(time, { zone: 'utc' }).diffNow('hours').hours
      : null;
    const isUrgent =
      timeDelta !== null && URGENCY_THRESHOLD > timeDelta && timeDelta >= 0;
    return {
      timeDelta,
      isFuture: timeDelta !== null && timeDelta > 0,
      isUrgent,
    };
  };

  render() {
    const { booking } = this.props;
    const eTicketLink = idx(booking, _ => _.assets.ticketUrl);
    const departureTime = this.getDepartureByType(booking);
    const arrivalTime = this.getArrivalByType(booking);
    const departureInfo = this.decideIfIsFutureAndUrgent(departureTime);
    const arrivalInfo = this.decideIfIsFutureAndUrgent(arrivalTime);
    const { isUrgent, timeDelta } = departureInfo;
    const showContactInfo = departureInfo.isUrgent || arrivalInfo.isUrgent;

    return (
      <ScrollableContent
        dataCy="nearestBooking"
        styles="width: 100%; padding:40px; background-color: #f5f7f9;"
      >
        <Header booking={booking} isFuture={arrivalInfo.isFuture} />
        {departureInfo.isFuture &&
          booking.status === 'CONFIRMED' &&
          timeDelta && (
            <Notification hoursLeft={timeDelta} isUrgent={isUrgent} />
          )}
        <button
          className={`baggageButton ${isBaggageActive && 'active'}`}
          onClick={() => this.props.history.push('/faq/RkFRQ2F0ZWdvcnk6ODk=')}
        >
          <Baggages customColor="#00a991" />
          <p className="iconLabel">Bagagge</p>
        </button>
        {this.renderByType(booking)}
        <div className="buttons" data-cy="btn-manage-booking">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={replaceWithCurrentDomain(booking.directAccessURL)}
            onClick={goToMMB}
          >
            <button className="manage-booking">Manage My Booking</button>
          </a>
        </div>
        {eTicketLink && (
          <a className="eTicket" href={eTicketLink} target="_blank">
            Download e-ticket
          </a>
        )}
        {showContactInfo && <Contact info={booking} />}
        <style jsx>{styles}</style>
      </ScrollableContent>
    );
  }
}

export const RawBookingDetail = withRouter(BookingDetail);

export default createFragmentContainer(
  withRouter(BookingDetail),
  graphql`
    fragment BookingDetail_booking on BookingInterface {
      type
      status
      assets {
        ticketUrl
      }
      directAccessURL
      ...Header_booking
      ... on BookingOneWay {
        ...OneWay_booking
        trip {
          departure {
            time
          }
          arrival {
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
          arrival {
            time
          }
        }
        inbound {
          arrival {
            time
          }
        }
      }
      ... on BookingMulticity {
        ...MulticityOverlay_booking
        start {
          time
        }
        end {
          time
        }
      }
    }
  `,
);
