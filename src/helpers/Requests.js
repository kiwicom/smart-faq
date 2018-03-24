// @flow
import axios from 'axios';

export const endPoints = {
  apiUrl: 'https://api.skypicker.com',
  metaApiUrl: 'https://meta-searches.skypicker.com/search',
  authApiUrl: 'https://auth.skypicker.com',
  bookingApiUrl: 'https://booking-api.skypicker.com',
  mmbApiUrl: 'https://booking-api.skypicker.com',
};
export const loginEndpoint = endPoints.authApiUrl + '/v1/user.login';
const USER = process.env.KIWILOGIN_USER;

export const Requester = {
  allBookings: (token: string) =>
    axios({
      method: 'get',
      url: endPoints.bookingApiUrl + '/api/v0.1/users/self/bookings',
      params: {
        token: token,
      },
    }).then(r => r.data),
  login: (login: string, password: string) =>
    axios({
      method: 'post',
      url: loginEndpoint,
      auth: {
        username: USER,
        password: '',
      },
      data: {
        login,
        password,
      },
    }).then(r => (r.data.token ? r.data.token : Promise.reject(r.data))),
};
