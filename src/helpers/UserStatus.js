// @flow
import * as React from 'react';

import { withUser } from '../context/User';
import type { User } from '../types';

type Props = {
  user: User,
  children?: React.Node,
};

const RequireUserCriteria = (user_criteria: (user: User) => boolean) =>
  withUser((props: Props) => {
    if (!user_criteria(props.user)) return null;
    return props.children;
  });

export default {
  LoggedIn: RequireUserCriteria(user => user !== null),
  LoggedOut: RequireUserCriteria(user => user === null),
};
