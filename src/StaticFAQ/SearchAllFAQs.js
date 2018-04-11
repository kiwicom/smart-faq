// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { QueryRenderer, graphql } from 'react-relay';
import idx from 'idx';
import FAQArticle from './FAQArticle';
import environment from '../relay/environment';
import Loader from '../common/Loader';

import type { SearchAllFAQsQuery } from './__generated__/SearchAllFAQsQuery.graphql';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';

const style = css`
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: white;
    margin-top: 25px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(171, 181, 195, 0.6);
  }
  div.scrollable-box {
    overflow-y: scroll;
    max-height: 78vh;
    margin: 0 auto;
    padding: 4px;
  }
`;

type AllFAQsQueryRendererParams = {|
  props: SearchAllFAQsQuery,
  error: Error,
|};

type Props = {|
  search: string,
  language?: string,
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
    <div className="scrollable-box">
      {faqs.map(faq => <FAQArticle key={faq.id} article={faq} />)}
      <style jsx>{style}</style>
    </div>
  );

  render() {
    const { search, language } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={queryAllFAQs}
        variables={{ search, language }}
        render={this.renderSearchFAQs}
      />
    );
  }
}

export default SearchAllFAQs;
