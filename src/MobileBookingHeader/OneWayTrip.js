// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import type { OneWayTripMobile_booking } from './__generated__/OneWayTripMobile_booking.graphql';
import { TripDescriptionStyle } from './commonStyles';

type Props = {|
  +booking: OneWayTripMobile_booking,
|};

const OneWayTrip = ({ booking }: Props) => {
  const origin = idx(booking.trip, _ => _.departure.airport.city.name) || '';
  const destination = idx(booking.trip, _ => _.arrival.airport.city.name) || '';
  return (
    <React.Fragment>
      <div className="TripDescription">{`${origin} to ${destination}`}</div>
      <style jsx>{TripDescriptionStyle}</style>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  OneWayTrip,
  graphql`
    fragment OneWayTripMobile_booking on BookingOneWay {
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
