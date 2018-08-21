// @flow

import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  children: React.Node,
|};

const ThemeProvider = ({ children }: Props) => (
  <OriginalThemeProvider theme={{ orbit: defaultTokens }}>
    {children}
  </OriginalThemeProvider>
);

export default ThemeProvider;
