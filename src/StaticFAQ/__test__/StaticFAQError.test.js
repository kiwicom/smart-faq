// @flow

import * as React from 'react';
import { render } from 'enzyme';

import StaticFAQError from '../StaticFAQError';

describe('StaticFAQError', () => {
  it('should match snapshot', () => {
    const result = render(<StaticFAQError />);
    expect(result).toMatchSnapshot();
  });
});
