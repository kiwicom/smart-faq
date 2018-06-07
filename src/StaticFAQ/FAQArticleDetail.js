// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql } from 'react-relay';
import css from 'styled-jsx/css';

import QueryRenderer from '../relay/QueryRenderer';
import Loader from '../common/Loader';
import FAQArticleDetailContent from './FAQArticleDetailContent';
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

const style = css`
  .breadcrumbs {
    margin: 24px 36px;
    margin-bottom: -2px;
  }
  @media only screen and (max-width: 1181px) {
    .breadcrumbs {
      margin: 24px 0;
    }
  }
`;

class FAQArticleDetail extends React.Component<Props> {
  renderDetailContent = (params: FAQArticleDetailParams) => {
    if (params.error) {
      return <div>{params.error.message}</div>;
    }
    if (params.props) {
      return (
        <React.Fragment>
          <div className="breadcrumbs">
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
          </div>

          <FAQArticleDetailContent article={params.props.FAQArticle} />
          <style jsx>{style}</style>
        </React.Fragment>
      );
    }

    return (
      <div style={{ height: '100%' }}>
        <Loader />
      </div>
    );
  };

  isSearchResult() {
    return this.getCategoryId() === 'search';
  }

  getCategoryId() {
    return idx(this.props.match, _ => _.params.categoryId);
  }

  getQueryRenderer() {
    if (this.isSearchResult()) {
      return (
        <QueryRenderer
          query={queryFAQArticleDetailSearchResult}
          variables={{ id: this.getArticleId() }}
          render={this.renderDetailContent}
        />
      );
    }

    return (
      <QueryRenderer
        query={queryFAQArticleDetail}
        variables={{
          id: this.getArticleId(),
          category_id: this.getCategoryId(),
        }}
        render={this.renderDetailContent}
      />
    );
  }

  getArticleId() {
    return idx(this.props.match, _ => _.params.articleId);
  }

  render() {
    return (
      <div className="faq-article-detail">
        {this.getQueryRenderer()}
        <style jsx>
          {`
            .faq-article-detail {
              width: 100%;
              height: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default FAQArticleDetail;
