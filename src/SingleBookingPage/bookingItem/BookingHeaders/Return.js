// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';
import Trans from '@kiwicom/nitro/lib/components/Text';

import type { Return_bookingHeader } from './__generated__/Return_bookingHeader.graphql';

type Props = {|
  bookingHeader: Return_bookingHeader,
|};

const ReturnBookingHeader = ({ bookingHeader }: Props) => {
  const origin =
    idx(bookingHeader.outbound, _ => _.departure.airport.city.name) || '';
  const destination =
    idx(bookingHeader.outbound, _ => _.arrival.airport.city.name) || '';
  return (
    <Trans
      t={__('smartfaq.single_booking_page.booking_headers.return.title')}
      values={{ origin, destination }}
    />
  );
};

export const RawReturnBookingHeader = ReturnBookingHeader;

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
