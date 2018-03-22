// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography } from '@kiwicom/orbit-components';
import { ChevronRight } from '@kiwicom/orbit-components/lib/icons';

const styles = css`
  .faq-category {
    padding: 14px 70px 14px 22px;
    position: relative;
    margin-top: 24px;
    height: 100px;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
  }
  .faq-category-content {
    margin: ;
  }
  .faq-category-chevron {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 16px;
    top: 38px;
  }
`;

const FAQCategory = () => (
  <div className="faq-category">
    <div>
      <Typography type="attention" size="large">
        Searching for a flight
      </Typography>
    </div>
    <div>
      <Typography type="secondary">
        How to find your best deal fast and easy
      </Typography>
    </div>
    <div className="faq-category-chevron">
      <ChevronRight height="12" />
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default FAQCategory;
