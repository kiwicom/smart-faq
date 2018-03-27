// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Layout from '../Layout';
import { CheckRecoveryLink, CheckMagicLink } from './';

storiesOf('CheckEmail', module)
  .add('Magical Link', () => (
    <Layout action={action}>
      <CheckMagicLink />
    </Layout>
  ))
  .add('Recovery Link', () => (
    <Layout action={action}>
      <CheckRecoveryLink />
    </Layout>
  ));
