// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

import { BookingState } from '../context/BookingState';
import MobileNearestBooking from './MobileNearestBooking';
import MobileSelectedBooking from './MobileSelectedBooking';

type MobileBookingPageProps = {|
  +bookingPage: string,
  +selectedBooking: ?number,
|};

const MobileBookingPage = (props: MobileBookingPageProps) => {
  const { bookingPage, selectedBooking } = props;
  if (bookingPage === 'SINGLE_BOOKING') {
    if (selectedBooking) {
      return <MobileSelectedBooking bookingId={selectedBooking} />;
    }

    return <MobileNearestBooking />;
  }

  return null;
};

const MobileBookingSummary = () => (
  <div>
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

const MobileBookingHeaderStyle = css`
  .MobileBookingHeader {
    display: flex;
    flex-direction: column;
    background-color: #f5f7f9;
    box-shadow: inset 0 1px 0 0 #e8edf1;
    padding: 0 16px;
  }
`;

type Props = {};

class MobileBookingHeader extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <div className="MobileBookingHeader">
          <MobileBookingSummary />
        </div>
        <style jsx>{MobileBookingHeaderStyle}</style>
      </React.Fragment>
    );
  }
}

export default MobileBookingHeader;
