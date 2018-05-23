// @flow

import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { withUser } from '../context/User';

const Redirector = withUser(({ user }) => (
  <React.Fragment>{user ? <Redirect to="/faq/" /> : null}</React.Fragment>
));

const redirectsLoggedIn = (ComponentToWrap: React.ComponentType<any>) => {
  const WrappedComponent = (props: any) => (
    <React.Fragment>
      <Redirector />
      <ComponentToWrap {...props} />
    </React.Fragment>
  );
  return WrappedComponent;
};

export default redirectsLoggedIn;
