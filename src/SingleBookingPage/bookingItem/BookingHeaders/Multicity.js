// @flow

import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';

import type { Multicity_bookingHeader } from './__generated__/Multicity_bookingHeader.graphql';

type Props = {|
  bookingHeader: Multicity_bookingHeader,
|};

const MulticityBookingHeader = ({ bookingHeader }: Props) => {
  const trips = idx(bookingHeader, _ => _.trips) || [];
  const destiantion = idx(bookingHeader.end, _ => _.airport.city.name) || '';
  return (
    trips.reduce((acc, trip) => {
      const city = idx(trip, _ => _.departure.airport.city.name) || '';
      return (acc += `${city} → `);
    }, '') + destiantion
  );
};

export default createFragmentContainer(
  MulticityBookingHeader,
  graphql`
    fragment Multicity_bookingHeader on BookingMulticity {
      trips @relay(plural: true) {
        departure {
          airport {
            city {
              name
            }
          }
        }
      }
      end {
        airport {
          city {
            name
          }
        }
      }
    }
  `,
);
