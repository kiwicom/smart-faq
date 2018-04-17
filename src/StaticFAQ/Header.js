// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Link } from 'react-router-dom';
import { Typography } from '@kiwicom/orbit-components';

import routeDefinitions from '../routeDefinitions';
import CloseButton from '../common/CloseButton';
import BackButton from '../common/BackButton';

const style = css`
  .static-faq-header {
    width: 100%;
    height: 64px;
    box-shadow: inset 0 -1px 0 0 #e8edf1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leftButton {
    position: absolute;
    top: 23px;
    left: 16px;
  }
`;

type Props = {|
  leftButton: 'SignIn' | 'Back',
|};

const SignInButton = () => (
  <Link to={routeDefinitions.SIGN_IN} style={{ textDecoration: 'none' }}>
    <Typography type="attention" variant="bold">
      Sign In
    </Typography>
  </Link>
);

const Header = (props: Props) => (
  <React.Fragment>
    <CloseButton />
    {props.leftButton === 'SignIn' ? (
      <div className="leftButton">
        <SignInButton />
      </div>
    ) : (
      <BackButton text="Back" link={routeDefinitions.STATIC_FAQ} />
    )}
    <div className="static-faq-header">
      <Typography size="header" type="attention" variant="bold">
        Help
      </Typography>
    </div>
    <style jsx>{style}</style>
  </React.Fragment>
);

export default Header;
