// @flow

import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';
import {
  ChevronRight,
  Passengers,
  FlightReturn,
  FlightDirect,
} from '@kiwicom/orbit-components/lib/icons';

import { formatDepartureDate } from '../helpers/dateUtils';
import bookingTypes from '../common/booking/bookingTypes';
import bookingStatus from '../common/booking/bookingStatuses';
import CarrierLogoWrapper from '../SingleBookingPage/bookingItem/CarrierLogoWrapper';
import type { BookingCard_booking } from './__generated__/BookingCard_booking.graphql';

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
  booking: BookingCard_booking,
|};

const BookingCard = (props: Props) => {
  const booking = props.booking;
  const { passengerCount, type, databaseId } = booking;
  const status = booking.status && bookingStatus[booking.status];

  let departureDate, origin, destination, IATAOrigin, IATADestination, trip;

  switch (type) {
    case bookingTypes.ONE_WAY:
      trip = idx(booking.oneWay, _ => _.trip);
      departureDate = idx(booking.oneWay, _ => _.trip.departure.time);
      origin = idx(booking.oneWay, _ => _.trip.departure.airport.city.name);
      IATAOrigin = idx(
        booking.oneWay,
        _ => _.trip.departure.airport.locationId,
      );
      destination = idx(booking.oneWay, _ => _.trip.arrival.airport.city.name);
      IATADestination = idx(
        booking.oneWay,
        _ => _.trip.arrival.airport.locationId,
      );
      break;
    case bookingTypes.RETURN:
      trip = idx(booking.return, _ => _.outbound);
      departureDate = idx(booking.return, _ => _.outbound.departure.time);
      origin = idx(booking.return, _ => _.outbound.departure.airport.city.name);
      IATAOrigin = idx(
        booking.return,
        _ => _.outbound.departure.airport.locationId,
      );
      destination = idx(
        booking.return,
        _ => _.outbound.arrival.airport.city.name,
      );
      IATADestination = IATAOrigin = idx(
        booking.return,
        _ => _.outbound.arrival.airport.locationId,
      );
      break;
    case bookingTypes.MULTICITY:
      trip = idx(booking.multicity, _ => _.trips[0]);
      departureDate = idx(booking.multicity, _ => _.start.time);
      origin = idx(booking.multicity, _ => _.start.airport.city.name);
      IATAOrigin = idx(booking.multicity, _ => _.start.airport.locationId);
      destination = idx(booking.multicity, _ => _.end.airport.city.name);
      IATADestination = idx(booking.multicity, _ => _.end.airport.locationId);
      break;
  }

  return (
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
};

export default createFragmentContainer(
  BookingCard,
  graphql`
    fragment BookingCard_booking on Booking {
      type
      passengerCount
      status
      databaseId
      oneWay {
        trip {
          departure {
            time
            airport {
              locationId
              city {
                name
              }
            }
          }
          arrival {
            airport {
              locationId
              city {
                name
              }
            }
          }
          legs {
            ...CarrierLogoWrapper_legs
          }
        }
      }
      return {
        outbound {
          departure {
            time
            airport {
              locationId
              city {
                name
              }
            }
          }
          arrival {
            airport {
              locationId
              city {
                name
              }
            }
          }
          legs {
            ...CarrierLogoWrapper_legs
          }
        }
      }
      multicity {
        start {
          time
          airport {
            locationId
            city {
              name
            }
          }
        }
        end {
          airport {
            locationId
            city {
              name
            }
          }
        }
        trips {
          legs {
            ...CarrierLogoWrapper_legs
          }
        }
      }
    }
  `,
);
