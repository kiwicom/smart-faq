// @flow

import * as React from 'react';
import { Redirect } from 'react-router-dom';

import UserStatus from '../helpers/UserStatus';

export const redirectsLoggedIn = <Props>(
  ComponentToWrap: React.ComponentType<Props>,
) => {
  const WrappedComponent = (props: Props) => (
    <React.Fragment>
      <UserStatus.LoggedIn>
        <Redirect to="/faq/" />
      </UserStatus.LoggedIn>
      <ComponentToWrap {...props} />
    </React.Fragment>
  );
  return WrappedComponent;
};

export const redirectsLoggedInAccount = <Props>(
  ComponentToWrap: React.ComponentType<Props>,
) => {
  const WrappedComponent = (props: Props) => (
    <React.Fragment>
      <UserStatus.LoggedInAccount>
        <Redirect to="/faq/" />
      </UserStatus.LoggedInAccount>
      <ComponentToWrap {...props} />
    </React.Fragment>
  );
  return WrappedComponent;
};
