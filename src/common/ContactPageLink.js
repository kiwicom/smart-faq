// @flow

import * as React from 'react';
import { NewWindow } from '@kiwicom/orbit-components/lib/icons';

const ContactPageLink = () => (
  <div className="contactUs">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.kiwi.com/en/content/feedback"
    >
      Having trouble? Contact us.
      <span className="open-icon">
        <NewWindow size="small" color="attention" />
      </span>
    </a>
    <style jsx>
      {`
        .contactUs {
          text-align: center;
          margin-top: 25px;
        }
        a {
          color: #171b1e;
          font-size: 14px;
          text-decoration: none;
          font-weight: 500;
        }
        a .open-icon {
          margin-left: 6px;
        }
      `}
    </style>
  </div>
);

export default ContactPageLink;
