// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import idx from 'idx';

import FAQArticle from './FAQArticle';
import createEnvironment from '../relay/environment';
import { Loader, ScrollableBox } from '../common';
import type { SearchAllFAQsQuery } from './__generated__/SearchAllFAQsQuery.graphql';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';

type AllFAQsQueryRendererParams = {|
  props: SearchAllFAQsQuery,
  error: Error,
|};

type Props = {|
  search: string,
  language: string,
|};

const queryAllFAQs = graphql`
  query SearchAllFAQsQuery($search: String, $language: Language) {
    allFAQs(search: $search, language: $language) {
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
      return <div>{error.message}</div>;
    }
    if (props) {
      const edges = idx(props, _ => _.allFAQs.edges) || [];
      const faqs = edges.map(edge => edge.node);
      return this.renderFAQs(faqs);
    }
    return <Loader />;
  };

  renderFAQs = (faqs: FAQArticle_article[]) => (
    <ScrollableBox>
      {faqs.map(faq => <FAQArticle key={faq.id} article={faq} />)}
    </ScrollableBox>
  );

  render() {
    const { search, language } = this.props;
    return (
      <QueryRenderer
        environment={createEnvironment()}
        query={queryAllFAQs}
        variables={{ search, language }}
        render={this.renderSearchFAQs}
      />
    );
  }
}

export default SearchAllFAQs;
