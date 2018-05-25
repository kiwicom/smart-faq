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
          overflow-y: scroll;
          max-height: 78vh;
          margin: 0 auto;
          padding: 4px;
        }
        @media only screen and (min-width: 320px) and (max-width: 480px) {
          div.scrollable-box {
            padding: 0;
          }
        }
      `}
    </style>
  </div>
);

export default ScrollableBox;
