// @flow
import * as React from 'react';
import Cookies from 'js-cookie';
import css from 'styled-jsx/css';
import axios from 'axios';
import { Close, OpenInNew } from '@kiwicom/orbit-components/lib/icons';
import { Typography, Button } from '@kiwicom/orbit-components';
import image from '../../static/woman-with-laptop@2x.jpg';
import { allRoutes } from '../Routes';

const style = css`
  .BookingPage {
    width: 480px;
    padding-top: 128px;
  }
  hr.hr-line {
    margin: 56px 64px 22px 64px;
    height: 0;
    border: 0;
    border-top: 1px solid #e8edf1;
  }
  div.close-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 8px;
  }
`;

const endPoints = {
  apiUrl: 'https://api.skypicker.com',
  metaApiUrl: 'https://meta-searches.skypicker.com/search',
  authApiUrl: 'https://auth.skypicker.com',
  bookingApiUrl: 'https://booking-api.skypicker.com',
  mmbApiUrl: 'https://booking-api.skypicker.com',
};

type Props = {
  history: {
    push: string => void,
  },
};

const Requester = {
  allBookings: token =>
    axios({
      method: 'get',
      url: endPoints.bookingApiUrl + '/api/v0.1/users/self/bookings',
      params: {
        token: token,
      },
    }),
  login: (login, password) =>
    axios({
      method: 'post',
      url: endPoints.authApiUrl + '/v1/user.login',
      auth: {
        username: '5433ecccaff67',
        password: '',
      },
      data: {
        login,
        password,
      },
    }),
};

class BookingPage extends React.Component<{}, {}> {
  state = {
    bookings: [],
  };
  componentWillMount() {
    //Cookies.set(
    //  'ua_session_token',
    //  'WyJnUDVIdmdlVURmZlU4MVVjVWtBYW4xIiwiQzR0RzR1ZHk3dHdkbDBSeEpQbWFadUl1MnhSUS92NnhCTFJzSS51ZGhoMXAySTduRk5KQVciLDEwNzEzNzM3ODNd.LIaOSlkufG8KPbtpdGatnmur1-Q',
    //  { path: '/', domain: null },
    //);
    //console.log('AUTHURL', endPoints.authApiUrl + '/v1/user.login');
    Requester.login('tony@kiwi.com', 'Bflmpsvz').then(res =>
      Requester.allBookings(res.data.token).then(b => console.log('book', b)),
    );
    //axios({
    //  method: 'post',
    //  url: endPoints.authApiUrl + '/v1/user.login',
    //  data: {
    //    login: 'tony@kiwi.com',
    //    password: 'Bflmpsvz',
    //  },
    //}).then(res => {
    //  Cookies.set('ua_session_token', res.token, { path: '/', domain: null });
    //  axios({
    //    method: 'post',
    //    url: endPoints.bookingApiUrl + '/v0.1/users/self/bookings',
    //    params: {
    //      token: res.token,
    //    },
    //  }).then(res => {
    //    console.log('bookings res', res);
    //    //this.setState({})
    //  });
    //});
  }
  render() {
    return (
      <div className="BookingPage">
        <div className="close-icon">
          <Close fill="#7f91a8" size="32" />
        </div>
        <hr className="hr-line" />
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default BookingPage;
