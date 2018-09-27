// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';
import Trans from '@kiwicom/nitro/lib/components/Text';

import type { OneWay_bookingHeader } from './__generated__/OneWay_bookingHeader.graphql';

type Props = {|
  bookingHeader: OneWay_bookingHeader,
|};

const OneWayBookingHeader = ({ bookingHeader }: Props) => {
  const origin =
    idx(bookingHeader.trip, _ => _.departure.airport.city.name) || '';
  const destination =
    idx(bookingHeader.trip, _ => _.arrival.airport.city.name) || '';
  return (
    <Trans
      t={__('smartfaq.single_booking_page.booking_headers.one_way.title')}
      values={{ origin, destination }}
    />
  );
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
