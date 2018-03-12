// @flow

import * as React from 'react';
import { I18nextProvider, Trans } from 'react-i18next';
import initTranslation from './initTranslation';
import Layout from './Layout';

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
        <div>
          <Layout />
          <div>
            <Trans i18nKey="hello">Hello world!</Trans>
          </div>
        </div>
      </I18nextProvider>
    );
  }
}

export default App;
