// @flow
/* eslint-disable react/no-unused-state */

import * as React from 'react';

export type GuaranteeChatBookingInfo = {|
  bid: ?number,
  status: ?string,
  departureCity: ?string,
  departureAirport: ?string,
  arrivalCity: ?string,
  arrivalAirport: ?string,
  phone: ?string,
  email: ?string,
  firstName: ?string,
  lastName: ?string,
|};

type Props = {|
  enableChat?: boolean,
  children: React.Node,
|};

type State = {|
  showGuaranteeChat: boolean,
  guaranteeChatBookingInfo: ?GuaranteeChatBookingInfo,
  onSetBookingInfo: GuaranteeChatBookingInfo => void,
  toggleGuaranteeChat: (showGuaranteeChat: boolean) => void,
  isChatEnabled: () => boolean,
|};

const initialState = {
  showGuaranteeChat: false,
  guaranteeChatBookingInfo: null,
};

export const GuaranteeChatInfoState = React.createContext({
  ...initialState,
  onSetBookingInfo: () => {},
  toggleGuaranteeChat: (showGuaranteeChat: boolean) => {}, // eslint-disable-line no-unused-vars
  isChatEnabled: () => true,
});

class GuaranteeChatInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...initialState,
      onSetBookingInfo: this.onSetBookingInfo,
      toggleGuaranteeChat: this.toggleGuaranteeChat,
      isChatEnabled: this.isChatEnabled,
    };
  }

  onSetBookingInfo = (guaranteeChatBookingInfo: GuaranteeChatBookingInfo) => {
    this.setState({ guaranteeChatBookingInfo });
  };

  toggleGuaranteeChat = (showGuaranteeChat: boolean) => {
    this.setState({ showGuaranteeChat });
  };

  isChatEnabled = () => {
    return this.props.enableChat || false;
  };

  render() {
    return (
      <GuaranteeChatInfoState.Provider value={this.state}>
        {this.props.children}
      </GuaranteeChatInfoState.Provider>
    );
  }
}

export default GuaranteeChatInfo;
