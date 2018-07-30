// @flow

import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import ThemeProvider from '@kiwicom/orbit-components/lib/Theming/ThemeProvider';

//import { RawFAQArticle as FAQArticle } from '../FAQArticle';
import StaticFAQ from '../';
import { SearchState } from '../../context/SearchState';

const searchText = 'Hola hola';
const queriesBeforeClick = 5; //eslint-disable-line
const isVisible = true;
const toggleSearch = jest.fn();
const enableSearch = jest.fn();
const disableSearch = jest.fn();
const resetQueriesCount = jest.fn();
const incrementQueriesCount = jest.fn();
const changeSearchText = jest.fn();
window.infinario = {
  track: jest.fn(),
};
const queryText = 'queeery';
describe('SearchTracking', () => {
  it('input query should track query', done => {
    const result = mount(
      <MemoryRouter>
        <ThemeProvider>
          <SearchState.Provider
            value={{
              incrementQueriesCount,
              searchText,
              changeSearchText,
              resetQueriesCount,
              queriesBeforeClick,
              isVisible,
              toggleSearch,
              enableSearch,
              disableSearch,
            }}
          >
            <StaticFAQ />
          </SearchState.Provider>
        </ThemeProvider>
      </MemoryRouter>,
    );
    result
      .find('input[data-cy="input-staticFAQ"]')
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
