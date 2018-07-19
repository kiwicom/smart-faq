// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { withRouter } from 'react-router-dom';
import css from 'styled-jsx/css';
import idx from 'idx';
import { CarrierLogo, TextLink } from '@kiwicom/orbit-components';
import {
  InformationCircle,
  Ticket,
  Airplane,
  City,
} from '@kiwicom/orbit-components/lib/icons';

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
  p,
  .moreInfoLink {
    margin-left: 10px;
  }
`;

type Props = {|
  leg: AccordionLegCitiesInfo_leg,
  history: {
    push: string => void,
  },
|};

const LegCitiesInfo = (props: Props) => {
  const aircraft = 'AIRCRAFT';
  const bus = 'BUS';
  const train = 'TRAIN';

  const { leg } = props;
  const flightNumber = leg.flightNumber || '';
  const transportationMode = leg.type;
  const reservationNumber = leg.pnr || '';
  const carrierTitle = transportationMode === aircraft ? 'Airline' : 'Carrier';
  const iconProps = { size: 'small', color: 'secondary' };

  const carrier = {
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

  const departureStationName = idx(leg, _ => _.departure.airport.name) || '';
  const arrivalStationName = idx(leg, _ => _.arrival.airport.name) || '';

  const showOperatingAirline = () =>
    transportationMode === aircraft &&
    operatingAirline.code &&
    operatingAirline.code !== carrier.code;

  const showReservationNumber = () =>
    transportationMode === aircraft && reservationNumber;

  const showAircraftType = () =>
    transportationMode === aircraft && vehicle.manufacturer;

  const renderFlightNumber = () => {
    if (transportationMode === bus) return null;

    let title = '';

    if (transportationMode === aircraft) {
      title = 'Flight no:';
    } else if (transportationMode === train) {
      title = 'Train no:';
    }

    return (
      <div className="infoRow">
        <InformationCircle {...iconProps} />
        <p>{`${title} ${carrier.code} ${flightNumber}`}</p>
        <style jsx>{citiesInfoStyle}</style>
      </div>
    );
  };

  return (
    <div className="legCitiesInfo">
      <div className="infoRow">
        <CarrierLogo className="logo" size="small" carriers={[carrier]} />
        <p>{`${carrierTitle}: ${carrier.name}`}</p>
      </div>
      {showOperatingAirline() && (
        <div className="infoRow">
          <CarrierLogo
            className="logo"
            size="small"
            carriers={[operatingAirline]}
          />
          <p>Operating airline: {operatingAirline.name}</p>
        </div>
      )}
      {renderFlightNumber()}
      {showReservationNumber() && (
        <div className="infoRow">
          <Ticket {...iconProps} />
          <p>PNR: {reservationNumber}</p>
        </div>
      )}
      {showAircraftType() && (
        <div className="infoRow">
          <Airplane {...iconProps} />
          <p>{`${vehicle.manufacturer} ${vehicle.model}`}</p>
        </div>
      )}
      {transportationMode !== aircraft && (
        <React.Fragment>
          <div className="infoRow">
            <City {...iconProps} />
            <p>{departureStationName}</p>
          </div>
          <div className="infoRow">
            <City {...iconProps} />
            <p>{arrivalStationName}</p>
          </div>
          <div className="infoRow">
            <InformationCircle size="small" customColor="#00a991" />
            <span className="moreInfoLink">
              <TextLink
                url=""
                onClick={e => {
                  e.preventDefault();
                  props.history.push(
                    '/faq/search/article/RkFRQXJ0aWNsZToxMjc=',
                  );
                }}
                size="small"
                title="Trains and Buses Info"
              />
            </span>
          </div>
        </React.Fragment>
      )}
      <style jsx>{citiesInfoStyle}</style>
    </div>
  );
};

export default createFragmentContainer(
  withRouter(LegCitiesInfo),
  graphql`
    fragment AccordionLegCitiesInfo_leg on Leg {
      type
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
      departure {
        airport {
          name
        }
      }
      arrival {
        airport {
          name
        }
      }
    }
  `,
);
