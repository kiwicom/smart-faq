// @flow
import fetch from 'isomorphic-fetch';

export const endPoints = {
  authApiUrl: 'https://auth.skypicker.com',
};
export const loginEndpoint = endPoints.authApiUrl + '/v1/user.login';
const USER = process.env.KIWILOGIN_USER || '';

export const Requester = {
  login: (login: string, password: string) =>
    fetch(loginEndpoint, {
      method: 'post',
      headers: {
        Authorization: 'Basic ' + window.btoa(`${USER}:`),
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
    })
      .then(r => r.json())
      .then(r => (r.token ? r.token : Promise.reject(r))),
  resetPassword: (email: string) =>
    fetch(endPoints.authApiUrl + '/v1/user.resetPassword', {
      method: 'post',
      headers: {
        Authorization: 'Basic ' + window.btoa(`${USER}:`),
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        login: email,
      }),
    }),
};
