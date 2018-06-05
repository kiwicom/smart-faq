// @flow

import * as React from 'react';

const initialState = {
  searchText: '',
};

type Props = {
  children: React.Node,
};

export type State = {
  searchText: string,
};

export type SearchStateType = State & {
  changeSearchText: (searchText: string) => void,
};

export const SearchState = React.createContext({
  ...initialState,
  changeSearchText: (text: string) => {}, // eslint-disable-line no-unused-vars
});

class SearchStateProvider extends React.Component<Props, State> {
  state = initialState;

  changeSearchText = (searchText: string) => {
    this.setState({ searchText });
  };

  render() {
    const { searchText } = this.state;

    return (
      <SearchState.Provider
        value={{
          searchText,
          changeSearchText: this.changeSearchText,
        }}
      >
        {this.props.children}
      </SearchState.Provider>
    );
  }
}

export default SearchStateProvider;
