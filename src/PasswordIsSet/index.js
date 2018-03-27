// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Typography, Button } from '@kiwicom/orbit-components';
import routeDefinitions from '../routeDefinitions';
import CloseIcon from '../common/CloseIcon';

const style = css`
  .PasswordIsSet {
    width: 480px;
    padding-top: 422px;
  }
  div.text {
    margin: 0px 40px 32.4px 40px;
  }
  p.title {
    color: #171b1e;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  span.button {
    margin-left: 40px;
  }
`;

type Props = {
  history: {
    push: string => void,
  },
};

const PasswordIsSet = (props: Props) => (
  <div className="PasswordIsSet">
    <CloseIcon />
    <div className="text">
      <p className="title">Your password has been set</p>
      <Typography type="secondary">You can now sign in.</Typography>
    </div>
    <span className="button">
      <Button
        isDisabled={false}
        onClick={() => {
          props.history.push(routeDefinitions.KIWI_LOGIN);
        }}
        size="large"
        title="Sign In"
        type="primary"
      />
    </span>
    <style jsx>{style}</style>
  </div>
);

export default PasswordIsSet;
