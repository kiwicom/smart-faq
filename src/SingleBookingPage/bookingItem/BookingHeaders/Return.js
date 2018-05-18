// @flow

import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';

import type { Return_bookingHeader } from './__generated__/Return_bookingHeader.graphql';

type Props = {|
  bookingHeader: Return_bookingHeader,
|};

const ReturnBookingHeader = ({ bookingHeader }: Props) => {
  const origin =
    idx(bookingHeader.outbound, _ => _.arrival.airport.city.name) || '';
  const destination =
    idx(bookingHeader.outbound, _ => _.departure.airport.city.name) || '';
  return `${origin} to ${destination} and back`;
};

export default createFragmentContainer(
  ReturnBookingHeader,
  graphql`
    fragment Return_bookingHeader on BookingReturn {
      outbound {
        departure {
          airport {
            city {
              name
            }
          }
        }
        arrival {
          airport {
            city {
              name
            }
          }
        }
      }
    }
  `,
);
