// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';
import css from 'styled-jsx/css';

import Card from './../common/Card';
import routeDefinitions from '../routeDefinitions';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';

type Props = {|
  article: FAQArticle_article,
  categoryId: ?string,
  isSearchResult: ?boolean,
|};

const style = css`
  .perex {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #7f91a8;
    line-height: 1.4;
    margin-top: 5px;
  }
`;

const FAQArticle = (props: Props) => (
  <Link
    className="faq-link"
    to={
      props.isSearchResult
        ? `${routeDefinitions.FAQ_ARTICLE}/search/${props.article.id}`
        : `${routeDefinitions.FAQ_ARTICLE}/${props.categoryId || ''}/${
            props.article.id
          }`
    }
    style={{ textDecoration: 'none' }}
  >
    <Card>
      <div>
        <Typography type="attention" size="large">
          {props.article.title}
        </Typography>
      </div>
      <div className="perex">
        <Typography type="secondary" size="small">
          {props.article.perex}
        </Typography>
      </div>
    </Card>
    <style jsx>{style}</style>
  </Link>
);

export default createFragmentContainer(
  FAQArticle,
  graphql`
    fragment FAQArticle_article on FAQArticle {
      id
      title
      perex
    }
  `,
);
