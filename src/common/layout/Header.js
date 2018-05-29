// @flow

import { Link, withRouter } from 'react-router-dom';
import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

import FullFAQLink from '../FullFAQLink';
import CloseButton from '../buttons/CloseButton';
import BackButton from '../buttons/BackButton';
import SignOutButton from './SignOutButton';
import responsiveStyleHelperClasses from '../responsiveStyleHelperClasses';
import { ChevronDown } from '@kiwicom/orbit-components/lib/icons';

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
  .Header {
    width: 100%;
    border-bottom: 1px solid #e8edf1;
    background-color: #ffffff;
  }
  .FAQ {
    width: 480px;
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
  @media only screen and (min-width: 320px) and (max-width: 480px) {
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
    font-size: 28px;
    font-weight: bold;
    color: #171b1e;
    pointer-events: none;
  }
  .loggedOut {
    display: flex;
    padding: 16px;
    align-items: center;
    height: 66px;
  }
  .signInOrBack {
    margin-right: 149px;
    width: 43px;
    height: 20px;
  }
  .backButton {
    line-height: 2;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
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

const MobileBookingDetailStyle = css`
  .TripId {
    font-size: 14px;
    line-height: 1.4;
    color: #7f91a8;
    margin-top: 6px;
  }

  .TripDescription {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: #171b1e;
  }
`;

const MobileBookingDetail = ({style}) => (
  <div style={style}>
    <div className="TripId">Upcoming trip #23432 324</div>
    <div className="TripDescription">Prague to Vancouver and back</div>
    <style jsx>{MobileBookingDetailStyle}</style>
  </div>
);

const MobileBookingHeaderStyle = css`
  .MobileBookingHeader {
    display: flex;
    height: 62px;
    background-color: #f5f7f9;
    box-shadow: inset 0 1px 0 0 #e8edf1;
    padding: 0 16px;
  }

  .Chevron {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const MobileBookingHeader = () => (
  <React.Fragment>
    <div className="mobileOnly MobileBookingHeader">
      <MobileBookingDetail style={{flexGrow: 1}} />
      <div className="Chevron"><ChevronDown customColor="#bac7d5" /></div>
    </div>
    <style jsx>{responsiveStyleHelperClasses}</style>
    <style jsx>{MobileBookingHeaderStyle}</style>
  </React.Fragment>
)

const renderLoggedIn = (comesFromSearch: boolean) => {
  return (
  <React.Fragment>
    <div className="loggedIn">
      <div className="mobileOnly">
        <BackButton text={comesFromSearch ? 'Search' : 'Back'} />
      </div>
      <div className="helpHeader">Help</div>
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
    <MobileBookingHeader />
  </React.Fragment>);
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
      <div className="helpHeader">Help</div>
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
      <div className="Header">
        <CloseButton height="24" />
        {props.isLoggedIn
          ? renderLoggedIn(comesFromSearch)
          : renderLoggedOut(hasCategory, isArticle, comesFromSearch)}
        <style jsx>{style}</style>
      </div>
    </div>
  );
};

export const RawContentHeader = Header;

export default withRouter(Header);
