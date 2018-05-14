// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import {
  FlightReturn,
  FlightDirect,
  FlightMulticity,
} from '@kiwicom/orbit-components/lib/icons';

import bookingTypes from '../../common/booking/bookingTypes';
import type { FromToRow_arrival } from './__generated__/FromToRow_arrival.graphql';
import type { FromToRow_departure } from './__generated__/FromToRow_departure.graphql';

type Props = {
  type: string,
  departure: FromToRow_departure,
  arrival: FromToRow_arrival,
};

function renderFlightIcon(type: string) {
  switch (type) {
    case bookingTypes.ONE_WAY:
      return <FlightDirect size="medium" customColor="#bac7d5" />;
    case bookingTypes.RETURN:
      return <FlightReturn size="medium" customColor="#bac7d5" />;
    case bookingTypes.MULTICITY:
      return <FlightMulticity size="medium" customColor="#bac7d5" />;
  }
  return null;
}

const FromToRow = (props: Props) => {
  const origin = idx(props.arrival, _ => _.airport.city.name) || '';
  const destination = idx(props.departure, _ => _.airport.city.name) || '';
  const IATAOrigin = idx(props.arrival, _ => _.airport.locationId) || '';
  const IATADestination = idx(props.departure, _ => _.airport.locationId) || '';

  return (
    <div>
      <p className="flight">{`${origin} ${IATAOrigin}`}</p>
      <div className="arrowIcon">{renderFlightIcon(props.type)}</div>
      <p className="flight">{`${destination} ${IATADestination}`}</p>
    </div>
  );
};

export default createFragmentContainer(FromToRow, {
  arrival: graphql`
    fragment FromToRow_arrival on RouteStop {
      airport {
        locationId
        city {
          name
        }
      }
    }
  `,
  departure: graphql`
    fragment FromToRow_departure on RouteStop {
      airport {
        locationId
        city {
          name
        }
      }
    }
  `,
});
