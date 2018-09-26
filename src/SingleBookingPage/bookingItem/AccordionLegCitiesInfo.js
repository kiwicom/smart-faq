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
import Trans from '@kiwicom/nitro/lib/components/Text';

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

  const carrier = {
    code: idx(leg.airline, _ => _.code) || '',
    name: idx(leg.airline, _ => _.name) || '',
  };

  const carrierName =
    transportationMode === bookingLegTypes.AIRCRAFT ? (
      <Trans
        t={__(
          'smartfaq.single_booking_page.accordion_cities_info.airline_title_name',
        )}
        values={{ carrierName: carrier.name }}
      />
    ) : (
      <Trans
        t={__(
          'smartfaq.single_booking_page.accordion_cities_info.carrier_title_name',
        )}
        values={{ carrierName: carrier.name }}
      />
    );

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

    let titleNumber = null;

    if (transportationMode === bookingLegTypes.AIRCRAFT) {
      titleNumber = (
        <Trans
          t={__('smartfaq.single_booking_page.accordion_cities_info.flight_no')}
          values={{
            flight_number: flightNumber,
            carrier_code: carrier.code,
          }}
        />
      );
    } else if (transportationMode === bookingLegTypes.TRAIN) {
      titleNumber = (
        <Trans
          t={__('smartfaq.single_booking_page.accordion_cities_info.train_no')}
          values={{
            flight_number: flightNumber,
            carrier_code: carrier.code,
          }}
        />
      );
    }

    return (
      <div className="infoRow">
        <InformationCircle size="small" color="secondary" />
        <p>{titleNumber}</p>
        <style jsx>{citiesInfoStyle}</style>
      </div>
    );
  };

  return (
    <div className="legCitiesInfo">
      <div className="infoRow">
        <CarrierLogo size="small" carriers={[carrier]} />
        <p>{carrierName}</p>
      </div>
      {showOperatingAirline() && (
        <div className="infoRow">
          <CarrierLogo size="small" carriers={[operatingAirline]} />
          <p>
            <Trans
              t={__(
                'smartfaq.single_booking_page.accordion_cities_info.operating_airline',
              )}
              values={{ operatingAirline: operatingAirline.name }}
            />
          </p>
        </div>
      )}
      {renderFlightNumber()}
      {showReservationNumber() && (
        <div className="infoRow">
          <Ticket size="small" color="secondary" />
          <p>
            <Trans
              t={__(
                'smartfaq.single_booking_page.accordion_cities_info.reservation_number',
              )}
              values={{ reservationNumber }}
            />
          </p>
        </div>
      )}
      {showAircraftType() && (
        <div className="infoRow">
          <Airplane size="small" color="secondary" />
          <p>
            <Trans
              t={__(
                'smartfaq.single_booking_page.accordion_cities_info.vehicle_type',
              )}
              values={{
                vehicle_manufacturer: vehicle.manufacturer,
                vehicle_model: vehicle.model,
              }}
            />
          </p>
        </div>
      )}
      {transportationMode !== bookingLegTypes.AIRCRAFT && (
        <React.Fragment>
          <div className="infoRow">
            <City size="small" color="secondary" />
            <p>{departureStationName}</p>
          </div>
          <div className="infoRow">
            <City size="small" color="secondary" />
            <p>{arrivalStationName}</p>
          </div>
          <div className="infoRow">
            <InformationCircle size="small" customColor="#00a991" />
            <Link
              to="/faq/search/article/RkFRQXJ0aWNsZToxMjc="
              style={{ textDecoration: 'none' }}
            >
              <p className="moreInfoLink">
                <Trans
                  t={__(
                    'smartfaq.single_booking_page.accordion_cities_info.trains_buses_info',
                  )}
                />
              </p>
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
