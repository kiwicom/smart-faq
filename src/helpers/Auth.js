// @flow
import Cookies from 'js-cookie';
import { Requester } from './Requests';

export const sessionToken = () => Cookies.get('ua_session_token');

export async function doLogin(email: string, password: string) {
  const token = await Requester.login(email, password);
  Cookies.set('ua_session_token', token, { path: '/', domain: null });
  return token;
}
export const getCookieToken = () => JSON.parse(Cookies.get('ua_session_token'));
