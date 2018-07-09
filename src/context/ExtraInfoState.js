// @flow

import * as React from 'react';

const initialState = {
  activeExtraInfoCategory: null,
};

export type ExtraInfoCategory = 'baggage' | 'boarding-passes' | '';

type Props = {
  children: React.Node,
};

export type State = {
  activeExtraInfoCategory: ?ExtraInfoCategory,
};

export type ExtraInfoStateType = State & {
  setExtraInfoCategory: (category: ExtraInfoCategory) => void,
};

export const ExtraInfoState = React.createContext({
  ...initialState,
  setExtraInfoCategory: () => {}, // eslint-disable-line no-unused-vars
});

class ExtraInfoStateProvider extends React.Component<
  Props,
  ExtraInfoStateType,
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...initialState,
      setExtraInfoCategory: this.setExtraInfoCategory, // eslint-disable-line react/no-unused-state
    };
  }

  setExtraInfoCategory = (category: ExtraInfoCategory) => {
    this.setState({
      activeExtraInfoCategory: category,
    });
  };

  render() {
    const { activeExtraInfoCategory } = this.state;

    return (
      <ExtraInfoState.Provider
        value={{
          activeExtraInfoCategory,
          setExtraInfoCategory: this.setExtraInfoCategory,
        }}
      >
        {this.props.children}
      </ExtraInfoState.Provider>
    );
  }
}

export default ExtraInfoStateProvider;
