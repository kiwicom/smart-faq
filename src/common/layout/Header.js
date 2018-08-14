// @flow

import { withRouter } from 'react-router-dom';
import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { TextLink } from '@kiwicom/orbit-components';

import { Desktop, Mobile } from '../Responsive';
import CloseButton from '../buttons/CloseButton';
import BackButton from '../buttons/BackButton';
import SignOutButton from './SignOutButton';
import { UserContext } from '../../context/User';
import { BookingState } from '../../context/BookingState';
import responsiveStyleHelperClasses from '../responsiveStyleHelperClasses';
import MobileBookingHeader from '../../MobileBookingHeader/MobileBookingHeader';
import type { UserContextType } from '../../context/User';
import SearchBar from '../../StaticFAQ/SearchBar';

const style = css`
  .loggedOut {
    display: flex;
    justify-content: space-between;
    padding: 15px 122px 15px 40px;
  }
  .header {
    display: flex;
    align-items: center;
  }
  .HeaderFAQ {
    width: 100%;
    border-bottom: 1px solid #e8edf1;
    background-color: #ffffff;
  }
  @media only screen and (max-width: 500px) {
    .header.hide {
      opacity: 0;
      max-height: 0;
    }
  }
`;

const loggedInStyle = css`
  .helpHeader {
    font-size: 28px;
    font-weight: bold;
    color: #171b1e;
    pointer-events: none;
  }
  .loggedIn {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 15px 122px 15px 40px;
  }
  .links {
    display: flex;
    align-items: center;
  }
  a.open-icon {
    margin-left: 12px;
  }
  .staticFaqSearch {
    width: 350px;
    position: absolute;
    right: 260px;
    top: 10px;
  }
  @media only screen and (max-width: 900px) and (max-height: 480px) {
    .loggedIn {
      display: none;
    }
  }
  @media only screen and (max-width: 900px) {
    .loggedIn {
      padding: 15px;
    }
    .helpHeader {
      width: 100%;
      text-align: center;
      font-size: 1.2em;
    }
  }
`;

const loggedOutStyle = css`
  .helpHeader {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #171b1e;
    pointer-events: none;
    margin: 0;
  }
  .loggedOut {
    display: flex;
    align-items: center;
    padding: 16px;
    height: 66px;
  }
  .signInOrBack {
    width: 43px;
    height: 20px;
  }
  .backButton {
    line-height: 2;
  }
  @media only screen and (max-width: 901px) {
    .helpHeader {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
`;

type State = {
  isScrolling: boolean,
  lastScroll: number,
  headerHeight: number,
};

type Props = {
  history: {
    push: string => void,
  },
  match: {
    params: {
      categoryId: ?string,
    },
  },
  location: {
    pathname: string,
  },
};

const renderLoggedIn = () => {
  return (
    <React.Fragment>
      <div className="loggedIn">
        <BookingState.Consumer>
          {({ bookingPage }) => (
            <div className="helpHeader">
              {bookingPage === 'ALL_BOOKINGS' ? (
                <React.Fragment>
                  <Mobile>Your Trips</Mobile>
                  <Desktop>Help</Desktop>
                </React.Fragment>
              ) : (
                'Help'
              )}
            </div>
          )}
        </BookingState.Consumer>
        <div className="desktopOnly">
          <div className="staticFaqSearch">
            <SearchBar />
          </div>
        </div>
        <div className="links">
          <div className="desktopOnly">
            <SignOutButton />
          </div>
        </div>
        <style jsx>{loggedInStyle}</style>
        <style jsx>{responsiveStyleHelperClasses}</style>
      </div>
      <Mobile>
        <MobileBookingHeader />
      </Mobile>
    </React.Fragment>
  );
};

const renderLoggedOut = (
  hasCategory: string | null,
  isArticle: boolean,
  comesFromSearch: boolean,
  push: string => void,
) => {
  return (
    <div className="loggedOut">
      <div className="signInOrBack">
        {hasCategory || isArticle ? (
          <div className="backButton">
            <BackButton text={comesFromSearch ? 'Search' : 'Back'} />
          </div>
        ) : (
          <div className="desktopOnly" data-cy="sign-in-link">
            <TextLink
              external={false}
              onClick={() => push('/sign-in')}
              type="secondary"
            >
              Sign&nbsp;In
            </TextLink>
          </div>
        )}
      </div>
      <p className="helpHeader">Help</p>
      <style jsx>{responsiveStyleHelperClasses}</style>
      <style jsx>{loggedOutStyle}</style>
    </div>
  );
};

// prettier-ignore
type _SyntheticInputEvent = {
  target: { // eslint-disable-line react/no-unused-prop-types
    scrollTop: number,
    scrollLeft: number,
    scrollHeight: number,
    clientHeight: number,
  },
};

class Header extends React.Component<Props, State> {
  state = {
    isScrolling: false,
    lastScroll: 0,
    headerHeight: 64, // eslint-disable-line react/no-unused-state
  };

  componentDidMount() {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = ({ target }: _SyntheticInputEvent) => {
    const tolerance = 6;
    const newHeaderHeight = idx(
      document.getElementById('SmartFAQ_header'),
      _ => _.offsetHeight,
    );
    const currentScroll = target.scrollTop;
    const Body = document.getElementById('SmartFAQ_Body');
    const distanceScrolled = Math.abs(this.state.lastScroll - currentScroll);

    const hide = () => {
      this.setState(prevState => {
        const headerHeight = newHeaderHeight || prevState.headerHeight;
        if (!prevState.isScrolling) {
          if (currentScroll < headerHeight) {
            target.scrollTop += headerHeight;
          }
          if (Body && screen.width < 900) {
            Body.style.marginTop = `${headerHeight}px`;
          }
        }
        return {
          isScrolling: true,
          headerHeight: headerHeight,
          lastScroll: target.scrollTop,
        };
      });
    };

    const show = () => {
      this.setState(prevState => {
        if (prevState.isScrolling) {
          if (Body) {
            Body.style.marginTop = '0';
          }
        }
        return {
          isScrolling: false,
          headerHeight: newHeaderHeight || prevState.headerHeight,
          lastScroll: currentScroll,
        };
      });
    };

    if (currentScroll === undefined) {
      return;
    }

    if (distanceScrolled <= tolerance || distanceScrolled < 0) {
      this.setState({
        lastScroll: currentScroll,
      });
      return;
    }

    if (currentScroll > this.state.lastScroll) {
      hide();
      return;
    } else {
      show();
      return;
    }
  };

  render() {
    const hasCategory = idx(this.props.match, _ => _.params.categoryId) || null;
    const currentpath = this.props.location && this.props.location.pathname;
    const isArticle = currentpath.includes('article/');
    const comesFromSearch = currentpath.includes('faq/search/');

    return (
      <div
        id="SmartFAQ_header"
        className={this.state.isScrolling ? 'header hide' : 'header'}
      >
        <div className="HeaderFAQ">
          <Desktop>
            <CloseButton height="24" />
          </Desktop>
          <UserContext.Consumer>
            {({ simpleToken, loginToken }: UserContextType) =>
              simpleToken || loginToken
                ? renderLoggedIn()
                : renderLoggedOut(
                    hasCategory,
                    isArticle,
                    comesFromSearch,
                    this.props.history.push,
                  )
            }
          </UserContext.Consumer>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export const RawContentHeader = Header;

export default withRouter(Header);
