// @flow

import * as React from 'react';
import { TextLink, Typography, Text } from '@kiwicom/orbit-components';
import { Chat, ChevronDown, Phone } from '@kiwicom/orbit-components/lib/icons';

const Contact = () => {
  const phone = '00 00';
  const email = 'support.en@kiwi.com';
  return (
    <div className="contact">
      <hr />
      <div className="title">
        <Text size="large" type="attention">
          Contacts
        </Text>
      </div>
      <div className="contact-options">
        <div className="phone">
          <div className="phone-icon inline-icon">
            <Phone customColor="#00a991" />
          </div>
          <Typography size="normal" type="active">
            {phone}
          </Typography>
          <div className="chevron-icon inline-icon">
            <ChevronDown size="small" customColor="#00a991" />
          </div>
        </div>
        <div className="chat">
          <div className="chat-icon inline-icon">
            <Chat customColor="#00a991" />
          </div>
          <TextLink
            onClick={() => {}}
            url={`mailto:${email}`}
            title="Write us a message"
          >
            Write us a message
          </TextLink>
        </div>
      </div>
      <div className="instructions">
        <ol>
          <li>
            When contacting us we will ask the <b>full name</b> of at least one
            of the passengers.
          </li>
          <li>
            The full <b>email address</b> provided during the booking.
          </li>
        </ol>
      </div>
      <style jsx>
        {`
          .contact {
            margin-top: 32px;
          }
          .contact .title {
            margin-bottom: 18px;
          }
          .contact-options,
          .phone,
          .chat,
          .inline-icon {
            display: flex;
            align-items: center;
          }
          .phone {
            margin-right: 40px;
          }
          hr {
            margin-bottom: 16px;
            border: none;
            border-bottom: 1px solid #e8edf1;
          }
          .phone-icon {
            margin-right: 7px;
          }
          .chevron-icon {
            margin-left: 5px;
          }
          .chat-icon {
            margin-right: 14px;
          }
          .instructions {
            margin-left: 20px;
            margin-top: 34px;
            font-size: 14px;
            color: #46515e;
          }
          .instructions ol {
            list-style-type: decimal;
          }
          li {
            margin-bottom: 7px;
            padding-left: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
