// @flow

import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Search } from '@kiwicom/orbit-components/lib/icons';
import { withRouter } from 'react-router-dom';

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

  @media only screen and (min-width: 320px) and (max-width: 812px) {
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
  value: string,
|};

class StaticFAQ extends React.Component<Props, State> {
  state = {
    value: '',
  };

  handleSearchChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  handleCancelSearch = () => {
    this.setState({ value: '' });
  };

  renderInput = (isSearching: number) => (
    <Input
      value={this.state.value}
      onChange={this.handleSearchChange}
      placeholder="What can we help you with?"
      icon={<Search customColor="#bac7d5" />}
      onReset={isSearching ? this.handleCancelSearch : undefined}
    />
  );

  render() {
    const categoryId = idx(this.props.match, _ => _.params.categoryId) || null;
    const { value } = this.state;
    const isSearching = value.length;

    return (
      <div className="static-faq">
        <div className="static-faq-body">
          <div className="static-faq-search">
            {!categoryId && this.renderInput(isSearching)}
          </div>
          {isSearching ? (
            <SearchAllFAQs search={value} />
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
