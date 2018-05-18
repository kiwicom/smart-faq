// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { I18nextProvider } from 'react-i18next';

import initTranslation from './initTranslation';
import Routes from './Routes';
import { CloseContext } from './context/Close';
import { LanguageContext } from './context/Language';
import { UserContext } from './context/User';
import type { onLogin, onLogout, User } from './types';

const style = css`
  .smartFAQ {
    position: relative;
    min-width: 480px;
    height: 100vh;
    overflow-y: auto;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  .smartFAQ * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .smartFAQ {
      min-width: 100%;
    }
  }
`;

type Props = {|
  language: string,
  locale: {},
  user: User,
  loginToken: ?string,
  onClose: () => void,
  onLogin: onLogin,
  onLogout: onLogout,
|};

class App extends React.Component<Props> {
  i18n: {};

  constructor(props: Props) {
    super(props);

    this.i18n = initTranslation(props.language, props.locale);
  }

  render() {
    return (
      <div className="smartFAQ">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <I18nextProvider i18n={this.i18n}>
          <LanguageContext.Provider value={this.props.language}>
            <CloseContext.Provider value={this.props.onClose}>
              <UserContext.Provider
                value={{
                  user: this.props.user,
                  onLogin: this.props.onLogin,
                  onLogout: this.props.onLogout,
                  loginToken: this.props.loginToken,
                }}
              >
                <Routes />
              </UserContext.Provider>
            </CloseContext.Provider>
          </LanguageContext.Provider>
        </I18nextProvider>
        <style jsx global>
          {style}
        </style>
      </div>
    );
  }
}

export default App;
