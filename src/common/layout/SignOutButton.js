// @flow

import * as React from 'react';
import { Typography } from '@kiwicom/orbit-components';
import { withRouter } from 'react-router-dom';

import { withLogout } from '../../context/User';
import type { onLogout } from '../../types';

type Props = {|
  onLogout: onLogout,
  history: {
    push: string => void,
  },
|};

class SignOutButton extends React.Component<Props> {
  onSignOut = async () => {
    await this.props.onLogout();
    this.props.history.push('/');
  };

  render() {
    return (
      <div
        className="signOut"
        onClick={this.onSignOut}
        onKeyUp={this.onSignOut}
        role="button"
        tabIndex={0}
      >
        <Typography type="attention" variant="normal">
          Sign out
        </Typography>
        <style jsx>
          {`
            .signOut {
              cursor: pointer;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withRouter(withLogout(SignOutButton));
