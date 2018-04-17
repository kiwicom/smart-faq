// @flow

import * as React from 'react';
import idx from 'idx';
import { QueryRenderer, graphql } from 'react-relay';

import Header from './Header';
import Loader from '../common/Loader';
import FAQArticleDetailContent from './FAQArticleDetailContent';
import createEnvironment from '../relay/environment';
import { LanguageContext } from '../common/Language';
import type { FAQArticleDetailQuery } from './__generated__/FAQArticleDetailQuery.graphql';

const queryFAQArticleDetail = graphql`
  query FAQArticleDetailQuery($id: ID!, $language: Language) {
    FAQArticle(id: $id, language: $language) {
      ...FAQArticleDetailContent_article
    }
  }
`;

type FAQArticleDetailParams = {|
  props: FAQArticleDetailQuery,
  error: Error,
|};

type Props = {|
  match: {
    params: {
      articleId: string,
    },
  },
|};

class FAQArticleDetail extends React.Component<Props> {
  renderDetailContent = (params: FAQArticleDetailParams) => {
    if (params.error) {
      return <div>{params.error.message}</div>;
    }
    if (params.props) {
      return <FAQArticleDetailContent article={params.props.FAQArticle} />;
    }

    return <Loader />;
  };

  render() {
    const articleId = idx(this.props.match, _ => _.params.articleId);

    return (
      <div className="faq-article-detail">
        <Header leftButton="Back" />
        <LanguageContext.Consumer>
          {(language: string) => (
            <QueryRenderer
              environment={createEnvironment()}
              query={queryFAQArticleDetail}
              variables={{ language, id: articleId }}
              render={this.renderDetailContent}
            />
          )}
        </LanguageContext.Consumer>
        <style jsx>
          {`
            .faq-article-detail {
              width: 480px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default FAQArticleDetail;
