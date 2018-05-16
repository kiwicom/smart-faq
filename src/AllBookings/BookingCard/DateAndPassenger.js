// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';
import { Passengers } from '@kiwicom/orbit-components/lib/icons';

import { formatDepartureDate } from '../../helpers/dateUtils';
import type { DateAndPassenger_departure } from './__generated__/DateAndPassenger_departure.graphql';

type Props = {
  departure: DateAndPassenger_departure,
  passengerCount: number,
  status: {
    color: string,
    text: string,
  },
};

export const DateAndPassenger = (props: Props) => {
  const departureDate = idx(props.departure, _ => _.time) || '';
  return (
    <div className="fields">
      <div className="section">
        <div className="label">
          <Typography type="secondary" size="small">
            Departure date
          </Typography>
        </div>
        <Typography>{formatDepartureDate(departureDate)}</Typography>
      </div>
      <div className="section">
        <div className="label">
          <Typography type="secondary" size="small">
            Booking date
          </Typography>
        </div>
        <Typography>Not Available</Typography>
      </div>
      <div className="section">
        <div className="label">
          <Typography type="secondary" size="small">
            Includes
          </Typography>
        </div>
        <Typography>
          <Passengers size="small" customColor="#bac7d5" />
          {props.passengerCount}
        </Typography>
      </div>
      <div className="section">
        <div className="label">
          <Typography type="secondary" size="small">
            Status
          </Typography>
        </div>
        <div style={{ color: props.status.color, fontSize: '14px' }}>
          {props.status.text}
        </div>
      </div>
    </div>
  );
};

export default createFragmentContainer(
  DateAndPassenger,
  graphql`
    fragment DateAndPassenger_departure on RouteStop {
      time
    }
  `,
);
