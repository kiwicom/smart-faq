// @flow

import * as React from 'react';
import idx from 'idx';
import { QueryRenderer, graphql } from 'react-relay';

import Loader from '../common/Loader';
import FAQArticleDetailContent from './FAQArticleDetailContent';
import createEnvironment from '../relay/environment';
import { LanguageContext } from '../context/Language';
import type { FAQArticleDetailQuery } from './__generated__/FAQArticleDetailQuery.graphql';

const queryFAQArticleDetail = graphql`
  query FAQArticleDetailQuery(
    $id: ID!
    $language: Language
    $category_id: ID!
  ) {
    FAQArticle(id: $id, language: $language) {
      ...FAQArticleDetailContent_article
    }
    FAQCategory(id: $category_id) {
      ancestors {
        ...Breadcrumbs_breadcrumbs
      }
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
      categoryId: string,
    },
  },
|};

class FAQArticleDetail extends React.Component<Props> {
  renderDetailContent = (params: FAQArticleDetailParams) => {
    if (params.error) {
      return <div>{params.error.message}</div>;
    }
    if (params.props) {
      return (
        <FAQArticleDetailContent
          category={params.props.FAQCategory}
          article={params.props.FAQArticle}
        />
      );
    }

    return <Loader />;
  };

  render() {
    const articleId = idx(this.props.match, _ => _.params.articleId);
    const categoryId = idx(this.props.match, _ => _.params.categoryId);

    return (
      <div className="faq-article-detail">
        <LanguageContext.Consumer>
          {(language: string) => (
            <QueryRenderer
              environment={createEnvironment()}
              query={queryFAQArticleDetail}
              variables={{ language, id: articleId, category_id: categoryId }}
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
