// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import idx from 'idx';

import QueryRenderer from '../relay/QueryRenderer';
import FAQArticle from './FAQArticle';
import NoSearchResults from './NoSearchResults';
import StaticFAQError from './StaticFAQError';
import { Loader, ScrollableBox } from '../common';
import type { SearchAllFAQsQuery } from './__generated__/SearchAllFAQsQuery.graphql';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';

type AllFAQsQueryRendererParams = {
  props: ?SearchAllFAQsQuery,
  error: ?Error,
};

type Props = {|
  search: string,
|};

const queryAllFAQs = graphql`
  query SearchAllFAQsQuery($search: String) {
    allFAQs(search: $search) {
      edges {
        node {
          id
          ...FAQArticle_article
        }
      }
    }
  }
`;

class SearchAllFAQs extends React.Component<Props> {
  renderSearchFAQs = (rendererProps: AllFAQsQueryRendererParams) => {
    const { props, error } = rendererProps;
    if (error) {
      return <StaticFAQError />;
    }
    if (props) {
      const edges = idx(props, _ => _.allFAQs.edges) || [];
      const faqs = edges.map(edge => edge.node);
      return this.renderFAQs(faqs);
    }
    return <Loader />;
  };

  renderFAQs = (faqs: FAQArticle_article[]) => {
    if (!faqs.length) return <NoSearchResults />;
    return (
      <ScrollableBox>
        {faqs.map(faq => (
          <FAQArticle key={faq.id} article={faq} isSearchResult />
        ))}
      </ScrollableBox>
    );
  };

  render() {
    const { search } = this.props;
    return (
      <QueryRenderer
        query={queryAllFAQs}
        variables={{ search }}
        render={this.renderSearchFAQs}
      />
    );
  }
}

export default SearchAllFAQs;
