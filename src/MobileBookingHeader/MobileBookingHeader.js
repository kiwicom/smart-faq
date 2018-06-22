// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text } from '@kiwicom/orbit-components';
import {
  Search,
  Trip,
  AccountCircle,
  Close,
} from '@kiwicom/orbit-components/lib/icons';

import { SearchState, type SearchStateType } from '../context/SearchState';
import { BookingState } from '../context/BookingState';
import { CloseContext } from '../context/Close';
import BackButtonMobile from './BackButtonMobile';
import MobileNearestBooking from './MobileNearestBooking';
import MobileSelectedBooking from './MobileSelectedBooking';
import MobileUserDetail from './MobileUserDetail';

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
    background-color: #f5f7f9;
    box-shadow: inset 0 1px 0 0 #e8edf1;
  }
  .option {
    flex: 1;
    padding: 5%;
    text-align: center;
    background-color: #fff;
    border: 1px solid #eaeaea;
    outline: none;
  }
  .option:nth-child(2) {
    display: none;
  }
  .option.active {
    background-color: #f5f7f9;
  }
  .openedContent {
    display: flex;
    flex-direction: column;
    background-color: #f5f7f9;
    box-shadow: inset 0 1px 0 0 #e8edf1;
    padding: 8px 16px;
  }

  @media screen and (orientation: landscape) {
    .option:nth-child(2) {
      flex: 7;
      display: flex;
    }
  }
`;

type State = {
  isSearchActive: boolean,
  isSummaryActive: boolean,
  isAccountActive: boolean,
};

class MobileBookingHeader extends React.Component<{}, State> {
  state: State = {
    isSearchActive: false,
    isSummaryActive: false,
    isAccountActive: false,
  };

  componentDidMount() {
    this.contextToggleSearch();
  }

  contextToggleSearch = () => {};

  toggleSearch = () => {
    this.contextToggleSearch();
    this.setState(prevState => ({
      isSearchActive: !prevState.isSearchActive,
    }));

    if (this.state.isSummaryActive) {
      this.toggleSummary();
    }

    if (this.state.isAccountActive) {
      this.toggleAccount();
    }
  };

  toggleSummary = () => {
    this.setState(prevState => ({
      isSummaryActive: !prevState.isSummaryActive,
    }));

    if (this.state.isSearchActive) {
      this.toggleSearch();
    }

    if (this.state.isAccountActive) {
      this.toggleAccount();
    }
  };

  toggleAccount = () => {
    this.setState(prevState => ({
      isAccountActive: !prevState.isAccountActive,
    }));

    if (this.state.isSearchActive) {
      this.toggleSearch();
    }

    if (this.state.isSummaryActive) {
      this.toggleSummary();
    }
  };

  render() {
    return (
      <React.Fragment>
        <SearchState.Consumer>
          {({ toggleSearch }: SearchStateType) => {
            this.contextToggleSearch = toggleSearch;

            return (
              <div className="MobileBookingHeader">
                <div
                  className="option"
                  onClick={() => null}
                  onKeyDown={() => null}
                  role="button"
                  tabIndex="0"
                >
                  <BackButtonMobile />
                </div>
                <div className="option">
                  <Text type="primary" weight="bold">
                    Help
                  </Text>
                </div>
                <div
                  className={
                    this.state.isSearchActive ? 'option active' : 'option'
                  }
                  onClick={() => this.toggleSearch()}
                  onKeyDown={() => this.toggleSearch()}
                  role="button"
                  tabIndex="0"
                >
                  <Search size="medium" customColor="#45505d" />
                </div>
                <div
                  className={
                    this.state.isSummaryActive ? 'option active' : 'option'
                  }
                  onClick={() => this.toggleSummary()}
                  onKeyDown={() => this.toggleSummary()}
                  role="button"
                  tabIndex="0"
                >
                  <Trip size="medium" customColor="#45505d" />
                </div>
                <div
                  className={
                    this.state.isAccountActive ? 'option active' : 'option'
                  }
                  onClick={() => this.toggleAccount()}
                  onKeyDown={() => this.toggleAccount()}
                  role="button"
                  tabIndex="0"
                >
                  <AccountCircle size="medium" customColor="#45505d" />
                </div>
                <CloseContext.Consumer>
                  {(onClose: () => void) => (
                    <div
                      className="option"
                      role="button"
                      tabIndex="0"
                      onKeyDown={onClose}
                      onClick={onClose}
                    >
                      <Close size="medium" customColor="#45505d" />
                    </div>
                  )}
                </CloseContext.Consumer>
              </div>
            );
          }}
        </SearchState.Consumer>
        {this.state.isSummaryActive ? (
          <div className="openedContent">
            <MobileBookingSummary />
          </div>
        ) : null}
        {this.state.isAccountActive ? (
          <div className="openedContent">
            <MobileUserDetail />
          </div>
        ) : null}
        <style jsx>{MobileBookingHeaderStyle}</style>
      </React.Fragment>
    );
  }
}

export default MobileBookingHeader;
