// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, QueryRenderer } from 'react-relay';

import createEnvironment from '../relay/environment';
import { withLoginToken } from '../context/User';
import Loader from '../common/Loader';
import { calcTimeLeft } from '../helpers/utils';
import UpcomingBooking from './UpcomingBooking';
import BookingNotFound from './BookingNotFound';
import BookingPassed from './BookingPassed';
import BookingError from './BookingError';
import type { UpcomingBookingQueryResponse } from './__generated__/UpcomingBookingQuery.graphql';

type Props = {
  loginToken: string | null,
};

type AllBookingProps = {
  props: UpcomingBookingQueryResponse,
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

class UpcomingBookingContainer extends React.Component<Props, State> {
  renderPage = (queryProps: AllBookingProps) => {
    if (queryProps.error) {
      return <BookingError />;
    }

    if (!queryProps.props) {
      return <Loader />;
    }

    const edges = idx(queryProps.props, _ => _.allBookings.edges);
    if (!edges) return <BookingPassed />;
    const nodes = edges.map(e => idx(e, _ => _.node));
    const latestBooking = sortByDate(nodes)[0];
    if (!latestBooking) return <BookingNotFound />;
    const refTime = idx(latestBooking, _ => _.departure.time) || '';
    const timeLeft = calcTimeLeft(refTime);
    if (timeLeft < 0) return <BookingPassed />;
    return <UpcomingBooking booking={latestBooking} />;
  };

  render() {
    const token = this.props.loginToken;

    return (
      <QueryRenderer
        environment={createEnvironment(token)}
        query={allBookingsQuery}
        render={this.renderPage}
        cacheConfig={{ force: true }}
      />
    );
  }
}
const allBookingsQuery = graphql`
  query UpcomingBookingQuery {
    allBookings {
      edges {
        node {
          departure {
            time
          }
          ...UpcomingBooking_booking
        }
      }
    }
  }
`;

export default withLoginToken(UpcomingBookingContainer);
