// @flow

import * as React from 'react';
import { render } from 'enzyme';
import ThemeProvider from '@kiwicom/orbit-components/lib/Theming/ThemeProvider';

import StaticFAQError from '../StaticFAQError';

describe('StaticFAQError', () => {
  it('should match snapshot', () => {
    const result = render(
      <ThemeProvider>
        <StaticFAQError />
      </ThemeProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});
