// @flow

import * as React from 'react';
import idx from 'idx';
import { Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import Loader from '../common/Loader';

import FAQArticle from './FAQArticle';
import FAQCategory from './FAQCategory';
import createEnvironment from '../relay/environment';
import routeDefinitions from './../routeDefinitions';

import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';
import type { FAQCategory_category } from './__generated__/FAQCategory_category.graphql';
import type { FAQCategoryListRootQueryResponse } from './__generated__/FAQCategoryListRootQuery.graphql';
import type { FAQCategoryListSubcategoryQueryResponse } from './__generated__/FAQCategoryListSubcategoryQuery.graphql';

type Props = {|
  categoryId: string | null,
|};

type RootQueryRendererParams = {
  props: FAQCategoryListRootQueryResponse,
  error: Error,
};

type SubcategoryQueryRendererParams = {
  props: FAQCategoryListSubcategoryQueryResponse,
  error: Error,
};

const queryRoot = graphql`
  query FAQCategoryListRootQuery {
    allFAQCategories(language: en) {
      edges {
        node {
          id
          ...FAQCategory_category
        }
      }
    }
  }
`;
const querySubcategory = graphql`
  query FAQCategoryListSubcategoryQuery($id: ID!) {
    FAQCategory(id: $id, language: en) {
      subcategories {
        id
        ...FAQCategory_category
      }
      FAQs {
        id
        ...FAQArticle_article
      }
    }
  }
`;

class FAQCategoryList extends React.Component<Props> {
  renderFAQArticlePerexes = (faqs: FAQArticle_article[]) => {
    return (
      <div>{faqs.map(faq => <FAQArticle key={faq.id} article={faq} />)}</div>
    );
  };

  renderCategories = (categories: FAQCategory_category[]) => {
    return (
      <div>
        {categories.map(category => {
          if (category) {
            return (
              <Link
                key={category.id}
                to={`${routeDefinitions.STATIC_FAQ}/${category.id}`}
                style={{ textDecoration: 'none' }}
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
      return <div>Error</div>;
    }

    if (rendererProps.props) {
      const edges =
        idx(rendererProps.props, _ => _.allFAQCategories.edges) || [];
      const categories = edges.map(edge => edge.node);
      return this.renderCategories(categories);
    }

    return <Loader />;
  };

  renderSubcategory = (rendererProps: SubcategoryQueryRendererParams) => {
    if (rendererProps.error) {
      return <div>Error</div>;
    }

    if (rendererProps.props) {
      const categories =
        idx(rendererProps.props, _ => _.FAQCategory.subcategories) || [];
      const faqs = idx(rendererProps.props, _ => _.FAQCategory.FAQs) || [];

      return (
        <React.Fragment>
          {this.renderCategories(categories)}
          {this.renderFAQArticlePerexes(faqs)}
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
          environment={createEnvironment()}
          query={querySubcategory}
          render={this.renderSubcategory}
          variables={{ id: categoryId }}
        />
      );
    }

    return (
      <QueryRenderer
        environment={createEnvironment()}
        query={queryRoot}
        render={this.renderRootCategory}
      />
    );
  }
}

export default FAQCategoryList;
