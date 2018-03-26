// @flow
import Cookies from 'js-cookie';
import { Requester } from './Requests';

export const COOKIE_LOGIN_KEY = 'ua_session_token';
export const sessionToken = () => Cookies.get(COOKIE_LOGIN_KEY);

export async function doLogin(email: string, password: string) {
  try {
    const token = await Requester.login(email, password);
    Cookies.set(COOKIE_LOGIN_KEY, token, { path: '/', domain: null });
    return token;
  } catch (error) {
    console.error(error.message); //eslint-disable-line
    return '';
  }
}
export const getCookieToken = () => Cookies.get(COOKIE_LOGIN_KEY);
