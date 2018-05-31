// @flow

import * as React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';

import Markdown from '../common/Markdown';
import FAQArticleFeedback from './ArticleFeedback/FAQArticleFeedback';
import type { FAQArticleDetailContent_article } from './__generated__/FAQArticleDetailContent_article.graphql';

type Props = {
  article: FAQArticleDetailContent_article,
};
const style = css`
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
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .faq-article-content {
      padding: 16px;
      padding-top: 0;
    }
  }
`;
const globalStyle = css`
  .faq-article-text ul,
  .faq-article-text ol {
    margin-left: 20px;
  }
`;
const Detail = ({ article }: Props) => (
  <div className="faq-article-content">
    <Heading size="medium">{article.title}</Heading>
    <div className="faq-article-perex">
      <Text colorText="attention" weight="bold" element="span">
        Summary:
      </Text>
      <Text element="span"> {article.perex}</Text>
    </div>
    <hr className="faq-article-delimiter" />
    <div className="faq-article-text">
      <Text>
        <Markdown>{article.content}</Markdown>
      </Text>
    </div>
    <hr className="faq-article-delimiter" />
    <FAQArticleFeedback articleId={article.id} />
    <style jsx>{style}</style>
    <style jsx global>
      {globalStyle}
    </style>
  </div>
);

export default createFragmentContainer(
  Detail,
  graphql`
    fragment FAQArticleDetailContent_article on FAQArticle {
      id
      title
      perex
      content
    }
  `,
);
