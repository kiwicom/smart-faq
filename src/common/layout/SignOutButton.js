// @flow

import * as React from 'react';
import { Text } from '@kiwicom/orbit-components';
import { withRouter } from 'react-router-dom';
import Trans from '@kiwicom/nitro/lib/components/Text';

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
        data-cy="sign-out-button"
      >
        <Text type="attention">
          <Trans t={__('smartfaq.header.sign_out')} />
        </Text>
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
