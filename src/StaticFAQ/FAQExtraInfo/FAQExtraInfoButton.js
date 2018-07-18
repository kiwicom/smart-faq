// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { withRouter } from 'react-router-dom';

import { SearchState, type SearchStateType } from '../../context/SearchState';
import {
  ExtraInfoState,
  categories,
  type ExtraInfoStateType,
  type ExtraInfoCategory,
} from '../../context/ExtraInfoState';

type Props = {|
  children?: React.Node,
  category: ExtraInfoCategory,
  categoryId: string,
  history: {
    push: string => void,
    location: {
      pathname: string,
    },
  },
|};

const styles = css`
  button.extraInfoRadioButton {
    padding: 0 12px;
    height: 44px;
    border-radius: 3px;
    background-color: #f5f7f9;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 24px;
  }
  button.active {
    background-color: #e8edf1;
  }
`;

const FAQExtraInfoButton = ({ category, children, history }: Props) => {
  return (
    <React.Fragment>
      <SearchState.Consumer>
        {({ changeSearchText }: SearchStateType) => (
          <ExtraInfoState.Consumer>
            {({
              activeExtraInfoCategory,
              setExtraInfoCategory,
            }: ExtraInfoStateType) => {
              const categoryId =
                category === 'baggage'
                  ? categories.BAGGAGE
                  : categories.BOARDING_PASS;
              const isActive =
                activeExtraInfoCategory === category &&
                history.location.pathname.includes(`/faq/${categoryId}`);
              const activate = () => {
                setExtraInfoCategory(category);
                history.push(`/faq/${categoryId}`);
                changeSearchText('');
              };
              const deactivate = () => {
                setExtraInfoCategory(null);
                history.push('/');
              };

              return (
                <button
                  className={`extraInfoRadioButton ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (isActive) {
                      deactivate();
                    } else {
                      activate();
                    }
                  }}
                >
                  {children}
                </button>
              );
            }}
          </ExtraInfoState.Consumer>
        )}
      </SearchState.Consumer>
      <style jsx>{styles}</style>
    </React.Fragment>
  );
};

export default withRouter(FAQExtraInfoButton);
