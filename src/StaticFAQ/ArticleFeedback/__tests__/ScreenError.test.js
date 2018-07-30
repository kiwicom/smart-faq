// @flow

import * as React from 'react';
import { render } from 'enzyme';
import ThemeProvider from '@kiwicom/orbit-components/lib/Theming/ThemeProvider';

import ScreenError from '../ScreenError';

const ch = (sc: string) => {}; //eslint-disable-line

describe('ScreenError', () => {
  const component = render(
    <ThemeProvider>
      <ScreenError changeScreen={ch} />
    </ThemeProvider>,
  );
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
