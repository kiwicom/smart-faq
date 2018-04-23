// @flow

import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Magnify } from '@kiwicom/orbit-components/lib/icons';
import { withRouter } from 'react-router-dom';

import Input from './../common/Input';
import { LanguageContext } from '../context/Language';
import FAQCategoryList from './FAQCategoryList';
import SearchAllFAQs from './SearchAllFAQs';

const style = css`
  .static-faq {
    width: 480px;
  }
  .static-faq-body {
    padding: 24px 40px;
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
      icon={<Magnify />}
      onReset={isSearching ? this.handleCancelSearch : undefined}
    />
  );

  render() {
    const categoryId = idx(this.props.match, _ => _.params.categoryId) || null;
    const { value } = this.state;
    const isSearching = value.length;

    return (
      <LanguageContext.Consumer>
        {language => (
          <div className="static-faq">
            <div className="static-faq-body">
              {!categoryId && this.renderInput(isSearching)}
              {isSearching ? (
                <SearchAllFAQs search={value} language={language} />
              ) : (
                <FAQCategoryList categoryId={categoryId} language={language} />
              )}
            </div>
            <style jsx>{style}</style>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default withRouter(StaticFAQ);
