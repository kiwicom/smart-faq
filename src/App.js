// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */

import * as React from 'react';
import css from 'styled-jsx/css';
import classNames from 'classnames';
import { I18nextProvider } from 'react-i18next';
import 'url-search-params-polyfill';
import EventListener, { withOptions } from 'react-event-listener';
import FocusTrap from 'react-focus-trap';

import initTranslation from './initTranslation';
import EnLocale from '../i18n/en/translation.json';
import Routes from './Routes';
import { CloseContext } from './context/Close';
import { LanguageContext } from './context/Language';
import { UserContext } from './context/User';
import type { UserContextType } from './context/User';
import SearchStateProvider from './context/SearchState';
import BookingStateProvider from './context/BookingState';
import ExtraInfoStateProvider from './context/ExtraInfoState';
import Emergencies from './context/Emergencies';
import { SelectUrlBooking } from './common/integration/urlProcessing';
import ErrorBoundary from './common/ErrorBoundary';
import { EnterTracker, TimeTracker } from './helpers/analytics/trackers';
import type { AppProps } from './types';
import MobileSafariScroll from './helpers/MobileSafariScroll';

const style = css`
  .smartFAQ {
    display: none;
    position: fixed;
    min-width: 480px;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  .smartFAQ.open {
    display: block;
  }
  .smartFAQ * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  @media only screen and (max-width: 901px) {
    .smartFAQ {
      min-width: 100%;
    }
  }
`;

type State = {|
  urlBookingWasSelected: boolean,
  userContext: UserContextType,
|};

class App extends React.PureComponent<AppProps, State> {
  i18n: {};

  static getDerivedStateFromProps(nextProps: AppProps) {
    return {
      userContext: {
        user: nextProps.user,
        onLogin: nextProps.onLogin,
        onSocialLogin: nextProps.onSocialLogin,
        onLogout: nextProps.onLogout,
        loginToken: nextProps.loginToken,
        simpleToken: nextProps.simpleToken,
      },
    };
  }

  constructor(props: AppProps) {
    super(props);

    this.i18n = initTranslation(props.language, EnLocale);
    this.state = {
      urlBookingWasSelected: false,
      userContext: {
        user: props.user,
        onLogin: props.onLogin,
        onSocialLogin: props.onSocialLogin,
        loginToken: props.loginToken,
        simpleToken: props.simpleToken,
      },
    };
  }

  urlBookingSelected = () => {
    this.setState({ urlBookingWasSelected: true });
  };

  onKeyDown = (e: KeyboardEvent) => {
    // $FlowExpectedError: I know "noInputFocus" property doesn't exist...
    e.noInputFocus = true;
  };

  renderApp() {
    const { route, emergencies, language, onClose } = this.props;
    const isOpen = Boolean(route);

    return (
      <FocusTrap active={isOpen}>
        <div
          className={classNames('smartFAQ', {
            open: isOpen,
          })}
          data-test="SmartFAQHelp"
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
              <LanguageContext.Provider value={language}>
                <CloseContext.Provider value={onClose}>
                  <UserContext.Provider value={this.state.userContext}>
                    <SearchStateProvider>
                      <BookingStateProvider
                        hasBooking={false}
                        onLogout={this.props.onLogout}
                      >
                        <ExtraInfoStateProvider>
                          <Emergencies.Provider value={emergencies}>
                            {isOpen &&
                              route && (
                                <EventListener
                                  target="window"
                                  onKeydown={withOptions(this.onKeyDown, {
                                    capture: true,
                                  })}
                                >
                                  <SelectUrlBooking
                                    wasSelected={
                                      this.state.urlBookingWasSelected
                                    }
                                    setSelected={this.urlBookingSelected}
                                  />
                                  <Routes route={route} />
                                </EventListener>
                              )}
                          </Emergencies.Provider>
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
          <style jsx global>
            {`
              body {
                overflow-y: ${isOpen ? 'hidden' : 'auto'};
              }
            `}
          </style>
          <MobileSafariScroll isOpen={isOpen} />
        </div>
      </FocusTrap>
    );
  }

  render() {
    if (typeof window !== 'undefined' && window.Raven) {
      return window.Raven.context(() => this.renderApp());
    }
    return this.renderApp();
  }
}
const EnterTrackedApp = EnterTracker(App, 'smartFAQ', props => ({
  action: 'clickOnHelp',
  loggedIn: props ? !!props.user || !!props.simpleToken : false,
}));
const TimeTrackedApp = TimeTracker(EnterTrackedApp, 'smartFAQ', props => ({
  action: 'close',
  loggedIn: props ? !!props.user || !!props.simpleToken : false,
}));

export default TimeTrackedApp;
