// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import ContentHeader from '../ContentHeader';
import StaticFAQ from '../StaticFAQ';

const style = css`
  div.NoBookingPage {
    position: absolute;
    right: 0;
    min-width: 480px;
    height: 100vh;
  }
  div.NoBookingPage .Header {
    display: flex;
    align-items: center;
    height: 64px;
  }
  div.NoBookingPage .Body {
    display: flex;
    height: calc(100% - (64px));
  }
  div.FAQ {
    width: 480px;
  }
`;

const NoBookingPage = () => {
  return (
    <div className="NoBookingPage">
      <div className="Header">
        <ContentHeader />
      </div>
      <div className="Body">
        <StaticFAQ />
      </div>
      <style jsx global>
        {style}
      </style>
    </div>
  );
};

export default NoBookingPage;
