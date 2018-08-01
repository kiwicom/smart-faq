// @flow

import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import { RawContentHeader } from '../Header';

describe('ContentHeader', () => {
  const props = {
    isLoggedIn: true,
    history: {
      entries: [],
      push: jest.fn(),
    },
    location: {
      pathname: '/content',
    },
    match: {
      params: {
        categoryId: '21',
      },
    },
  };
  it('should render loggedIn user header', () => {
    const wrapper = render(
      <Router>
        <RawContentHeader {...props} />
      </Router>,
    );
    expect(wrapper.find('.loggedIn')).toHaveLength(1);
    expect(wrapper.find('.signOut').text()).toEqual('Sign out');
    expect(wrapper).toMatchSnapshot();
  });
  it('should render loggedOut user header', () => {
    const propsWithoutUser = {
      ...props,
      isLoggedIn: false,
    };
    const wrapper = render(
      <Router>
        <RawContentHeader {...propsWithoutUser} />
      </Router>,
    );
    expect(wrapper.find('.backButton').text()).toEqual('Back');
    expect(wrapper.find('.loggedOut')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
