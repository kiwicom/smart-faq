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

    const activateTab = (tab: TabType) => {
      this.setState({ activeTab: tab });
    };

    const toggleTab = (tab: TabType) => {
      this.setState(prevState => ({
        activeTab: prevState.activeTab === tab ? null : tab,
      }));
      this.forceUpdate();
    };

    this.state = {
      ...initialState,
      activateTab: activateTab,
      toggleTab: toggleTab,
    };
  }

  render() {
    return (
      <ActiveTab.Provider value={this.state}>
        {this.props.children}
      </ActiveTab.Provider>
    );
  }
}

export default ActiveTabProvider;
