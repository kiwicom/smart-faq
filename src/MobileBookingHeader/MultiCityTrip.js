// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import css from 'styled-jsx/css';

import MultiCityTrip_booking from './__generated__/MultiCityTrip_booking.graphql';

type Props = {|
  booking: MultiCityTrip_booking,
|};

const MobileBookingSummaryStyle = css`
  .TripDescription {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: #171b1e;
    margin-bottom: 9px;
  }
`;

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
      <style jsx>{MobileBookingSummaryStyle}</style>
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
