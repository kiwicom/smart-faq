// @flow

import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

import TrackedFAQArticle from '../TrackedFAQArticle';
import { SearchState } from '../../context/SearchState';

const mockRefType: any = null;
const searchText = 'Hola hola';
const isVisible = false;
let queriesBeforeClick = 5; //eslint-disable-line
const resetQueriesCount = jest.fn(() => {
  queriesBeforeClick = 0;
});
const changeSearchText = jest.fn();
const incrementQueriesCount = jest.fn();
const toggleSearch = jest.fn();
const enableSearch = jest.fn();
const disableSearch = jest.fn();
const article = { id: '23', perex: 'aa', title: 'llk', $refType: mockRefType };
window.infinario = {
  track: jest.fn(),
};
describe('TrackedFAQArticle', () => {
  it('click should track queriesBeforeClick and reset queriesCounter', () => {
    const result = mount(
      <MemoryRouter>
        <SearchState.Provider
          value={{
            searchText,
            isVisible,
            resetQueriesCount,
            queriesBeforeClick,
            changeSearchText,
            incrementQueriesCount,
            toggleSearch,
            enableSearch,
            disableSearch,
          }}
        >
          <TrackedFAQArticle
            isSearchResult={false}
            article={article}
            categoryId="444"
          />
        </SearchState.Provider>
      </MemoryRouter>,
    );
    result
      .find('a[data-cy="faq-article-link"]')
      .first()
      .simulate('click');
    expect(window.infinario.track.mock.calls).toHaveLength(1);
    expect(window.infinario.track.mock.calls[0][1]).toEqual({
      action: 'articleClicked',
      queriesBeforeClick: 5,
    });
    expect(queriesBeforeClick).toEqual(0);
    expect(resetQueriesCount.mock.calls).toHaveLength(1);
  });
});
