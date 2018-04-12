// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, QueryRenderer } from 'react-relay';
import css from 'styled-jsx/css';
import createEnvironment from '../relay/environment';
import routeDefinitions from '../routeDefinitions';
import { formatBookingId } from '../helpers/utils';
//import UpcomingBookingPage from './UpcomingBookingPage';
import UpcomingBookingSingle from './UpcomingBookingSingle';
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
  'WyJnUDVIdmdlVURmZlU4MVVjVWtBYW4xIiwiQzR0RzR1ZHk3dHdkbDBSeEpQbWFadUl1MnhSUS92NnhCTFJzSS51ZGhoMXAySTduRk5KQVciLDE2MTY0NDUzMjhd.eLYROrOFjUzHfKsWxM7imkVtKfU';

const sortByDate = bookings =>
  bookings.sort(
    (a, b) =>
      (idx(a, _ => _.departure.time) || 0) -
      (idx(b, _ => _.departure.time) || 0),
  );

class UpcomingBooking extends React.Component<Props, State> {
  renderPage = (queryProps: AllBookingProps) => {
    if (!queryProps.props) return null;
    const edges = idx(queryProps.props, _ => _.allBookings.edges) || [];
    const nodes = edges.map(e => idx(e, _ => _.node));
    //const allBookings = (
    //  idx(queryProps.props, _ => _.allBookings.edges) || []
    //).map(e => e.node);
    //const latestBooking = sortByDate(allBookings)[0];
    const latestBooking = sortByDate(nodes)[0];
    return <UpcomingBookingSingle booking={latestBooking} />;
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
          departure {
            time
            localTime
          }
          ...UpcomingBookingSingle_booking
        }
      }
    }
  }
`;

export default UpcomingBooking;
