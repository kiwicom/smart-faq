// @flow

import Cookies from 'js-cookie';
import { signIn } from './SessionActions';
import { COOKIE_LOGIN_KEY } from '../../helpers/Auth';
import store from '../';
import {
  goodEmail,
  goodPassword,
  defaultToken,
} from '../../../__mocks__/axios';

jest.mock('axios');
describe('SessionActions', () => {
  describe('signIn', () => {
    it('saves token to store and Cookies', async () => {
      expect(Cookies.get(COOKIE_LOGIN_KEY)).toBeUndefined();
      await store.dispatch(signIn(goodEmail, goodPassword));
      expect(Cookies.get(COOKIE_LOGIN_KEY)).toEqual(defaultToken);
      expect(store.getState().session.token).toEqual(defaultToken);
    });
  });
});
