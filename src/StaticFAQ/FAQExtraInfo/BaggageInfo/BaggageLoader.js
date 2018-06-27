// @flow
import React from 'react';
import ContentLoader from 'react-content-loader';

const BaggageLoader = () => (
  <div className="baggageRow">
    <ContentLoader
      height={30}
      width={500}
      speed={1}
      primaryColor="#e8edf1"
      secondaryColor="#d9dee2"
    >
      <rect x="0" y="12" rx="0" ry="0" width="25" height="18" />
      <rect x="40" y="12" rx="0" ry="0" width="130" height="18" />
      <rect x="470" y="12" rx="0" ry="0" width="70" height="18" />
    </ContentLoader>
    <style jsx>
      {`
        div.baggageRow {
          padding: 15px 24px 15px 24px;
        }
      `}
    </style>
  </div>
);

export default BaggageLoader;
