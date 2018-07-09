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
    location: {
      pathname: {
        includes: string => boolean,
      },
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

const FAQExtraInfoButton = ({
  category,
  categoryId,
  children,
  history,
}: Props) => {
  return (
    <React.Fragment>
      <ExtraInfoState.Consumer>
        {({
          activeExtraInfoCategory,
          setExtraInfoCategory,
        }: ExtraInfoStateType) => {
          const isActive =
            activeExtraInfoCategory === category &&
            history.location.pathname.includes(`/faq/${categoryId}`);
          const activate = () => {
            setExtraInfoCategory(category);
            history.push(`/faq/${categoryId}`);
          };
          const desactivate = () => {
            setExtraInfoCategory('');
            history.push('/');
          };

          return (
            <button
              className={`extraInfoRadioButton ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (isActive) {
                  desactivate();
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
      <style jsx>{styles}</style>
    </React.Fragment>
  );
};

export default withRouter(FAQExtraInfoButton);
