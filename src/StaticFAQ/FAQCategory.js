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

  .perex {
    line-height: 1.4;
    margin-top: 5px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .faq-item-chevron {
      top: 16px;
    }
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
    <div className="perex">
      <Typography type="secondary" size="small">
        {props.category.perex}
      </Typography>
    </div>
    <div className="faq-item-chevron">
      <ChevronRight size="small" customColor="#bac7d5" />
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
