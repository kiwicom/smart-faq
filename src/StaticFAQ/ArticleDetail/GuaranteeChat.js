// @flow

import idx from 'idx';
import * as React from 'react';
import classNames from 'classnames';
import { Text, Button } from '@kiwicom/orbit-components';
import Chat from '@kiwicom/orbit-components/lib/icons/Chat';

import getChatConfig from './getChatConfig';
import { simpleTracker, EnterTracker } from '../../helpers/analytics/trackers';
import { GuaranteeChatInfoState } from '../../context/GuaranteeChatInfo';
import type {
  GuaranteeChatBookingInfo,
  ChatConfig,
} from '../../context/GuaranteeChatInfo';

type Props = {|
  guaranteeChatBookingInfo: ?GuaranteeChatBookingInfo,
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

  componentDidMount() {
    const guid = idx(this.props, _ => _.chatConfig.CHAT_GUID);
    const deploymentKey = idx(
      this.props,
      _ => _.chatConfig.CHAT_DEPLOYMENT_KEY,
    );

    if (!(guid && deploymentKey)) {
      throw new Error(
        'Secrets guid and deploymentKey for Guarantee chat not provided.',
      );
    }

    const body = document && document.body;

    if (!body) {
      return;
    }

    if (document.getElementById('purecloud-webchat-js')) {
      return;
    }

    const script = document.createElement('script');

    script.src = 'https://apps.mypurecloud.com/webchat/jsapi-v1.js';
    script.id = 'purecloud-webchat-js';
    script.setAttribute('region', 'eu-west-1');
    script.setAttribute('org-guid', guid);
    script.setAttribute('deployment-key', deploymentKey);

    body.appendChild(script);
  }

  onClickDisplayChat = () => {
    this.setState({ showButton: false });

    if (!window.ININ) {
      return;
    }

    const { guaranteeChatBookingInfo, chatConfig } = this.props;
    const orgId = idx(chatConfig, _ => _.CHAT_ORG_ID);
    const queueName = idx(chatConfig, _ => _.CHAT_QUEUE_NAME);

    if (!(orgId && queueName)) {
      throw new Error(
        'Secrets orgId and queueName for Guarantee chat not provided.',
      );
    }

    const chatConfiguration = getChatConfig({
      orgId,
      queueName,
      guaranteeChatBookingInfo,
    });
    window.ININ.webchat.create(chatConfiguration, (err, webchat) => {
      if (err) {
        throw err;
      }

      simpleTracker('smartFAQBookingOverview', {
        action: 'chatOpened',
      });
      webchat.renderFrame({ containerEl: 'smartFAQGuarantee' });
    });
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
    {({ guaranteeChatBookingInfo, chatConfig }) => (
      <TrackedGuaranteeChat
        {...props}
        guaranteeChatBookingInfo={guaranteeChatBookingInfo}
        chatConfig={chatConfig}
      />
    )}
  </GuaranteeChatInfoState.Consumer>
);

export const UnwrappedGuaranteeChat = GuaranteeChat;

export default WrappedGuaranteeChat;
