// @flow

import * as React from 'react';

type Props = {|
  children: React.Node,
  padding?: string,
  backgroundColor?: string,
  mobileBackgroundColor?: string,
  borderRadius?: string,
  border?: string,
|};

const Box = (props: Props) => (
  <div className="box">
    {props.children}
    <style jsx>
      {`
        .box {
          padding: ${props.padding || '0'};
          position: relative;
          width: 100%;
          border-radius: ${props.borderRadius || '3px'};
          border: ${props.border || 'solid 1px #e8edf1'};
          background-color: ${props.backgroundColor || '#ffffff'};
        }

        @media only screen and (max-width: 812px) {
          .box {
            background-color: ${props.mobileBackgroundColor || '#ffffff'};
          }
        }
      `}
    </style>
  </div>
);

export default Box;
