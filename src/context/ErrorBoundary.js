// @flow

import * as React from 'react';

const initialState = {
  error: false,
  errorDetails: {},
};

type Props = {
  children: React.Node,
};

export type State = {
  error: boolean,
  errorDetails: {},
};

export const ErrorBoundary = React.createContext({
  ...initialState,
});

class ErrorBoundaryProvider extends React.Component<Props, State> {
  state = initialState;
  componentDidCatch(error: Error, errorDetails: {}) {
    this.setState({
      error: true,
      errorDetails,
    });
  }

  render() {
    const { error, errorDetails } = this.state;

    return (
      <ErrorBoundary.Provider
        value={{
          error,
          errorDetails,
        }}
      >
        {this.props.children}
      </ErrorBoundary.Provider>
    );
  }
}

export default ErrorBoundaryProvider;
