// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import SignIn from './';

const history = { push: () => {} };
const onSocialLogin = () => Promise.resolve();

storiesOf('SignIn', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
    <SignIn history={history} onSocialLogin={onSocialLogin} />
  ));
