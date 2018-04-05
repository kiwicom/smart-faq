// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { QueryRenderer, graphql } from 'react-relay';
import idx from 'idx';
import environment from '../relay/environment';
import ArticleCard from '../common/ArticleCard';
import Loader from '../common/Loader';

const style = css`
  div.scrollable-box {
    overflow-y: scroll;
    max-height: 78vh;
    margin: 0 auto;
    padding: 2px;
  }
`;

type Props = {|
  querySearch: string,
  language?: string,
|};

const SearchAllFAQsQuery = graphql`
  query SearchAllFAQsQuery($search: String, $language: Language) {
    allFAQs(search: $search, language: $language) {
      edges {
        node {
          results {
            title
            content
            upvotes
            downvotes
            categories {
              name
              items {
                title
                icon
                style
              }
            }
          }
        }
      }
    }
  }
`;

const SearchAllFAQs = ({ querySearch, language = 'en' }: Props) => {
  if (!querySearch) return null;
  return (
    <QueryRenderer
      environment={environment}
      query={SearchAllFAQsQuery}
      variables={{ search: querySearch, language }}
      render={({ err, props }) => {
        if (err) {
          return <div>{err.message}</div>;
        }
        if (props) {
          const edges = idx(props, _ => _.allFAQs.edges) || [];
          const results = edges.map(edge => edge.node.results);
          return (
            <div className="scrollable-box">
              {results.map(result => (
                <ArticleCard
                  key={result.title}
                  title={result.title}
                  content="How to find your best deal fast and easy"
                />
              ))}
              <style jsx>{style}</style>
            </div>
          );
        } else {
          return <Loader />;
        }
      }}
    />
  );
};

export default SearchAllFAQs;
