// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, Text } from '@kiwicom/orbit-components';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';
import idx from 'idx';
import Trans from '@kiwicom/nitro/lib/components/Text';

import { UserContext } from '../../context/User';
import type { UserContextType } from '../../context/User';
import Markdown from '../../common/Markdown';
import GuaranteeChat from './GuaranteeChat';
import FAQArticleFeedback from '../ArticleFeedback/FAQArticleFeedback';
import { EnterTracker, TimeTracker } from '../../helpers/analytics/trackers';
import { GuaranteeChatInfoState } from '../../context/GuaranteeChatInfo';
import type { ArticleContent_article } from './__generated__/ArticleContent_article.graphql';

export const GUARANTEE_ARTICLE_ID = 'RkFRQXJ0aWNsZToxNDY=';

type Props = {
  article: ArticleContent_article,
  showGuaranteeChat: boolean,
};

const globalStyle = css`
  .faq-article-text ul {
    padding-left: 43px;
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
    width: 6px;
    height: 6px;
    margin-bottom: 2px;
  }
  .faq-article-text ul li:before {
    background-color: #d5dee7;
  }
  .faq-article-text a {
    color: #00ad98;
    text-decoration: none;
  }
  .faq-article-text img {
    width: 100%;
    height: auto;
    object-fit: contain;
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
class ArticleContent extends React.Component<Props> {
  renderArticle = isLoggedIn => {
    const { article, showGuaranteeChat } = this.props;
    return (
      <div className="faq-article-content" data-cy="faq-article-content">
        <Heading type="title2">{article.title}</Heading>
        <div className="faq-article-perex">
          <Text type="attention" weight="bold" element="span">
            <Trans t={__('smartfaq.faq.article.summary')} />
          </Text>
          <Text element="span"> {article.perex}</Text>
        </div>
        <hr className="faq-article-delimiter" />
        <div className="faq-article-text">
          <Markdown>{article.content}</Markdown>
        </div>
        {showGuaranteeChat && <GuaranteeChat />}
        <hr className="faq-article-delimiter" />
        <FAQArticleFeedback articleId={article.id} />
        <style jsx>
          {`
            .faq-article-content {
              padding: ${isLoggedIn ? '40px 72px 40px 80px' : '40px 36px'};
            }
            .faq-article-perex {
              padding: 24px 0;
              line-height: 20px;
            }
            .faq-article-delimiter {
              border: 0;
              height: 1px;
              background-color: #e8edf1;
              margin: 0;
            }
            .faq-article-text {
              padding: 24px 0;
            }
            @media only screen and (max-width: 901px) {
              .faq-article-content {
                padding: 16px;
                padding-top: 0;
              }
            }
          `}
        </style>
        <style jsx global>
          {globalStyle}
        </style>
      </div>
    );
  };
  render() {
    return (
      <UserContext.Consumer>
        {({ user }: UserContextType) => this.renderArticle(Boolean(user))}
      </UserContext.Consumer>
    );
  }
}

const EnterTrackedDetail = EnterTracker(
  ArticleContent,
  'smartFAQCategories',
  (props: Props) => ({
    action: 'clickOnArticle',
    articleId: idx(props.article, _ => _.id) || '',
    articleName: idx(props.article, _ => _.title) || '',
  }),
);

const TimeTrackedDetail = TimeTracker(
  EnterTrackedDetail,
  'smartFAQCategories',
  (props: Props) => ({
    action: 'articleClose',
    articleId: idx(props.article, _ => _.id) || '',
    articleName: idx(props.article, _ => _.title) || '',
  }),
);

type ContainerProps = {
  match: {
    params: {
      articleId: string,
      categoryId: string,
      [key: string]: ?string,
    },
  },
};

const WrappedArticle = (props: Props & ContainerProps) => (
  <GuaranteeChatInfoState.Consumer>
    {({ showGuaranteeChat }) => {
      // show Guarantee Chat only in Guarantee article
      const articleId = idx(props.match, _ => _.params.articleId);
      const isInGuaranteeArticle = articleId === GUARANTEE_ARTICLE_ID;
      const forceGuaranteeChat =
        typeof window !== 'undefined' && window.GuaranteeChatForce;

      return (
        <TimeTrackedDetail
          showGuaranteeChat={
            (showGuaranteeChat || forceGuaranteeChat) && isInGuaranteeArticle
          }
          {...props}
        />
      );
    }}
  </GuaranteeChatInfoState.Consumer>
);

export default createFragmentContainer(
  withRouter(WrappedArticle),
  graphql`
    fragment ArticleContent_article on FAQArticle {
      id
      title
      perex
      content
    }
  `,
);
