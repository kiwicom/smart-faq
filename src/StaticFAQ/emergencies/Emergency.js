// @flow

import * as React from 'react';
import { Text } from '@kiwicom/orbit-components';
import Alert from '@kiwicom/orbit-components/lib/Alert';
import css from 'styled-jsx/css';

import Card from '../../common/Card';
import type { Emergency as EmergencyType } from '../../context/Emergencies';

type Props = {|
  emergency: EmergencyType,
|};

const style = css`
  .warning {
    margin-top: 24px;
  }
`;

const Emergency = ({ emergency }: Props) => (
  <div className="warning">
    <Alert type="warning" title={null} icon>
      {emergency}
    </Alert>
    <style jsx>{style}</style>
  </div>
);

export default Emergency;
