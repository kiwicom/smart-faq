// @flow

/*  eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import initTranslation from './initTranslation';
import { CloseContext } from './context/Close';
import { LanguageContext } from './context/Language';
import { UserContext } from './context/User';
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

const language = 'en';

class Root extends React.Component<Props, State> {
  cookieKey: string;
  i18n: {};
  constructor(props) {
    super(props);

    this.cookieKey = 'mockedLogin';
    this.i18n = initTranslation(language, enLocale);

    const loginToken = Cookies.get(this.cookieKey);
    this.state = {
      user: loginToken ? user : null,
      loginToken,
    };
  }

  onClose = () => {};

  onLogin = async (email: string, password: string): Promise<*> => {
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
        <I18nextProvider i18n={this.i18n}>
          <LanguageContext.Provider value={language}>
            <CloseContext.Provider value={this.onClose}>
              <UserContext.Provider
                value={{
                  user: this.state.user,
                  onLogin: this.onLogin,
                  onLogout: this.onLogout,
                  loginToken: this.state.loginToken,
                }}
              >
                <App />
              </UserContext.Provider>
            </CloseContext.Provider>
          </LanguageContext.Provider>
        </I18nextProvider>

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
