// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import css from 'styled-jsx/css';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';

const BackButtonMobileStyle = css`
  .back {
    outline: 0;
  }
  .faqTitle {
    display: none;
  }
  @media screen and (max-height: 480px) {
    .faqTitle {
      display: inline-block;
    }
  }
`;

const BackButtonMobile = () => (
  <div data-cy="back-button-mobile" className="back">
    <ChevronLeft size="medium" customColor="#45505d" />
    <style jsx>{BackButtonMobileStyle}</style>
  </div>
);

export default withRouter(BackButtonMobile);
