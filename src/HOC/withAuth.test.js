// @flow
import * as React from 'react';
import Cookies from 'js-cookie';
import { mount } from 'enzyme';
import { COOKIE_LOGIN_KEY } from '../helpers/Auth';
import store from '../store';
import withAuth from './withAuth';

const loginToken = 'randomToken';

describe('withAuth', () => {
  it('should match snapshot', () => {
    const Decorated = withAuth(() => <div>Dummy</div>);
    const component = mount(<Decorated store={store} />);
    expect(component).toMatchSnapshot();
  });
  it('loads session from Cookies', () => {
    Cookies.set(COOKIE_LOGIN_KEY, loginToken);
    expect(store.getState().session.token).toBeFalsy();
    const DecoratedCookie = withAuth(() => <div>Dummy</div>);
    const SessionComponent = mount(<DecoratedCookie store={store} />);
    expect(store.getState().session.token).toEqual(loginToken);
    expect(SessionComponent).toMatchSnapshot();
  });
});
