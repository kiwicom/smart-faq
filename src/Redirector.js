// @flow
/* eslint-disable */
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { withUser } from './context/User';
import type { User } from './types';

type Props = {
  user: User,
};

type State = {
  firstOpen: boolean
}

class Redirector extends React.Component<Props, State> {
  state = {
    firstOpen: true
  }
  static getDerivedStateFromProps(props, state) {
    const { firstOpen } = state;
    if (typeof window !== 'undefined' && window && window.location) {
      const paramsString = window.location.search;
      const params = new URLSearchParams(paramsString);
      const helpQueryString = params.get('help');
      const redirectQueryString = params.get('redirect');
      if(firstOpen || redirectQueryString) {
        // if user is logged in redirect him to faq
        if(helpQueryString === "/" && props.user ){
          props.history.push("/faq/");
          return { firstOpen: false }
        } else if(helpQueryString) {
          props.history.push(helpQueryString);
          return { firstOpen: false }
        }
        return null;
      }
    }
    return null;
  }
  render() {
    return null;
  }
}

export default withRouter(withUser(Redirector));
