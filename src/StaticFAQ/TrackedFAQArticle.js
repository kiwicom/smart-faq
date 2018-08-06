// @flow

import * as React from 'react';

import FAQArticleRaw from './FAQArticleRaw';
import { SearchState } from '../context/SearchState';
import type { SearchStateType } from '../context/SearchState';
import { simpleTracker } from '../helpers/analytics/trackers';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';

type Props = {|
  article: FAQArticle_article,
  categoryId: ?string,
  isSearchResult: ?boolean,
|};

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
const TrackedFAQArticle = (props: Props) => (
  <SearchState.Consumer>
    {({
      resetQueriesCount,
      queriesBeforeClick,
      searchText,
    }: SearchStateType) => {
      return (
        <FAQArticleRaw
          article={props.article}
          categoryId={props.categoryId}
          isSearchResult={props.isSearchResult}
          onClick={articleClicked(
            resetQueriesCount,
            queriesBeforeClick,
            searchText,
          )}
        />
      );
    }}
  </SearchState.Consumer>
);
export default TrackedFAQArticle;
