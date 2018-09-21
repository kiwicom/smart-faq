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
import sectionFAQCategories from '../sectionFAQCategories';

const queryFAQArticleDetail = graphql`
  query ArticleDetailQuery(
    $id: ID!
    $categoryId: ID!
    $isSubcategory: Boolean!
  ) {
    FAQArticle(id: $id) {
      title
      ...ArticleContent_article
    }
    FAQCategory(id: $categoryId) @include(if: $isSubcategory) {
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
  @media only screen and (max-width: 901px) {
    .breadcrumbs {
      margin: 24px 0;
    }
  }
`;

class Article extends React.Component<Props> {
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

      let breadcrumbs = [{ title: 'Search' }, { title: article.title }];

      if (this.isSectionCategory()) {
        breadcrumbs = [{ title: 'Home' }, { title: article.title }];
      } else if (category) {
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

  getCategoryId = () => {
    return idx(this.props.match, _ => _.params.categoryId);
  };

  isSectionCategory = () => {
    const categoryId = this.getCategoryId();

    return categoryId && sectionFAQCategories.includes(categoryId);
  };

  getQueryRenderer() {
    const categoryId = this.getCategoryId();
    const articleId = idx(this.props.match, _ => _.params.articleId);
    const isSearchResult = categoryId === 'search';

    if (isSearchResult) {
      return (
        <QueryRenderer
          query={queryFAQArticleDetailSearchResult}
          variables={{ id: articleId }}
          render={this.renderDetailContent}
        />
      );
    }

    return (
      <QueryRenderer
        query={queryFAQArticleDetail}
        variables={{
          id: articleId,
          categoryId,
          isSubcategory: !this.isSectionCategory(),
        }}
        render={this.renderDetailContent}
      />
    );
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

export default Article;
