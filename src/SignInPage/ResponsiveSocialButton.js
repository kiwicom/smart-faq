// @flow

import * as React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from '@kiwicom/orbit-components';

import { withSocialLogin } from '../context/User';
import type { onSocialLogin, Provider } from '../types';

type Props = {
  type: Provider,
  bordered?: boolean,
  onSocialLogin: onSocialLogin,
  icon: React.ComponentType<Props>,
};

const ResponsiveSocialButton = (props: Props) => {
  const { type, icon, bordered, onSocialLogin } = props;

  const buttonWidth = 212;
  const mobileLandscapeButtonWidth = 288;

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
      {props.children}
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
