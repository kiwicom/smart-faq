// @flow

import * as React from 'react';
import Spinner from '../../static/spinner@2x.png';

const Loader = () => (
  <div className="wrapper">
    <img className="spinner" src={Spinner} alt="Loading" />
    <style jsx>
      {`
        div.wrapper {
          text-align: center;
        }
        .spinner {
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
