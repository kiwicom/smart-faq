// @flow
import * as React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '@kiwicom/orbit-components/lib/Theming/ThemeProvider';

import ErrorBoundary from '../ErrorBoundary';
import ComponentWithError from './helpers/ComponentWithError.ignore';

describe('ErrorBoundary', () => {
  it('should render normally', () => {
    const result = mount(
      <ThemeProvider>
        <ErrorBoundary>
          <h1>This is not an error</h1>
        </ErrorBoundary>
      </ThemeProvider>,
    );
    expect(result).toMatchSnapshot();
  });
  it('should throw an error', () => {
    const result = mount(
      <ThemeProvider>
        <ErrorBoundary>
          <ComponentWithError />
        </ErrorBoundary>
      </ThemeProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});
