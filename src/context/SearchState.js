// @flow

import * as React from 'react';

import { debounce } from '../helpers/functionUtils';

const initialState = {
  searchText: '',
  queriesBeforeClick: 0,
};

type Props = {
  children: React.Node,
};

export type State = {
  searchText: string,
  queriesBeforeClick: number,
};

export type SearchStateType = State & {
  changeSearchText: (searchText: string) => void,
  incrementQueriesCount: () => void,
  resetQueriesCount: () => void,
};

export const SearchState = React.createContext({
  ...initialState,
  changeSearchText: (text: string) => {}, // eslint-disable-line no-unused-vars
  incrementQueriesCount: () => {}, // eslint-disable-line no-unused-vars
  resetQueriesCount: () => {}, // eslint-disable-line no-unused-vars
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

  render() {
    const { queriesBeforeClick, searchText } = this.state;

    return (
      <SearchState.Provider
        value={{
          searchText,
          changeSearchText: this.changeSearchText,
          incrementQueriesCount: this.incrementQueriesCount,
          resetQueriesCount: this.resetQueriesCount,
          queriesBeforeClick,
        }}
      >
        {this.props.children}
      </SearchState.Provider>
    );
  }
}

export default SearchStateProvider;
