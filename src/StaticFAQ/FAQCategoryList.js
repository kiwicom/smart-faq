// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, QueryRenderer } from 'react-relay';

import FAQCategory from './FAQCategory';
import environment from '../relay/environment';
import type { FAQCategoryListQueryResponse } from './__generated__/FAQCategoryListQuery.graphql';

type Props = {};

type QueryRendererParams = {
  props: FAQCategoryListQueryResponse,
  error: Error,
};

const query = graphql`
  query FAQCategoryListQuery {
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

class FAQCategoryList extends React.Component<Props> {
  renderStaticFAQs = (rendererProps: QueryRendererParams) => {
    if (rendererProps.error) {
      return <div>Error</div>;
    }

    if (rendererProps.props) {
      const categories =
        idx(rendererProps.props, _ => _.allFAQCategories.edges) || [];

      return (
        <div>
          {categories.map(category => {
            if (category && category.node) {
              return (
                <FAQCategory key={category.node.id} category={category.node} />
              );
            }

            return null;
          })}
        </div>
      );
    }

    return <div>Loading</div>;
  };

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        render={this.renderStaticFAQs}
      />
    );
  }
}

export default FAQCategoryList;
