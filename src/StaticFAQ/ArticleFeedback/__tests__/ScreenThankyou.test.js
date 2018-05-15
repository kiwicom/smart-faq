// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import ScreenThankyou from '../ScreenThankyou';

const ch = (sc: string) => {}; //eslint-disable-line

describe('ScreenThankyou', () => {
  const component = shallow(<ScreenThankyou changeScreen={ch} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
