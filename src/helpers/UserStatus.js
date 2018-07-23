// @flow
import * as React from 'react';

import { withUser, withSimpleToken } from '../context/User';
import type { User } from '../types';

type Props = {
  user: User,
  simpleToken: ?string,
  children?: React.Node,
};

const RequireUserCriteria = () =>
  withSimpleToken(
    withUser((props: Props) => {
      if (!props.user && !props.simpleToken) {
        return null;
      }
      return props.children;
    }),
  );

export default {
  LoggedIn: RequireUserCriteria(),
};
