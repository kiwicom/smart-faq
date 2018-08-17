// @flow

import * as React from 'react';
import Alert from '@kiwicom/orbit-components/lib/Alert';
import css from 'styled-jsx/css';

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
    <Alert type="warning" icon>
      {emergency}
    </Alert>
    <style jsx>{style}</style>
  </div>
);

export default Emergency;
