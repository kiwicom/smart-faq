// @flow

import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Search } from '@kiwicom/orbit-components/lib/icons';
import { withRouter } from 'react-router-dom';

import Input from './../common/Input';
import FAQCategoryList from './FAQCategoryList';
import SearchAllFAQs from './SearchAllFAQs';

let searchText = '';

const style = css`
  .static-faq {
    width: 100%;
  }
  .static-faq-body {
    padding: 24px 40px;
  }

  @media only screen and (max-width: 1180px) {
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
  state = {
    searchText,
  };

  handleSearchChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    searchText = e.target.value;
    this.setState({ searchText });
  };

  handleCancelSearch = () => {
    searchText = '';
    this.setState({ searchText });
  };

  renderInput = (isSearching: number) => (
    <Input
      value={this.state.searchText}
      onChange={this.handleSearchChange}
      placeholder="What can we help you with?"
      icon={<Search customColor="#bac7d5" />}
      onReset={isSearching ? this.handleCancelSearch : undefined}
      dataCy="input-staticFAQ"
    />
  );

  render() {
    const categoryId = idx(this.props.match, _ => _.params.categoryId) || null;
    const { searchText } = this.state;
    const isSearching = searchText.length;
    return (
      <div className="static-faq">
        <div className="static-faq-body">
          <div className="static-faq-search">
            {!categoryId && this.renderInput(isSearching)}
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
  }
}

export default withRouter(StaticFAQ);
