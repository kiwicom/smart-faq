// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import idx from 'idx';
import { CarrierLogo } from '@kiwicom/orbit-components';
import {
  InformationCircle,
  Ticket,
  Airplane,
} from '@kiwicom/orbit-components/lib/icons';
import { createFragmentContainer, graphql } from 'react-relay';

import type { AccordionLegCitiesInfo_leg } from './__generated__/AccordionLegCitiesInfo_leg.graphql';

const citiesInfoStyle = css`
  div.legCitiesInfo {
    color: #7c8b99;
    margin-top: 19px;
    font-size: 12px;
  }
  div.infoRow {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  p {
    margin-left: 10px;
  }
`;

type Props = {|
  leg: AccordionLegCitiesInfo_leg,
|};

const LegCitiesInfo = (props: Props) => {
  const { leg } = props;
  const flightNumber = leg.flightNumber || '';
  const reservationNumber = leg.pnr || '';
  const iconProps = { size: 'small', color: 'secondary' };

  const airline = {
    code: idx(leg.airline, _ => _.code) || '',
    name: idx(leg.airline, _ => _.name) || '',
  };

  const operatingAirline = {
    code: idx(leg.operatingAirline, _ => _.iata) || '',
    name: idx(leg.operatingAirline, _ => _.name) || '',
  };

  const vehicle = {
    manufacturer: idx(leg.vehicle, _ => _.manufacturer) || '',
    model: idx(leg.vehicle, _ => _.model) || '',
  };

  const hasOperatingAirline = () =>
    operatingAirline.code && operatingAirline.code !== airline.code;

  return (
    <div className="legCitiesInfo">
      <div className="infoRow">
        <CarrierLogo className="logo" size="small" carriers={[airline]} />
        <p>Airline: {airline.name}</p>
      </div>
      {hasOperatingAirline() && (
        <div className="infoRow">
          <CarrierLogo
            className="logo"
            size="small"
            carriers={[operatingAirline]}
          />
          <p>Operating airline: {operatingAirline.name}</p>
        </div>
      )}
      <div className="infoRow">
        <InformationCircle {...iconProps} />
        <p>Flight no: {`${airline.code} ${flightNumber}`}</p>
      </div>
      {reservationNumber && (
        <div className="infoRow">
          <Ticket {...iconProps} />
          <p>PNR: {reservationNumber}</p>
        </div>
      )}
      {vehicle.manufacturer && (
        <div className="infoRow">
          <Airplane {...iconProps} />
          <p>{`${vehicle.manufacturer} ${vehicle.model}`}</p>
        </div>
      )}
      <style jsx>{citiesInfoStyle}</style>
    </div>
  );
};

export default createFragmentContainer(
  LegCitiesInfo,
  graphql`
    fragment AccordionLegCitiesInfo_leg on Leg {
      airline {
        code
        name
      }
      operatingAirline {
        iata
        name
      }
      flightNumber
      vehicle {
        manufacturer
        model
      }
      pnr
    }
  `,
);
