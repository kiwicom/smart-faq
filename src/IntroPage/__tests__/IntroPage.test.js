// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import { PureIntro } from '../index';
import { user } from '../../helpers/defaultTestProps';

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
