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

const style = css`
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
  div.FAQ {
    width: 480px;
  }
  div.faq-link {
    margin-left: 182px;
    line-height: 1.4;
  }
`;

const loggedInStyle = css`
  div.help-header {
    font-size: 28px;
    font-weight: bold;
    color: #171b1e;
  }
  div.logged-in {
    display: flex;
    justify-content: space-between;
    padding: 15px 122px 15px 40px;
  }
  div.links {
    display: flex;
    align-items: center;
  }
  div.faq-link {
    display: flex;
    margin-right: 58px;
  }
  a.open-icon {
    margin-left: 12px;
  }
`;

const loggedOutStyle = css`
  div.help-header {
    font-size: 28px;
    font-weight: bold;
    color: #171b1e;
  }
  div.logged-out {
    display: flex;
    padding: 16px;
    align-items: center;
  }
  div.signin-or-back {
    margin-right: 149px;
    width: 43px;
    height: 20px;
  }
  span.back-button {
    line-height: 2;
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

const renderLoggedIn = () => {
  return (
    <div className="logged-in">
      <div className="help-header">Help</div>
      <div className="links">
        <div className="faq-link">
          <FullFAQLink className="primary" />
        </div>
        <SignOutButton />
      </div>
      <style jsx>{loggedInStyle}</style>
    </div>
  );
};

const renderLoggedOut = (
  hasCategory: string | null,
  isArticle: boolean,
  comesFromSearch: boolean,
) => {
  return (
    <div className="logged-out">
      <div className="signin-or-back">
        {hasCategory || isArticle ? (
          <span className="back-button">
            <BackButton text={comesFromSearch ? 'Search' : 'Back'} />
          </span>
        ) : (
          <Link
            to={routeDefinitions.SIGN_IN}
            style={{ textDecoration: 'none' }}
          >
            <Typography type="attention" variant="normal">
              Sign In
            </Typography>
          </Link>
        )}
      </div>
      <div className="help-header">Help</div>
      <style jsx>{loggedOutStyle}</style>
    </div>
  );
};

const ContentHeader = (props: Props) => {
  const hasCategory = idx(props.match, _ => _.params.categoryId) || null;
  const entries = props.history && props.history.entries;
  const currentpath = props.location && props.location.pathname;

  const isArticle = currentpath.includes('article');
  const lastEntry = isArticle && entries[entries.length - 2];
  const comesFromSearch = lastEntry && lastEntry.pathname === '/static-faq';

  return (
    <div className="header">
      <div className="ContentHeader">
        <CloseButton height="24" />
        {props.user
          ? renderLoggedIn()
          : renderLoggedOut(hasCategory, isArticle, comesFromSearch)}
        <style jsx>{style}</style>
      </div>
    </div>
  );
};

export default withRouter(withUser(ContentHeader));
