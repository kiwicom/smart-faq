// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text, Heading } from '@kiwicom/orbit-components';
import css from 'styled-jsx/css';

import Card from './../common/Card';
import { SearchState, type SearchStateType } from '../context/SearchState';
import { simpleTracker } from '../helpers/analytics/trackers';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';

type Props = {|
  article: FAQArticle_article,
  categoryId: ?string,
  isSearchResult: ?boolean,
|};

const style = css`
  .perex {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #7f91a8;
    line-height: 1.4;
    margin-top: 5px;
  }
`;

const articleClicked = (
  resetQueriesCount: () => void,
  queriesBeforeClick: number,
  searchText: string,
) => () => {
  if (searchText) {
    simpleTracker('smartFAQBookingOverview', {
      action: 'articleClicked',
      queriesBeforeClick,
    });
    resetQueriesCount();
  }
};
const RawFAQArticle = (props: Props) => (
  <SearchState.Consumer>
    {({
      resetQueriesCount,
      queriesBeforeClick,
      searchText,
    }: SearchStateType) => {
      return (
        <Link
          data-cy="faq-article-link"
          to={
            props.isSearchResult
              ? `/faq/search/article/${props.article.id}`
              : `/faq/${props.categoryId || ''}/article/${props.article.id}`
          }
          style={{ textDecoration: 'none', display: 'block' }}
          onClick={articleClicked(
            resetQueriesCount,
            queriesBeforeClick,
            searchText,
          )}
        >
          <Card>
            <div>
              <Heading weight="medium" size="small">
                {props.article.title}
              </Heading>
            </div>
            <div className="perex">
              <Text type="secondary" size="small" element="span">
                {props.article.perex}
              </Text>
            </div>
          </Card>
          <style jsx>{style}</style>
        </Link>
      );
    }}
  </SearchState.Consumer>
);
export { RawFAQArticle };
export default createFragmentContainer(
  RawFAQArticle,
  graphql`
    fragment FAQArticle_article on FAQArticle {
      id
      title
      perex
    }
  `,
);
