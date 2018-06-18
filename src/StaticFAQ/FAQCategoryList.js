// @flow

import * as React from 'react';
import idx from 'idx';
import { Link } from 'react-router-dom';
import { graphql } from 'react-relay';

import { Loader, ScrollableBox } from '../common';
import QueryRenderer from '../relay/QueryRenderer';
import FAQArticle from './FAQArticle';
import FAQCategory from './FAQCategory';
import Breadcrumbs from './Breadcrumbs';
import StaticFAQError from './StaticFAQError';
import { simpleTracker } from '../helpers/analytics/trackers';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';
import type { FAQCategory_category } from './__generated__/FAQCategory_category.graphql';
import type { FAQCategoryListRootQueryResponse } from './__generated__/FAQCategoryListRootQuery.graphql';
import type { FAQCategoryListSubcategoryQueryResponse } from './__generated__/FAQCategoryListSubcategoryQuery.graphql';

type Props = {|
  categoryId: string | null,
|};

type RootQueryRendererParams = {
  props: ?FAQCategoryListRootQueryResponse,
  error: ?Error,
};

type SubcategoryQueryRendererParams = {
  props: ?FAQCategoryListSubcategoryQueryResponse,
  error: ?Error,
};

type CategoryFragment = {|
  +id: string,
  +title: ?string,
  +$fragmentRefs: FAQCategory_category,
|};
type FAQArticlePerexFragment = {|
  +id: string,
  +$fragmentRefs: FAQArticle_article,
|};

const queryRoot = graphql`
  query FAQCategoryListRootQuery {
    allFAQCategories {
      edges {
        node {
          id
          title
          ...FAQCategory_category
        }
      }
    }
  }
`;
const querySubcategory = graphql`
  query FAQCategoryListSubcategoryQuery($id: ID!) {
    FAQCategory(id: $id) {
      id
      title
      subcategories {
        id
        title
        ...FAQCategory_category
      }
      ancestors {
        id
        ...Breadcrumbs_breadcrumbs
      }
      FAQs {
        id
        ...FAQArticle_article
      }
    }
  }
`;

class FAQCategoryList extends React.Component<Props> {
  renderFAQArticlePerexes = (
    faqs: $ReadOnlyArray<?FAQArticlePerexFragment>,
    categoryId: string,
  ) => {
    return (
      <div>
        {faqs
          .filter(Boolean)
          .map(faq => (
            <FAQArticle key={faq.id} article={faq} categoryId={categoryId} />
          ))}
      </div>
    );
  };
  renderCategories = (categories: $ReadOnlyArray<CategoryFragment>) => {
    return (
      <div data-cy="faq-categories">
        {categories.map(category => {
          if (category) {
            return (
              <Link
                key={category.id}
                to={`/faq/${category.id}`}
                style={{ textDecoration: 'none', display: 'block' }}
                onClick={simpleTracker('smartFAQCategories', {
                  action: 'clickOnCategory',
                  categoryId: category.id,
                  categoryName: category.title || '',
                })}
              >
                <FAQCategory category={category} />
              </Link>
            );
          }

          return null;
        })}
      </div>
    );
  };

  renderRootCategory = (rendererProps: RootQueryRendererParams) => {
    if (rendererProps.error) {
      return <StaticFAQError />;
    }

    if (rendererProps.props) {
      const edges =
        idx(rendererProps.props, _ => _.allFAQCategories.edges) || [];
      const categories = edges.map(edge => edge && edge.node).filter(Boolean);
      return this.renderCategories(categories);
    }

    return <Loader />;
  };

  renderSubcategory = (rendererProps: SubcategoryQueryRendererParams) => {
    if (rendererProps.error) {
      return <StaticFAQError />;
    }

    if (rendererProps.props) {
      const categories =
        idx(rendererProps.props, _ => _.FAQCategory.subcategories) || [];
      const ancestors =
        idx(rendererProps.props, _ => _.FAQCategory.ancestors) || [];
      const currentCategory = idx(
        rendererProps.props,
        _ => _.FAQCategory.title,
      );
      const faqs = idx(rendererProps.props, _ => _.FAQCategory.FAQs) || [];
      const categoryId = idx(rendererProps.props, _ => _.FAQCategory.id) || '';

      return (
        <React.Fragment>
          <Breadcrumbs
            breadcrumbs={ancestors}
            currentCategory={currentCategory}
          />
          <ScrollableBox>
            {this.renderCategories(categories.filter(Boolean))}
            {this.renderFAQArticlePerexes(faqs, categoryId)}
          </ScrollableBox>
        </React.Fragment>
      );
    }

    return <Loader />;
  };

  render() {
    const { categoryId } = this.props;

    if (categoryId) {
      return (
        <QueryRenderer
          query={querySubcategory}
          render={this.renderSubcategory}
          variables={{ id: categoryId }}
        />
      );
    }

    return (
      <QueryRenderer
        query={queryRoot}
        render={this.renderRootCategory}
        variables={{}}
      />
    );
  }
}

export default FAQCategoryList;
