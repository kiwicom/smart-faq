// @flow

import * as React from 'react';
import { mount } from 'enzyme';

import StaticFAQError from '../StaticFAQError';

describe('StaticFAQError', () => {
  it('should match snapshot', () => {
    const result = mount(<StaticFAQError />);
    expect(result).toMatchSnapshot();
  });
});
