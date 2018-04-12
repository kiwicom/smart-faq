// @flow

import { loginEndpoint, socialLoginEndpoint } from '../src/helpers/Requests';
import {
  goodEmail,
  goodPassword,
  defaultToken,
  defaultUserId,
  goodPayload,
} from './constants';

const makeResponse = (status = 200, statusText = 'OK', data = {}) => ({
  json: () => data,
  status,
  statusText,
  headers: {},
  config: {},
});

export default function fetch(url: string, obj: Object): Promise<Object> {
  if (url === loginEndpoint) {
    const { login, password } = JSON.parse(obj.body);
    if (login === goodEmail && password === goodPassword) {
      return Promise.resolve(
        makeResponse(200, 'OK', {
          token: defaultToken,
          user_id: defaultUserId,
        }),
      );
    } else {
      return Promise.resolve(
        makeResponse(200, 'OK', {
          error_code: 'INVALID_ARGUMENT_LOGIN',
          message: 'Invalid email address provided.',
        }),
      );
    }
  } else if (url === socialLoginEndpoint) {
    const payload = JSON.parse(obj.body);
    if (JSON.stringify(payload) === JSON.stringify(goodPayload)) {
      return Promise.resolve(
        makeResponse(200, 'OK', {
          authorization_url: 'https://www.kiwi.com/en/?user_id=AAABBBCCC',
        }),
      );
    } else {
      return Promise.resolve(
        makeResponse(200, 'OK', {
          error_code: 'INVALID_ARGUMENT_IN_PAYLOAD',
          message: 'Invalid payload argument.',
        }),
      );
    }
  }
  return Promise.resolve({});
}
