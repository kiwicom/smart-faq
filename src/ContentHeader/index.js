// @flow

import { Link, withRouter } from 'react-router-dom';
import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';

import { CloseButton, BackButton } from '../common';
import SignOutButton from './SignOutButton';
import routeDefinitions from '../routeDefinitions';
import { withUser } from '../context/User';
import type { User } from '../types';
import FullFAQLink from '../common/FullFAQLink';
import responsiveStyleHelperClasses from '../common/responsiveStyleHelperClasses';

const style = css`
  div.loggedOut {
    display: flex;
    justify-content: space-between;
    padding: 15px 122px 15px 40px;
  }
  div.header {
    display: flex;
    align-items: center;
    height: 64px;
  }
  div.ContentHeader {
    width: 100%;
    border-bottom: 1px solid #e8edf1;
    background-color: #ffffff;
  }
`;

const headerStyle = css`
  div.helpHeader {
    font-size: 28px;
    font-weight: bold;
    color: #171b1e;
    pointer-events: none;
  }
  div.links {
    display: flex;
    align-items: center;
  }
  div.loggedIn {
    display: flex;
    justify-content: space-between;
    padding: 15px 122px 15px 40px;
  }
  a.open-icon {
    margin-left: 12px;
  }
  span.backButton {
    line-height: 2;
  }
  div.signInOrBack {
    margin-right: 149px;
    width: 43px;
    height: 20px;
  }
  div.loggedOut {
    display: flex;
    padding: 16px;
    align-items: center;
    height: 66px;
  }
  div.loggedInFaqLink {
    display: flex;
    margin-right: 58px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    div.loggedIn {
      padding: 15px;
    }
    div.helpHeader {
      width: 100%;
      text-align: center;
    }
    .loggedOut .helpHeader {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
`;

type Props = {
  user: User,
  match: {
    params: {
      categoryId: ?string,
    },
  },
  history: {
    entries: [],
  },
  location: {
    pathname: string,
  },
};

const renderLoggedIn = (
  hasCategory: string | null,
  isArticle: boolean,
  comesFromSearch: boolean,
) => {
  return (
    <div className="loggedIn">
      <div>
        <BackButton text={comesFromSearch ? 'Search' : 'Back'} />
      </div>
      <div className="helpHeader">Help</div>
      <div className="links desktopOnly">
        <div className="loggedInFaqLink">
          <FullFAQLink className="primary" />
        </div>
        <div>
          <SignOutButton />
        </div>
      </div>
      <style jsx>{responsiveStyleHelperClasses}</style>
      <style jsx>{headerStyle}</style>
    </div>
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
          <Link
            to={routeDefinitions.SIGN_IN}
            style={{ textDecoration: 'none' }}
          >
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
      <style jsx>{headerStyle}</style>
    </div>
  );
};

const ContentHeader = (props: Props) => {
  const hasCategory = idx(props.match, _ => _.params.categoryId) || null;
  const entries = props.history && props.history.entries;
  const currentpath = props.location && props.location.pathname;

  const isArticle = currentpath.includes('article');
  const lastEntry = isArticle && entries[entries.length - 2];
  const comesFromSearch =
    lastEntry && lastEntry.pathname === routeDefinitions.STATIC_FAQ;

  return (
    <div className="header">
      <div className="ContentHeader">
        <CloseButton height="24" />
        {props.user
          ? renderLoggedIn(hasCategory, isArticle, comesFromSearch)
          : renderLoggedOut(hasCategory, isArticle, comesFromSearch)}
        <style jsx>{style}</style>
      </div>
    </div>
  );
};

export default withRouter(withUser(ContentHeader));
