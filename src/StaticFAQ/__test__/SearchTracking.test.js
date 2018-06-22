// @flow

import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

//import { RawFAQArticle as FAQArticle } from '../FAQArticle';
import StaticFAQ from '../';
import { SearchState } from '../../context/SearchState';

const searchText = 'Hola hola';
const queriesBeforeClick = 5; //eslint-disable-line
const isVisible = false;
const resetQueriesCount = jest.fn();
const incrementQueriesCount = jest.fn();
const changeSearchText = jest.fn();
const toggleSearch = jest.fn();

window.infinario = {
  track: jest.fn(),
};
const queryText = 'queeery';
describe('SearchTracking', () => {
  it('input query should track query', done => {
    const result = mount(
      <MemoryRouter>
        <SearchState.Provider
          value={{
            incrementQueriesCount,
            searchText,
            isVisible,
            changeSearchText,
            resetQueriesCount,
            queriesBeforeClick,
            toggleSearch,
          }}
        >
          <StaticFAQ />
        </SearchState.Provider>
      </MemoryRouter>,
    );
    result
      .find('input[dataCy="input-staticFAQ"]')
      .first()
      .simulate('change', { target: { value: queryText } });
    setTimeout(() => {
      expect(window.infinario.track.mock.calls).toHaveLength(1);
      expect(window.infinario.track.mock.calls[0][1]).toEqual({
        action: 'search',
        searchedText: queryText,
      });
      done();
    }, 400);
  });
});
