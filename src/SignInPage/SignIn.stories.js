// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-router';

import Layout from '../Layout';
import SignIn from './';

storiesOf('SignIn', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
    <Layout action={action}>
      <SignIn history={{}} />
    </Layout>
  ));
