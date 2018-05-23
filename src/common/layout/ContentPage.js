// @flow

import * as React from 'react';

import Header from './Header';
import AllBooking from '../../AllBookings';
import NearestBooking from '../../SingleBookingPage/NearestBooking';
import SelectedBooking from '../../SingleBookingPage/SelectedBooking';
import { UserContext, type UserContextType } from '../../context/User';
import { ClickAllBooking, ClickSelectBooking } from '../../context/BookingPage';

type State = {|
  bookingPage: 'SINGLE_BOOKING' | 'ALL_BOOKINGS',
  selectedBooking: ?string,
|};

const ContentPageHOC = <Props>(Component: React.ComponentType<Props>) =>
  class ContentPage extends React.Component<Props, State> {
    state = {
      bookingPage: 'SINGLE_BOOKING',
      selectedBooking: null,
    };

    onClickAllBooking = () => {
      this.setState({ bookingPage: 'ALL_BOOKINGS' });
    };

    onClickSelect = (id: string) => {
      this.setState({ bookingPage: 'SINGLE_BOOKING', selectedBooking: id });
    };

    renderBookingPage = () => {
      const { bookingPage, selectedBooking } = this.state;

      if (bookingPage === 'SINGLE_BOOKING') {
        if (selectedBooking) {
          return (
            <ClickAllBooking.Provider value={this.onClickAllBooking}>
              <SelectedBooking bookingId={selectedBooking} />
            </ClickAllBooking.Provider>
          );
        }

        return (
          <ClickAllBooking.Provider value={this.onClickAllBooking}>
            <NearestBooking />
          </ClickAllBooking.Provider>
        );
      }

      return (
        <ClickSelectBooking.Provider value={this.onClickSelect}>
          <AllBooking />
        </ClickSelectBooking.Provider>
      );
    };

    renderPage = (isLoggedIn: boolean) => (
      <div className="ContentPage">
        <Header isLoggedIn={isLoggedIn} />
        <div className="Body">
          {isLoggedIn && (
            <div className="BookingInfo">{this.renderBookingPage()}</div>
          )}
          <div className="FAQ">
            <Component {...this.props} />
          </div>
        </div>
        <style jsx>
          {`
            .ContentPage {
              min-width: 480px;
              height: 100vh;
            }
            .ContentPage .Body {
              display: flex;
              height: calc(100% - (64px));
            }
            .FAQ {
              width: 480px;
            }
            .BookingInfo {
              width: 548px;
            }

            @media only screen and (min-width: 320px) and (max-width: 480px) {
              .BookingInfo {
                display: none;
              }

              .ContentPage {
                min-width: 320px;
                width: 100vw;
              }

              .FAQ {
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    );

    render() {
      return (
        <UserContext.Consumer>
          {({ user }: UserContextType) => this.renderPage(Boolean(user))}
        </UserContext.Consumer>
      );
    }
  };

export default ContentPageHOC;
