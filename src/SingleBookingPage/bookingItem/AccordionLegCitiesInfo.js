// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import idx from 'idx';
import { CarrierLogo } from '@kiwicom/orbit-components';
import InformationCircle from '@kiwicom/orbit-components/lib/icons/InformationCircle';
import Ticket from '@kiwicom/orbit-components/lib/icons/Ticket';
import Airplane from '@kiwicom/orbit-components/lib/icons/Airplane';
import City from '@kiwicom/orbit-components/lib/icons/City';

import type { AccordionLegCitiesInfo_leg } from './__generated__/AccordionLegCitiesInfo_leg.graphql';
import bookingLegTypes from '../../common/booking/bookingLegTypes';

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
    margin: 0 0 0 10px;
  }
  .moreInfoLink {
    color: #00a991;
    border-bottom: 1px solid #00a991;
  }
`;

type Props = {| leg: AccordionLegCitiesInfo_leg |};

const LegCitiesInfo = (props: Props) => {
  const { leg } = props;
  const flightNumber = leg.flightNumber || '';
  const transportationMode = leg.type;
  const reservationNumber = leg.pnr || '';
  const carrierTitle =
    transportationMode === bookingLegTypes.AIRCRAFT ? 'Airline' : 'Carrier';

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
    transportationMode === bookingLegTypes.AIRCRAFT &&
    operatingAirline.code &&
    operatingAirline.code !== carrier.code;

  const showReservationNumber = () =>
    transportationMode === bookingLegTypes.AIRCRAFT && reservationNumber;

  const showAircraftType = () =>
    transportationMode === bookingLegTypes.AIRCRAFT && vehicle.manufacturer;

  const renderFlightNumber = () => {
    if (transportationMode === bookingLegTypes.BUS) return null;

    let title = '';

    if (transportationMode === bookingLegTypes.AIRCRAFT) {
      title = 'Flight no:';
    } else if (transportationMode === bookingLegTypes.TRAIN) {
      title = 'Train no:';
    }

    return (
      <div className="infoRow">
        <InformationCircle color="secondary" size="small" />
        <p>{`${title} ${carrier.code} ${flightNumber}`}</p>
        <style jsx>{citiesInfoStyle}</style>
      </div>
    );
  };

  return (
    <div className="legCitiesInfo">
      <div className="infoRow">
        <CarrierLogo size="small" carriers={[carrier]} />
        <p>{`${carrierTitle}: ${carrier.name}`}</p>
      </div>
      {showOperatingAirline() && (
        <div className="infoRow">
          <CarrierLogo size="small" carriers={[operatingAirline]} />
          <p>Operating airline: {operatingAirline.name}</p>
        </div>
      )}
      {renderFlightNumber()}
      {showReservationNumber() && (
        <div className="infoRow">
          <Ticket color="secondary" size="small" />
          <p>PNR: {reservationNumber}</p>
        </div>
      )}
      {showAircraftType() && (
        <div className="infoRow">
          <Airplane color="secondary" size="small" />
          <p>{`${vehicle.manufacturer} ${vehicle.model}`}</p>
        </div>
      )}
      {transportationMode !== bookingLegTypes.AIRCRAFT && (
        <React.Fragment>
          <div className="infoRow">
            <City color="secondary" size="small" />
            <p>{departureStationName}</p>
          </div>
          <div className="infoRow">
            <City color="secondary" size="small" />
            <p>{arrivalStationName}</p>
          </div>
          <div className="infoRow">
            <InformationCircle size="small" customColor="#00a991" />
            <Link
              to="/faq/search/article/RkFRQXJ0aWNsZToxMjc="
              style={{ textDecoration: 'none' }}
            >
              <p className="moreInfoLink">Trains and Buses Info</p>
            </Link>
          </div>
        </React.Fragment>
      )}
      <style jsx>{citiesInfoStyle}</style>
    </div>
  );
};

export default createFragmentContainer(
  LegCitiesInfo,
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
