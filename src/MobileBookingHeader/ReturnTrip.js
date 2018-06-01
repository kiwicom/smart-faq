// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import ReturnTrip_booking from './__generated__/ReturnTrip_booking.graphql';
import { TripDescriptionStyle } from './commonStyles';

type Props = {|
  booking: ReturnTrip_booking,
|};

const ReturnTrip = ({ booking }: Props) => {
  const origion = booking.outbound.departure.airport.city.name;
  const destination = booking.inbound.departure.airport.city.name;
  return (
    <React.Fragment>
      <div className="TripDescription">{`${origion} to ${destination} and back`}</div>
      <style jsx>{TripDescriptionStyle}</style>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  ReturnTrip,
  graphql`
    fragment ReturnTrip_booking on BookingReturn {
      outbound {
        departure {
          airport {
            city {
              name
            }
          }
        }
      }
      inbound {
        departure {
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
