// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import ScreenInitial from '../ScreenInitial';

const ch = (sc: string) => {}; //eslint-disable-line

describe('ScreenInitial', () => {
  const component = shallow(<ScreenInitial changeScreen={ch} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
