// @flow

import * as React from 'react';
import idx from 'idx';
import { QueryRenderer, graphql } from 'react-relay';

import Loader from '../common/Loader';
import FAQArticleDetailContent from './FAQArticleDetailContent';
import createEnvironment from '../relay/environment';
import { LanguageContext } from '../context/Language';
import type { FAQArticleDetailQuery } from './__generated__/FAQArticleDetailQuery.graphql';
import type { FAQArticleDetailSearchResultQuery } from './__generated__/FAQArticleDetailSearchResultQuery.graphql';
import CustomBreadcrumbs from './CustomBreadcrumbs';

const queryFAQArticleDetail = graphql`
  query FAQArticleDetailQuery(
    $id: ID!
    $language: Language
    $category_id: ID!
  ) {
    FAQArticle(id: $id, language: $language) {
      title
      ...FAQArticleDetailContent_article
    }
    FAQCategory(id: $category_id) {
      title
      id
      ancestors {
        id
        title
      }
    }
  }
`;

const queryFAQArticleDetailSearchResult = graphql`
  query FAQArticleDetailSearchResultQuery($id: ID!, $language: Language) {
    FAQArticle(id: $id, language: $language) {
      title
      ...FAQArticleDetailContent_article
    }
  }
`;

type FAQArticleDetailParams = {
  props: FAQArticleDetailQuery | FAQArticleDetailSearchResultQuery,
  error: Error,
};

type Props = {
  match: {
    params: {
      articleId: string,
      categoryId: string,
      [key: string]: ?string,
    },
    isExact: boolean,
    path: string,
    url: string,
  },
};

class FAQArticleDetail extends React.Component<Props> {
  renderDetailContent = (params: FAQArticleDetailParams) => {
    if (params.error) {
      return <div>{params.error.message}</div>;
    }
    if (params.props) {
      return (
        <React.Fragment>
          <CustomBreadcrumbs
            breadcrumbs={
              params.props.FAQCategory
                ? [{ title: 'Home' }]
                    .concat(params.props.FAQCategory.ancestors)
                    .concat(params.props.FAQCategory)
                    .concat([{ title: params.props.FAQArticle.title }])
                : [{ title: 'Search' }].concat([
                    { title: params.props.FAQArticle.title },
                  ])
            }
          />
          <FAQArticleDetailContent article={params.props.FAQArticle} />
        </React.Fragment>
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
              query={
                categoryId === 'search'
                  ? queryFAQArticleDetailSearchResult
                  : queryFAQArticleDetail
              }
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
