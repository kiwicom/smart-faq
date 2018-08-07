// @flow

import * as React from 'react';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import { Heading, Text } from '@kiwicom/orbit-components';

import OneWayBookingHeader from './BookingHeaders/OneWay';
import ReturnBookingHeader from './BookingHeaders/Return';
import MulticityBookingHeader from './BookingHeaders/Multicity';
import formatBookingId from '../../helpers/formatBookingId';
import bookingTypes from '../../common/booking/bookingTypes';
import bookingStatuses from '../../common/booking/bookingStatuses';
import SelectAnotherBookingLink from '../../common/booking/SelectAnotherBookingLink';
import type { Header_booking } from './__generated__/Header_booking.graphql';

type Props = {|
  booking: Header_booking,
  isFuture: boolean,
  t: string => string,
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
    <React.Fragment>
      <div className="headerAbove">
        <div data-cy="booking-type">
          {booking.databaseId && (
            <Text type="secondary">
              {isFuture ? 'Upcoming' : 'Past'} trip #&nbsp;
              {formatBookingId(booking.databaseId)}
            </Text>
          )}
        </div>
        <SelectAnotherBookingLink />
      </div>
      <div className="headerTitle" data-cy="booking-title">
        <Heading type="title2">
          {type && renderHeaderTitleByType(type, booking)}
        </Heading>
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
        `}
      </style>
    </React.Fragment>
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
