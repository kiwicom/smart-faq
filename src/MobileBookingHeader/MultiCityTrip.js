// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import type MultiCityTrip_booking from './__generated__/MultiCityTrip_booking.graphql';
import { TripDescriptionStyle } from './commonStyles';

type Props = {|
  booking: MultiCityTrip_booking,
|};

const MultiCityTrip = ({ booking }: Props) => {
  const trips = idx(booking, _ => _.trips) || [];
  const destination = idx(booking.end, _ => _.airport.city.name) || '';

  return (
    <React.Fragment>
      <div className="TripDescription">
        {trips.reduce((acc, trip) => {
          const city = idx(trip, _ => _.departure.airport.city.name) || '';
          //F.I.X.M.E: new Orbit release should publish new leftArrow icon
          return (acc += `${city} → `);
        }, '') + destination}
      </div>
      <style jsx>{TripDescriptionStyle}</style>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  MultiCityTrip,
  graphql`
    fragment MultiCityTrip_booking on BookingMulticity {
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
