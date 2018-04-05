// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { QueryRenderer, graphql } from 'react-relay';
import idx from 'idx';
import { Typography } from '@kiwicom/orbit-components';

import environment from '../relay/environment';
import Loader from '../common/Loader';
import Card from '../common/Card';

const style = css`
  div.scrollable-box {
    overflow-y: scroll;
    max-height: 78vh;
    margin: 0 auto;
    padding: 2px;
  }
`;

type Props = {|
  search: string,
  language?: string,
|};

type ArticleProps = {|
  title: string,
  perex: string,
|};

const SearchAllFAQsQuery = graphql`
  query SearchAllFAQsQuery($search: String, $language: Language) {
    allFAQs(search: $search, language: $language) {
      edges {
        node {
          results {
            title
            articleId
          }
        }
      }
    }
  }
`;

const FAQArticle = ({ title, perex }: ArticleProps) => (
  <Card>
    <div>
      <Typography type="attention" size="large">
        {title}
      </Typography>
    </div>
    <div>
      <Typography type="secondary" size="small">
        {perex}
      </Typography>
    </div>
  </Card>
);

const SearchAllFAQs = ({ search, language = 'en' }: Props) => {
  return (
    <QueryRenderer
      environment={environment}
      query={SearchAllFAQsQuery}
      variables={{ search, language }}
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
                <FAQArticle
                  key={result.articleId}
                  title={result.title}
                  perex="How to find your best deal fast and easy"
                />
              ))}
              <style jsx>{style}</style>
            </div>
          );
        }
        return <Loader />;
      }}
    />
  );
};

export default SearchAllFAQs;
