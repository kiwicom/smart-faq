// @flow

import * as React from 'react';

import { debounce } from '../helpers/functionUtils';

const initialState = {
  searchText: '',
  queriesBeforeClick: 0,
  isVisible: true,
};

type Props = {
  children: React.Node,
};

export type State = {
  searchText: string,
  queriesBeforeClick: number,
  isVisible: boolean,
};

export type SearchStateType = State & {
  changeSearchText: (searchText: string) => void,
  incrementQueriesCount: () => void,
  resetQueriesCount: () => void,
  toggleSearch: () => void,
  disableSearch: () => void,
  enableSearch: () => void,
};

export const SearchState = React.createContext({
  ...initialState,
  changeSearchText: (text: string) => {}, // eslint-disable-line no-unused-vars
  incrementQueriesCount: () => {}, // eslint-disable-line no-unused-vars
  resetQueriesCount: () => {}, // eslint-disable-line no-unused-vars
  toggleSearch: () => {}, // eslint-disable-line no-unused-vars
  disableSearch: () => {},
  enableSearch: () => {},
});

class SearchStateProvider extends React.Component<Props, State> {
  state = initialState;

  changeSearchText = (searchText: string) => {
    this.setState({ searchText });
  };
  resetQueriesCount = () => {
    this.setState({ queriesBeforeClick: 0 });
  };
  incrementQueriesCount = debounce(() => {
    this.setState(prevState => ({
      queriesBeforeClick: prevState.queriesBeforeClick + 1,
    }));
  });

  toggleSearch = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  disableSearch = () => {
    this.setState({ isVisible: false });
  };

  enableSearch = () => {
    this.setState({ isVisible: true });
  };

  render() {
    const { queriesBeforeClick, searchText, isVisible } = this.state;

    return (
      <SearchState.Provider
        value={{
          searchText,
          isVisible,
          changeSearchText: this.changeSearchText,
          incrementQueriesCount: this.incrementQueriesCount,
          resetQueriesCount: this.resetQueriesCount,
          queriesBeforeClick,
          toggleSearch: this.toggleSearch,
          enableSearch: this.enableSearch,
          disableSearch: this.disableSearch,
        }}
      >
        {this.props.children}
      </SearchState.Provider>
    );
  }
}

export default SearchStateProvider;
