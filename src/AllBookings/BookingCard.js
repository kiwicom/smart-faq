// @flow

import * as React from 'react';
import idx from 'idx';
import moment from 'moment';
import css from 'styled-jsx/css';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';
import { ChevronRight } from '@kiwicom/orbit-components/lib/icons';

import bookingStatus from '../common/booking/bookingStatuses';
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
  }
`;

type Props = {|
  booking: BookingCard_booking,
|};

const BookingCard = (props: Props) => {
  const booking = props.booking;
  const { passengerCount, type, databaseId } = booking;
  const status = booking.status && bookingStatus[booking.status];

  let departureDate, origin, destination, IATAOrigin, IATADestination;

  switch (type) {
    case 'ONE_WAY':
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
    case 'RETURN':
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
    case 'MULTICITY':
      departureDate = idx(booking.multicity, _ => _.start.time);
      origin = idx(booking.multicity, _ => _.start.airport.city.name);
      IATAOrigin = idx(booking.multicity, _ => _.start.airport.locationId);
      destination = idx(booking.multicity, _ => _.end.airport.city.name);
      IATADestination = idx(booking.multicity, _ => _.end.airport.locationId);
      break;
  }

  // T.O.D.O. - add Passenger, FlightDirect and FlightReturn icons with new Orbit Realese
  return (
    <div className="card">
      <Typography type="secondary" size="small">
        # {databaseId}
      </Typography>
      {origin &&
        IATAOrigin &&
        destination &&
        IATADestination && (
          <p className="flight">{`${origin} ${IATAOrigin} → ${destination} ${IATADestination}`}</p>
        )}
      <div className="chevron">
        <ChevronRight width="18" height="18" fill="#bac7d5" />
      </div>
      <div className="fields">
        <div className="section">
          <div className="label">
            <Typography type="secondary" size="small">
              Departure date
            </Typography>
          </div>
          {departureDate && (
            <Typography>
              {moment(departureDate).format('DD/MM/YYYY')}
            </Typography>
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
          <Typography>Icon {passengerCount}</Typography>
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
      }
    }
  `,
);
