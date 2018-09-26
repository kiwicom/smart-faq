// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text } from '@kiwicom/orbit-components';
import { Passengers } from '@kiwicom/orbit-components/lib/icons';
import Trans from '@kiwicom/nitro/lib/components/Text';

import bookingStatuses from '../../common/booking/bookingStatuses';
import { formatDepartureDate } from '../../helpers/dateUtils';
import type { DateAndPassenger_departure } from './__generated__/DateAndPassenger_departure.graphql';
import type { DateAndPassenger_booking } from './__generated__/DateAndPassenger_booking.graphql';

type Props = {
  departure: DateAndPassenger_departure,
  booking: DateAndPassenger_booking,
};

export const DateAndPassenger = (props: Props) => {
  const departureDate = idx(props.departure, _ => _.time) || '';
  const bookingDate = idx(props.booking, _ => _.bookingDate) || '';
  const passengerCount = idx(props.booking, _ => _.passengerCount) || 0;
  const status =
    (props.booking.status && bookingStatuses()[props.booking.status]) || {};

  return (
    <div className="fields">
      <div className="section">
        <div className="label">
          <Text type="secondary" size="small">
            <Trans
              t={__('smartfaq.all_bookings.booking_card.departure_date')}
            />
          </Text>
        </div>
        <Text>{formatDepartureDate(departureDate)}</Text>
      </div>
      <div className="section">
        <div className="label">
          <Text type="secondary" size="small">
            <Trans t={__('smartfaq.all_bookings.booking_card.booking_date')} />
          </Text>
        </div>
        <Text>{formatDepartureDate(bookingDate)}</Text>
      </div>
      <div className="section">
        <div className="label">
          <Text type="secondary" size="small">
            <Trans t={__('smartfaq.all_bookings.booking_card.includes')} />
          </Text>
        </div>
        <Text>
          <Passengers size="small" customColor="#bac7d5" />
          {passengerCount}
        </Text>
      </div>
      <div className="section">
        <div className="label">
          <Text type="secondary" size="small">
            <Trans t={__('smartfaq.all_bookings.booking_card.status')} />
          </Text>
        </div>
        <div style={{ color: status.color, fontSize: '14px' }}>
          {status.text}
        </div>
      </div>
    </div>
  );
};

export default createFragmentContainer(
  DateAndPassenger,
  graphql`
    fragment DateAndPassenger_booking on BookingInterface {
      status
      passengerCount
      bookingDate
    }

    fragment DateAndPassenger_departure on RouteStop {
      time
    }
  `,
);
