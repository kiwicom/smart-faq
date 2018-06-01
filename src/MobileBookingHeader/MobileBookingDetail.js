// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';
import css from 'styled-jsx/css';

import bookingTypes from '../common/booking/bookingTypes';
import type { MobileBookingDetail_booking } from './__generated__/MobileBookingDetail_booking.graphql';
import OneWayTrip from './OneWayTrip';
import ReturnTrip from './ReturnTrip';
import MultiCityTrip from './MultiCityTrip';
import formatBookingId from '../helpers/formatBookingId';

type Props = {|
  booking: MobileBookingDetail_booking,
  expanded: boolean,
|};

const MobileBookingControlsStyle = css`
  .manageBookingButton {
    height: 32px;
    line-height: 32px;
    border-radius: 3px;
    background-color: #e8edf1;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    color: #46515e;
    margin: 4px 0;
    display: block;
    text-decoration: none;
  }

  .selectBookingButton {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
    color: #00a991;
    margin-top: 12px;
    margin-bottom: 8px;
  }
`;

type MobileBookingControlsProps = {|
  manageBookingURL: ?string,
|};

const MobileBookingControls = (props: MobileBookingControlsProps) => (
  <React.Fragment>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={props.manageBookingURL}
      className="manageBookingButton"
    >
      Manage My Booking
    </a>
    <div className="selectBookingButton">select another booking</div>
    <style jsx>{MobileBookingControlsStyle}</style>
  </React.Fragment>
);

const MobileBookingSummaryStyle = css`
  .TripId {
    font-size: 14px;
    line-height: 1.4;
    color: #7f91a8;
    margin-top: 8px;
  }
`;

class MobileBookingDetail extends React.Component<Props> {
  renderByType = booking => {
    if (booking.type === bookingTypes.ONE_WAY) {
      return <OneWayTrip booking={booking} />;
    }

    if (booking.type === bookingTypes.RETURN) {
      return <ReturnTrip booking={booking} />;
    }

    if (booking.type === bookingTypes.MULTICITY) {
      return <MultiCityTrip booking={booking} />;
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
    const { booking, expanded } = this.props;
    return (
      <React.Fragment>
        <div className="TripId">
          {`Upcoming trip #${formatBookingId(booking.databaseId)}`}
        </div>
        {this.renderByType(booking)}
        {expanded ? (
          <div className="bottomRow">
            <MobileBookingControls manageBookingURL={booking.directAccessURL} />
          </div>
        ) : null}
        <style jsx>{MobileBookingSummaryStyle}</style>
      </React.Fragment>
    );
  }
}

export default createFragmentContainer(
  MobileBookingDetail,
  graphql`
    fragment MobileBookingDetail_booking on BookingInterface {
      type
      databaseId
      directAccessURL
      ...Contact_info
      ...Header_booking
      ... on BookingOneWay {
        ...OneWayTrip_booking
        trip {
          departure {
            time
          }
        }
      }
      ... on BookingReturn {
        ...ReturnTrip_booking
        outbound {
          departure {
            time
          }
        }
      }
      ... on BookingMulticity {
        ...MultiCityTrip_booking
        start {
          time
        }
      }
    }
  `,
);
