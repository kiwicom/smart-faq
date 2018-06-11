// @flow
import * as React from 'react';

import { withUser } from '../context/User';
import type { User } from '../types';

type Props = {
  user: User,
  children?: React.Node,
};

const LoggedIn = (props: Props) => {
  if (props.user === null) return null;
  return props.children;
};

export default {
  LoggedIn: withUser(LoggedIn),
};
