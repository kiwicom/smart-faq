// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';
import { Typography } from '@kiwicom/orbit-components';

type Props = {|
  text: string,
  link: string,
|};

const BackButton = (props: Props) => (
  <Link to={props.link}>
    <div className="back">
      <div className="chevron">
        <ChevronLeft width="10" height="12" fill="#8291a6" />
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
          }
          div.chevron {
            vertical-align: middle;
            display: inline-block;
            object-fit: contain;
            margin-right: 4px;
          }
        `}
      </style>
    </div>
  </Link>
);

export default BackButton;
