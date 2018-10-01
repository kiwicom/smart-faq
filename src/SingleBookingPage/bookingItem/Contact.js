// @flow

import * as React from 'react';
import Trans from '@kiwicom/nitro/lib/components/Text';

import ContactPageLink from '../../common/ContactPageLink';
import UserStatus from '../../helpers/UserStatus';

const Contact = () => {
  return (
    <div className="contact">
      <hr />
      <div className="contact-options">
        <UserStatus.LoggedIn>
          <ContactPageLink
            translationKey={__('smartfaq.single_booking_page.call_us')}
            textColor="#00a991"
          />
        </UserStatus.LoggedIn>
      </div>
      <div className="instructions">
        <Trans html t={__('smartfaq.single_booking_page.instructions')} />
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
            padding: 0;
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
