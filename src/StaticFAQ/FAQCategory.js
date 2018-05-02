// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';
import { ChevronRight } from '@kiwicom/orbit-components/lib/icons';

import Card from './../common/Card';
import type { FAQCategory_category } from './__generated__/FAQCategory_category.graphql';

const styles = css`
  .faq-category {
    margin-right: 48px;
  }
  .faq-item-chevron {
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
  <Card>
    <div className="faq-category">
      <Typography type="attention" size="large">
        {props.category.title}
      </Typography>
    </div>
    <div>
      <Typography type="secondary" size="small">
        {props.category.perex}
      </Typography>
    </div>
    <div className="faq-item-chevron">
      <ChevronRight height="12" />
    </div>
    <style jsx>{styles}</style>
  </Card>
);

export default createFragmentContainer(
  FAQCategory,
  graphql`
    fragment FAQCategory_category on FAQCategory {
      id
      title
      perex
    }
  `,
);
