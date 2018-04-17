// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import { Typography } from '@kiwicom/orbit-components';

import Card from './../common/Card';
import routeDefinitions from '../routeDefinitions';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';

type Props = {|
  article: FAQArticle_article,
|};

const FAQArticle = (props: Props) => (
  <Link
    to={`${routeDefinitions.FAQ_ARTICLE}/${props.article.id}`}
    style={{ textDecoration: 'none' }}
  >
    <Card>
      <div>
        <Typography type="attention" size="large">
          {props.article.title}
        </Typography>
      </div>
      <div>
        <Typography type="secondary" size="small">
          {props.article.perex}
        </Typography>
      </div>
    </Card>
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
