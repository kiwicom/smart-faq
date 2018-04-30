// @flow

import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import { Typography } from '@kiwicom/orbit-components';
import { createFragmentContainer, graphql } from 'react-relay';

import Breadcrumbs from './Breadcrumbs';
import type { FAQArticleDetailQuery } from './__generated__/FAQArticleDetailQuery.graphql';

type Props = FAQArticleDetailQuery;

const Detail = ({ article, category }: Props) => (
  <React.Fragment>
    <div className="faq-article-content">
      <div>
        <Breadcrumbs
          breadcrumbs={category.ancestors}
          currentCategory={article.title}
        />
      </div>
      <Typography size="header" type="attention">
        {article.title}
      </Typography>
      <div className="faq-article-perex">
        <Typography type="attention" variant="bold">
          Summary:
        </Typography>
        <Typography type="attention"> {article.perex}</Typography>
      </div>
      <hr className="faq-article-delimiter" />
      <div className="faq-article-text">
        <Typography>
          <Markdown>{article.content}</Markdown>
        </Typography>
      </div>
      <style jsx>
        {`
          .faq-article-content {
            padding: 40px;
          }
          .faq-article-perex {
            padding: 24px 0;
            line-height: 20px;
          }
          .faq-article-delimiter {
            border: 0;
            height: 1px;
            background-color: #e8edf1;
          }
          .faq-article-text {
            padding: 24px 0;
            line-height: 20px;
          }
        `}
      </style>
      <style jsx global>
        {`
          .faq-article-text ul,
          .faq-article-text ol {
            margin-left: 20px;
          }
        `}
      </style>
    </div>
  </React.Fragment>
);

export default createFragmentContainer(
  Detail,
  graphql`
    fragment FAQArticleDetailContent_article on FAQArticle {
      title
      perex
      content
    }
  `,
);
