// @flow

import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import initTranslation from './initTranslation';
import Routes from './Routes';

type Props = {
  locale: Object,
};

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.i18n = initTranslation(props.locale);
  }

  i18n: Object;

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </I18nextProvider>
    );
  }
}

export default App;
