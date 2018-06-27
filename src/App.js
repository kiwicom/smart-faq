// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */

import * as React from 'react';
import css from 'styled-jsx/css';
import { I18nextProvider } from 'react-i18next';

import initTranslation from './initTranslation';
import Routes from './Routes';
import { CloseContext } from './context/Close';
import { LanguageContext } from './context/Language';
import { UserContext } from './context/User';
import SearchStateProvider from './context/SearchState';
import BookingStateProvider from './context/BookingState';
import ExtraInfoStateProvider from './context/ExtraInfoState';
import { SelectUrlBooking } from './common/integration/urlProcessing';
import ErrorBoundary from './common/ErrorBoundary';
import { EnterTracker, TimeTracker } from './helpers/analytics/trackers';
import type { onLogin, onLogout, onSocialLogin, User } from './types';

const style = css`
  .smartFAQ {
    position: fixed;
    min-width: 480px;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  .smartFAQ * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  @media only screen and (max-width: 1181px) {
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
  initialRoute: string,
  onClose: () => void,
  onLogin: onLogin,
  onSocialLogin: onSocialLogin,
  onLogout: onLogout,
|};
type State = {|
  urlBookingWasSelected: boolean,
|};

class App extends React.PureComponent<Props, State> {
  i18n: {};

  constructor(props: Props) {
    super(props);

    this.i18n = initTranslation(props.language, props.locale);
    this.state = {
      urlBookingWasSelected: false,
    };
  }

  urlBookingSelected = () => {
    this.setState({ urlBookingWasSelected: true });
  };

  onKeyDown = (e: SyntheticEvent<HTMLElement>) => {
    // $FlowExpectedError: I know "noInputFocus" property doesn't exist...
    e.nativeEvent.noInputFocus = true;
  };

  renderApp() {
    return (
      <div
        className="smartFAQ"
        data-test="SmartFAQHelp"
        onKeyDown={this.onKeyDown}
      >
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <ErrorBoundary>
          <I18nextProvider i18n={this.i18n}>
            <LanguageContext.Provider value={this.props.language}>
              <CloseContext.Provider value={this.props.onClose}>
                <UserContext.Provider
                  value={{
                    user: this.props.user,
                    onLogin: this.props.onLogin,
                    onSocialLogin: this.props.onSocialLogin,
                    onLogout: this.props.onLogout,
                    loginToken: this.props.loginToken,
                  }}
                >
                  <SearchStateProvider>
                    <BookingStateProvider>
                      <ExtraInfoStateProvider>
                        <SelectUrlBooking
                          wasSelected={this.state.urlBookingWasSelected}
                          setSelected={this.urlBookingSelected}
                        />
                        <Routes initialRoute={this.props.initialRoute} />
                      </ExtraInfoStateProvider>
                    </BookingStateProvider>
                  </SearchStateProvider>
                </UserContext.Provider>
              </CloseContext.Provider>
            </LanguageContext.Provider>
          </I18nextProvider>
        </ErrorBoundary>
        <style jsx global>
          {style}
        </style>
      </div>
    );
  }
  render() {
    if (window.Raven) {
      return window.Raven.context(() => this.renderApp());
    }
    return this.renderApp();
  }
}
const EnterTrackedApp = EnterTracker(App, 'smartFAQ', props => ({
  action: 'clickOnHelp',
  loggedIn: props ? !!props.user : false,
}));
const TimeTrackedApp = TimeTracker(EnterTrackedApp, 'smartFAQ', props => ({
  action: 'close',
  loggedIn: props ? !!props.user : false,
}));

export default TimeTrackedApp;
