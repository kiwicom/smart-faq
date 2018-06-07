// @flow

import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Search } from '@kiwicom/orbit-components/lib/icons';
import { withRouter } from 'react-router-dom';

import { SearchState, type SearchStateType } from '../context/SearchState';
import Input from './../common/Input';
import FAQCategoryList from './FAQCategoryList';
import SearchAllFAQs from './SearchAllFAQs';

const style = css`
  .static-faq {
    width: 100%;
  }
  .static-faq-body {
    padding: 24px 40px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .static-faq-body {
      padding: 0;
    }
    .static-faq-search {
      margin: 16px;
    }
  }
`;

type Props = {|
  match: {
    params: {
      categoryId: ?string,
    },
  },
|};

type State = {|
  searchText: string,
|};

class StaticFAQ extends React.Component<Props, State> {
  changeSearchText = (text: string) => {}; // eslint-disable-line no-unused-vars
  handleSearchChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.changeSearchText(e.target.value);
  };
  handleCancelSearch = () => {
    this.changeSearchText('');
  };

  renderInput = (searchText: string) => {
    const isSearching = searchText.length > 0;
    return (
      <Input
        value={searchText}
        onChange={this.handleSearchChange}
        placeholder="What can we help you with?"
        icon={<Search customColor="#bac7d5" />}
        onReset={isSearching ? this.handleCancelSearch : undefined}
        dataCy="input-staticFAQ"
      />
    );
  };

  render() {
    const categoryId = idx(this.props.match, _ => _.params.categoryId) || null;

    return (
      <SearchState.Consumer>
        {({ searchText, changeSearchText }: SearchStateType) => {
          this.changeSearchText = changeSearchText;

          const isSearching = searchText.length > 0;
          return (
            <div className="static-faq">
              <div className="static-faq-body">
                <div className="static-faq-search">
                  {!categoryId && this.renderInput(searchText)}
                </div>
                {isSearching ? (
                  <SearchAllFAQs search={searchText} />
                ) : (
                  <FAQCategoryList categoryId={categoryId} />
                )}
              </div>
              <style jsx>{style}</style>
            </div>
          );
        }}
      </SearchState.Consumer>
    );
  }
}

export default withRouter(StaticFAQ);
