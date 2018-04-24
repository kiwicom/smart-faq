// @flow

import * as React from 'react';

type Props = {|
  children: React.Node,
|};

const ScrollableBox = (props: Props) => (
  <div className="scrollable-box">
    {props.children}
    <style jsx>
      {`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: white;
          margin-top: 25px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 3px;
          background-color: rgba(171, 181, 195, 0.6);
        }
        div.scrollable-box {
          overflow-y: scroll;
          max-height: 78vh;
          margin: 0 auto;
          padding: 4px;
        }
      `}
    </style>
  </div>
);

export default ScrollableBox;
