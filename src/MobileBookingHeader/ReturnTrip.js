// @flow

import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
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

const ReturnTrip = ({ booking }: Props) => {
  const from = booking.outbound.departure.airport.city.name;
  const to = booking.inbound.departure.airport.city.name;
  return (
    <React.Fragment>
      <div className="TripDescription">{`${from} to ${to} and back`}</div>
      <style jsx>{MobileBookingSummaryStyle}</style>
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
