// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import ForgottenPassword from './';

const props = {
  history: {
    push: () => {},
  },
};

storiesOf('ForgottenPassword', module)
  .addDecorator(StoryRouter())
  .add('Default', () => <ForgottenPassword {...props} />);
