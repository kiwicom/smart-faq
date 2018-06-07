// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from "idx";
import ContentLoader from "react-content-loader";

import Loader from '../common/Loader';
import QueryRenderer from '../relay/QueryRenderer';
import BookingError from './BookingError';
import BookingDetail from './BookingDetail';
import BookingNotFound from './BookingNotFound';
import type { NearestBookingQueryResponse as QueryResponseType } from './__generated__/NearestBookingQuery.graphql';

type Props = {||};

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

const query = graphql`
  query NearestBookingQuery {
    nearestBooking {
      ...BookingDetail_booking
    }
  }
`;

class NearestBooking extends React.Component<Props> {
  renderBooking = (renderState: RenderState) => {
    let content = null;
    const booking = idx(renderState.props, _ => _.nearestBooking)

    if (booking) {
      content = <BookingDetail booking={booking} />;
    } else if(!booking) {
      content = <BookingNotFound />;
    }

    if (!renderState.props) {
      content =  (
        <ContentLoader
          speed={1}
          height={400}
          primaryColor="#e8edf1"
          secondaryColor="#d9dee2"
        >
          <rect x="30" y="30" rx="4" ry="4" width="150" height="13" /> 
          <rect x="280" y="30" rx="4" ry="4" width="100" height="13" /> 
          <rect x="30" y="55" rx="4" ry="4" width="200" height="20" /> 
          <rect x="30" y="110" rx="4" ry="4" width="350" height="50" /> 
          <rect x="30" y="200" rx="4" ry="4" width="350" height="50" /> 
          <rect x="140" y="270" rx="4" ry="4" width="120" height="25" /> 
        </ContentLoader>
      );
    }

    if (renderState && renderState.error) {
      content =  <BookingError />;
    }

    return (
      <div style={{ height: "100%", backgroundColor: "#f5f7f9"}}>
        {content}
      </div>
    );
  };

  render() {
    return (
      <QueryRenderer query={query} variables={{}} render={this.renderBooking} />
    );
  }
}

export default NearestBooking;
