// @flow

import * as React from 'react';

import Spinner from '../../static/images/spinner@2x.png';

const Loader = () => (
  <div className="wrapper">
    <img className="spinner" src={Spinner} alt="Loading" />
    <style jsx>
      {`
        div.wrapper {
          display:flex;
          flex: 1;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        .spinner {
          width:140px;
          animation: spin 1.5s linear infinite;
          @keyframes spin {
            0% { transform rotate(0deg); }
            100% { transform rotate(359deg); }
        }
      `}
    </style>
  </div>
);

export default Loader;
