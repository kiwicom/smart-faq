// @flow

import * as React from 'react';
import MediaQuery from 'react-responsive';

type Props = {|
  children: React.Node,
|};

const breakPoint = 900;

export const Desktop = ({ children }: Props) => (
  <MediaQuery query={`screen and (min-width: ${breakPoint + 1}px)`}>
    {children}
  </MediaQuery>
);

export const Mobile = ({ children }: Props) => (
  <MediaQuery query={`screen and (max-width: ${breakPoint}px)`}>
    {children}
  </MediaQuery>
);
