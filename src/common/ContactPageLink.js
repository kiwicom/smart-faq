// @flow

import * as React from 'react';
import { NewWindow } from '@kiwicom/orbit-components/lib/icons';
import Trans from '@kiwicom/nitro/lib/components/Text';

import { withLanguage } from '../context/Language';

type Props = {
  translationKey?: string,
  textColor?: string,
  language?: string,
};

const ContactPageLink = ({
  translationKey = __('smartfaq.contact_page_link.default'),
  textColor = '#171b1e',
  language = 'en',
}: Props) => {
  return (
    <div className="contactUs">
      <a target="_blank" href={`/${language}/content/feedback`}>
        <Trans t={translationKey} />
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
  );
};

export default withLanguage(ContactPageLink);
