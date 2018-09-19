// @flow

import * as React from 'react';
import { Prompt } from 'react-router-dom';
import classNames from 'classnames';
import { Text, Button } from '@kiwicom/orbit-components';
import Chat from '@kiwicom/orbit-components/lib/icons/Chat';

import * as chatUtils from './chatUtils';
import { simpleTracker, EnterTracker } from '../../helpers/analytics/trackers';
import { GuaranteeChatInfoState } from '../../context/GuaranteeChatInfo';
import type {
  GuaranteeChatBookingInfo,
  ChatConfig,
} from '../../context/GuaranteeChatInfo';

type Props = {|
  guaranteeChatBookingInfo: ?GuaranteeChatBookingInfo,
  onAppWithOpenChatClose: boolean => void,
  chatConfig: ChatConfig,
|};

type State = {|
  showButton: boolean,
|};

class GuaranteeChat extends React.Component<Props, State> {
  chatContainer: ?Element;
  state = {
    showButton: true,
  };

  async componentDidMount() {
    if (typeof window !== 'object') {
      return;
    }

    const { chatConfig } = this.props;
    await chatUtils.initialize(chatConfig);

    if (window.webchat.isAutoJoined()) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ showButton: false });
    }
  }

  onClickDisplayChat = () => {
    this.setState({ showButton: false });

    if (!window.webchat) {
      throw new Error('Unexpected: webchat not initialized.');
    }

    const { guaranteeChatBookingInfo } = this.props;

    chatUtils.setData(window.webchat, guaranteeChatBookingInfo);
    simpleTracker('smartFAQBookingOverview', {
      action: 'chatOpened',
    });
    window.webchat.renderFrame({ containerEl: 'smartFAQGuarantee' });
    window.webchat.chatEnded = this.onChatEnded;
    this.props.onAppWithOpenChatClose(false);
  };

  onChatEnded = () => {
    this.props.onAppWithOpenChatClose(true);
  };

  render() {
    const { showButton } = this.state;

    return (
      <React.Fragment>
        {this.state.showButton && (
          <React.Fragment>
            <Text>
              Still not sure what to do or how the Guarantee works? Let&apos;s
              talk. One of our agents will gladly assist you.
            </Text>
            <div className="chatButton" data-cy="guaranteeChatButton">
              <Button
                type="secondary"
                size="normal"
                icon={<Chat />}
                onClick={this.onClickDisplayChat}
              >
                Guarantee Chat
              </Button>
            </div>
          </React.Fragment>
        )}
        <div
          id="smartFAQGuarantee"
          ref={c => {
            this.chatContainer = c;
          }}
          className={classNames('smartFAQGuarantee', { open: !showButton })}
          data-cy="guaranteeChatIFrame"
        />
        <Prompt
          when={!this.state.showButton}
          message="Closing this window will cause the chat connection to be interrupted, do you want to proceed?"
        />
        <style jsx>
          {`
            .chatButton {
              margin-top: 16px;
              margin-bottom: 40px;
            }
            .smartFAQGuarantee.open {
              height: 500px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

const TrackedGuaranteeChat = EnterTracker(
  GuaranteeChat,
  'smartFAQBookingOverview',
  () => ({
    action: 'chatDisplayed',
  }),
);

const WrappedGuaranteeChat = (props: {||}) => (
  <GuaranteeChatInfoState.Consumer>
    {({ guaranteeChatBookingInfo, chatConfig, onAppWithOpenChatClose }) => (
      <TrackedGuaranteeChat
        {...props}
        guaranteeChatBookingInfo={guaranteeChatBookingInfo}
        chatConfig={chatConfig}
        onAppWithOpenChatClose={onAppWithOpenChatClose}
      />
    )}
  </GuaranteeChatInfoState.Consumer>
);

export const UnwrappedGuaranteeChat = GuaranteeChat;

export default WrappedGuaranteeChat;
