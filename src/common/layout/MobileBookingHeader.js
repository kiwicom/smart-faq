import * as React from "react";
import { ChevronDown, ChevronUp } from "@kiwicom/orbit-components/lib/icons";
import responsiveStyleHelperClasses from "../responsiveStyleHelperClasses";
import css from "styled-jsx/css";

const MobileBookingSummaryStyle = css`
  .TripId {
    font-size: 14px;
    line-height: 1.4;
    color: #7f91a8;
    margin-top: 8px;
  }

  .TripDescription {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: #171b1e;
    margin-bottom: 9px;
  }
`;

const MobileBookingSummary = ({ style }) => (
  <div style={style}>
    <div className="TripId">Upcoming trip #23432 324</div>
    <div className="TripDescription">Prague to Vancouver and back</div>
    <style jsx>{MobileBookingSummaryStyle}</style>
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

class MobileBookingHeader extends React.Component {
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
            <MobileBookingSummary style={{ flexGrow: 1 }} />
            <div className="Chevron" onClick={e => this.toggle()} role="button">
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
}

export default MobileBookingHeader;
