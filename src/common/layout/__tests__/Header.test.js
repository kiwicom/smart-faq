// @flow

import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import { UserContext } from '../../../context/User';
import { RawContentHeader } from '../Header';

describe('ContentHeader', () => {
  const props = {
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

  const user = {
    user: {
      id: '1',
      email: 'joe.doe@example.com',
      firstname: 'Joe',
      lastname: 'Doe',
    },
    loginToken: 'AAAABBBBCCCC',
    simpleToken: null,
    onLogin: jest.fn(),
    onSocialLogin: jest.fn(),
  };

  it('should render loggedIn user header', () => {
    const wrapper = render(
      <UserContext.Provider value={user}>
        <Router>
          <RawContentHeader {...props} />
        </Router>
      </UserContext.Provider>,
    );
    expect(wrapper.find('.loggedIn')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loggedOut user header', () => {
    const wrapper = render(
      <Router>
        <RawContentHeader {...props} />
      </Router>,
    );
    expect(wrapper.find('.backButton').text()).toEqual('Back');
    expect(wrapper.find('.loggedOut')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
