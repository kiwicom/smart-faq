// @flow

import * as React from 'react';
import idx from 'idx';
//import { QueryRenderer } from 'react-relay';
import { graphql, createFragmentContainer } from 'react-relay';
import css from 'styled-jsx/css';
import { SystemMessage, Typography } from '@kiwicom/orbit-components';
//import createEnvironment from '../relay/environment';
import routeDefinitions from '../routeDefinitions';
import { URGENCY_THRESHOLD, decodeId, formatBookingId } from '../helpers/utils';
import { BackButton, CloseButton, Box } from '../common';
import Accordion from './Accordion';
import type { UpcomingBookingSingle_booking as BookingType } from './__generated__/UpcomingBookingSingle_booking.graphql';

const style = css`
  .UpcomingBooking {
    width: 480px;
    padding: 40px;
    padding-top: 128px;
    background-color: #f5f7f9;
    height: 100%;
  }
  div.Screen-title {
    margin-bottom: 12px;
  }
  div.notification {
    margin-bottom: 8px;
  }
  div.buttons {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  button.manage-booking {
    font-weight: bold;
    font-size: 14px;
    width: 260px;
    height: 44px;
    padding: 12px 42px;
    border-radius: 3px;
    background-color: #e8edf1;
    border: none;
    color: #46515e;
  }
  span.main-title {
    margin-right: 8px;
  }
  div.title {
    margin-bottom: 2px;
  }
`;

const legStyle = css`
  .inbound,
  .outbound {
    margin-top: 16px;
  }
  .outbound .title,
  .inbound .title {
    margin-bottom: 8px;
  }
`;

type Props = {
  booking: BookingType,
};

type State = {||};

const calcTimeLeft = (refDate: string) => {
  const departure = new Date(refDate);
  const now = new Date();
  return (departure - now) / 36e5;
};
class UpcomingBookingSingle extends React.Component<Props, State> {
  renderOutbound = (booking: BookingType) => {
    const leg = booking.legs && booking.legs[0];
    //const { airline: { logoUrl } } = leg;
    const logoUrl = idx(leg, _ => _.airline.logoUrl) || '';
    const departureTime = idx(leg, _ => _.departure.localTime) || '';
    const departureCityCode =
      idx(leg, _ => _.departure.airport.locationId) || '';
    const departureCityName =
      idx(leg, _ => _.departure.airport.city.name) || '';
    const arrivalCityCode = idx(leg, _ => _.arrival.airport.locationId) || '';
    const arrivalCityName = idx(leg, _ => _.arrival.airport.city.name) || '';

    //const {
    //  localTime: departureTime,
    //  airport: {
    //    locationId: departureCityCode,
    //    city: { name: departureCityName },
    //  },
    //} = leg.departure;
    //const {
    //  airport: { locationId: arrivalCityCode, city: { name: arrivalCityName } },
    //} = leg.arrival;
    return (
      <div className="outbound">
        <div className="title">
          <Typography size="large" type="attention">
            Outbound
          </Typography>
          <Box padding="12px 16px 16px 12px">
            <Accordion
              date={departureTime}
              airlineUrl={logoUrl}
              departureCityName={departureCityName}
              departureCityCode={departureCityCode}
              arrivalCityName={arrivalCityName}
              arrivalCityCode={arrivalCityCode}
            />
          </Box>
        </div>
        <style jsx>{legStyle}</style>
      </div>
    );
  };
  renderInbound = (booking: BookingType) => {
    if (booking.legs && booking.legs.length > 1) {
      //const leg = booking.legs[booking.legs.length - 1];
      //const { airline: { logoUrl } } = leg;
      //const {
      //  localTime: departureTime,
      //  airport: {
      //    locationId: departureCityCode,
      //    city: { name: departureCityName },
      //  },
      //} = leg.departure;
      //const {
      //  airport: {
      //    locationId: arrivalCityCode,
      //    city: { name: arrivalCityName },
      //  },
      //} = leg.arrival;

      const leg = booking.legs && booking.legs[0];
      //const { airline: { logoUrl } } = leg;
      const logoUrl = idx(leg, _ => _.airline.logoUrl) || '';
      const departureTime = idx(leg, _ => _.departure.localTime) || '';
      const departureCityCode =
        idx(leg, _ => _.departure.airport.locationId) || '';
      const departureCityName =
        idx(leg, _ => _.departure.airport.city.name) || '';
      const arrivalCityCode = idx(leg, _ => _.arrival.airport.locationId) || '';
      const arrivalCityName = idx(leg, _ => _.arrival.airport.city.name) || '';
      return (
        <div className="inbound">
          <div className="title">
            <Typography size="large" type="attention">
              Outbound
            </Typography>
            <Box padding="12px 16px 16px 12px">
              <Accordion
                date={departureTime}
                airlineUrl={logoUrl}
                departureCityName={departureCityName}
                departureCityCode={departureCityCode}
                arrivalCityName={arrivalCityName}
                arrivalCityCode={arrivalCityCode}
              />
            </Box>
          </div>
          <style jsx>{legStyle}</style>
        </div>
      );
    }
    return null;
  };
  renderNotification = (booking: BookingType) => {
    //const { booking } = this.props;
    //const departureTime = booking.legs && booking.legs[0].departure.time;
    const leg = booking.legs && booking.legs[0];
    if (!leg) return null;
    const departureTime = idx(leg, _ => _.departure.time) || '';
    const hoursLeft = calcTimeLeft(departureTime);
    if (hoursLeft < URGENCY_THRESHOLD) {
      return (
        <SystemMessage type="warning">
          You depart in {Math.round(hoursLeft)}h. Don&rsquo;t hesitate to call
          us if you have an urgent problem.
        </SystemMessage>
      );
    } else {
      return (
        <SystemMessage type="info">
          You depart in 32 days. There is still time to add some nice extras or
          even change your booking.
        </SystemMessage>
      );
    }
  };
  render() {
    const { booking } = this.props;
    return (
      <div className="UpcomingBooking">
        <BackButton text="Back" link={routeDefinitions.HOME} />
        <CloseButton />
        <div className="Screen-title">
          <div className="title">
            <span className="main-title">
              <Typography size="header" type="attention">
                Upcoming booking
              </Typography>
            </span>
            <span className="second-title">
              <Typography size="small" type="active">
                select other booking
              </Typography>
            </span>
          </div>
          <div className="booking-id">
            <Typography type="secondary">
              # {formatBookingId(decodeId(booking.id))}
            </Typography>
          </div>
        </div>
        <div className="notification">{this.renderNotification(booking)}</div>
        {this.renderOutbound(booking)}
        {this.renderInbound(booking)}
        <div className="buttons">
          <button className="manage-booking">Manage my booking</button>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default createFragmentContainer(
  UpcomingBookingSingle,
  graphql`
    fragment UpcomingBookingSingle_booking on Booking {
      id
      legs {
        airline {
          name
          code
          logoUrl
        }
        departure {
          time
          localTime
          airport {
            locationId
            city {
              name
            }
          }
        }
        arrival {
          time
          localTime
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
