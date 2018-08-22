// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql } from 'react-relay';
import css from 'styled-jsx/css';

import QueryRenderer from '../../relay/QueryRenderer';
import Loader from '../../common/Loader';
import FAQArticleDetailContent from './ArticleContent';
import FAQArticleNotFound from './FAQArticleNotFound';
import type { ArticleDetailQuery } from './__generated__/ArticleDetailQuery.graphql';
import type { ArticleDetailSearchResultQuery } from './__generated__/ArticleDetailSearchResultQuery.graphql';
import CustomBreadcrumbs from '../breadcrumbs/CustomBreadcrumbs';
import { BookingState } from '../../context/BookingState';
import type { FAQSectionType } from '../../context/BookingState';

const queryFAQArticleDetail = graphql`
  query ArticleDetailQuery($id: ID!, $category_id: ID!) {
    FAQArticle(id: $id) {
      title
      ...ArticleContent_article
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
  query ArticleDetailSearchResultQuery($id: ID!) {
    FAQArticle(id: $id) {
      title
      ...ArticleContent_article
    }
  }
`;

type FAQArticleDetailParams = {
  props: ?ArticleDetailQuery | ?ArticleDetailSearchResultQuery,
  error: ?Error,
};

type ComponentProps = {
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

type Props = ComponentProps & {
  section: FAQSectionType,
};

const style = css`
  .breadcrumbs {
    margin: 24px 36px;
    margin-bottom: -2px;
  }
  @media only screen and (max-width: 901px) {
    .breadcrumbs {
      margin: 24px 0;
    }
  }
`;

class RawFAQArticleDetail extends React.Component<Props> {
  renderDetailContent = (params: FAQArticleDetailParams) => {
    if (params.error) {
      return <div>{params.error.message}</div>;
    }
    if (params.props) {
      const category = params.props.FAQCategory;
      const article = params.props.FAQArticle;

      if (!article) {
        return <FAQArticleNotFound />;
      }

      let breadcrumbs = [{ title: 'Search' }].concat([
        { title: article.title },
      ]);

      if (category) {
        breadcrumbs = [{ title: 'Home' }]
          .concat(category.ancestors ? category.ancestors : [])
          .concat(category)
          .concat([{ title: 'Article' }]);
      }

      return (
        <React.Fragment>
          <div className="breadcrumbs">
            <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
          </div>

          <FAQArticleDetailContent article={article} />
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
          section: this.props.section,
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
              max-width: 100vw;
              height: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}

const Article = (props: ComponentProps) => (
  <BookingState.Consumer>
    {({ FAQSection }) => (
      <RawFAQArticleDetail section={FAQSection} {...props} />
    )}
  </BookingState.Consumer>
);

export default Article;
