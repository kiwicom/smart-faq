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
    height: 100%;
  }
  .static-faq-body {
    height: 100%;
    padding: 24px 40px;
  }

  @media only screen and (max-width: 1180px) {
    .static-faq-body {
      padding: 0;
    }
    .static-faq-search {
      padding: 16px;
      background-color: #f5f7f9;
    }
  }
`;

type Props = {|
  match: {
    params: {
      categoryId: ?string,
    },
  },
  searchText: string,
  isVisible: boolean,
  onSearchChange: (e: SyntheticInputEvent<HTMLInputElement>) => void,
  onSearchCancel: () => void,
|};

const StaticFAQRaw = (props: Props) => {
  const categoryId = idx(props.match, _ => _.params.categoryId) || null;
  const { isVisible, searchText, onSearchChange, onSearchCancel } = props;
  const isSearching = searchText.length > 0;

  return (
    <div className="static-faq">
      <div className="static-faq-body">
        {!categoryId && isVisible ? (
          <div className="static-faq-search">
            <Input
              value={searchText}
              onChange={onSearchChange}
              placeholder="What can we help you with?"
              icon={<Search customColor="#bac7d5" />}
              onReset={isSearching ? onSearchCancel : undefined}
              dataCy="input-staticFAQ"
            />
          </div>
        ) : null}
        {isSearching ? (
          <SearchAllFAQs search={searchText} />
        ) : (
          <FAQCategoryList categoryId={categoryId} />
        )}
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default withRouter(StaticFAQRaw);
