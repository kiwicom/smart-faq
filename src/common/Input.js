// @flow

import * as React from 'react';
import { CloseCircle } from '@kiwicom/orbit-components/lib/icons';

type Props = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => any,
  type?: string,
  name?: string,
  required?: boolean,
  placeholder?: string,
  icon?: React.Node,
  onReset?: (SyntheticEvent<HTMLButtonElement>) => any,
  error?: string,
  dataCy?: string,
};

const InputText = (props: Props) => (
  <div className="wrapper">
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.required}
      data-cy={props.dataCy}
    />
    {props.icon && <div className="inputIcon">{props.icon}</div>}
    {props.onReset && (
      <button onClick={props.onReset} data-cy="btn-reset-input">
        <CloseCircle size="small" customColor="#bac7d5" />
      </button>
    )}
    <style jsx>
      {`
        .wrapper {
          position: relative;
        }
        .inputIcon {
          position: absolute;
          top: 10px;
          left: 12px;
        }
        button {
          border: none;
          position: absolute;
          background-color: white;
          top: 14px;
          right: 16px;
          cursor: pointer;
        }
        input {
          box-sizing: border-box;
          width: 100%;
          height: 44px;
          border-radius: 3px;
          color: #46515e;
          background-color: white;
          border: solid 1px ${props.error ? '#d02228' : '#bac7d5'};
          font-size: 16px;
          line-height: 1.25;
          padding: 12px 16px;
          padding-left: ${props.icon ? 44 : 16}px;
        }
        input::placeholder {
          color: #bac7d5;
        }
      `}
    </style>
  </div>
);

export default InputText;
