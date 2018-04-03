// @flow

import { Requester } from './Requests';
import {
  goodEmail,
  goodPassword,
  defaultToken,
} from '../../__mocks__/constants';

jest.mock('isomorphic-fetch');

describe('Requester', () => {
  describe('login', () => {
    it('returns OK with Token', async () => {
      const response = await Requester.login(goodEmail, goodPassword);
      expect(response).toEqual(defaultToken);
    });
    it('returns OK with error', async () => {
      try {
        await Requester.login('bademail@asd.la', '1233');
      } catch (e) {
        expect(e).toHaveProperty('message');
        expect(e).not.toHaveProperty('token');
      }
    });
  });
});
