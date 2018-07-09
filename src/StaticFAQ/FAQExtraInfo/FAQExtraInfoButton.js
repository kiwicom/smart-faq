// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { withRouter } from 'react-router-dom';

import {
  ExtraInfoState,
  type ExtraInfoStateType,
  type ExtraInfoCategory,
} from '../../context/ExtraInfoState';

type Props = {|
  children?: React.Node,
  category: ExtraInfoCategory,
  categoryId: string,
  history: {
    push: string => void,
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

const FAQExtraInfoButton = ({
  category,
  categoryId,
  children,
  history,
}: Props) => (
  <React.Fragment>
    <ExtraInfoState.Consumer>
      {({
        activeExtraInfoCategory,
        toggleExtraInfoCategory,
      }: ExtraInfoStateType) => (
        <button
          className={`extraInfoRadioButton ${
            activeExtraInfoCategory === category ? 'active' : ''
          }`}
          onClick={() => {
            toggleExtraInfoCategory(category);
            if (activeExtraInfoCategory) {
              history.push('');
            } else {
              history.push(`/faq/${categoryId}`);
            }
          }}
        >
          {children}
        </button>
      )}
    </ExtraInfoState.Consumer>
    <style jsx>{styles}</style>
  </React.Fragment>
);

export default withRouter(FAQExtraInfoButton);
