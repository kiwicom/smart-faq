// @flow

import * as React from 'react';

const initialState = {
  isBaggageVisible: false,
};

type Props = {
  children: React.Node,
};

export type State = {
  isBaggageVisible: boolean,
};

export type ExtraInfoStateType = State & {
  toggleBaggage: () => void,
};

export const ExtraInfoState = React.createContext({
  ...initialState,
  toggleBaggage: () => {}, // eslint-disable-line no-unused-vars
});

class ExtraInfoStateProvider extends React.Component<Props, State> {
  state = initialState;

  toggleBaggage = () => {
    this.setState(prevState => ({
      isBaggageVisible: !prevState.isBaggageVisible,
    }));
  };

  render() {
    const { isBaggageVisible } = this.state;

    return (
      <ExtraInfoState.Provider
        value={{ isBaggageVisible, toggleBaggage: this.toggleBaggage }}
      >
        {this.props.children}
      </ExtraInfoState.Provider>
    );
  }
}

export default ExtraInfoStateProvider;
