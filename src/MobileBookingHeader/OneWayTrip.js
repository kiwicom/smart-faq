// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from "idx";
import css from 'styled-jsx/css';

type Props = {|
  booking: any,
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
`

const OneWayTrip = ({ booking }: Props) => {
  const origion = booking.trip.departure.airport.city.name;
  const destination = booking.trip.arrival.airport.city.name;
  return (
    <React.Fragment>
      <div className="TripDescription">{`${origion} to ${destination}`}</div>
      <style jsx>{MobileBookingSummaryStyle}</style>
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
