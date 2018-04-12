// @flow

import { Requester } from './Requests';
import {
  goodEmail,
  goodPassword,
  defaultToken,
  goodPayload,
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
  describe('social login', () => {
    it('returns a redirect link', async () => {
      const response = await Requester.socialLogin(goodPayload);
      const kiwiLink = response.includes('kiwi.com');
      expect(kiwiLink).toBeTruthy();
    });
    it('returns OK with error', async () => {
      const badPayload = {
        provider_id: 'google',
        app_id: 'QWERTY',
        redirect_url: 'localhost:8080',
      };
      try {
        await Requester.socialLogin(badPayload);
      } catch (e) {
        expect(e).toHaveProperty('message');
      }
    });
  });
});
