// @flow

import { Link, withRouter } from "react-router-dom";
import * as React from "react";
import idx from "idx";
import css from "styled-jsx/css";
import { Typography } from "@kiwicom/orbit-components";

import FullFAQLink from "../FullFAQLink";
import CloseButton from "../buttons/CloseButton";
import BackButton from "../buttons/BackButton";
import SignOutButton from "./SignOutButton";
import responsiveStyleHelperClasses from "../responsiveStyleHelperClasses";
import MobileBookingHeader from './MobileBookingHeader';

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

const renderLoggedIn = (comesFromSearch: boolean) => {
  return (
    <React.Fragment>
      <div className="loggedIn">
        <div className="mobileOnly">
          <BackButton text={comesFromSearch ? "Search" : "Back"} />
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
            <BackButton text={comesFromSearch ? "Search" : "Back"} />
          </div>
        ) : (
          <Link to="/sign-in" style={{ textDecoration: "none" }}>
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

  const isArticle = currentpath.includes("article/");
  const comesFromSearch = currentpath.includes("faq/search/");

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
