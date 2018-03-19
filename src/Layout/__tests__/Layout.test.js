// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import Layout from '../';

describe('Layout', () => {
  const component = shallow(<Layout />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
