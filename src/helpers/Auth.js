// @flow
import Cookies from 'js-cookie';
import { Requester } from './Requests';

export const COOKIE_LOGIN_KEY = 'ua_session_token';
export const getSessionToken = () => Cookies.get(COOKIE_LOGIN_KEY);

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

export async function socialLogin(provider: string) {
  const location = window.location.href.replace(
    /((utm_[a-z]+)|(session_[a-z]+))=[^&]+(&|$)/g,
    '',
  );
  const redirectUrl = `${location}${
    location.includes('?') ? '&' : '?'
  }oauth-login=true`
    .replace(/,/g, '%2C')
    .replace(/~/g, '%7E');

  const USER_APP_ID = process.env.KIWILOGIN_USER;
  const payload = {
    provider_id: provider,
    app_id: USER_APP_ID,
    redirect_url: redirectUrl,
  };
  try {
    return await Requester.socialLogin(payload);
  } catch (error) {
    console.error(error.message); //eslint-disable-line
    return;
  }
}
