// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import ForgottenPasword from '../';

describe('ForgottenPasword', () => {
  const component = shallow(<ForgottenPasword />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
