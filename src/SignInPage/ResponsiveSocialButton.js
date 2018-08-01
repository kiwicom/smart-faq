// @flow

import * as React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from '@kiwicom/orbit-components';
import { Google, Facebook } from '@kiwicom/orbit-components/lib/icons';

import { withSocialLogin } from '../context/User';
import { simpleTracker } from '../helpers/analytics/trackers';
import type { onSocialLogin, Provider } from '../types';

type Props = {
  type: Provider,
  bordered?: boolean,
  onSocialLogin: onSocialLogin,
  children: string,
};

const socialLoginTracker = (type: string) =>
  simpleTracker('smartFAQ', {
    action: 'clickOnLogin',
    loginType: type,
  });

const ResponsiveSocialButton = (props: Props) => {
  const { type, bordered, onSocialLogin, children } = props;

  const buttonWidth = 212;
  const mobileButtonWidth = 288;

  const icon =
    type === 'google' ? <Google /> : type === 'facebook' ? <Facebook /> : null;

  const renderButton = width => (
    <Button
      onClick={() => {
        socialLoginTracker(type);
        onSocialLogin(type);
      }}
      bordered={bordered ? true : false}
      width={width}
      type={type}
      icon={icon}
    >
      {children}
    </Button>
  );

  return (
    <React.Fragment>
      <MediaQuery query="(min-width: 480px) and (min-height: 480px)">
        {renderButton(buttonWidth)}
      </MediaQuery>
      <MediaQuery query="only screen and (max-width: 480px) and (orientation: portrait)">
        {renderButton(mobileButtonWidth)}
      </MediaQuery>
      <MediaQuery query="only screen and (max-height: 480px) and (orientation: landscape)">
        {renderButton(mobileButtonWidth)}
      </MediaQuery>
    </React.Fragment>
  );
};

export default withSocialLogin(ResponsiveSocialButton);
