// @flow
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import BookingStateProvider from '../context/BookingState';
import type { BasicBookingDataFields } from '../types';

type Props = {
  children: React.Node,
  +booking: BasicBookingDataFields,
};

const ReturnTrip = ({ children, booking }: Props) => (
  <BookingStateProvider
    hasBooking
    isPastBooking={booking.isPastBooking}
    departureTime={idx(booking, _ => _.outbound.departure.time)}
    booking={{ props: booking, error: null }}
  >
    {children}
  </BookingStateProvider>
);

export default createFragmentContainer(
  ReturnTrip,
  graphql`
    fragment ReturnTripWrapper_booking on BookingReturn {
      directAccessURL
      isPastBooking
      databaseId
      type
      status

      outbound {
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

      inbound {
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
