// @flow

import * as React from 'react';

import { Mobile } from '../common/Responsive';

type Props = {|
  isOpen: boolean,
|};

/*
  Standard workaround with "overflow: hidden" doesn't work in Safari.
  But applying "position: fixed" scrolls up the page,
  which would produce frustrating user experience on desktop.
 */
const MobileSafariScroll = ({ isOpen }: Props) => (
  <Mobile>
    <style jsx global>
      {`
        .MainView {
          position: ${isOpen ? 'fixed' : 'absolute'};
        }
      `}
    </style>
  </Mobile>
);

export default MobileSafariScroll;
