// @flow

import { Link, withRouter } from 'react-router-dom';
import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Text } from '@kiwicom/orbit-components';

import { Desktop, Mobile } from '../Responsive';
import FullFAQLink from '../FullFAQLink';
import CloseButton from '../buttons/CloseButton';
import BackButton from '../buttons/BackButton';
import SignOutButton from './SignOutButton';
import { BookingState } from '../../context/BookingState';
import responsiveStyleHelperClasses from '../responsiveStyleHelperClasses';
import MobileBookingHeader from '../../MobileBookingHeader/MobileBookingHeader';

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
  .faqLink {
    margin-left: 182px;
    line-height: 1.4;
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
  .faqLink {
    display: flex;
    margin-right: 58px;
  }
  a.open-icon {
    margin-left: 12px;
  }
  @media only screen and (max-width: 900px) and (max-height: 480px) {
    .loggedIn {
      display: none;
    }
  }
  @media only screen and (max-width: 900px) {
    .closeButton {
      display: none;
    }
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
  }
  .loggedOut {
    display: flex;
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
};

type Props = {
  isLoggedIn: boolean,
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
        <div className="links">
          <div className="faqLink desktopOnly">
            <FullFAQLink className="primary" />
          </div>
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
) => {
  return (
    <div className="loggedOut">
      <div className="signInOrBack">
        {hasCategory || isArticle ? (
          <div className="backButton">
            <BackButton text={comesFromSearch ? 'Search' : 'Back'} />
          </div>
        ) : (
          <Link to="/sign-in" style={{ textDecoration: 'none' }}>
            <div className="desktopOnly">
              <Text type="attention">Sign In</Text>
            </div>
          </Link>
        )}
      </div>
      <p className="helpHeader">Help</p>
      <style jsx>{responsiveStyleHelperClasses}</style>
      <style jsx>{loggedOutStyle}</style>
    </div>
  );
};

class Header extends React.Component<Props, State> {
  state = {
    isScrolling: false,
    lastScroll: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = ({ target }: SyntheticInputEvent<HTMLInputElement>) => {
    const currentScroll = target.scrollTop;

    if (currentScroll > this.state.lastScroll) {
      this.setState({
        isScrolling: true,
      });
    } else {
      this.setState({
        isScrolling: false,
      });
    }

    this.setState({ lastScroll: currentScroll });
  };

  render() {
    const hasCategory = idx(this.props.match, _ => _.params.categoryId) || null;
    const currentpath = this.props.location && this.props.location.pathname;
    const isArticle = currentpath.includes('article/');
    const comesFromSearch = currentpath.includes('faq/search/');

    return (
      <div className={this.state.isScrolling ? 'header hide' : 'header'}>
        <div className="HeaderFAQ">
          <BookingState.Consumer>
            {({ bookingPage }) =>
              bookingPage === 'ALL_BOOKINGS' ? (
                <Desktop>
                  <div className="closeButton">
                    <CloseButton height="24" />
                  </div>
                </Desktop>
              ) : (
                <div className="closeButton">
                  <CloseButton height="24" />
                </div>
              )
            }
          </BookingState.Consumer>
          {this.props.isLoggedIn
            ? renderLoggedIn()
            : renderLoggedOut(hasCategory, isArticle, comesFromSearch)}
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export const RawContentHeader = Header;

export default withRouter(Header);
