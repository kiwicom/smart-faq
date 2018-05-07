// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql } from 'react-relay';

import QueryRenderer from '../relay/QueryRenderer';
import Loader from '../common/Loader';
import ContentHeader from '../ContentHeader';
import FAQArticleDetailContent from './FAQArticleDetailContent';
import { withUser } from '../context/User';
import type { User } from '../types';
import type { FAQArticleDetailQuery } from './__generated__/FAQArticleDetailQuery.graphql';
import type { FAQArticleDetailSearchResultQuery } from './__generated__/FAQArticleDetailSearchResultQuery.graphql';
import CustomBreadcrumbs from './CustomBreadcrumbs';

const queryFAQArticleDetail = graphql`
  query FAQArticleDetailQuery($id: ID!, $category_id: ID!) {
    FAQArticle(id: $id) {
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
  query FAQArticleDetailSearchResultQuery($id: ID!) {
    FAQArticle(id: $id) {
      title
      ...FAQArticleDetailContent_article
    }
  }
`;

type FAQArticleDetailParams = {
  props: FAQArticleDetailQuery | FAQArticleDetailSearchResultQuery,
  error: ?Error,
};

type Props = {
  user: User,
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
        {!this.props.user && <ContentHeader />}
        <QueryRenderer
          query={
            categoryId === 'search'
              ? queryFAQArticleDetailSearchResult
              : queryFAQArticleDetail
          }
          variables={{
            id: articleId,
            ...(categoryId === 'search' ? {} : { category_id: categoryId }),
          }}
          render={this.renderDetailContent}
        />
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

export default withUser(FAQArticleDetail);
