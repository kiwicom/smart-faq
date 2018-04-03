// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';
import { ChevronRight } from '@kiwicom/orbit-components/lib/icons';

import type { FAQCategory_category } from './__generated__/FAQCategory_category.graphql';

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

type Props = {|
  category: FAQCategory_category,
|};

const FAQCategory = (props: Props) => (
  <div className="faq-category">
    <div>
      <Typography type="attention" size="large">
        {props.category.title}
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

export default createFragmentContainer(
  FAQCategory,
  graphql`
    fragment FAQCategory_category on AllFAQCategories {
      id
      title
    }
  `,
);
