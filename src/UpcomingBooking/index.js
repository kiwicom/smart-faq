// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, QueryRenderer } from 'react-relay';

import createEnvironment from '../relay/environment';
import { Loader } from '../common';
import { calcTimeLeft } from '../helpers/utils';
import UpcomingBookingSingle from './UpcomingBookingSingle';
import UpcomingBookingError from './UpcomingBookingError';
import UpcomingBookingPassed from './UpcomingBookingPassed';
import type { UpcomingBookingAllBookingsQueryResponse } from './__generated__/UpcomingBookingAllBookingsQuery.graphql';

type Props = {};
type AllBookingProps = {
  props: UpcomingBookingAllBookingsQueryResponse,
  error: Error,
};

type State = {|
  email: string,
|};

const sortByDate = bookings =>
  bookings.sort(
    (a, b) =>
      (idx(a, _ => _.departure.time) || 0) -
      (idx(b, _ => _.departure.time) || 0),
  );

class UpcomingBooking extends React.Component<Props, State> {
  renderPage = (queryProps: AllBookingProps) => {
    if (queryProps.error) {
      return <div>Error</div>;
    }

    if (!queryProps.props) {
      return <Loader />;
    }

    const edges = idx(queryProps.props, _ => _.allBookings.edges);
    if (!edges) return <UpcomingBookingPassed />;
    const nodes = edges.map(e => idx(e, _ => _.node));
    const latestBooking = sortByDate(nodes)[0];
    if (!latestBooking) return <UpcomingBookingError />;
    const refTime = idx(latestBooking, _ => _.departure.time) || '';
    const timeLeft = calcTimeLeft(refTime);
    if (timeLeft < 0) return <UpcomingBookingPassed />;
    return <UpcomingBookingSingle booking={latestBooking} />;
  };
  render() {
    return (
      <QueryRenderer
        environment={createEnvironment()}
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
          }
          ...UpcomingBookingSingle_booking
        }
      }
    }
  }
`;

export default UpcomingBooking;
