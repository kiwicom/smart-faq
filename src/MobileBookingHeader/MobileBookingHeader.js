// @flow

import * as React from "react";
import { ChevronDown, ChevronUp } from "@kiwicom/orbit-components/lib/icons";
import css from "styled-jsx/css";

import responsiveStyleHelperClasses from "../common/responsiveStyleHelperClasses";
import { BookingState } from "../context/BookingState";
import MobileNearestBooking from "./MobileNearestBooking";
import MobileSelectedBooking from "./MobileSelectedBooking";

type MobileBookingPageProps = {|
  bookingPage: string,
  selectedBooking: ?string,
  expanded: boolean,
|};

const MobileBookingPage = (props: MobileBookingPageProps) => {
  const { bookingPage, selectedBooking, expanded } = props;
  if (bookingPage === "SINGLE_BOOKING") {
    if (selectedBooking) {
      return <MobileSelectedBooking bookingId={selectedBooking} expanded={expanded} />;
    }

    return <MobileNearestBooking expanded={expanded} />;
  }

  return null;
};

type MobileBookingSummaryProps = {
  style: any,
  expanded: boolean,
};
const MobileBookingSummary = (props: MobileBookingSummaryProps) => (
  <div style={props.style}>
    <BookingState.Consumer>
      {({ bookingPage, selectedBooking }) => (
        <MobileBookingPage
          bookingPage={bookingPage}
          selectedBooking={selectedBooking}
          expanded={props.expanded}
        />
      )}
    </BookingState.Consumer>
  </div>
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

  render() {
    return (
      <React.Fragment>
        <div className="mobileOnly MobileBookingHeader">
          <div className="topRow">
            <MobileBookingSummary style={{ flexGrow: 1 }} expanded={this.state.expanded} />
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
        </div>
        <style jsx>{responsiveStyleHelperClasses}</style>
        <style jsx>{MobileBookingHeaderStyle}</style>
      </React.Fragment>
    );
  }
}

export default MobileBookingHeader;
