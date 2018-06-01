// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';
import { Typography } from '@kiwicom/orbit-components';

type Props = {|
  text: string,
  history: {
    goBack: () => void,
  },
|};

const BackButton = (props: Props) => (
  <div
    className="back"
    onClick={props.history.goBack}
    onKeyUp={props.history.goBack}
    role="button"
    tabIndex="-1"
  >
    <div className="chevron">
      <ChevronLeft size="small" customColor="#8291a6" />
    </div>
    <Typography type="secondary" variant="bold">
      {props.text}
    </Typography>
    <style jsx>
      {`
        div.back {
          position: absolute;
          top: 18px;
          left: 27px;
          cursor: pointer;
        }
        div.chevron {
          display: inline-block;
          margin-right: 4px;
        }
        @media only screen and (min-width: 320px) and (max-width: 812px) {
          div.back {
            top: 22px;
            left: 21px;
          }
        }
      `}
    </style>
  </div>
);

export default withRouter(BackButton);
