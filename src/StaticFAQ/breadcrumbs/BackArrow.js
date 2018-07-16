// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';

type Props = {|
  id: ?string,
|};

const BackArrow = ({ id }: Props) => {
  const url = id ? `/faq/${id}` : '/faq/';

  return (
    <Link to={url}>
      <div className="circle">
        <span className="chevron">
          <ChevronLeft size="small" customColor="#171b1e" />
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
              top: 3px;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export default BackArrow;
