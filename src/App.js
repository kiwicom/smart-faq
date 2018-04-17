// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import initTranslation from './initTranslation';
import store from './store';
import Routes from './Routes';
import { CloseContext } from './common/CloseButton';
import { LanguageContext } from './common/Language';

const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body {
    height: 100vh;
    padding: 0;
    margin: 0;
  }
  div.App {
    position: absolute;
    right: 0;
    min-width: 480px;
    height: 100vh;
    background-color: #ffffff;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.15);
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    div.App {
      min-width: 100%;
    }
  }
  span.inline-icon svg {
    display: inline-block;
    vertical-align: bottom;
  }
`;

type Props = {|
  language: string,
  locale: Object,
  onClose: () => void,
|};

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.i18n = initTranslation(props.language, props.locale);
  }

  i18n: Object;

  render() {
    return (
      <div className="App">
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
          <Provider store={store}>
            <LanguageContext.Provider value={this.props.language}>
              <CloseContext.Provider value={this.props.onClose}>
                <Routes />
              </CloseContext.Provider>
            </LanguageContext.Provider>
          </Provider>
        </I18nextProvider>
        <style jsx global>
          {style}
        </style>
      </div>
    );
  }
}

export default App;
