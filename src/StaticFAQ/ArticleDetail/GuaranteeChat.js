// @flow

import * as React from 'react';
import { Prompt } from 'react-router-dom';
import classNames from 'classnames';
import { Text, Button } from '@kiwicom/orbit-components';
import Chat from '@kiwicom/orbit-components/lib/icons/Chat';
import Trans from '@kiwicom/nitro/lib/components/Text';

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
  isClosable: boolean,
  isChatReady: boolean,
|};

class GuaranteeChat extends React.Component<Props, State> {
  chatContainer: ?Element;
  state = {
    showButton: true,
    isClosable: true,
    isChatReady: false,
  };

  async componentDidMount() {
    if (typeof window !== 'object') {
      return;
    }

    const { chatConfig } = this.props;
    await chatUtils.initialize(chatConfig);
    window.webchat.chatEnded = this.onChatEnded;

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ isChatReady: true });

    if (window.webchat.isAutoJoined()) {
      this.onChangeIsClosable(false);
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ showButton: false });
    }
  }

  onChangeIsClosable = (isClosable: boolean) => {
    this.setState({ isClosable });
    this.props.onAppWithOpenChatClose(isClosable);
  };

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
    this.onChangeIsClosable(false);
  };

  onChatEnded = () => {
    this.onChangeIsClosable(true);
  };

  render() {
    const { showButton, isChatReady } = this.state;

    return (
      <React.Fragment>
        {this.state.showButton && (
          <React.Fragment>
            <Text>
              <Trans t={__('smartfaq.guarantee_chat.description')} />
            </Text>
            <div className="chatButton" data-cy="guaranteeChatButton">
              <Button
                type="secondary"
                size="normal"
                icon={<Chat />}
                disabled={!isChatReady}
                onClick={this.onClickDisplayChat}
              >
                <Trans t={__('smartfaq.guarantee_chat.button')} />
              </Button>
            </div>
          </React.Fragment>
        )}
        <div
          id="smartFAQGuarantee"
          ref={c => {
            this.chatContainer = c;
          }}
          className={classNames('smartFAQGuarantee', {
            open: !showButton,
          })}
          data-cy="guaranteeChatIFrame"
        />
        <Prompt
          when={!this.state.isClosable}
          message={<Trans t={__('smartfaq.guarantee_chat.alert')} />}
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
