// @flow

import * as React from 'react';
import { Text } from '@kiwicom/orbit-components';
import Alert from '@kiwicom/orbit-components/lib/icons/Alert';
import css from 'styled-jsx/css';

import Card from '../../common/Card';
import type { Emergency as EmergencyType } from '../../context/Emergencies';

type Props = {|
  emergency: EmergencyType,
|};

const style = css`
  .icon {
    position: absolute;
    top: calc(50% - 12px);
  }
  .emergencyText {
    overflow: hidden;
    max-height: 100%;
    line-height: 1.4;
    margin-left: 38px;
  }
`;

const Emergency = ({ emergency }: Props) => (
  <Card>
    <div className="icon">
      <Alert />
    </div>
    <div className="emergencyText" data-cy="emergency">
      <Text type="secondary" size="small" element="span">
        {emergency}
      </Text>
    </div>
    <style jsx>{style}</style>
  </Card>
);

export default Emergency;
