// @flow

import * as React from 'react';
import MediaQuery from 'react-responsive';

type Props = {|
  children: React.Node,
|};

const createMediaQuery = (mediaQuery: string) => {
  const MediaQueryComponent = ({ children }: Props) => (
    <MediaQuery query={mediaQuery}>{children}</MediaQuery>
  );

  return MediaQueryComponent;
};

const breakPoint = 900;

export const Desktop = createMediaQuery(
  `screen and (min-width: ${breakPoint + 1}px)`,
);
export const Mobile = createMediaQuery(
  `screen and (max-width: ${breakPoint}px)`,
);
