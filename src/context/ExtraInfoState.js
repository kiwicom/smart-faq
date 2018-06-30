// @flow

import * as React from 'react';

const initialState = {
  isBaggageVisible: false,
};

type Props = {
  children: React.Node,
};

export type ExtraInfoStateType = {
  isBaggageVisible: boolean,
  toggleBaggage: () => void,
};

export const ExtraInfoState = React.createContext({
  ...initialState,
  toggleBaggage: () => {}, // eslint-disable-line no-unused-vars
});

class ExtraInfoStateProvider extends React.Component<
  Props,
  ExtraInfoStateType,
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...initialState,
      toggleBaggage: this.toggleBaggage, // eslint-disable-line react/no-unused-state
    };
  }

  toggleBaggage = () => {
    this.setState(prevState => ({
      isBaggageVisible: !prevState.isBaggageVisible,
    }));
  };

  render() {
    return (
      <ExtraInfoState.Provider value={this.state}>
        {this.props.children}
      </ExtraInfoState.Provider>
    );
  }
}

export default ExtraInfoStateProvider;
