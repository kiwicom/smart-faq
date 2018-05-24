// @flow

import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import { RawContentHeader } from '../index';

describe('ContentHeader', () => {
  const user = {
    id: '3',
    email: 'email@kiwi.com',
    firstname: 'MyName',
    lastname: 'This is my name',
  };
  const props = {
    user,
    history: {
      entries: [],
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
      user: null,
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
