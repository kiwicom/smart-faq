// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import type OneWayTrip_booking from './__generated__/OneWayTrip_booking.graphql';
import { TripDescriptionStyle } from './commonStyles';

type Props = {|
  +booking: OneWayTrip_booking,
|};

const OneWayTrip = ({ booking }: Props) => {
  const origin = idx(booking.trip.departure, _ => _.airport.city.name) || '';
  const destination = booking.trip.arrival.airport.city.name;
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
    fragment OneWayTrip_booking on BookingOneWay {
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
