// @flow

import * as React from 'react';
import idx from 'idx';
import { Typography } from '@kiwicom/orbit-components';
import {
  FlightDirect,
  ChevronDown,
  ChevronUp,
} from '@kiwicom/orbit-components/lib/icons';
import css from 'styled-jsx/css';

import CarrierLogoWrapper from './CarrierLogoWrapper';
import { FormatDate } from '../../helpers/dateUtils';
import type { AccordionTripSummary_trip } from './__generated__/AccordionTripSummary_trip.graphql';

const headerStyles = css`
  .header {
    display: flex;
    width: 100%;
    cursor: pointer;
  }
  span.arrow {
    margin: 0px 4px;
  }
  .logo {
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .toggle {
    position: relative;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .itinerary .location {
    margin-right: 4px;
  }
`;
type Props = {|
  trip: AccordionTripSummary_trip,
  isToggled: boolean,
|};
const AccordionHeader = ({ trip, isToggled }: Props) => {
  const departureDate = idx(trip, _ => _.departure.localTime);
  const departureCode = idx(trip, _ => _.departure.airport.locationId);
  const departureCity = idx(trip, _ => _.departure.airport.city.name);
  const arrivalCity = idx(trip, _ => _.arrival.airport.city.name);
  const arrivalCode = idx(trip, _ => _.arrival.airport.locationId);
  return (
    <div className="header">
      <div className="logo">
        <CarrierLogoWrapper legs={trip.legs} />
      </div>
      <div className="info">
        <Typography type="secondary" size="small">
          {departureDate && <FormatDate dateString={departureDate} />}
        </Typography>
        <div className="itinerary">
          <span className="location">
            <Typography variant="bold" type="primary">
              {departureCity}&nbsp;({departureCode})
            </Typography>
          </span>
          <span className="arrow">
            <span className="inline-icon">
              <FlightDirect />
            </span>
          </span>
          <span className="location">
            <Typography variant="bold" type="primary">
              {arrivalCity}&nbsp;({arrivalCode})
            </Typography>
          </span>
        </div>
      </div>
      <div className="toggle">
        {isToggled ? (
          <ChevronUp customColor="#bac7d5" />
        ) : (
          <ChevronDown customColor="#bac7d5" />
        )}
      </div>
      <style jsx>{headerStyles}</style>
    </div>
  );
};
export default AccordionHeader;
