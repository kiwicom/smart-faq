// @flow

import * as React from 'react';
//import { QueryRenderer } from 'react-relay';
import { graphql, createFragmentContainer } from 'react-relay';
import css from 'styled-jsx/css';
import { SystemMessage, Typography } from '@kiwicom/orbit-components';
//import createEnvironment from '../relay/environment';
import routeDefinitions from '../routeDefinitions';
import { formatBookingId } from '../helpers/utils';
import { BackButton, CloseIcon, Accordion, Box } from '../common';
//import type { UpcomingBookingQueryPageResponse as BookingType } from './__generated__/UpcomingBookingPageQuery.graphql';

const token =
  'WyJnUDVIdmdlVURmZlU4MVVjVWtBYW4xIiwiQzR0RzR1ZHk3dHdkbDBSeEpQbWFadUl1MnhSUS92NnhCTFJzSS51ZGhoMXAySTduRk5KQVciLDk4MzY0MzkwXQ.oidzgbuq4aNtxfp1QoF9a3CPgpk';

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
  //booking: BookingType,
};

type State = {|
  email: string,
|};

class UpcomingBookingSingle extends React.Component<Props, State> {
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
  render() {
    console.log('bookingsingle', this.props);
    return null;
    //return (
    //  <QueryRenderer
    //    environment={createEnvironment(token)}
    //    query={bookingQuery}
    //    render={this.renderPage}
    //  />
    //);
  }
}

export default createFragmentContainer(
  UpcomingBookingSingle,
  graphql`
    fragment UpcomingBookingSingle_booking on UpcomingBookingSingle {
      legs {
        airline {
          name
          code
          logoUrl
        }
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
  `,
);
