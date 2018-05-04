// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from 'react-relay';
import css from 'styled-jsx/css';
import { SystemMessage, Typography } from '@kiwicom/orbit-components';
import {
  Loading,
  ChevronDown,
  Phone,
  Alert,
} from '@kiwicom/orbit-components/lib/icons';

import {
  calcTimeLeft,
  formatCountDown,
  URGENCY_THRESHOLD,
  formatBookingId,
} from '../helpers/utils';
import Box from '../common/Box';
import Accordion from './Accordion';
import type { UpcomingBooking_booking as BookingType } from './__generated__/UpcomingBooking_booking.graphql';
import { formatStatus } from '../common/formatStatus';

const style = css`
  .UpcomingBooking {
    width: 480px;
    padding: 40px;
    background-color: #f5f7f9;
    height: 100%;
  }
  div.Screen-title {
    margin-bottom: 12px;
  }
  div.Screen-title-group {
    display: flex;
    justify-content: space-between;
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
const contactStyle = css`
  .contact {
    margin-top: 32px;
  }
  .contact .title {
    margin-bottom: 18px;
  }
  .contact-options {
    display: flex;
  }
  .phone {
    margin-right: 40px;
  }
  hr {
    margin-bottom: 16px;
    border: none;
    border-bottom: 1px solid #e8edf1;
  }
  .phone-icon {
    margin-right: 7px;
  }
  .chevron-icon {
    margin-left: 5px;
  }
  .chat-icon {
    margin-right: 14px;
  }
`;
const instructionsStyle = css`
  .instructions {
    margin-left: 20px;
    margin-top: 34px;
    font-size: 14px;
    color: #46515e;
  }
  .instructions ol {
    list-style-type: decimal;
  }
  li {
    margin-bottom: 7px;
    padding-left: 10px;
  }
`;
const msgStyle = css`
  .system-message {
    display: flex;
  }
  .system-message .icon {
    margin-right: 14px;
  }
`;

type Props = {
  booking: BookingType,
};

type State = {||};

class UpcomingBooking extends React.Component<Props, State> {
  renderOutbound = (booking: BookingType) => {
    const leg = booking.legs && booking.legs[0];
    const logoUrl = idx(leg, _ => _.airline.logoUrl) || '';
    const departureTime = idx(leg, _ => _.departure.localTime) || '';
    const departureCityCode =
      idx(leg, _ => _.departure.airport.locationId) || '';
    const departureCityName =
      idx(leg, _ => _.departure.airport.city.name) || '';
    const arrivalCityCode = idx(leg, _ => _.arrival.airport.locationId) || '';
    const arrivalCityName = idx(leg, _ => _.arrival.airport.city.name) || '';

    return (
      <div className="outbound">
        <div className="title">
          <Typography size="large" type="attention">
            Outbound
          </Typography>
        </div>
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
        <style jsx>{legStyle}</style>
      </div>
    );
  };
  renderInbound = (booking: BookingType) => {
    if (booking.legs && booking.legs.length > 1) {
      const leg = booking.legs && booking.legs[0];
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
              Return
            </Typography>
          </div>
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
          <style jsx>{legStyle}</style>
        </div>
      );
    }
    return null;
  };
  renderNotification = (booking: BookingType) => {
    const leg = booking.legs && booking.legs[0];
    if (!leg) return null;
    const departureTime = idx(leg, _ => _.departure.time) || '';
    const hoursLeft = calcTimeLeft(departureTime);
    if (hoursLeft < URGENCY_THRESHOLD) {
      return (
        <SystemMessage type="warning">
          <div className="system-message">
            <div className="icon">
              <Alert fill="#f9971e" />
            </div>
            <div className="text">
              You depart in {formatCountDown(hoursLeft)}. Don&rsquo;t hesitate
              to call us if you have an urgent problem.
            </div>
            <style jsx>{msgStyle}</style>
          </div>
        </SystemMessage>
      );
    } else {
      return (
        <SystemMessage type="info">
          <div className="system-message">
            <div className="icon">
              <Alert fill="#10709f" />
            </div>
            <div className="text">
              You depart in {formatCountDown(hoursLeft)}. There is still time to
              add some nice extras or even change your booking.
            </div>
            <style jsx>{msgStyle}</style>
          </div>
        </SystemMessage>
      );
    }
  };
  renderContact = (booking: BookingType) => {
    const leg = booking.legs && booking.legs[0];
    if (!leg) return null;
    const departureTime = idx(leg, _ => _.departure.time) || '';
    const hoursLeft = calcTimeLeft(departureTime);
    if (hoursLeft < URGENCY_THRESHOLD) {
      return (
        <div className="contact">
          <hr />
          <div className="title">
            <Typography size="large" type="attention">
              Contacts
            </Typography>
          </div>
          <div className="contact-options">
            <div className="phone">
              <span className="phone-icon inline-icon">
                <Phone fill="#00a991" />
              </span>
              <Typography size="normal" type="active">
                +42 987 876 567 CZ
              </Typography>
              <span className="chevron-icon inline-icon">
                <ChevronDown height="16" fill="#00a991" />
              </span>
            </div>
            <div className="chat">
              <span className="chat-icon inline-icon">
                <Loading fill="#00a991" />
              </span>
              <Typography size="normal" type="active">
                Write us a message
              </Typography>
            </div>
          </div>
          {this.renderContactInstructions()}
          <style jsx>{contactStyle}</style>
        </div>
      );
    } else {
      return null;
    }
  };
  renderContactInstructions = () => {
    return (
      <div className="instructions">
        <ol>
          <li>
            When contacting us we will ask the <b>full name</b> of at least one
            of the passengers.
          </li>
          <li>
            The full <b>email address</b> provided during the booking.
          </li>
        </ol>
        <style jsx>{instructionsStyle}</style>
      </div>
    );
  };
  render() {
    const { booking } = this.props;
    if (!booking) return null;
    return (
      <div className="UpcomingBooking">
        <div className="Screen-title">
          <div className="Screen-title-group">
            <div className="booking-id">
              {booking.databaseId && (
                <Typography type="secondary">
                  Upcoming booking # {formatBookingId(booking.databaseId)}
                </Typography>
              )}
            </div>
            <div className="second-title">
              <Typography size="small" type="active">
                select other booking
              </Typography>
            </div>
          </div>
          <div className="title">
            <span className="main-title">
              <Typography size="header" type="attention">
                Upcoming booking
              </Typography>
            </span>
          </div>
          <div style={{color: formatStatus(booking.status).color, fontSize: '14px'}}>
            {formatStatus(booking.status).text}
          </div>
        </div>
        <div className="notification">{this.renderNotification(booking)}</div>
        {this.renderOutbound(booking)}
        {this.renderInbound(booking)}
        <div className="buttons">
          <button className="manage-booking">Manage my booking</button>
        </div>
        {this.renderContact(booking)}
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default createFragmentContainer(
  UpcomingBooking,
  graphql`
    fragment UpcomingBooking_booking on Booking {
      databaseId
      status
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
