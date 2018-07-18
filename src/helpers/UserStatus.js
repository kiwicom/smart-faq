// @flow
import * as React from 'react';

import { withUser, withSimpleToken } from '../context/User';
import type { User } from '../types';

type Props = {
  user: User,
  simpleToken: ?string,
  children?: React.Node,
};

const RequireUserCriteria = (
  user_criteria: (user: User | ?string) => boolean,
) => {
  return withSimpleToken(
    withUser((props: Props) => {
      if (!user_criteria(props.user) && !user_criteria(props.simpleToken))
        return null;
      return props.children;
    }),
  );
};

export default {
  LoggedIn: RequireUserCriteria(user => user !== null),
};
