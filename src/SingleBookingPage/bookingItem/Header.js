// @flow

import * as React from 'react';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography, TextLink, Text } from '@kiwicom/orbit-components';

import OneWayBookingHeader from './BookingHeaders/OneWay';
import ReturnBookingHeader from './BookingHeaders/Return';
import MulticityBookingHeader from './BookingHeaders/Multicity';
import formatBookingId from '../../helpers/formatBookingId';
import {
  BookingState,
  type BookingStateType,
} from '../../context/BookingState';
import { simpleTracker } from '../../helpers/analytics/trackers';
import bookingTypes from '../../common/booking/bookingTypes';
import bookingStatuses from '../../common/booking/bookingStatuses';
import { UserContext, type UserContextType } from '../../context/User';
import type { Header_booking } from './__generated__/Header_booking.graphql';

type Props = {|
  booking: Header_booking,
  isFuture: boolean,
  t: string => string,
  history: {
    push: string => void,
  },
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
  const status = booking.status && bookingStatuses(props.t)[booking.status];

  return (
    <div>
      <div className="headerAbove">
        <div data-cy="booking-type">
          {booking.databaseId && (
            <Text type="secondary">
              {isFuture ? 'Upcoming' : 'Past'} trip #&nbsp;
              {formatBookingId(booking.databaseId)}
            </Text>
          )}
        </div>
        <BookingState.Consumer>
          {({ onDisplayAll }: BookingStateType) => (
            <UserContext.Consumer>
              {({ simpleToken }: UserContextType) => (
                <div data-cy="btn-other-bookings">
                  <TextLink
                    url=""
                    onClick={e => {
                      e.preventDefault();
                      simpleTracker('smartFAQBookingOverview', {
                        action: 'selectAnotherBooking',
                      });
                      simpleToken
                        ? props.history.push('/sign-in')
                        : onDisplayAll();
                    }}
                    size="small"
                    title="Select another booking"
                  />
                </div>
              )}
            </UserContext.Consumer>
          )}
        </BookingState.Consumer>
      </div>
      <div className="headerTitle" data-cy="booking-title">
        <Typography size="header" type="attention" variant="bold">
          {type && renderHeaderTitleByType(type, booking)}
        </Typography>
      </div>
      <div className="headerBelow">
        {status && (
          <Text>
            <span style={{ color: status.color }}>{status.text}</span>
          </Text>
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
  translate()(withRouter(Header)),
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
