// @flow

import * as React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import ContentHeader from '../';

describe.skip('ContentHeader', () => {
  // To be run when this is merged https://github.com/airbnb/enzyme/issues/1620
  it('when session exists should match snapshot', () => {
    const component = mount(
      <Router>
        <ContentHeader token="hola" />
      </Router>,
    );
    expect(component).toMatchSnapshot();
  });
  it('when no session should match snapshot', () => {
    const component = mount(
      <Router>
        <ContentHeader />
      </Router>,
    );
    expect(component).toMatchSnapshot();
  });
});
