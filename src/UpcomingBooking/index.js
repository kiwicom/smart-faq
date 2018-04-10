// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import css from 'styled-jsx/css';
import { SystemMessage, Typography } from '@kiwicom/orbit-components';
import environment from '../relay/environment';
import routeDefinitions from '../routeDefinitions';
import { formatBookingId } from '../helpers/utils';
import { BackButton, CloseIcon, Accordion, Box } from '../common';
import type { UpcomingBookingQueryResponse } from './__generated__/UpcomingBookingQuery.graphql';

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
  .outbound,
  .inbound {
    margin-top: 16px;
  }
  .outbound .title,
  .inbound .title {
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

type Props = {
  history: Object,
};

type State = {|
  email: string,
|};

class UpcomingBooking extends React.Component<Props, State> {
  renderOutbound = () => {
    return (
      <Box padding="12px 16px 16px 12px">
        <Accordion>
          <Accordion.Header />
          <span>nononon</span>
        </Accordion>
      </Box>
    );
  };
  renderInbound = () => {
    return (
      <Box padding="12px 16px 16px 12px">
        <Accordion />
      </Box>
    );
  };

  renderPage = (booking: UpcomingBookingQueryResponse) => {
    console.log('mybooking', booking);
    return (
      <div className="UpcomingBooking">
        <BackButton text="Back" link={routeDefinitions.HOME} />
        <CloseIcon />
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
              # {formatBookingId(343453453)}
            </Typography>
          </div>
        </div>
        <div className="notification">
          <SystemMessage type="info">
            You depart in 32 days. There is still time to add some nice extras
            or even change your booking.
          </SystemMessage>
        </div>
        <div className="outbound">
          <div className="title">
            <Typography size="large" type="attention">
              Outbound
            </Typography>
          </div>
        </div>
        <div className="inbound">
          <div className="title">
            <Typography size="large" type="attention">
              Inbound
            </Typography>
          </div>
        </div>
        <div className="buttons">
          <button className="manage-booking">Manage my booking</button>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  };
          //{this.renderOutbound()}
          //{this.renderInbound()}
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={bookingQuery}
        render={this.renderPage}
      />
    );
  }
}

const bookingQuery = graphql`
  query UpcomingBookingQuery {
    booking(id: 6375499) {
      legs {
        airline {
          name
          code
          logoUrl
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
`;

export default UpcomingBooking;
