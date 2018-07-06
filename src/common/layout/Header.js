// @flow

import { Link, withRouter } from 'react-router-dom';
import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

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
    height: 64px;
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

const renderLoggedIn = (
  comesFromSearch: boolean,
  hasCategory: string | null,
  isArticle: boolean,
) => {
  return (
    <React.Fragment>
      <div className="loggedIn">
        <div className="mobileOnly">
          {hasCategory || isArticle ? (
            <BackButton text={comesFromSearch ? 'Search' : 'Back'} />
          ) : null}
        </div>
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

const Header = (props: Props) => {
  const hasCategory = idx(props.match, _ => _.params.categoryId) || null;
  const currentpath = props.location && props.location.pathname;

  const isArticle = currentpath.includes('article/');
  const comesFromSearch = currentpath.includes('faq/search/');

  return (
    <div className="header">
      <div className="HeaderFAQ">
        <BookingState.Consumer>
          {({ bookingPage }) =>
            bookingPage === 'ALL_BOOKINGS' ? (
              <Desktop>
                <CloseButton height="24" />
              </Desktop>
            ) : (
              <CloseButton height="24" />
            )
          }
        </BookingState.Consumer>
        {props.isLoggedIn
          ? renderLoggedIn(comesFromSearch, hasCategory, isArticle)
          : renderLoggedOut(hasCategory, isArticle, comesFromSearch)}
        <style jsx>{style}</style>
      </div>
    </div>
  );
};

export const RawContentHeader = Header;

export default withRouter(Header);
