// @flow

import * as React from 'react';
import { Heading } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

import { Desktop, Mobile } from '../../common/Responsive';

type Props = {|
  title: string,
|};

const renderHeader = (className: string, title: string) => (
  <div className={className}>
    <Heading type="title3">
      <Trans t={title} />
    </Heading>
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
