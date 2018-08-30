// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import BookingStateProvider from '../context/BookingState';
import MultiCityTripWrapper_booking from './__generated__/MultiCityTripWrapper_booking.graphql';

type Props = {
  children: React.Node,
  +booking: MultiCityTripWrapper_booking,
};

const MultiCityTrip = ({ children, booking }: Props) => (
  <BookingStateProvider
    hasBooking
    isPastBooking={booking.isPastBooking}
    departureTime={idx(booking, _ => _.trips[0].departure.time)}
    booking={{ props: booking, error: null }}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  MultiCityTrip,
  graphql`
    fragment MultiCityTripWrapper_booking on BookingMulticity {
      directAccessURL
      isPastBooking
      databaseId
      type
      status

      end {
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

      trips @relay(plural: true) {
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
            name
            city {
              name
            }
          }
        }
        departure {
          localTime
          time
          airport {
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
