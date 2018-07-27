// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Text, Heading } from '@kiwicom/orbit-components';
import { Alert } from '@kiwicom/orbit-components/lib/icons';
import css from 'styled-jsx/css';

import Card from './../common/Card';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';

type Props = {|
  article: FAQArticle_article,
  categoryId: ?string,
  isWarning?: boolean,
  isSearchResult: ?boolean,
  onClick: () => void,
|};

const style = css`
  .warning {
    margin-right: 14px;
  }

  .perex {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #7f91a8;
    line-height: 1.4;
    margin-top: 5px;
  }
`;

const RawFAQArticle = (props: Props) => (
  <Link
    data-cy="faq-article-link"
    to={
      props.isSearchResult
        ? `/faq/search/article/${props.article.id}`
        : `/faq/${props.categoryId || ''}/article/${props.article.id}`
    }
    style={{ textDecoration: 'none', display: 'block' }}
    onClick={props.onClick}
  >
    <Card>
      {props.isWarning && (
        <div className="warning">
          <Alert customColor="#171b1e" />
        </div>
      )}
      <div>
        <div>
          <Heading type="title3">
          {props.article.title}
        </Heading>
      </div>
      <div className="perex">
        <Text type="secondary" size="small" element="span">
          {props.article.perex}
        </Text></div>
      </div>
    </Card>
    <style jsx>{style}</style>
  </Link>
);
export default RawFAQArticle;
