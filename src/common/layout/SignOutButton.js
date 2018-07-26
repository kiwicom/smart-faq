// @flow

import * as React from 'react';
import { Text } from '@kiwicom/orbit-components';
import { withRouter } from 'react-router-dom';

import { withLogout } from '../../context/BookingState';
import type { onLogout } from '../../types';
import { simpleTracker } from '../../helpers/analytics/trackers';

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
    simpleTracker('smartFAQBookingOverview', {
      action: 'signOut',
    });
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
        <Text type="attention">Sign out</Text>
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
