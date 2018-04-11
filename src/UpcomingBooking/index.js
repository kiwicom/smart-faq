// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, QueryRenderer } from 'react-relay';
import css from 'styled-jsx/css';
import { SystemMessage, Typography } from '@kiwicom/orbit-components';
import createEnvironment from '../relay/environment';
import routeDefinitions from '../routeDefinitions';
import { formatBookingId } from '../helpers/utils';
import { BackButton, CloseIcon, Accordion, Box } from '../common';
//import UpcomingBookingPage from './UpcomingBookingPage';
//import type { UpcomingBookingQueryResponse } from './__generated__/UpcomingBookingQuery.graphql';
import type { UpcomingBookingAllBookingsQueryResponse } from './__generated__/UpcomingBookingAllBookingsQuery.graphql';

const style = css`
  .UpcomingBooking {
    width: 480px;
    padding: 40px;
    padding-top: 128px;
    background-color: #f5f7f9;
    height: 100%;
  }
`;

type Props = {};
type AllBookingProps = {
  props: UpcomingBookingAllBookingsQueryResponse,
};

type State = {|
  email: string,
|};

const token =
  'WyJnUDVIdmdlVURmZlU4MVVjVWtBYW4xIiwiQzR0RzR1ZHk3dHdkbDBSeEpQbWFadUl1MnhSUS92NnhCTFJzSS51ZGhoMXAySTduRk5KQVciLDMzNTk3MzA1Mjhd.YrIBYrUld7BSAD-H2It3VEun4GU';

const sortByDate = bookings =>
  bookings.sort((a, b) => a.departure.time - b.departure.time);

class UpcomingBooking extends React.Component<Props, State> {
  renderPage = (queryProps: AllBookingProps) => {
    console.log('renderPage props', queryProps);
    const { allBookings: queryBookings } = queryProps;
    if (!queryBookings) return null;
    const allBookings = (
      idx(queryBookings, _ => _.allFAQCategories.edges) || []
    ).map(e => e.node);
    const latestBooking = sortByDate(allBookings)[0];
    return null;
    //return <UpcomingBookingPage booking={latestBooking} />;
  };
  render() {
    return (
      <QueryRenderer
        environment={createEnvironment(token)}
        query={allBookingsQuery}
        render={this.renderPage}
      />
    );
  }
}
const allBookingsQuery = graphql`
  query UpcomingBookingAllBookingsQuery {
    allBookings {
      edges {
        node {
          id
          departure {
            time
            localTime
          }
        }
      }
    }
  }
`;

export default UpcomingBooking;
