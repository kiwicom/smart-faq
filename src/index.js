// @flow

/*  eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import Raven from 'raven-js';
import KeenTracking from 'keen-tracking';

import App from './App';
import enLocale from '../i18n/en/translation.json';
import { socialLogin } from './helpers/Auth';
import { Requester } from './helpers/Requests';
import type { User } from './types';
import { type LogEvent, type EventPayload } from './helpers/analytics/cuckoo';

type Props = {||};

type State = {|
  user: User,
  loginToken: ?string,
  open: boolean,
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

    const loc = window.location;
    const params = new URLSearchParams(loc.search);
    if (!params.toString()) {
      params.set('help', '/');
      window.history.replaceState(
        {},
        '',
        `${loc.pathname}?${params.toString()}`,
      );
    }

    this.setupLogs();
    this.setupTracker();

    this.state = {
      user: loginToken ? user : null,
      loginToken,
      open: true,
    };
  }
  setupTracker = () => {
    const keen = new KeenTracking({
      projectId: process.env.KEENIO_PROJECTID,
      writeKey: process.env.KEENIO_WRITEKEY,
    });
    const stagingCuckoo = {
      infinario: (eventName: LogEvent, payload: EventPayload) => {
        console.info('Event recorded to KeenIO',eventName, payload); //eslint-disable-line
        keen.recordEvent(eventName, payload);
      },
    };
    window.cuckoo = stagingCuckoo;
  };
  setupLogs = () => {
    if (
      process.env.NODE_ENV === 'production' &&
      process.env.SENTRY_URL_STAGING
    ) {
      window.Raven = Raven;
      Raven.config(process.env.SENTRY_URL_STAGING).install();
    }
  };
  onLogin = async (email, password) => {
    const loginToken = await Requester.login(email, password);
    this.setState({ user, loginToken });
    Cookies.set(this.cookieKey, loginToken);

    return Promise.resolve(user);
  };

  onSocialLogin = async provider => {
    const authUrl = await socialLogin(provider);

    if (!authUrl) {
      return;
    }

    window.location = authUrl;
  };

  onLogout = async () => {
    this.setState({ user: null, loginToken: null });
    Cookies.remove(this.cookieKey);
  };
  toggleApp = () => {
    const isOpen = this.state.open;
    const loc = window.location;
    const params = new URLSearchParams(loc.search);
    if (!this.state.open) {
      params.set('help', '/');
      window.history.replaceState(
        {},
        '',
        `${loc.pathname}?${params.toString()}`,
      );
    } else {
      window.history.replaceState({}, '', `${loc.pathname}`);
    }

    this.setState({ open: !isOpen });
  };
  closeApp = () => {
    this.setState({ open: false });
  };

  render() {
    const language = 'en';
    const { open } = this.state;
    const loc = window.location;
    const params = new URLSearchParams(loc.search).toString();
    return (
      <div className="root">
        <div
          className="toggler"
          onKeyUp={() => {}}
          role="button"
          tabIndex="-1"
          onClick={this.toggleApp}
        >
          Toggle SmartFAQ
        </div>
        <div className={`faqContainer ${open ? 'show' : ''}`}>
          <App
            onClose={this.closeApp}
            onLogin={this.onLogin}
            onSocialLogin={this.onSocialLogin}
            onLogout={this.onLogout}
            language={language}
            locale={enLocale}
            user={this.state.user}
            loginToken={this.state.loginToken}
            initialRoute={params}
          />
        </div>
        <style jsx global>
          {`
            body {
              background: rgba(0, 0, 0, 0.5);
            }
            .root {
              position: fixed;
              right: 0;
              top: 0;
            }
            .toggler {
              position: fixed;
              top: 20px;
              left: 20px;
              cursor: pointer;
              color: white;
              border: 3px solid green;
              padding: 5px;
              outline: none;
              background: green;
            }
            .faqContainer {
              opacity: 0;
            }
            .show {
              opacity: 1;
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
