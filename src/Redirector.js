// @flow
/* eslint-disable */
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import { withUser } from './context/User';
import type { User } from './types';

type Props = {
  user: User,
  initialRoute: string,
  location: {
    pathname: string
  },
  history: {
    push: string => void,
  },
};
type State = {
  usedInitialRoute: string,
};

class Redirector extends React.Component<Props, State> {
  static getDerivedStateFromProps(newProps: Props, newState: State) {
    const { initialRoute, location } = newProps;
    if (initialRoute) {
      if (location.pathname !== initialRoute) {
        if (initialRoute !== newState.usedInitialRoute) {
          newProps.history.push(initialRoute);
          return {
            usedInitialRoute: initialRoute,
          };
        }
      }
    }
    // if (initialRoute === '/' && newProps.user) {
    //   newProps.history.push('/faq/');
    //   return {
    //     usedInitialRoute: initialRoute,
    //   };
    // }
    return null;
  }
  state = {
    usedInitialRoute: '/',
  };
  render() {
    return null;
  }
}

export default withRouter(withUser(Redirector));
