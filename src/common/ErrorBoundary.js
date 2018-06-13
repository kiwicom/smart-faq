// @flow

import * as React from 'react';

import ErrorMessage from './ErrorMessage';

const initialState = {
  error: false,
};

type Props = {
  children: React.Node,
};

export type State = {
  error: boolean,
};

class ErrorBoundaryProvider extends React.Component<Props, State> {
  state = initialState;
  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const { error } = this.state;

    return (
      <React.Fragment>
        {error ? <ErrorMessage /> : this.props.children}
      </React.Fragment>
    );
  }
}

export default ErrorBoundaryProvider;
