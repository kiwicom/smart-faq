// @flow

import * as React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import KiwiLogin from '../';

describe('KiwiLogin', () => {
  const mockStore = configureStore();
  const store = mockStore({});

  const component = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <KiwiLogin store={store} />
    </MemoryRouter>,
  );
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
