// @flow

import * as React from 'react';

const initialState = {
  activeExtraInfoCategory: null,
};

export type ExtraInfoCategory = 'baggage' | 'boarding-passes';

type Props = {
  children: React.Node,
};

export type State = {
  activeExtraInfoCategory: ?ExtraInfoCategory,
};

export type ExtraInfoStateType = State & {
  toggleExtraInfoCategory: (category: ExtraInfoCategory) => void,
};

export const ExtraInfoState = React.createContext({
  ...initialState,
  toggleExtraInfoCategory: () => {}, // eslint-disable-line no-unused-vars
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

  toggleExtraInfoCategory = (category: ExtraInfoCategory) => {
    this.setState(prevState => ({
      activeExtraInfoCategory:
        prevState.activeExtraInfoCategory === category ? null : category,
    }));
  };

  render() {
    const { activeExtraInfoCategory } = this.state;

    return (
      <ExtraInfoState.Provider
        value={{
          activeExtraInfoCategory,
          toggleExtraInfoCategory: this.toggleExtraInfoCategory,
        }}
      >
        {this.props.children}
      </ExtraInfoState.Provider>
    );
  }
}

export default ExtraInfoStateProvider;
