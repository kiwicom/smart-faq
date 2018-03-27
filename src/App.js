// @flow

import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import initTranslation from './initTranslation';
import store from './store';
import Routes from './Routes';
import Layout from './Layout';

type Props = {
  locale: Object,
};

const client = new ApolloClient({ uri: process.env.GRAPHQL_URI });

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.i18n = initTranslation(props.locale);
  }

  i18n: Object;

  render() {
    return (
      <ApolloProvider client={client}>
        <I18nextProvider i18n={this.i18n}>
          <Provider store={store}>
            <Layout>
              <Routes />
            </Layout>
          </Provider>
        </I18nextProvider>
      </ApolloProvider>
    );
  }
}

export default App;
