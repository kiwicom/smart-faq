// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Layout from './index';

storiesOf('Layout', module).add('Default', () => <Layout action={action} />);
