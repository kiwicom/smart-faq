// @flow

import idx from 'idx';
import * as React from 'react';
import css from 'styled-jsx/css';
import { DateTime } from 'luxon';
import { graphql, createFragmentContainer } from 'react-relay';
import { withRouter } from 'react-router-dom';
import { BaggageChecked, Ticket } from '@kiwicom/orbit-components/lib/icons';

import {
  isUrgentBooking,
  updateFAQSection,
  getDepartureTimeByType,
} from '../common/booking/utils';
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
import FAQExtraInfoButton from '../StaticFAQ/FAQExtraInfo/FAQExtraInfoButton';
import { BookingState } from '../context/BookingState';
import features from '../feature-toggles.json';

type ContextProps = {
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => void,
};

type ComponentProps = {
  +booking: NearestBooking_booking,
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => void,
};

type Props = ComponentProps;

const styles = css`
  .buttons {
    margin-top: 24px;
    margin-bottom: 20px;
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
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #00a991;
    margin-left: 8px;
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

const clickEticket = () =>
  simpleTracker('smartFAQBookingOverview', {
    action: 'clickOnEticket',
  });

class BookingDetail extends React.Component<Props> {
  componentDidMount() {
    updateFAQSection(this.props);
  }

  componentDidUpdate() {
    updateFAQSection(this.props);
  }

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
    const departureTime = getDepartureTimeByType(booking);
    const arrivalTime = this.getArrivalByType(booking);
    const departureInfo = this.decideIfIsFutureAndUrgent(departureTime);
    const arrivalInfo = this.decideIfIsFutureAndUrgent(arrivalTime);
    const { timeDelta, isFuture } = departureInfo;
    const isUrgent = isUrgentBooking(booking.isPastBooking, departureTime);

    return (
      <ScrollableContent
        dataCy="nearestBooking"
        styles="width: 100%; padding:40px; background-color: #f5f7f9;"
      >
        <div dataTest={arrivalInfo.isFuture ? 'upcoming' : 'past'}>
          <Header booking={booking} isFuture={arrivalInfo.isFuture} />
        </div>
        {isFuture &&
          booking.status === 'CONFIRMED' &&
          timeDelta && (
            <Notification hoursLeft={timeDelta} isUrgent={isUrgent} />
          )}
        {features.baggage_info && (
          <FAQExtraInfoButton category="baggage">
            <BaggageChecked customColor="#00a991" />
            <p className="iconLabel">Baggage</p>
          </FAQExtraInfoButton>
        )}
        <FAQExtraInfoButton category="boarding-passes">
          <Ticket customColor="#00a991" />
          <p className="iconLabel" data-cy="btn-boarding-passes">
            Boarding passes
          </p>
        </FAQExtraInfoButton>
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
          <a
            className="eTicket"
            href={eTicketLink}
            target="_blank"
            onClick={clickEticket}
          >
            Download e-ticket
          </a>
        )}
        {isUrgent && <Contact info={booking} />}
        <style jsx>{styles}</style>
      </ScrollableContent>
    );
  }
}

export const RawBookingDetail = BookingDetail;

const BookingDetailWithFAQHandler = (props: ComponentProps) => (
  <BookingState.Consumer>
    {({ onSetFAQSection }: ContextProps) => (
      <BookingDetail {...props} onSetFAQSection={onSetFAQSection} />
    )}
  </BookingState.Consumer>
);

export default createFragmentContainer(
  withRouter(BookingDetailWithFAQHandler),
  graphql`
    fragment BookingDetail_booking on BookingInterface {
      type
      status
      assets {
        ticketUrl
      }
      directAccessURL
      isPastBooking
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
