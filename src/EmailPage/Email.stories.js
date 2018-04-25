// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import { CheckRecoveryLink, CheckMagicLink } from './';

const props = {
  email: '',
  text: '',
  location: {
    state: {
      email: '',
    },
  },
};
storiesOf('CheckEmail', module)
  .add('Magical Link', () => <CheckMagicLink {...props} />)
  .add('Recovery Link', () => <CheckRecoveryLink {...props} />);
