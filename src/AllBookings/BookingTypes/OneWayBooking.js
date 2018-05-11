// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import BookingCard from '../BookingCard';
import bookingTypes from '../../common/booking/bookingTypes';
import bookingStatus from '../../common/booking/bookingStatuses';
import type { OneWayBooking_booking } from './__generated__/OneWayBooking_booking.graphql';

type Props = {
  booking: OneWayBooking_booking,
};

const OneWayBooking = (props: Props) => {
  const booking = props.booking;
  const { passengerCount, databaseId } = booking;
  const status = booking.status && bookingStatus[booking.status];

  const trip = idx(booking, _ => _.trip);
  const departureDate = idx(booking, _ => _.trip.departure.time);
  const origin = idx(booking, _ => _.trip.departure.airport.city.name);
  const IATAOrigin = idx(booking, _ => _.trip.departure.airport.locationId);
  const destination = idx(booking, _ => _.trip.arrival.airport.city.name);
  const IATADestination = idx(booking, _ => _.trip.arrival.airport.locationId);

  return (
    <BookingCard
      trip={trip}
      status={status}
      passengerCount={passengerCount}
      type={bookingTypes.ONE_WAY}
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
  OneWayBooking,
  graphql`
    fragment OneWayBooking_booking on BookingOneWay {
      status
      databaseId
      passengerCount
      trip {
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
