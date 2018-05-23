// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';

import OneWayBookingHeader from './BookingHeaders/OneWay';
import ReturnBookingHeader from './BookingHeaders/Return';
import MulticityBookingHeader from './BookingHeaders/Multicity';
import formatBookingId from '../../helpers/formatBookingId';
import { ClickAllBooking } from '../../context/BookingPage';
import bookingTypes from '../../common/booking/bookingTypes';
import bookingStatus from '../../common/booking/bookingStatuses';
import type { Header_booking } from './__generated__/Header_booking.graphql';

type Props = {|
  booking: Header_booking,
  isFuture: boolean,
|};

function renderHeaderTitleByType(type: string, booking: Header_booking) {
  switch (type) {
    case bookingTypes.ONE_WAY:
      return <OneWayBookingHeader bookingHeader={booking} />;
    case bookingTypes.RETURN:
      return <ReturnBookingHeader bookingHeader={booking} />;
    case bookingTypes.MULTICITY:
      return <MulticityBookingHeader bookingHeader={booking} />;
  }
  return null;
}

const Header = (props: Props) => {
  const { booking, isFuture } = props;
  const { type } = booking;
  const status = booking.status && bookingStatus[booking.status];

  return (
    <div>
      <div className="headerAbove">
        <div>
          {booking.databaseId && (
            <Typography type="secondary">
              {isFuture ? 'Upcoming' : 'Last'} trip #
              {formatBookingId(booking.databaseId)}
            </Typography>
          )}
        </div>
        <ClickAllBooking.Consumer>
          {onClick => (
            <div
              role="button"
              tabIndex={0}
              className="selectOtherBooking"
              onClick={onClick}
              onKeyPress={onClick}
            >
              <Typography size="small" type="active">
                Select other booking
              </Typography>
            </div>
          )}
        </ClickAllBooking.Consumer>
      </div>
      <div className="headerTitle">
        <Typography size="header" type="attention" variant="bold">
          {type && renderHeaderTitleByType(type, booking)}
        </Typography>
      </div>
      <div className="headerBelow">
        {status && (
          <Typography>
            <span style={{ color: status.color }}>{status.text}</span>
          </Typography>
        )}
      </div>
      <style jsx>
        {`
          .headerAbove,
          .headerTitle {
            margin-bottom: 4px;
          }
          .headerAbove {
            display: flex;
            justify-content: space-between;
          }
          .headerBelow {
            margin-bottom: 16px;
          }
          .selectOtherBooking {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header_booking on BookingInterface {
      type
      status
      databaseId
      ...OneWay_bookingHeader
      ...Return_bookingHeader
      ...Multicity_bookingHeader
    }
  `,
);
