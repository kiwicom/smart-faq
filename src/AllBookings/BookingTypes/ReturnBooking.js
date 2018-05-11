// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import BookingCard from '../BookingCard';
import bookingTypes from '../../common/booking/bookingTypes';
import bookingStatus from '../../common/booking/bookingStatuses';
import type { ReturnBooking_booking } from './__generated__/ReturnBooking_booking.graphql';

type Props = {
  booking: ReturnBooking_booking,
};

const ReturnBooking = (props: Props) => {
  const booking = props.booking;
  const { passengerCount, databaseId } = booking;
  const status = booking.status && bookingStatus[booking.status];

  const trip = idx(booking, _ => _.outbound) || [];
  const departureDate = idx(booking, _ => _.outbound.departure.time) || '';
  const origin =
    idx(booking, _ => _.outbound.departure.airport.city.name) || '';
  const IATAOrigin =
    idx(booking, _ => _.outbound.departure.airport.locationId) || '';
  const destination =
    idx(booking, _ => _.outbound.arrival.airport.city.name) || '';
  const IATADestination =
    idx(booking, _ => _.outbound.arrival.airport.locationId) || '';

  return (
    <React.Fragment>
      {status &&
        passengerCount &&
        databaseId && (
          <BookingCard
            trip={trip}
            status={status}
            passengerCount={passengerCount}
            type={bookingTypes.RETURN}
            databaseId={databaseId}
            departureDate={departureDate}
            origin={origin}
            IATAOrigin={IATAOrigin}
            destination={destination}
            IATADestination={IATADestination}
          />
        )}
    </React.Fragment>
  );
};

export default createFragmentContainer(
  ReturnBooking,
  graphql`
    fragment ReturnBooking_booking on BookingReturn {
      status
      databaseId
      passengerCount
      outbound {
        departure {
          time
          airport {
            locationId
            city {
              name
            }
          }
        }
        arrival {
          airport {
            locationId
            city {
              name
            }
          }
        }
        legs {
          ...CarrierLogoWrapper_legs
        }
      }
    }
  `,
);
