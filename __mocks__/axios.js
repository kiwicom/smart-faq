// @flow

import { loginEndpoint } from '../src/helpers/Requests';

const makeResponse = (status = 200, statusText = 'OK', data = {}) => ({
  data,
  status,
  statusText,
  headers: {},
  config: {},
});
export const defaultToken = 'blablablaWWW';
export const defaultUserId = 'user2344';
export const goodEmail = 'email@hola.com';
export const goodPassword = 'goodPass';

export default function axios(obj: Object): Promise<Object> {
  if (obj.url === loginEndpoint) {
    const { login, password } = obj.data;
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
  }
  return Promise.resolve({});
}
