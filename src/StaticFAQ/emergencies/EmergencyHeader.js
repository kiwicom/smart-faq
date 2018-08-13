// @flow

import * as React from 'react';
import { Heading } from '@kiwicom/orbit-components';

import { Desktop, Mobile } from '../../common/Responsive';

type Props = {|
  title: string,
|};

const renderHeader = (className: string, title: string) => (
  <div className={className}>
    <Heading type="title3">{title}</Heading>
    <style jsx>
      {`
        .emergencyHeader {
          margin-top: 32px;
        }
        .emergencyHeaderMobile {
          margin: 22px;
        }
      `}
    </style>
  </div>
);

const EmergencyHeader = ({ title }: Props) => (
  <div>
    <Desktop>{renderHeader('emergencyHeader', title)}</Desktop>
    <Mobile>{renderHeader('emergencyHeaderMobile', title)}</Mobile>
  </div>
);

export default EmergencyHeader;
