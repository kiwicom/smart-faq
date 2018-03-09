// @flow

import * as React from 'react';
import initTranslation from './initTranslation';
import Layout from './Layout';

type Props = {
  locale: Object,
};

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    initTranslation(props.locale);
  }

  render() {
    return <Layout />;
  }
}

export default App;
