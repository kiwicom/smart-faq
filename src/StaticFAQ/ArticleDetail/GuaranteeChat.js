// @flow

import * as React from 'react';
import classNames from 'classnames';
import { Text, Button } from '@kiwicom/orbit-components';
import Chat from '@kiwicom/orbit-components/lib/icons/Chat';

import getChatConfig from './getChatConfig';

type Props = {||};

type State = {|
  showButton: boolean,
|};

const guid = process.env.CHAT_GUID;
const deploymentKey = process.env.CHAT_DEPLOYMENT_KEY;
const orgId = process.env.CHAT_ORG_ID;
const queueName = process.env.CHAT_QUEUE_NAME;

if (!(guid && deploymentKey && orgId && queueName)) {
  throw new Error('Secrets for Guarantee chat not provided.');
}

class GuaranteeChat extends React.Component<Props, State> {
  state = {
    showButton: true,
  };

  componentDidMount() {
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

    const chatConfig = getChatConfig({ orgId, queueName });
    window.ININ.webchat.create(chatConfig, function(err, webchat) {
      if (err) {
        throw err;
      }

      // Render chat to iframe
      webchat.renderFrame({
        containerEl: 'smartFAQGuarantee',
      });
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
            <div className="chatButton">
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
          className={classNames('smartFAQGuarantee', { open: !showButton })}
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

export default GuaranteeChat;
