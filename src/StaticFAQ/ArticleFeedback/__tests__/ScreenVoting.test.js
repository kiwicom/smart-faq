// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import ScreenVoting from '../ScreenVoting';

const ch = (sc: string) => {}; //eslint-disable-line

describe('ScreenVoting', () => {
  const component = shallow(<ScreenVoting changeScreen={ch} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
