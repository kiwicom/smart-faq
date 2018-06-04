// @flow

import * as React from 'react';

type Props = {|
  children: React.Node,
  styles?: string,
|};

const ScrollableContent = (props: Props) => (
  <div className="scrollable-content">
    {props.children}
    <style jsx>
      {`
        .scrollable-content {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          ${props.styles ? props.styles : ''};
        }
      `}
    </style>
  </div>
);

export default ScrollableContent;
