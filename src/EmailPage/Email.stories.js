// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import { CheckRecoveryLink, CheckMagicLink } from './';

storiesOf('CheckEmail', module)
  .add('Magical Link', () => <CheckMagicLink />)
  .add('Recovery Link', () => <CheckRecoveryLink />);
