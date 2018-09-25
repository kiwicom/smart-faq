// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

export type TabType = 'search' | 'summary' | 'account' | null;
type Props = {|
  children: React.Node,
|};
type StateValues = {
  activeTab: TabType,
};

type StateCallbacks = {
  activateTab: (tab: TabType) => void,
  toggleTab: (tab: TabType) => void,
};

export type ActiveTabType = StateValues & StateCallbacks;

const initialState: StateValues = {
  activeTab: null,
};

export const ActiveTab = React.createContext({
  ...initialState,
  activateTab: (tab: TabType) => null, // eslint-disable-line no-unused-vars
  toggleTab: (tab: TabType) => null, // eslint-disable-line no-unused-vars
});

class ActiveTabProvider extends React.Component<Props, ActiveTabType> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...initialState,
      activateTab: this.activateTab,
      toggleTab: this.toggleTab,
    };
  }

  activateTab = (tab: TabType) => {
    this.setState({ activeTab: tab });
  };

  toggleTab = (tab: TabType) => {
    this.setState(prevState => ({
      activeTab: prevState.activeTab === tab ? null : tab,
    }));
  };

  render() {
    return (
      <ActiveTab.Provider value={this.state}>
        {this.props.children}
      </ActiveTab.Provider>
    );
  }
}

export default ActiveTabProvider;
