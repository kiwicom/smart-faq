// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';

import bookingStatus from '../../common/booking/bookingStatuses';
import formatBookingId from '../../helpers/formatBookingId';
import type { Header_booking } from './__generated__/Header_booking.graphql';

type Props = {|
  booking: Header_booking,
|};

const Header = ({ booking }: Props) => {
  const status = booking.status && bookingStatus[booking.status];

  return (
    <div>
      <div className="headerAbove">
        <div>
          {booking.databaseId && (
            <Typography type="secondary">
              Upcoming trip # {formatBookingId(booking.databaseId)}
            </Typography>
          )}
        </div>
        <div>
          <Typography size="small" type="active">
            select other booking
          </Typography>
        </div>
      </div>
      <div className="headerTitle">
        <Typography size="header" type="attention">
          Upcoming booking
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
        `}
      </style>
    </div>
  );
};

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header_booking on BookingInterface {
      databaseId
      status
    }
  `,
);
