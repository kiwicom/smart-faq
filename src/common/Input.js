// @flow

import * as React from 'react';

type Props = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => any,
  placeholder?: string,
  icon?: React.Node,
  error?: string,
};

const InputText = (props: Props) => (
  <div className="wrapper">
    <input
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
    {props.icon && <div className="inputIcon">{props.icon}</div>}
    <style jsx>
      {`
        .wrapper {
          position: relative;
        }
        .inputIcon {
          position: absolute;
          top: 13px;
          left: 15px;
        }
        input {
          box-sizing: border-box;
          width: 100%;
          border-radius: 3px;
          background-color: white;
          border: solid 1px ${props.error ? '#d02228' : '#bac7d5'};
          font-size: 16px;
          line-height: 1.25;
          padding: 12px 16px;
          padding-left: ${props.icon ? 44 : 16}px;
        }
      `}
    </style>
  </div>
);

export default InputText;
