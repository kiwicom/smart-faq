// @flow
import React from 'react';
import ContentLoader from 'react-content-loader';

const BookingLoader = () => (
  <ContentLoader
    speed={1}
    height={400}
    primaryColor="#e8edf1"
    secondaryColor="#d9dee2"
  >
    <rect x="30" y="30" rx="4" ry="4" width="150" height="13" />
    <rect x="280" y="30" rx="4" ry="4" width="100" height="13" />
    <rect x="30" y="55" rx="4" ry="4" width="200" height="20" />
    <rect x="30" y="110" rx="4" ry="4" width="350" height="50" />
    <rect x="30" y="200" rx="4" ry="4" width="350" height="50" />
    <rect x="140" y="270" rx="4" ry="4" width="120" height="25" />
  </ContentLoader>
);

export default BookingLoader;
