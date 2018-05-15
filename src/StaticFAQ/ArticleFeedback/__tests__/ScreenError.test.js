// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import ScreenError from '../ScreenError';

const ch = (sc: string) => { }; //eslint-disable-line

describe('ScreenError', () => {
  const component = shallow(<ScreenError changeScreen={ch} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
