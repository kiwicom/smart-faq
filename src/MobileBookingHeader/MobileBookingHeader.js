// @flow

import * as React from 'react';
import { ChevronDown, ChevronUp } from '@kiwicom/orbit-components/lib/icons';
import css from 'styled-jsx/css';
import idx from 'idx';
import { graphql } from 'react-relay';

import responsiveStyleHelperClasses from '../common/responsiveStyleHelperClasses';
import { UserContext, type UserContextType } from '../context/User';
import { BookingState } from '../context/BookingState';
import QueryRenderer from '../relay/QueryRenderer';
import MobileBookingDetail from './MobileBookingDetail';
import bookingTypes from '../common/booking/bookingTypes';
import type { MobileBookingHeaderNearestBookingQuery as QueryResponseType } from './__generated__/MobileBookingHeaderNearestBookingQuery.graphql';

const MobileBookingHeaderNearestBookingQuery = graphql`
  query MobileBookingHeaderNearestBookingQuery {
    nearestBooking {
      ...MobileBookingDetail_booking
    }
  }
`;

type RenderState = {
  props: ?QueryResponseType,
  error: ?Error,
};

class NearestBooking extends React.Component<Props> {
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
      <QueryRenderer
        query={MobileBookingHeaderNearestBookingQuery}
        variables={{}}
        render={this.renderBooking}
      />
    );
  }
}

const selectedBookingQuery = graphql`
  query MobileBookingHeaderSelectedBookingQuery($id: ID!) {
    booking(id: $id) {
      type
      oneWay {
        ...MobileBookingDetail_booking
      }
      return {
        ...MobileBookingDetail_booking
      }
      multicity {
        ...MobileBookingDetail_booking
      }
    }
  }
`;

type SelectedBookingProps = {
  bookingId: string,
};

class SelectedBooking extends React.Component<SelectedBookingProps> {
  renderSelectedBooking = (renderState: RenderState) => {
    if (renderState.error) {
      return <div>Error</div>;
    }

    if (!renderState.props) {
      return <div>Loading</div>;
    }

    const bookingType = idx(renderState.props, _ => _.booking.type);
    let booking = null;

    switch (bookingType) {
      case bookingTypes.ONE_WAY:
        booking = idx(renderState.props, _ => _.booking.oneWay);
        break;
      case bookingTypes.RETURN:
        booking = idx(renderState.props, _ => _.booking.return);
        break;
      case bookingTypes.MULTICITY:
        booking = idx(renderState.props, _ => _.booking.multicity);
        break;
    }

    if (!booking) {
      return <div>Not found</div>;
    }

    return <MobileBookingDetail booking={booking} />;
  };

  render() {
    const { bookingId } = this.props;

    return (
      <QueryRenderer
        query={selectedBookingQuery}
        variables={{ id: bookingId }}
        render={this.renderSelectedBooking}
      />
    );
  }
}

const MobileBookingPage = ({ bookingPage, selectedBooking }) => {
  if (bookingPage === 'SINGLE_BOOKING') {
    if (selectedBooking) {
      return <SelectedBooking bookingId={selectedBooking} />;
    }

    return <NearestBooking />;
  }
};

type MobileBookingSummaryProps = {
  style: any,
};
const MobileBookingSummary = (props: MobileBookingSummaryProps) => (
  <div style={props.style}>
    <BookingState.Consumer>
      {({ bookingPage, selectedBooking }) => (
        <MobileBookingPage
          bookingPage={bookingPage}
          selectedBooking={selectedBooking}
        />
      )}
    </BookingState.Consumer>
  </div>
);

const MobileBookingControlsStyle = css`
  .manageBookingButton {
    height: 32px;
    line-height: 32px;
    border-radius: 3px;
    background-color: #e8edf1;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    color: #46515e;
    margin: 4px 0;
  }

  .selectBookingButton {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
    color: #00a991;
    margin-top: 12px;
    margin-bottom: 8px;
  }
`;

const MobileBookingControls = () => (
  <React.Fragment>
    <div className="manageBookingButton">Manage My Booking</div>
    <div className="selectBookingButton">select another booking</div>
    <style jsx>{MobileBookingControlsStyle}</style>
  </React.Fragment>
);

const MobileBookingHeaderStyle = css`
  .MobileBookingHeader {
    display: flex;
    flex-direction: column;
    background-color: #f5f7f9;
    box-shadow: inset 0 1px 0 0 #e8edf1;
    padding: 0 16px;
  }

  .topRow {
    display: flex;
  }

  .Chevron {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
  }
`;

type Props = {};
type State = {
  expanded: boolean,
};

class MobileBookingHeader extends React.Component<Props, State> {
  state = {
    expanded: false,
  };

  toggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="mobileOnly MobileBookingHeader">
          <div className="topRow">
            <MobileBookingSummary style={{ flexGrow: 1 }} />
            <div
              className="Chevron"
              onClick={() => this.toggle()}
              onKeyDown={() => this.toggle()}
              role="button"
              tabIndex="0"
            >
              {this.state.expanded ? (
                <ChevronUp customColor="#bac7d5" />
              ) : (
                <ChevronDown customColor="#bac7d5" />
              )}
            </div>
          </div>
          {this.state.expanded && (
            <div className="bottomRow">
              <MobileBookingControls />
            </div>
          )}
        </div>
        <style jsx>{responsiveStyleHelperClasses}</style>
        <style jsx>{MobileBookingHeaderStyle}</style>
      </React.Fragment>
    );
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ user }: UserContextType) => this.renderHeader(Boolean(user))}
      </UserContext.Consumer>
    );
  }
}

export default MobileBookingHeader;
