// @flow

import * as React from 'react';

import StaticFAQRaw from './StaticFAQRaw';
import { SearchState } from '../context/SearchState';
import type { SearchStateType } from '../context/SearchState';
import { simpleTracker } from '../helpers/analytics/trackers';
import { debounce } from '../helpers/functionUtils';

const logSearchQuery = debounce(q =>
  simpleTracker('smartFAQBookingOverview', {
    action: 'search',
    searchedText: q,
  }),
);
const TrackedStaticFAQ = () => {
  return (
    <SearchState.Consumer>
      {({
        searchText,
        changeSearchText,
        incrementQueriesCount,
        resetQueriesCount,
        isVisible,
      }: SearchStateType) => {
        const onSearchCancel = () => {
          changeSearchText('');
          resetQueriesCount();
        };
        const onSearchChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
          const q = e.target.value;
          if (q.length) {
            incrementQueriesCount();
            changeSearchText(q);
            logSearchQuery(q);
          } else {
            onSearchCancel();
          }
        };

        return (
          <StaticFAQRaw
            onSearchChange={onSearchChange}
            onSearchCancel={onSearchCancel}
            searchText={searchText}
            isVisible={isVisible}
          />
        );
      }}
    </SearchState.Consumer>
  );
};

export default TrackedStaticFAQ;
