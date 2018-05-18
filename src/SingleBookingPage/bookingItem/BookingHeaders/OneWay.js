// @flow

import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';

import type { OneWay_bookingHeader } from './__generated__/OneWay_bookingHeader.graphql';

type Props = {|
  bookingHeader: OneWay_bookingHeader,
|};

const OneWayBookingHeader = ({ bookingHeader }: Props) => {
  const origin =
    idx(bookingHeader.trip, _ => _.departure.airport.city.name) || '';
  const destination =
    idx(bookingHeader.trip, _ => _.arrival.airport.city.name) || '';
  return `${origin} to ${destination}`;
};

export default createFragmentContainer(
  OneWayBookingHeader,
  graphql`
    fragment OneWay_bookingHeader on BookingOneWay {
      trip {
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
