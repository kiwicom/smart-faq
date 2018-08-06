// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text, Heading } from '@kiwicom/orbit-components';
import { ChevronRight, Alert } from '@kiwicom/orbit-components/lib/icons';

import Card from './../common/Card';
import type { FAQCategory_category } from './__generated__/FAQCategory_category.graphql';

const styles = css`
  .faqCategory {
    margin-right: 48px;
  }

  .warning {
    margin-right: 14px;
  }

  .arrow {
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

  @media only screen and (max-width: 901px) {
    .faq-item-chevron {
      top: 16px;
    }
  }
`;

type Props = {|
  category: FAQCategory_category,
  isWarning?: boolean,
|};

const FAQCategory = (props: Props) => (
  <Card>
    {props.isWarning && (
      <div className="warning">
        <Alert customColor="#171b1e" />
      </div>
    )}
    <div>
      <div className="faqCategory">
        <Heading type="title3">{props.category.title}</Heading>
      </div>
      <div className="perex">
        <Text type="secondary" size="small">
          {props.category.perex}
        </Text>
      </div>
    </div>
    <div className="arrow">
      <ChevronRight customColor="#bac7d5" />
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
