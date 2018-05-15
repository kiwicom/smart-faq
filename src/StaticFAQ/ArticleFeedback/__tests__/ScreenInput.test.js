// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import ScreenInput from '../ScreenInput';

const ch = (sc: string) => {}; //eslint-disable-line

describe('ScreenInput', () => {
  const component = shallow(
    <ScreenInput changeScreen={ch} articleId="WE4rT" />,
  );
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
