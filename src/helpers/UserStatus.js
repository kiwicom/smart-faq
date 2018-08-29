// @flow
import * as React from 'react';

import { withUser, withSimpleToken } from '../context/User';
import type { User } from '../types';

type RequireAccountProps = {
  user: User,
  children?: React.Node,
};

type RequireLoggedInProps = {
  ...RequireAccountProps,
  simpleToken: ?string,
};

const RequireUserLoggedIn = withSimpleToken(
  withUser((props: RequireLoggedInProps) => {
    if (!props.user && !props.simpleToken) {
      return null;
    }
    return props.children;
  }),
);

type RequireLoggedOutProps = {
  ...RequireAccountProps,
  simpleToken: ?string,
};

const RequireUserLoggedOut = withSimpleToken(
  withUser((props: RequireLoggedOutProps) => {
    if (!props.user && !props.simpleToken) {
      return props.children;
    }
    return null;
  }),
);

const RequireUserAccount = withUser((props: RequireAccountProps) => {
  if (!props.user) {
    return null;
  }
  return props.children;
});

export default {
  LoggedIn: RequireUserLoggedIn,
  LoggedOut: RequireUserLoggedOut,
  LoggedInAccount: RequireUserAccount,
};
