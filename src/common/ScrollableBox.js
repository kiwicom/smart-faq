// @flow

import * as React from 'react';

type Props = {|
  children: React.Node,
|};

const ScrollableBox = (props: Props) => (
  <div className="scrollable-box" data-cy="scrollable-box">
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
          overflow-y: auto;
          width: 100vw;
          margin: 0 auto;
          padding: 4px;
        }
        @media only screen and (min-width: 1181px) {
          div.scrollable-box {
            max-width: 100%;
          }
        }
        @media only screen and (max-width: 1181px) {
          div.scrollable-box {
            padding: 0;
          }
        }
      `}
    </style>
  </div>
);

export default ScrollableBox;
