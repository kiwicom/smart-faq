// @flow

/*  eslint-disable import/no-extraneous-dependencies, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import Raven from 'raven-js';
import KeenTracking from 'keen-tracking';

import App from './App';
import { Requester } from './helpers/Requests';
import type { User } from './types';
import type { LogEvent, EventPayload } from './helpers/analytics/cuckoo';

type Props = {||};

type State = {|
  user: User,
  loginToken: ?string,
  simpleToken: ?string,
  helpQuery: ?string,
  showEmergencies: boolean,
|};

const user = {
  id: '1',
  email: 'joe.doe@example.com',
  firstname: 'Joe',
  lastname: 'Doe',
};

const emergencies = [
  'Because of the middle age ways how to get to the Prague Airport and all donkeys are at strike, we are receiving far more contacts than usual. Please solve your request in our shiny mobile app.',
  'The political unrest in Catalan republic has affected many flights and we are experiencing a high number of contacts. Please departure to Belgium to avoid prison.',
];

class Root extends React.Component<Props, State> {
  cookieKey: string;
  input: ?HTMLInputElement;

  constructor(props) {
    super(props);

    this.cookieKey = 'mockedLogin';

    const loginToken = Cookies.get(this.cookieKey);
    const simpleToken = null;

    this.setupLogs();
    //
    // Cypress Querys
    //
    const paramsString = window.location.search;
    const params = new URLSearchParams(paramsString);
    const helpQueryString = params.get('help');

    this.state = {
      user: loginToken ? user : null,
      loginToken,
      simpleToken,
      showEmergencies: Cookies.get('showEmergencies') || false,
      helpQuery: helpQueryString ? helpQueryString : '/',
    };
    this.setupLogs();
    this.setupTracker();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.noInputFocus) {
      return;
    }

    this.input && this.input.focus();
  };

  setupTracker = () => {
    const keen = new KeenTracking({
      projectId: process.env.KEENIO_PROJECTID,
      writeKey: process.env.KEENIO_WRITEKEY,
    });
    const stagingCuckoo = {
      infinario: (eventName: LogEvent, payload: EventPayload) => {
        //eslint-disable-next-line no-console
        console.info('Event recorded to KeenIO', eventName, payload);
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

  onSocialLogin = async () => {
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;

    if (!(email && password)) {
      //eslint-disable-next-line no-console
      console.error('Testing user not set in env vars.');
      return;
    }

    const loginToken = await Requester.login(email, password);
    Cookies.set(this.cookieKey, loginToken);

    window.location.reload();
  };

  onLogout = async () => {
    this.setState({ user: null, loginToken: null });
    Cookies.remove(this.cookieKey);
  };
  toggleApp = () => {
    this.setState(({ helpQuery }) => ({ helpQuery: helpQuery ? null : '/' }));
  };

  closeApp = () => {
    this.setState({ helpQuery: null });
  };

  toggleEmergencies = () => {
    this.setState(({ showEmergencies }) => ({
      showEmergencies: !showEmergencies,
    }));
  };

  render() {
    const { helpQuery, showEmergencies } = this.state;
    const language = 'en';

    return (
      <div>
        <div
          className="toggler"
          onKeyUp={() => {}}
          role="button"
          tabIndex="-1"
          onClick={this.toggleApp}
        >
          Toggle SmartFAQ
        </div>
        <div className="mockedMainView">
          <h3>Input mimicking frontend search field.</h3>
          <input ref={c => (this.input = c)} />
          <h3>Show some emergencies</h3>
          <input
            type="checkbox"
            value={showEmergencies}
            onChange={this.toggleEmergencies}
          />
        </div>
        {helpQuery && (
          <div className="sidebarOverlay" onClick={this.closeApp} />
        )}
        <div className="sidebar">
          <App
            onClose={this.closeApp}
            onLogin={this.onLogin}
            onSocialLogin={this.onSocialLogin}
            onLogout={this.onLogout}
            language={language}
            user={this.state.user}
            route={helpQuery}
            loginToken={this.state.loginToken}
            simpleToken={this.state.simpleToken}
            emergencies={showEmergencies ? emergencies : []}
          />
        </div>
        <style jsx global>
          {`
            .sidebar {
              position: fixed;
              right: 0;
              top: 0;
            }
            .sidebarOverlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
            }
            .mockedMainView {
              margin-top: 100px;
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
