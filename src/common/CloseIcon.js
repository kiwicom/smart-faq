// @flow

import * as React from 'react';
import { Close } from '@kiwicom/orbit-components/lib/icons';

const CloseIcon = () => (
  <div className="close-icon">
    <Close fill="#7f91a8" size="32" />
    <style jsx>
      {`
        div.close-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 8px;
          cursor: pointer;
        }
      `}
    </style>
  </div>
);

export default CloseIcon;
