// @flow

import * as React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from '@kiwicom/orbit-components';
import { Google, Facebook } from '@kiwicom/orbit-components/lib/icons';

import { withSocialLogin } from '../context/User';
import type { onSocialLogin, Provider } from '../types';

type Props = {
  type: Provider,
  bordered?: boolean,
  onSocialLogin: onSocialLogin,
  children: string,
};

const ResponsiveSocialButton = (props: Props) => {
  const { type, bordered, onSocialLogin, children } = props;

  const buttonWidth = 212;
  const mobileLandscapeButtonWidth = 288;

  const icon =
    type === 'google' ? <Google /> : type === 'facebook' ? <Facebook /> : null;

  const renderButton = width => (
    <Button
      onClick={() => {
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
        {renderButton(mobileLandscapeButtonWidth)}
      </MediaQuery>
      <MediaQuery query="only screen and (max-height: 480px)">
        {renderButton(mobileLandscapeButtonWidth)}
      </MediaQuery>
    </React.Fragment>
  );
};

export default withSocialLogin(ResponsiveSocialButton);
