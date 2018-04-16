// @flow

import * as React from 'react';

type Props = {|
  children: React.Node,
  padding?: string,
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
          border-radius: 3px;
          border: solid 1px #e8edf1;
          background-color: #ffffff;
        }
      `}
    </style>
  </div>
);

export default Box;
