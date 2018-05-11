// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import {
  ChevronRight,
  Passengers,
  FlightReturn,
  FlightDirect,
} from '@kiwicom/orbit-components/lib/icons';

import { formatDepartureDate } from '../helpers/dateUtils';
import bookingTypes from '../common/booking/bookingTypes';
import CarrierLogoWrapper from '../SingleBookingPage/bookingItem/CarrierLogoWrapper';

const styles = css`
  .card {
    width: 468px;
    height: 128px;
    position: relative;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #e8edf1;
    padding: 12px 44px 24px 44px;
    margin-bottom: 24px;
  }
  div.fields {
    display: flex;
    justify-content: space-between;
  }
  div.logoCarriers {
    position: absolute;
    top: 23px;
    left: 6px;
  }
  div.chevron {
    position: absolute;
    top: 27px;
    right: 16px;
    line-height: 2;
  }
  div.label {
    display: block;
    margin-bottom: 4px;
  }
  div.section {
    display: block;
  }
  p.flight {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.4;
    color: #46515e;
    margin-bottom: 12px;
    margin-left: 2px;
    display: inline-block;
  }
  div.arrowIcon {
    display: inline-block;
    margin-left: 8px;
    margin-right: 8px;
    vertical-align: top;
  }
`;

type Props = {|
  trip: any,
  status: {
    text: string,
    color: string,
  },
  passengerCount: number,
  type: string,
  databaseId: number,
  departureDate: string,
  origin: string,
  IATAOrigin: string,
  destination: string,
  IATADestination: string,
|};

const BookingCard = ({
  trip,
  status,
  passengerCount,
  type,
  databaseId,
  departureDate,
  origin,
  IATAOrigin,
  destination,
  IATADestination,
}: Props) => (
  <div className="card">
    <Typography type="secondary" size="small">
      # {databaseId}
    </Typography>
    {trip && (
      <div className="logoCarriers">
        <CarrierLogoWrapper legs={trip.legs} />
      </div>
    )}
    <div>
      {origin &&
        IATAOrigin && <p className="flight">{`${origin} ${IATAOrigin}`}</p>}
      <div className="arrowIcon">
        {type === bookingTypes.ONE_WAY ? (
          <FlightDirect size="medium" customColor="#bac7d5" />
        ) : (
          <FlightReturn size="medium" customColor="#bac7d5" />
        )}
      </div>
      {destination &&
        IATADestination && (
          <p className="flight">{`${destination} ${IATADestination}`}</p>
        )}
    </div>
    <div className="chevron">
      <ChevronRight size="medium" customColor="#bac7d5" />
    </div>
    <div className="fields">
      <div className="section">
        <div className="label">
          <Typography type="secondary" size="small">
            Departure date
          </Typography>
        </div>
        {departureDate && (
          <Typography>{formatDepartureDate(departureDate)}</Typography>
        )}
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
          <Passengers size="small" customColor="#bac7d5" /> {passengerCount}
        </Typography>
      </div>
      <div className="section">
        <div className="label">
          <Typography type="secondary" size="small">
            Status
          </Typography>
        </div>
        {status && (
          <div style={{ color: status.color, fontSize: '14px' }}>
            {status.text}
          </div>
        )}
      </div>
    </div>
    <style>{styles}</style>
  </div>
);

export default BookingCard;
