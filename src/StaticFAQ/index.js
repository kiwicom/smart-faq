// @flow

import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import FAQCategoryList from './FAQCategoryList';
import SearchAllFAQs from './SearchAllFAQs';
import { SearchState } from '../context/SearchState';
import type { SearchStateType } from '../context/SearchState';
import SearchBar from './SearchBar';
import { withLoginToken, withSimpleToken } from '../context/User';
import { BookingState } from '../context/BookingState';

const style = css`
  .static-faq {
    width: 100%;
    height: 100%;
  }
  .static-faq-body {
    height: 100%;
    padding: 24px 40px;
  }

  @media only screen and (max-width: 900px) {
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
  loginToken: ?string,
  simpleToken: ?string,
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

const StaticFAQ = (props: Props) => {
  const categoryId = idx(props.match, _ => _.params.categoryId) || null;
  const isLoggedIn = props.loginToken || props.simpleToken;

  return (
    <SearchState.Consumer>
      {({ searchText, isVisible }: SearchStateType) => (
        <BookingState.Consumer>
          {({ showBooking }) => {
            const isSearching = searchText.length > 0;

            return (
              <div className="static-faq">
                <div className="static-faq-body">
                  {!categoryId && isVisible ? (
                    <div className="static-faq-search">
                      {!isLoggedIn || !showBooking ? <SearchBar /> : null}
                      <MediaQuery query="only screen and (max-width: 900px)">
                        {isLoggedIn && showBooking && <SearchBar />}
                      </MediaQuery>
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
          }}
        </BookingState.Consumer>
      )}
    </SearchState.Consumer>
  );
};

export default withLoginToken(withSimpleToken(withRouter(StaticFAQ)));
