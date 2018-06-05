// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { ChevronDown, ChevronUp } from '@kiwicom/orbit-components/lib/icons';
import css from 'styled-jsx/css';

import bookingTypes from '../common/booking/bookingTypes';
import type { MobileBookingDetail_booking } from './__generated__/MobileBookingDetail_booking.graphql';
import OneWayTrip from './OneWayTrip';
import ReturnTrip from './ReturnTrip';
import MultiCityTrip from './MultiCityTrip';
import formatBookingId from '../helpers/formatBookingId';

type Props = {|
  +booking: MobileBookingDetail_booking,
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
  +manageBookingURL: ?string,
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
    {/* Disabled until we have a design for booking selection page */}
    {/* <div className="selectBookingButton">select another booking</div> */}
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

  .topRow {
    display: flex;
  }

  .Chevron {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
  }
`;

type State = {
  expanded: boolean,
};

class MobileBookingDetail extends React.Component<Props, State> {
  state = {
    expanded: false,
  };

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

  toggle() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    const { booking } = this.props;
    return (
      <React.Fragment>
        <div className="topRow">
          <div style={{ flexGrow: 1 }}>
            {booking.databaseId && (
              <div className="TripId">
                {`Upcoming trip # ${formatBookingId(booking.databaseId)}`}
              </div>
            )}
            {this.renderByType(booking)}
          </div>
          <div
            className="Chevron"
            onClick={() => this.toggle()}
            onKeyDown={() => this.toggle()}
            role="button"
            tabIndex="0"
          >
            {this.state.expanded ? (
              <ChevronUp customColor="#bac7d5" />
            ) : (
              <ChevronDown customColor="#bac7d5" />
            )}
          </div>
        </div>
        {this.state.expanded ? (
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
      }
      ... on BookingReturn {
        ...ReturnTrip_booking
      }
      ... on BookingMulticity {
        ...MultiCityTrip_booking
      }
    }
  `,
);
