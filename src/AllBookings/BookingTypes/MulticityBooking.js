// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import BookingCard from '../BookingCard';
import bookingTypes from '../../common/booking/bookingTypes';
import bookingStatus from '../../common/booking/bookingStatuses';
import type { MultictyBooking_booking } from './__generated__/MulticityBooking_booking.graphql';

type Props = {
  booking: MultictyBooking_booking,
};

const MulticityBooking = (props: Props) => {
  const booking = props.booking;
  const { databaseId, passengerCount } = booking;
  const status = booking.status && bookingStatus[booking.status];

  const trip = idx(booking, _ => _.trips[0]);
  const departureDate = idx(booking, _ => _.start.time);
  const origin = idx(booking, _ => _.start.airport.city.name);
  const IATAOrigin = idx(booking, _ => _.start.airport.locationId);
  const destination = idx(booking, _ => _.end.airport.city.name);
  const IATADestination = idx(booking, _ => _.end.airport.locationId);

  return (
    <BookingCard
      trip={trip}
      status={status}
      passengerCount={passengerCount}
      type={bookingTypes.MULTICITY}
      databaseId={databaseId}
      departureDate={departureDate}
      origin={origin}
      IATAOrigin={IATAOrigin}
      destination={destination}
      IATADestination={IATADestination}
    />
  );
};

export default createFragmentContainer(
  MulticityBooking,
  graphql`
    fragment MulticityBooking_booking on BookingMulticity {
      status
      databaseId
      passengerCount
      start {
        time
        airport {
          locationId
          city {
            name
          }
        }
      }
      end {
        airport {
          locationId
          city {
            name
          }
        }
      }
      trips {
        legs {
          ...CarrierLogoWrapper_legs
        }
      }
    }
  `,
);
