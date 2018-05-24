// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import { PureIntro } from '../index';

const user = {
  id: '3',
  email: 'email@kiwi.com',
  firstname: 'MyName',
  lastname: 'This is my name',
};

describe('IntroPage', () => {
  const props = {
    user,
    history: {
      push: jest.fn(),
    },
  };
  it('should match snapshot', () => {
    const wrapper = shallow(<PureIntro {...props} />);
    expect(wrapper).toMatchSnapshot('<IntroPage />');
  });
});
