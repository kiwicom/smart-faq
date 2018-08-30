// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import BookingStateProvider from '../context/BookingState';
import OneWayTripWrapper_booking from './__generated__/OneWayTripWrapper_booking.graphql';

type Props = {
  children: React.Node,
  +booking: OneWayTripWrapper_booking,
};

const OneWayTrip = ({ children, booking }: Props) => (
  <BookingStateProvider
    hasBooking
    isPastBooking={booking.isPastBooking}
    departureTime={idx(booking, _ => _.trip.departure.time)}
    booking={{ props: booking, error: null }}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  OneWayTrip,
  graphql`
    fragment OneWayTripWrapper_booking on BookingOneWay {
      directAccessURL
      isPastBooking
      databaseId
      type

      trip {
        legs {
          duration
          flightNumber
          pnr
          operatingAirline {
            name
            iata
          }
          vehicle {
            model
            manufacturer
          }
          airline {
            name
            code
            logoUrl
          }
          arrival {
            time
            localTime
            airport {
              locationId
              name
              city {
                name
              }
            }
          }
          departure {
            time
            localTime
            airport {
              locationId
              name
              city {
                name
              }
            }
          }
        }
        arrival {
          time
          localTime
          airport {
            locationId
            name
            city {
              name
            }
          }
        }
        departure {
          time
          localTime
          airport {
            locationId
            name
            city {
              name
            }
          }
        }
      }
    }
  `,
);
