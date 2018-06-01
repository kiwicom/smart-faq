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
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .faq-article-content {
      padding: 16px;
      padding-top: 0;
    }
  }
`;
const globalStyle = css`
  .faq-article-text ul {
    list-style: none;
  }
  .faq-article-text ul,
  .faq-article-text ol {
    margin-left: 20px;
    padding-bottom: 20px;
    margin-bottom: 10px;
  }
  .faq-article-text li:before {
    content: '';
    display: inline-block;
    margin-right: 19px;
    background-color: #d5dee7;
    width: 6px;
    height: 6px;
    margin-bottom: 2px;
  }
  .faq-article-text a {
    color: #00ad98;
    text-decoration: none;
  }
  .faq-article-text li {
    display: list-item;
    padding-top: 10px;
    text-indent: -25px;
  }
  .faq-article-text li,
  .faq-article-text div {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
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
