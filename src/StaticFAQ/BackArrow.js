// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';

import routeDefinitions from '../routeDefinitions';

type Props = {|
  id: string,
|};

const BackArrow = ({ id }: Props) => {
  const url = id
    ? `${routeDefinitions.STATIC_FAQ}/${id}`
    : routeDefinitions.STATIC_FAQ;
  return (
    <Link to={url}>
      <div className="circle">
        <span className="chevron">
          <ChevronLeft width="12" height="16" fill="#171b1e" />
        </span>
        <style jsx>
          {`
            .circle {
              display: inline-block;
              border-radius: 50%;
              width: 28px;
              height: 28px;
              background-color: #e8edf1;
              vertical-align: middle;
              margin-right: 16px;
              text-align: center;
            }
            .chevron {
              position: relative;
              top: 20%;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export default BackArrow;
