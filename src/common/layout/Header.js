// @flow

import { Link, withRouter } from 'react-router-dom';
import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import MediaQuery from 'react-responsive';

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
  @media only screen and (max-width: 1180px) {
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
  @media only screen and (max-width: 1180px) {
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
  @media only screen and (max-width: 1181px) {
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
                  <MediaQuery query="screen and (max-width: 1180px)">
                    Your Trips
                  </MediaQuery>
                  <MediaQuery query="screen and (min-width: 1181px)">
                    Help
                  </MediaQuery>
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
      <MediaQuery query="screen and (max-width: 1180px)">
        <MobileBookingHeader />
      </MediaQuery>
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
              <Typography type="attention" variant="normal">
                Sign In
              </Typography>
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

  hasCategory = idx(this.props.match, _ => _.params.categoryId) || null;
  currentpath = this.props.location && this.props.location.pathname;

  isArticle = this.currentpath.includes('article/');
  comesFromSearch = this.currentpath.includes('faq/search/');

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
    return (
      <div className={this.state.isScrolling ? 'header hide' : 'header'}>
        <div className="HeaderFAQ">
          <MediaQuery query="screen and (min-width: 1181px)">
            <CloseButton height="24" />
          </MediaQuery>
          {this.props.isLoggedIn
            ? renderLoggedIn()
            : renderLoggedOut(
                this.hasCategory,
                this.isArticle,
                this.comesFromSearch,
              )}
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export const RawContentHeader = Header;

export default withRouter(Header);
