// @flow

import * as React from 'react';
import { NewWindow } from '@kiwicom/orbit-components/lib/icons';

type Props = {
  text?: string,
  textColor?: string,
  available: boolean,
};

const ContactPageLink = ({
  text = 'Having trouble? Contact us',
  textColor = '#171b1e',
  available,
}: Props) =>
  available ? (
    <div className="contactUs">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.kiwi.com/en/content/feedback"
      >
        {text}
        <span className="open-icon">
          <NewWindow size="small" color="attention" customColor={textColor} />
        </span>
      </a>
      <style jsx>
        {`
          .contactUs {
            text-align: center;
            margin-top: 25px;
          }
          a {
            color: ${textColor};
            font-size: 14px;
            text-decoration: none;
            font-weight: bold;
          }
          a .open-icon {
            margin-left: 6px;
          }
        `}
      </style>
    </div>
  ) : null;

export default ContactPageLink;
