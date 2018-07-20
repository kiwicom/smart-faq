// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import idx from 'idx';
import { Text } from '@kiwicom/orbit-components';
import {
  Search,
  Trip,
  AccountCircle,
  Close,
} from '@kiwicom/orbit-components/lib/icons';
import { withRouter } from 'react-router-dom';

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
    padding: 19px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #eaeaea;
    outline: none;
  }
  .option.help {
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

  @media screen and (max-height: 480px) {
    .option.help {
      flex: 7;
      display: flex;
    }
  }
`;

type Props = {|
  match: {
    params: {
      categoryId: ?string,
    },
  },
  history: {
    goBack: () => void,
    push: string => void,
    location: {
      pathname: string,
    },
    entries: Array<{
      pathname: string,
    }>,
  },
|};

type State = {
  activeTab: 'search' | 'summary' | 'account' | null,
};

class MobileBookingHeader extends React.Component<Props, State> {
  state: State = {
    activeTab: null,
  };

  componentDidMount() {
    this.contextToggleSearch();
  }

  contextEnableSearch = () => {};
  contextDisableSearch = () => {};
  contextToggleSearch = () => {};

  toggleSearch = () => {
    if (this.isSearchActive()) {
      this.setState({
        activeTab: null,
      });
      this.contextDisableSearch();
    } else {
      this.setState({
        activeTab: 'search',
      });
      this.props.history.push('/faq/');
      this.contextEnableSearch();
    }
  };

  toggleSummary = () => {
    this.setState(prevState => ({
      activeTab: prevState.activeTab === 'summary' ? null : 'summary',
    }));
  };

  toggleAccount = () => {
    this.setState(prevState => ({
      activeTab: prevState.activeTab === 'account' ? null : 'account',
    }));
  };

  goBack() {
    const { entries } = this.props.history;
    const firstEntry = entries[0];
    const faqCategory = firstEntry.pathname.split('article')[0];
    return firstEntry.pathname === location.pathname
      ? this.props.history.push(faqCategory)
      : this.props.history.goBack();
  }

  isSearchActive() {
    return (
      this.state.activeTab === 'search' &&
      this.props.history.location.pathname === '/faq/'
    );
  }

  render() {
    return (
      <React.Fragment>
        <SearchState.Consumer>
          {({ disableSearch, enableSearch, toggleSearch }: SearchStateType) => {
            this.contextEnableSearch = enableSearch;
            this.contextDisableSearch = disableSearch;
            this.contextToggleSearch = toggleSearch;
            const { location } = this.props.history;
            const currentpath = location && location.pathname;
            const isArticle = currentpath.includes('article/');
            const hasCategory =
              idx(this.props.match, _ => _.params.categoryId) || null;

            return (
              <div className="MobileBookingHeader">
                {isArticle || hasCategory ? (
                  <div
                    className="option"
                    onClick={() => this.goBack()}
                    onKeyUp={() => this.goBack()}
                    role="button"
                    tabIndex="-1"
                  >
                    <BackButtonMobile />
                  </div>
                ) : null}
                <div className="option help">
                  <Text type="primary" weight="bold">
                    Help
                  </Text>
                </div>
                <div
                  className={this.isSearchActive() ? 'option active' : 'option'}
                  onClick={() => this.toggleSearch()}
                  onKeyDown={() => this.toggleSearch()}
                  role="button"
                  tabIndex="0"
                >
                  <Search size="medium" customColor="#45505d" />
                </div>
                <div
                  className={
                    this.state.activeTab === 'summary'
                      ? 'option active'
                      : 'option'
                  }
                  onClick={() => this.toggleSummary()}
                  onKeyDown={() => this.toggleSummary()}
                  role="button"
                  tabIndex="0"
                  data-cy="trip-button"
                >
                  <Trip size="medium" customColor="#45505d" />
                </div>
                <div
                  className={
                    this.state.activeTab === 'account'
                      ? 'option active'
                      : 'option'
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
        {this.state.activeTab === 'summary' ? (
          <div className="openedContent">
            <MobileBookingSummary />
          </div>
        ) : null}
        {this.state.activeTab === 'account' ? (
          <div className="openedContent">
            <MobileUserDetail />
          </div>
        ) : null}
        <style jsx>{MobileBookingHeaderStyle}</style>
      </React.Fragment>
    );
  }
}

export default withRouter(MobileBookingHeader);
