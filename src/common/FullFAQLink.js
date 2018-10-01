// @flow

import * as React from 'react';
import { NewWindow } from '@kiwicom/orbit-components/lib/icons';
import Trans from '@kiwicom/nitro/lib/components/Text';
import css from 'styled-jsx/css';

import { simpleTracker } from '../helpers/analytics/trackers';

const style = css`
  div.open-icon {
    display: inline-block;
    vertical-align: 1px;
    margin-left: 4px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    font-weight: 700;
  }

  .primary {
    color: #00a991;
  }
`;

type Props = {
  className?: string,
};
const linkClicked = () =>
  simpleTracker('smartFAQBookingOverview', {
    action: 'goToOldHelp',
  });
const FullFAQLink = (props: Props) => (
  <React.Fragment>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="/helpcenter"
      className={props.className}
      onClick={linkClicked}
    >
      <Trans t={__('smartfaq.full_faq_link')} />
      <span className="inline-icon">
        <div className="open-icon">
          <NewWindow
            customColor={props.className === 'primary' ? '#00a991' : '#171b1e'}
            size="small"
          />
        </div>
      </span>
    </a>
    <style jsx>{style}</style>
  </React.Fragment>
);

export default FullFAQLink;
