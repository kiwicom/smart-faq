// @flow

/*  eslint-disable import/no-extraneous-dependencies, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, import/no-dynamic-require, no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import Raven from 'raven-js';
import KeenTracking from 'keen-tracking';

import App from './App';
import { Requester } from './helpers/Requests';
import type { User, Translations } from './types';
import type { LogEvent, EventPayload } from './helpers/analytics/cuckoo';
import { langInfos } from './translations/langInfos';

type Props = {||};

type State = {|
  isClosable: boolean,
  user: User,
  loginToken: ?string,
  simpleToken: ?string,
  helpQuery: ?string,
  showEmergencies: boolean,
  enableChat: boolean,
  language: string,
|};

const user = {
  id: '1',
  email: 'joe.doe@example.com',
  firstname: 'Joe',
  lastname: 'Doe',
};

const emergencies = [
  'Because of the middle age ways how to get to Prague Airport and all donkeys are at strike, we are receiving far more contacts than usual. Please solve your request in our shiny mobile app.',
  'The political unrest in Catalan republic has affected many flights and we are experiencing a high number of contacts. Please departure to Belgium to avoid prison.',
];

const chatConfig = {
  CHAT_GUID: process.env.CHAT_GUID || '',
  CHAT_DEPLOYMENT_KEY: process.env.CHAT_DEPLOYMENT_KEY || '',
  CHAT_ORG_ID: process.env.CHAT_ORG_ID || '',
  CHAT_QUEUE_NAME: process.env.CHAT_QUEUE_NAME || 'CHAT TEST',
};

const loadStaticTranslations = (langId: string) => {
  const { phraseApp = 'en-GB' } = langInfos[langId];

  try {
    return require(`../static/locales/${phraseApp}.json`);
  } catch (error) {
    console.error(
      'Language selected does not exists, default lenguage loaded.',
      error,
    );
    return require('../static/locales/en-GB.json');
  }
};

class Root extends React.Component<Props, State> {
  cookieKey: string;
  input: ?HTMLInputElement;
  translations: Translations;

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
      isClosable: true,
      user: loginToken ? user : null,
      loginToken,
      simpleToken,
      enableChat: true,
      showEmergencies: Cookies.get('showEmergencies') || false,
      helpQuery: helpQueryString ? helpQueryString : '/',
      language: 'en',
    };
    this.setupLogs();
    this.setupTracker();
    this.translations = loadStaticTranslations(this.state.language);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentDidUpdate() {
    this.translations = loadStaticTranslations(this.state.language);
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

  onToggleChat = () => {
    this.setState(({ enableChat }) => ({ enableChat: !enableChat }));
  };

  onForceChat = () => {
    if (typeof window === 'undefined') {
      return;
    }

    window.GuaranteeChatForce = !window.GuaranteeChatForce;
  };

  setupTracker = () => {
    const keen = new KeenTracking({
      projectId: process.env.KEENIO_PROJECTID,
      writeKey: process.env.KEENIO_WRITEKEY,
    });
    const stagingCuckoo = {
      infinario: (eventName: LogEvent, payload: EventPayload) => {
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

  handleLogin = async (email, password) => {
    const loginToken = await Requester.login(email, password);
    this.setState({ user, loginToken });
    Cookies.set(this.cookieKey, loginToken);

    return Promise.resolve(user);
  };

  handleSocialLogin = async () => {
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;

    if (!(email && password)) {
      console.error('Testing user not set in env vars.');
      return;
    }

    const loginToken = await Requester.login(email, password);
    Cookies.set(this.cookieKey, loginToken);

    window.location.reload();
  };

  handleLogout = async () => {
    this.setState({ user: null, loginToken: null });
    Cookies.remove(this.cookieKey);
  };

  handleAppWithOpenChatClose = (isClosable: boolean) => {
    this.setState({ isClosable });
  };

  toggleApp = () => {
    this.setState(({ helpQuery }) => ({ helpQuery: helpQuery ? null : '/' }));
  };

  closeApp = () => {
    if (!this.state.isClosable) {
      const canClose = window.confirm(
        'Closing this window will cause the chat connection to be interrupted, do you want to proceed?',
      );

      if (!canClose) {
        return;
      }
    }

    this.setState({ helpQuery: null });
  };

  toggleEmergencies = () => {
    this.setState(({ showEmergencies }) => ({
      showEmergencies: !showEmergencies,
    }));
  };

  changeLanguage = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ language: e.target.value });
  };

  render() {
    const { helpQuery, showEmergencies, language } = this.state;

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
          <h3>Enable chat</h3>
          <input
            type="checkbox"
            checked={this.state.enableChat}
            onChange={this.onToggleChat}
          />
          <h3>Force chat (always available in Guarantee article)</h3>
          <input type="checkbox" onChange={this.onForceChat} />
          <h3>Change languages</h3>
          <label htmlFor="en-GB">
            <input
              type="radio"
              value="en"
              id="en-GB"
              checked={language === 'en'}
              onChange={this.changeLanguage}
            />
            English(en-GB)
          </label>
          <label htmlFor="es-ES">
            <input
              type="radio"
              value="es"
              id="es-ES"
              checked={language === 'es'}
              onChange={this.changeLanguage}
            />
            Spanish(es-ES)
          </label>
          <label htmlFor="cs-CZ">
            <input
              type="radio"
              value="cz"
              id="cs-CZ"
              checked={language === 'cz'}
              onChange={this.changeLanguage}
            />
            Czech(cs-CZ)
          </label>
        </div>
        {helpQuery && (
          <div className="sidebarOverlay" onClick={this.closeApp} />
        )}
        <div className="sidebar">
          <App
            onClose={this.closeApp}
            onLogin={this.handleLogin}
            onSocialLogin={this.handleSocialLogin}
            onLogout={this.handleLogout}
            language={language}
            translations={this.translations}
            user={this.state.user}
            route={helpQuery}
            loginToken={this.state.loginToken}
            simpleToken={this.state.simpleToken}
            enableChat={this.state.enableChat}
            chatConfig={chatConfig}
            onAppWithOpenChatClose={this.handleAppWithOpenChatClose}
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
