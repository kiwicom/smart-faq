// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import IntroPage from './';

storiesOf('IntroPage', module)
  .addDecorator(StoryRouter())
  .add('Default', () => <IntroPage />);
