// @flow

import * as React from 'react';
import { render } from 'enzyme';

import ScreenError from '../ScreenError';

const ch = (sc: string) => {}; //eslint-disable-line

describe('ScreenError', () => {
  const component = render(<ScreenError changeScreen={ch} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
