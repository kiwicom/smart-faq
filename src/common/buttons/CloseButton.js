// @flow

import * as React from 'react';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import { CloseContext } from '../../context/Close';

type Props = {
  onClick: () => void,
};

const CloseIcon = ({ onClick }: Props) => (
  <div
    className="close-icon"
    onKeyUp={onClick}
    onClick={onClick}
    role="button"
    tabIndex="-1"
  >
    <Close customColor="#7f91a8" size="medium" />
    <style jsx>
      {`
        div.close-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 8px;
          cursor: pointer;
        }
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
          top: 16px;
          right: 16px;
        }
      `}
    </style>
  </div>
);

const CloseButton = () => (
  <CloseContext.Consumer>
    {(onClose: () => void) => <CloseIcon onClick={onClose} />}
  </CloseContext.Consumer>
);

export default CloseButton;
