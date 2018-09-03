// @flow

import * as React from 'react';
import { graphql } from 'react-relay';

import QueryRenderer from '../relay/QueryRenderer';
import type { MobileNearestBookingQuery as QueryResponseType } from './__generated__/MobileNearestBookingQuery.graphql';
import MobileBookingDetail from './MobileBookingDetail';

const Query = graphql`
  query MobileNearestBookingQuery {
    nearestBooking {
      upcomingLeg {
        ...GuaranteeNeededResolver_upcomingLeg
      }
      ...MobileBookingDetail_booking
    }
  }
`;

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

type Props = {||};

class MobileNearestBooking extends React.Component<Props> {
  renderBooking = (renderState: RenderState) => {
    if (renderState && renderState.error) {
      return <div>Error</div>;
    }

    if (!renderState.props) {
      return <div>Loading</div>;
    }

    const booking = renderState.props.nearestBooking;

    if (!booking) {
      return <div>Not found</div>;
    }

    return <MobileBookingDetail booking={booking} />;
  };

  render() {
    return (
      <QueryRenderer query={Query} variables={{}} render={this.renderBooking} />
    );
  }
}

export default MobileNearestBooking;
