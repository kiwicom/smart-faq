// @flow

import * as React from 'react';
import { Search } from '@kiwicom/orbit-components/lib/icons';

import Input from '../common/Input';
import { SearchState } from '../context/SearchState';
import type { SearchStateType } from '../context/SearchState';
import { simpleTracker } from '../helpers/analytics/trackers';
import { debounce } from '../helpers/functionUtils';

const logSearchQuery = debounce(query =>
  simpleTracker('smartFAQBookingOverview', {
    action: 'search',
    searchedText: query,
  }),
);

const SearchBar = () => (
  <SearchState.Consumer>
    {({
      searchText,
      changeSearchText,
      incrementQueriesCount,
      resetQueriesCount,
    }: SearchStateType) => {
      const isSearching = searchText.length > 0;

      const onSearchCancel = () => {
        changeSearchText('');
        resetQueriesCount();
      };

      const onSearchChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
        const query = e.target.value;
        if (query.length) {
          incrementQueriesCount();
          changeSearchText(query);
          logSearchQuery(query);
        } else {
          onSearchCancel();
        }
      };

      return (
        <Input
          value={searchText}
          onChange={onSearchChange}
          placeholder="Search"
          icon={<Search customColor="#bac7d5" />}
          onReset={isSearching ? onSearchCancel : undefined}
          dataCy="input-staticFAQ"
        />
      );
    }}
  </SearchState.Consumer>
);

export default SearchBar;
