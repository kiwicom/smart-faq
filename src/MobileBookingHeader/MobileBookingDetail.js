// @flow

import * as React from "react";
import { DateTime } from "luxon";
import { graphql, createFragmentContainer } from "react-relay";
import idx from "idx";

import bookingTypes from "../common/booking/bookingTypes";
import { URGENCY_THRESHOLD } from "../helpers/dateUtils";
import type { MobileBookingDetail_booking } from "./__generated__/MobileBookingDetail_booking.graphql";
import OneWayTrip from "./OneWayTrip";
import ReturnTrip from "./ReturnTrip";
import css from "styled-jsx/css";
import formatBookingId from "../helpers/formatBookingId";

type Props = {|
  booking: MobileBookingDetail_booking,
|};

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
      return <OneWayTrip booking={booking} />;
      //return <MulticityOverlay booking={booking} />;
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
    return (
      <React.Fragment>
        <div className="TripId">{`Upcoming trip #${formatBookingId(booking.databaseId)}`}</div>
        {this.renderByType(booking)}
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
        ...MulticityOverlay_booking
        start {
          time
        }
      }
    }
  `,
);
