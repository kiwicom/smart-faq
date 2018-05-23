// @flow

import idx from 'idx';
import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';
import { ChevronRight } from '@kiwicom/orbit-components/lib/icons';

import FromToRowFragment from './FromToRow';
import DateAndPassengerFragment from './DateAndPassenger';
import formatBookingId from '../../helpers/formatBookingId';
import bookingStatus from '../../common/booking/bookingStatuses';
import CarrierLogoWrapper from '../../SingleBookingPage/bookingItem/CarrierLogoWrapper';
import type { BookingCard_arrival } from './__generated__/BookingCard_arrival.graphql';
import type { BookingCard_departure } from './__generated__/BookingCard_departure.graphql';
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
    top: 25px;
    right: 16px;
    line-height: 1.6;
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
  type: string,
  booking: BookingCard_booking,
  departure: BookingCard_departure,
  arrival: BookingCard_arrival,
|};

const BookingCard = (props: Props) => {
  const databaseId = idx(props.booking, _ => _.databaseId);
  const passengerCount = idx(props.booking, _ => _.passengerCount);
  const status = props.booking.status && bookingStatus[props.booking.status];
  const bookingDate = idx(props.booking, _ => _.bookingDate);

  return (
    <div className="card">
      {databaseId && (
        <Typography type="secondary" size="small">
          # {formatBookingId(databaseId)}
        </Typography>
      )}
      <div className="logoCarriers">
        <CarrierLogoWrapper legs={props.trip.legs} />
      </div>
      <FromToRowFragment
        type={props.type}
        arrival={props.arrival}
        departure={props.departure}
      />
      <div className="chevron">
        <ChevronRight size="medium" customColor="#bac7d5" />
      </div>
      <DateAndPassengerFragment
        status={status}
        departure={props.departure}
        passengerCount={passengerCount}
        bookingDate={bookingDate}
      />
      <style>{styles}</style>
    </div>
  );
};

export default createFragmentContainer(
  BookingCard,
  graphql`
    fragment BookingCard_booking on BookingInterface {
      status
      databaseId
      passengerCount
      bookingDate
    }

    fragment BookingCard_arrival on RouteStop {
      ...FromToRow_arrival
    }

    fragment BookingCard_departure on RouteStop {
      ...FromToRow_departure
      ...DateAndPassenger_departure
    }
  `,
);
