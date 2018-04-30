// @flow

/*  eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';

import App from './App';
import enLocale from '../i18n/en/translation.json';
import { Requester } from './helpers/Requests';
import type { User } from './types';

type Props = {||};

type State = {|
  user: User,
  loginToken: ?string,
|};

const user = {
  id: '1',
  email: 'joe.doe@example.com',
  firstname: 'Joe',
  lastname: 'Doe',
};

class Root extends React.Component<Props, State> {
  cookieKey: string;

  constructor(props) {
    super(props);

    this.cookieKey = 'mockedLogin';

    const loginToken = Cookies.get(this.cookieKey);
    this.state = {
      user: loginToken ? user : null,
      loginToken,
    };
  }

  onLogin = async (email, password) => {
    const loginToken = await Requester.login(email, password);
    this.setState({ user, loginToken });
    Cookies.set(this.cookieKey, loginToken);

    return Promise.resolve(user);
  };

  onLogout = async () => {
    this.setState({ user: null, loginToken: null });
    Cookies.remove(this.cookieKey);
  };

  render() {
    return (
      <div className="root">
        <App
          onClose={() => {}}
          onLogin={this.onLogin}
          onLogout={this.onLogout}
          language="en"
          locale={enLocale}
          user={this.state.user}
          loginToken={this.state.loginToken}
        />
        <style jsx global>
          {`
            .root {
              position: fixed;
              right: 0;
              top: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

(() => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');

  if (!document.body) {
    throw new Error('No browser?');
  }

  document.body.appendChild(root);

  const id = document.getElementById('root');

  if (!id) {
    throw new Error('Root element is missing!');
  }

  ReactDOM.render(<Root />, id);
})();
