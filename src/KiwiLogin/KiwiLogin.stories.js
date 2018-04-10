// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import KiwiLogin from './';

storiesOf('KiwiLogin', module)
  .addDecorator(StoryRouter())
  .add('Default', () => <KiwiLogin />);
